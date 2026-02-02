import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// ==========================================
// CONFIG & TYPES
// ==========================================

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface AnalysisResult {
    isAvailable: boolean;
    score: number;
    reason: string;
    alternatives: string[];
}

interface SicSuggestion {
    code: string;
    description: string;
}

// ==========================================
// COMPONENTS
// ==========================================

const Header = () => (
    <header className="bg-gov-black text-white border-b-[10px] border-gov-blue">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">account_balance</span>
                <div>
                    <h1 className="text-2xl font-bold leading-none">GOV.UK</h1>
                    <p className="text-sm text-gray-400 mt-1">LTD Company Registration Service</p>
                </div>
            </div>
        </div>
    </header>
);

const ProgressBar = ({ step }: { step: number }) => {
    const steps = ["Name Check", "Business Activity", "Director Details", "Review"];
    return (
        <div className="bg-white border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="bg-gov-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">{step}</span>
                    <span className="font-semibold text-gov-black">{steps[step - 1]}</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                        className="bg-gov-blue h-full transition-all duration-500 ease-out"
                        style={{ width: `${(step / 4) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------
// STEP 1: AI NAME CHECK
// ------------------------------------------

const NameCheckStep = ({ onNext }: { onNext: (data: any) => void }) => {
    const [name, setName] = useState("");
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);

    const checkName = async () => {
        if (!name) return;
        setAnalyzing(true);
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
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: { responseMimeType: "application/json" }
            });
            
            const text = response.text;
            if (text) {
                setResult(JSON.parse(text));
            }
        } catch (error) {
            console.error(error);
            // Fallback for demo if API fails or no key
            setResult({
                isAvailable: true,
                score: 85,
                reason: "Name appears valid, though 'Global' is a common term.",
                alternatives: [`${name} UK Ltd`, `${name} Solutions Ltd`]
            });
        } finally {
            setAnalyzing(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-gov-blue/5 border-l-4 border-gov-blue p-4">
                <h2 className="text-xl font-bold text-gov-black mb-2">What is your proposed company name?</h2>
                <p className="text-gray-600">We will use AI to check if your name is likely to be accepted by Companies House.</p>
            </div>

            <div className="flex gap-4">
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => { setName(e.target.value); setResult(null); }}
                    className="flex-1 p-4 border-2 border-gov-black focus:border-gov-blue focus:ring-4 focus:ring-yellow-400 outline-none text-lg font-bold"
                    placeholder="e.g. Acme Innovations Ltd"
                />
                <button 
                    onClick={checkName}
                    disabled={analyzing || !name}
                    className="bg-gov-blue hover:bg-gov-blue-dark text-white font-bold py-4 px-8 shadow-[0_2px_0_0_#003078] active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {analyzing ? 'Checking...' : 'Check Availability'}
                </button>
            </div>

            {result && (
                <div className={`p-6 border-2 ${result.isAvailable ? 'border-success bg-green-50' : 'border-error bg-red-50'}`}>
                    <div className="flex items-start gap-4">
                        <span className={`material-symbols-outlined text-4xl ${result.isAvailable ? 'text-success' : 'text-error'}`}>
                            {result.isAvailable ? 'check_circle' : 'error'}
                        </span>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold mb-2">
                                {result.isAvailable ? 'Great news! This name looks available.' : 'There might be issues with this name.'}
                            </h3>
                            <p className="text-gov-black mb-4">{result.reason}</p>
                            
                            {result.alternatives?.length > 0 && (
                                <div className="mt-4">
                                    <p className="text-sm font-bold text-gray-600 mb-2">SUGGESTED ALTERNATIVES:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {result.alternatives.map(alt => (
                                            <button key={alt} onClick={() => {setName(alt); setResult(null);}} className="bg-white border border-gray-300 px-3 py-1 text-sm hover:border-gov-blue">
                                                {alt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {result.isAvailable && (
                                <div className="mt-6">
                                    <button 
                                        onClick={() => onNext({ companyName: name })}
                                        className="bg-success hover:bg-green-800 text-white font-bold py-3 px-6 shadow-[0_2px_0_0_#0b0c0c] flex items-center gap-2"
                                    >
                                        Save and Continue <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// ------------------------------------------
// STEP 2: AI SIC CODE SUGGESTER
// ------------------------------------------

const BusinessActivityStep = ({ onNext, onBack }: { onNext: (data: any) => void, onBack: () => void }) => {
    const [description, setDescription] = useState("");
    const [suggestions, setSuggestions] = useState<SicSuggestion[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedSic, setSelectedSic] = useState<SicSuggestion | null>(null);

    const getSuggestions = async () => {
        if (!description) return;
        setLoading(true);
        try {
            const prompt = `
                Given the business description: "${description}",
                Suggest 3 relevant UK SIC (Standard Industrial Classification) codes.
                Return JSON: [{"code": "62020", "description": "Information technology consultancy activities"}, ...]
            `;
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: { responseMimeType: "application/json" }
            });
            const text = response.text;
            if (text) setSuggestions(JSON.parse(text));
        } catch (error) {
            // Fallback
            setSuggestions([
                { code: "62012", description: "Business and domestic software development" },
                { code: "62020", description: "Information technology consultancy activities" },
                { code: "62090", description: "Other information technology service activities" }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gov-black">What will the company be doing?</h2>
            <p className="text-gray-600">Describe your business activity in plain English, and our AI will match it to the official SIC codes.</p>
            
            <div className="relative">
                <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-4 border-2 border-gov-black focus:border-gov-blue outline-none min-h-[120px]"
                    placeholder="e.g. I build websites for small businesses and offer consulting services."
                />
                <button 
                    onClick={getSuggestions}
                    disabled={loading || !description}
                    className="mt-4 bg-gov-blue text-white font-bold py-2 px-4 text-sm"
                >
                    {loading ? "Analyzing..." : "Find SIC Codes"}
                </button>
            </div>

            {suggestions.length > 0 && (
                <div className="space-y-4 animate-fade-in">
                    <p className="font-bold text-gov-black">Select the best match:</p>
                    {suggestions.map(sic => (
                        <div 
                            key={sic.code}
                            onClick={() => setSelectedSic(sic)}
                            className={`p-4 border-2 cursor-pointer transition-colors ${selectedSic?.code === sic.code ? 'border-gov-blue bg-blue-50' : 'border-gray-200 hover:border-gray-400'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedSic?.code === sic.code ? 'border-gov-blue' : 'border-gray-400'}`}>
                                    {selectedSic?.code === sic.code && <div className="w-3 h-3 bg-gov-blue rounded-full"></div>}
                                </div>
                                <div>
                                    <span className="font-mono font-bold text-gov-blue">{sic.code}</span>
                                    <span className="ml-2 text-gov-black">{sic.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-between pt-6 border-t border-gray-200">
                <button onClick={onBack} className="text-gov-gray hover:text-gov-black underline">Back</button>
                <button 
                    onClick={() => onNext({ sic: selectedSic })}
                    disabled={!selectedSic}
                    className="bg-gov-blue hover:bg-gov-blue-dark text-white font-bold py-3 px-6 disabled:opacity-50"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

// ------------------------------------------
// STEP 3: DIRECTOR DETAILS
// ------------------------------------------

const DirectorStep = ({ onNext, onBack }: { onNext: (data: any) => void, onBack: () => void }) => {
    const [director, setDirector] = useState({ firstName: '', lastName: '', email: '' });

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gov-black">Director Details</h2>
            <p className="text-gray-600">Who will be the primary director of this company?</p>

            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block font-bold text-gov-black">First Name</label>
                    <input 
                        type="text" 
                        value={director.firstName}
                        onChange={e => setDirector({...director, firstName: e.target.value})}
                        className="w-full p-2 border-2 border-gov-black focus:border-gov-blue outline-none" 
                    />
                </div>
                <div className="space-y-2">
                    <label className="block font-bold text-gov-black">Last Name</label>
                    <input 
                        type="text" 
                        value={director.lastName}
                        onChange={e => setDirector({...director, lastName: e.target.value})}
                        className="w-full p-2 border-2 border-gov-black focus:border-gov-blue outline-none" 
                    />
                </div>
                <div className="col-span-2 space-y-2">
                    <label className="block font-bold text-gov-black">Email Address</label>
                    <input 
                        type="email" 
                        value={director.email}
                        onChange={e => setDirector({...director, email: e.target.value})}
                        className="w-full p-2 border-2 border-gov-black focus:border-gov-blue outline-none" 
                    />
                </div>
            </div>

            <div className="flex justify-between pt-6 border-t border-gray-200">
                <button onClick={onBack} className="text-gov-gray hover:text-gov-black underline">Back</button>
                <button 
                    onClick={() => onNext({ director })}
                    disabled={!director.firstName || !director.lastName || !director.email}
                    className="bg-gov-blue hover:bg-gov-blue-dark text-white font-bold py-3 px-6 disabled:opacity-50"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

// ------------------------------------------
// STEP 4: REVIEW & SUMMARY
// ------------------------------------------

const ReviewStep = ({ data, onBack }: { data: any, onBack: () => void }) => {
    return (
        <div className="space-y-8">
            <div className="bg-success/10 border border-success p-6 text-center">
                <h2 className="text-2xl font-bold text-success mb-2">Application Ready</h2>
                <p className="text-gov-black">Review your details before submitting to Companies House.</p>
            </div>

            <dl className="divide-y divide-gray-200">
                <div className="py-4 grid grid-cols-3">
                    <dt className="font-bold text-gov-black">Company Name</dt>
                    <dd className="col-span-2 text-gov-black flex justify-between">
                        {data.companyName}
                        <span className="text-success flex items-center gap-1 text-sm font-bold"><span className="material-symbols-outlined text-sm">check_circle</span> Available</span>
                    </dd>
                </div>
                <div className="py-4 grid grid-cols-3">
                    <dt className="font-bold text-gov-black">Business Activity</dt>
                    <dd className="col-span-2 text-gov-black">
                        {data.sic?.code} - {data.sic?.description}
                    </dd>
                </div>
                <div className="py-4 grid grid-cols-3">
                    <dt className="font-bold text-gov-black">Director</dt>
                    <dd className="col-span-2 text-gov-black">
                        {data.director?.firstName} {data.director?.lastName}<br/>
                        <span className="text-gray-500">{data.director?.email}</span>
                    </dd>
                </div>
            </dl>

            <div className="bg-gray-100 p-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gov-black">Registration Fee</span>
                    <span className="font-bold text-xl">£12.00</span>
                </div>
                <button className="w-full bg-success hover:bg-green-800 text-white font-bold py-4 text-lg shadow-[0_2px_0_0_#0b0c0c] flex justify-center items-center gap-2">
                    Pay and Submit Application
                    <span className="material-symbols-outlined">lock</span>
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">Secure payment processed by Stripe. Information submitted directly to Companies House.</p>
            </div>
            
            <div className="text-center">
                 <button onClick={onBack} className="text-gov-gray hover:text-gov-black underline">Back to Edit</button>
            </div>
        </div>
    );
};

// ------------------------------------------
// MAIN APP COMPONENT
// ------------------------------------------

const App = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<any>({});

    const handleNext = (newData: any) => {
        setFormData((prev: any) => ({ ...prev, ...newData }));
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    return (
        <div className="min-h-screen bg-gov-light-gray flex flex-col font-sans">
            <Header />
            
            <main className="flex-grow py-8 px-4">
                <div className="max-w-2xl mx-auto bg-white shadow-sm border border-gray-200">
                    <ProgressBar step={step} />
                    
                    <div className="p-8">
                        {step === 1 && <NameCheckStep onNext={handleNext} />}
                        {step === 2 && <BusinessActivityStep onNext={handleNext} onBack={handleBack} />}
                        {step === 3 && <DirectorStep onNext={handleNext} onBack={handleBack} />}
                        {step === 4 && <ReviewStep data={formData} onBack={handleBack} />}
                    </div>
                </div>
            </main>

            <footer className="bg-gray-200 py-8 text-center text-sm text-gray-500 border-t border-gray-300">
                <div className="max-w-5xl mx-auto px-4">
                    <p>Built with Google Gemini AI • Unofficial Prototype</p>
                </div>
            </footer>
        </div>
    );
};

const rootElement = document.getElementById('bmt-root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<React.StrictMode><App /></React.StrictMode>);
}