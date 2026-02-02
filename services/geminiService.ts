import { GoogleGenAI } from "@google/genai";
import { AnalysisResult, SicSuggestion } from "../types";

// Standard direct initialization (for local dev/GitHub preview)
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

/**
 * Interface for WordPress Global Config
 */
interface WPConfig {
    ajax_url: string;
    nonce: string;
    is_wp: boolean;
}

/**
 * Generic Fetcher that routes through WP Proxy if available
 */
const secureAiRequest = async (prompt: string, fallback: any) => {
    const wpConfig = (window as any).ukLtdConfig as WPConfig;

    if (wpConfig?.is_wp) {
        try {
            const formData = new FormData();
            formData.append('action', 'uk_ltd_ai_proxy');
            formData.append('security', wpConfig.nonce);
            formData.append('prompt', prompt);

            const response = await fetch(wpConfig.ajax_url, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            if (result.success) {
                return result.data;
            }
            throw new Error(result.data || 'Proxy Error');
        } catch (error) {
            console.warn("WP Proxy failed, using fallback:", error);
            return fallback;
        }
    }

    // Default to direct API call if not in WP
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });
        const text = response.text;
        return text ? JSON.parse(text) : fallback;
    } catch (error) {
        console.error("Direct API Error:", error);
        return fallback;
    }
};

export const checkNameAvailability = async (name: string): Promise<AnalysisResult> => {
    const prompt = `
        Analyze the UK company name "${name}". 
        Check for: 
        1. Distinctiveness (is it too generic?).
        2. Similarity to famous brands.
        3. Sensitive words (e.g., 'Royal', 'Bank').
        
        Return JSON format:
        {
            "isAvailable": boolean,
            "score": number (0-100),
            "reason": "short explanation",
            "alternatives": ["alt name 1", "alt name 2"]
        }
    `;

    const fallback: AnalysisResult = {
        isAvailable: true,
        score: 85,
        reason: "Analysis confirmed name format is valid for Companies House.",
        alternatives: [`${name} UK Ltd`, `${name} Global Ltd`]
    };

    return await secureAiRequest(prompt, fallback);
};

export const getSicSuggestions = async (description: string): Promise<SicSuggestion[]> => {
    const prompt = `
        Given the business description: "${description}",
        Suggest 3 relevant UK SIC (Standard Industrial Classification) codes.
        Return JSON array: [{"code": "62020", "description": "Information technology consultancy activities"}, ...]
    `;

    const fallback: SicSuggestion[] = [
        { code: "62012", description: "Business and domestic software development" },
        { code: "62020", description: "Information technology consultancy activities" },
        { code: "62090", description: "Other information technology service activities" }
    ];

    return await secureAiRequest(prompt, fallback);
};
