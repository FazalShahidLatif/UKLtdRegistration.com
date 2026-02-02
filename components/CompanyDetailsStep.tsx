import React, { useState } from 'react';
import { StepProps, SicSuggestion } from '../types';
import { getSicSuggestions } from '../services/geminiService';

export const CompanyDetailsStep = ({ onNext, onBack }: StepProps) => {
    const [description, setDescription] = useState("");
    const [suggestions, setSuggestions] = useState<SicSuggestion[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedSic, setSelectedSic] = useState<SicSuggestion | null>(null);

    const handleGetSuggestions = async () => {
        if (!description) return;
        setLoading(true);
        const results = await getSicSuggestions(description);
        setSuggestions(results);
        setLoading(false);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gov-black">Nature of Business</h2>
            <p className="text-gray-600">Describe what your company does in plain English. Our AI will match it to the official Standard Industrial Classification (SIC) codes.</p>
            
            <div className="relative">
                <label className="block text-gov-black font-bold mb-2">Business Description</label>
                <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-4 border-2 border-gov-black focus:border-gov-blue outline-none min-h-[120px] resize-none"
                    placeholder="e.g. I provide digital marketing consulting services to small businesses..."
                />
                <button 
                    onClick={handleGetSuggestions}
                    disabled={loading || !description}
                    className="mt-4 bg-gov-blue hover:bg-gov-blue-dark text-white font-bold py-2 px-6 text-sm shadow-[0_2px_0_0_#003078]"
                >
                    {loading ? "Analyzing..." : "Find SIC Codes"}
                </button>
            </div>

            {suggestions.length > 0 && (
                <div className="space-y-4 mt-6 border-t border-gray-200 pt-6">
                    <p className="font-bold text-gov-black">Select the most accurate classification:</p>
                    {suggestions.map(sic => (
                        <div 
                            key={sic.code}
                            onClick={() => setSelectedSic(sic)}
                            className={`p-4 border-2 cursor-pointer transition-colors group ${selectedSic?.code === sic.code ? 'border-gov-blue bg-blue-50' : 'border-gray-200 hover:border-gray-400'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedSic?.code === sic.code ? 'border-gov-blue' : 'border-gray-400'}`}>
                                    {selectedSic?.code === sic.code && <div className="w-3 h-3 bg-gov-blue rounded-full"></div>}
                                </div>
                                <div>
                                    <span className="font-mono font-bold text-gov-blue mr-3">{sic.code}</span>
                                    <span className="text-gov-black font-medium">{sic.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-between pt-8 border-t border-gray-200 mt-8">
                <button onClick={onBack} className="text-gov-gray hover:text-gov-black underline font-medium">Back</button>
                <button 
                    onClick={() => onNext({ sic: selectedSic })}
                    disabled={!selectedSic}
                    className="bg-gov-blue hover:bg-gov-blue-dark text-white font-bold py-3 px-6 shadow-[0_2px_0_0_#003078] disabled:opacity-50 disabled:shadow-none"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};
