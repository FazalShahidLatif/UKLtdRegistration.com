import React, { useState } from 'react';
import { StepProps } from '../types';

export const DirectorStep = ({ onNext, onBack, data }: StepProps) => {
    const [director, setDirector] = useState(data?.director || { firstName: '', lastName: '', email: '' });

    return (
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-6 md:p-10 shadow-sm animate-fade-in">
             <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-text-main">Director Details</h2>
                <p className="text-text-muted mt-2">Who will be responsible for the company?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-text-main">First Name</label>
                    <input 
                        type="text" 
                        value={director.firstName}
                        onChange={e => setDirector({...director, firstName: e.target.value})}
                        className="w-full rounded-lg border border-border-light dark:border-border-dark bg-transparent dark:bg-background-dark p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder="e.g. Sarah"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-text-main">Last Name</label>
                    <input 
                        type="text" 
                        value={director.lastName}
                        onChange={e => setDirector({...director, lastName: e.target.value})}
                        className="w-full rounded-lg border border-border-light dark:border-border-dark bg-transparent dark:bg-background-dark p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder="e.g. Smith"
                    />
                </div>
                <div className="col-span-1 md:col-span-2 space-y-2">
                    <label className="block text-sm font-bold text-text-main">Email Address</label>
                    <input 
                        type="email" 
                        value={director.email}
                        onChange={e => setDirector({...director, email: e.target.value})}
                        className="w-full rounded-lg border border-border-light dark:border-border-dark bg-transparent dark:bg-background-dark p-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                        placeholder="sarah@example.com"
                    />
                    <p className="text-xs text-text-muted">We will email the Certificate of Incorporation to this address.</p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-10">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm font-bold text-text-muted hover:text-text-main transition-colors"
                >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back
                </button>
                <button 
                    onClick={() => onNext({ director })}
                    disabled={!director.firstName || !director.lastName || !director.email}
                    className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 bg-primary text-white gap-3 text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next Step
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
            </div>
        </div>
    );
};