import React from 'react';
import { StepProps, RegistrationData } from '../types';

export const ReviewStep = ({ data, onBack, onNext }: StepProps & { data: RegistrationData }) => {
    return (
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-6 md:p-10 shadow-sm animate-fade-in">
             <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-text-main">Final Review</h2>
                <p className="text-text-muted mt-2">Please verify your information before submitting.</p>
            </div>

            <div className="space-y-4">
                <div className="p-4 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark">
                    <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Company Name</h3>
                    <div className="flex justify-between items-center">
                         <span className="text-lg font-bold text-text-main">{data.companyName}</span>
                         <span className="text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span> Valid
                         </span>
                    </div>
                </div>

                <div className="p-4 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark">
                    <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Business Activity</h3>
                    <div className="flex items-center gap-3">
                         <span className="font-mono font-bold text-primary">{data.sic?.code}</span>
                         <span className="text-text-main">{data.sic?.description}</span>
                    </div>
                </div>

                <div className="p-4 border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark">
                    <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">Director</h3>
                    <p className="text-text-main font-bold">{data.director?.firstName} {data.director?.lastName}</p>
                    <p className="text-text-muted text-sm">{data.director?.email}</p>
                </div>
            </div>

            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-text-main text-lg">Gov Filing Fee</span>
                    <span className="font-bold text-2xl text-text-main">£12.00</span>
                </div>
                <button 
                    onClick={() => onNext({})}
                    className="w-full rounded-xl h-14 bg-primary text-white gap-3 text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
                >
                    Pay &amp; Submit
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                </button>
                <p className="text-center text-xs text-text-muted mt-4 flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">verified_user</span>
                    Secure SSL Payment • Direct to Companies House
                </p>
            </div>

            <div className="flex items-center justify-center mt-6">
                <button 
                    onClick={onBack}
                    className="text-sm font-bold text-text-muted hover:text-text-main transition-colors underline"
                >
                    Make Changes
                </button>
            </div>
        </div>
    );
};