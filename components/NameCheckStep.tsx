import React, { useState, useEffect } from 'react';
import { StepProps, AnalysisResult, SicSuggestion } from '../types';
import { checkNameAvailability, getSicSuggestions } from '../services/geminiService';

export const NameCheckStep = ({ onNext, onBack, data }: StepProps) => {
    // Name State
    const [name, setName] = useState(data?.companyName || "");
    const [analyzingName, setAnalyzingName] = useState(false);
    const [nameResult, setNameResult] = useState<AnalysisResult | null>(null);

    // SIC State
    const [description, setDescription] = useState("");
    const [sicSuggestions, setSicSuggestions] = useState<SicSuggestion[]>([]);
    const [analyzingSic, setAnalyzingSic] = useState(false);
    const [selectedSic, setSelectedSic] = useState<SicSuggestion | null>(data?.sic || null);

    // Initial checks
    useEffect(() => {
        if (data?.companyName && !nameResult) {
            handleCheckName(data.companyName);
        }
    }, []);

    const handleCheckName = async (nameToCheck?: string) => {
        const targetName = nameToCheck || name;
        if (!targetName) return;
        
        setAnalyzingName(true);
        const res = await checkNameAvailability(targetName);
        setNameResult(res);
        setAnalyzingName(false);
    };

    const handleGetSic = async (desc: string) => {
        setDescription(desc);
        // Simple debounce could be added here, but direct call for prototype is fine if triggered by user action or delay
    };
    
    // Trigger SIC check on blur or delay
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (description && description.length > 10) {
                setAnalyzingSic(true);
                const res = await getSicSuggestions(description);
                setSicSuggestions(res);
                // Auto-select first if none selected
                if (!selectedSic && res.length > 0) setSelectedSic(res[0]);
                setAnalyzingSic(false);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [description]);

    const isValid = nameResult?.isAvailable && selectedSic;

    return (
        <div className="w-full max-w-4xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-8">
                    
                    {/* Name Section */}
                    <section className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-2xl p-8 shadow-sm glow-input transition-all">
                        <div className="mb-6">
                            <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">Company Name Check</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Our AI checks the Registrar of Companies database instantly.</p>
                        </div>
                        <div className="relative group">
                            <input 
                                className="w-full h-20 bg-slate-50 dark:bg-background-dark/50 border-2 border-slate-200 dark:border-slate-800 rounded-xl px-6 text-2xl font-bold focus:border-primary focus:ring-0 transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700" 
                                placeholder="Enter company name..." 
                                type="text" 
                                value={name}
                                onChange={(e) => { setName(e.target.value); setNameResult(null); }}
                                onBlur={() => handleCheckName()}
                                onKeyDown={(e) => e.key === 'Enter' && handleCheckName()}
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                {analyzingName && (
                                    <span className="material-symbols-outlined text-primary animate-spin">progress_activity</span>
                                )}
                                {nameResult?.isAvailable && (
                                    <div className="bg-green-500/10 text-green-500 px-3 py-1.5 rounded-lg flex items-center gap-2 border border-green-500/20">
                                        <span className="material-symbols-outlined text-[20px] fill-1">check_circle</span>
                                        <span className="text-sm font-bold">AVAILABLE</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {nameResult?.isAvailable && (
                            <div className="mt-6 p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/30 flex gap-4">
                                <div className="size-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-white">verified_user</span>
                                </div>
                                <div>
                                    <h5 className="text-green-800 dark:text-green-400 font-bold text-sm uppercase tracking-wide">Ready for Registration</h5>
                                    <p className="text-green-700 dark:text-green-500/80 text-sm mt-0.5 font-medium">{name.toUpperCase()} is clear to proceed. No existing trademarks found.</p>
                                </div>
                            </div>
                        )}

                        {!nameResult?.isAvailable && nameResult && (
                             <div className="mt-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 flex gap-4">
                                <div className="size-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-white">block</span>
                                </div>
                                <div>
                                    <h5 className="text-red-800 dark:text-red-400 font-bold text-sm uppercase tracking-wide">Name Unavailable</h5>
                                    <p className="text-red-700 dark:text-red-500/80 text-sm mt-0.5 font-medium">{nameResult.reason}</p>
                                </div>
                            </div>
                        )}

                        {nameResult?.alternatives && nameResult.alternatives.length > 0 && (
                            <div className="mt-8">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">AI Alternatives</p>
                                <div className="flex flex-wrap gap-2">
                                    {nameResult.alternatives.map(alt => (
                                        <button 
                                            key={alt}
                                            onClick={() => { setName(alt); setNameResult(null); handleCheckName(alt); }}
                                            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold hover:bg-primary hover:text-white transition-all text-slate-700 dark:text-slate-300"
                                        >
                                            {alt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Business Activity Section */}
                    <section className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">Business Activity</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Describe what you do, we'll suggest the UK SIC codes.</p>
                            </div>
                            <div className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[14px]">bolt</span>
                                <span className="text-[10px] font-bold text-primary uppercase">AI Prediction Engine</span>
                            </div>
                        </div>
                        <textarea 
                            className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 text-base focus:border-primary focus:ring-0 transition-all min-h-[120px] text-slate-900 dark:text-white resize-none placeholder:text-slate-400" 
                            placeholder="e.g. We develop custom AI software for fintech startups..."
                            value={description}
                            onChange={(e) => handleGetSic(e.target.value)}
                        />
                        
                        {analyzingSic && (
                            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                                <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse [animation-delay:200ms]"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse [animation-delay:400ms]"></span>
                                </div>
                                <span className="font-medium">AI is analyzing industry benchmarks...</span>
                            </div>
                        )}

                        {sicSuggestions.length > 0 && (
                            <div className="mt-8 space-y-4">
                                {/* Primary Suggestion */}
                                <div 
                                    onClick={() => setSelectedSic(sicSuggestions[0])}
                                    className={`relative overflow-hidden p-6 border rounded-xl flex items-center justify-between group cursor-pointer transition-all ${selectedSic?.code === sicSuggestions[0].code ? 'border-primary/50 bg-primary/5' : 'border-slate-200 dark:border-slate-800'}`}
                                >
                                    {selectedSic?.code === sicSuggestions[0].code && <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-50"></div>}
                                    <div className="flex items-center gap-4 relative">
                                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-[32px]">code</span>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-primary uppercase tracking-tighter">Primary Match</span>
                                                <span className="text-[10px] px-1.5 py-0.5 bg-primary text-white rounded font-bold">98% Match</span>
                                            </div>
                                            <h6 className="text-xl font-bold text-slate-900 dark:text-white">{sicSuggestions[0].code}</h6>
                                            <p className="text-sm text-slate-600 dark:text-slate-300">{sicSuggestions[0].description}</p>
                                        </div>
                                    </div>
                                    <button className={`relative px-6 py-2.5 rounded-lg font-bold text-sm shadow-md transition-all ${selectedSic?.code === sicSuggestions[0].code ? 'bg-primary text-white shadow-primary/20 hover:bg-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                                        {selectedSic?.code === sicSuggestions[0].code ? 'Selected' : 'Select'}
                                    </button>
                                </div>

                                {/* Other Suggestions */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {sicSuggestions.slice(1).map(sic => (
                                        <div 
                                            key={sic.code}
                                            onClick={() => setSelectedSic(sic)}
                                            className={`p-4 border rounded-xl flex items-center gap-4 transition-colors cursor-pointer ${selectedSic?.code === sic.code ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 hover:border-primary/50'}`}
                                        >
                                            <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary">
                                                <span className="material-symbols-outlined text-[24px]">query_stats</span>
                                            </div>
                                            <div>
                                                <h6 className="text-sm font-bold text-slate-900 dark:text-white">{sic.code}</h6>
                                                <p className="text-xs text-slate-500">{sic.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl">
                        <h5 className="text-sm font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">category</span>
                            Popular Categories
                        </h5>
                        <div className="grid grid-cols-2 gap-3">
                            {['E-commerce', 'Hospitality', 'Industry', 'Fintech'].map((cat, i) => (
                                <button key={i} onClick={() => { setDescription(cat + " business"); handleGetSic(cat + " business"); }} className="flex flex-col items-center justify-center p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary mb-1">
                                        {['shopping_bag', 'restaurant', 'precision_manufacturing', 'account_balance'][i]}
                                    </span>
                                    <span className="text-[10px] font-bold">{cat}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-primary">info</span>
                            <span className="text-sm font-bold text-slate-900 dark:text-white">Why SIC codes?</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Standard Industrial Classification (SIC) codes are used by Companies House to identify the type of business you conduct. They are mandatory for all UK company registrations.
                        </p>
                    </div>
                    <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center gap-4">
                        <div className="size-12 shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <span className="material-symbols-outlined text-slate-400">help</span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">Need help?</p>
                            <p className="text-[10px] text-slate-500">Live chat with a specialist</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-12 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-8">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Cancel Registration
                </button>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-slate-400 hidden sm:block">All changes saved to cloud</span>
                    <button 
                        onClick={() => onNext({ companyName: name, sic: selectedSic })}
                        disabled={!isValid}
                        className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-xl h-14 bg-primary text-white gap-3 text-base font-bold shadow-xl shadow-primary/25 hover:translate-y-[-2px] active:translate-y-[1px] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                        Continue to Step 2
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-xs text-slate-400">
                    © 2026 UKLtdRegistration.com. Licensed Company Formation Agent #129481.
                </p>
            </div>
        </div>
    );
};