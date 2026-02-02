import React from 'react';

export const StepWizard = ({ step }: { step: number }) => {
    const steps = [
        { title: "Entity Validation", subtitle: "Name Check & SIC Codes" },
        { title: "Details & Privacy", subtitle: "Registered Office & Public Record" },
        { title: "Director Intake", subtitle: "Automated Identity Verification & Equity Distribution" }
    ];
    
    const currentStep = steps[step - 1];
    const progress = Math.round((step / 3) * 100);

    return (
        <div className="max-w-[1000px] mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                        {step}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{currentStep.title}</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{currentStep.subtitle}</p>
                    </div>
                </div>
                <div className="text-right hidden sm:block">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                        {step === 3 ? "Final Stage" : `Step ${step} of 3`}
                    </span>
                    <div className="w-48 h-2 bg-slate-200 dark:bg-border-dark rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-primary transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};