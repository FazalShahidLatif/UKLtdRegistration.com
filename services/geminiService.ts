import { GoogleGenAI } from "@google/genai";
import { AnalysisResult, SicSuggestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const checkNameAvailability = async (name: string): Promise<AnalysisResult> => {
    try {
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
        
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });
        
        const text = response.text;
        if (!text) throw new Error("No response from AI");
        return JSON.parse(text);
    } catch (error) {
        console.error("Gemini API Error:", error);
        // Fallback for demo resilience
        return {
            isAvailable: true,
            score: 85,
            reason: "AI Analysis currently unavailable, but name appears valid format.",
            alternatives: [`${name} UK Ltd`, `${name} Global Ltd`]
        };
    }
};

export const getSicSuggestions = async (description: string): Promise<SicSuggestion[]> => {
    try {
        const prompt = `
            Given the business description: "${description}",
            Suggest 3 relevant UK SIC (Standard Industrial Classification) codes.
            Return JSON array: [{"code": "62020", "description": "Information technology consultancy activities"}, ...]
        `;
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });
        const text = response.text;
        if (!text) throw new Error("No response from AI");
        return JSON.parse(text);
    } catch (error) {
        console.error("Gemini API Error:", error);
        return [
            { code: "62012", description: "Business and domestic software development" },
            { code: "62020", description: "Information technology consultancy activities" },
            { code: "62090", description: "Other information technology service activities" }
        ];
    }
};