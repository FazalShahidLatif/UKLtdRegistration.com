import React from 'react';

export const ReferralModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
            {/* Modal Container */}
            <div className="relative w-full max-w-2xl bg-white dark:bg-background-dark rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/80 hover:text-white z-20 bg-black/20 hover:bg-black/40 rounded-full p-1 transition-colors"
                >
                    <span className="material-symbols-outlined text-lg">close</span>
                </button>
                
                <div className="flex flex-col">
                    {/* Celebratory Infographic */}
                    <div className="relative h-56 w-full bg-gradient-to-br from-primary to-blue-600 overflow-hidden">
                        {/* Abstract Background Pattern */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                        </div>
                        {/* Content on Image */}
                        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl mb-4">
                                <span className="material-symbols-outlined text-amber-400 text-5xl mb-2">workspace_premium</span>
                                <h2 className="text-white text-2xl font-extrabold tracking-tight">SOLARIS VENTURES LTD</h2>
                                <p className="text-white/80 text-xs font-medium tracking-widest uppercase">Registered in England &amp; Wales • No. 12345678</p>
                            </div>
                            <div className="flex items-center gap-2 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                <span className="material-symbols-outlined text-sm">verified</span>
                                Official UK Registration Success
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-[#0e151b] dark:text-white text-3xl font-extrabold tracking-tight mb-2">
                                Give £10, Get £10
                            </h1>
                            <p className="text-[#4e7597] dark:text-slate-400 text-base font-medium max-w-md mx-auto">
                                Refer a fellow founder and you both get £10 credit toward your next compliance filing.
                            </p>
                        </div>

                        {/* Social Sharing Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077b5]/10 text-[#0077b5]">
                                    <span className="material-symbols-outlined">share</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">LinkedIn</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                                    <span className="material-symbols-outlined">chat</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">WhatsApp</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/10 text-slate-900 dark:text-white">
                                    <span className="material-symbols-outlined">terminal</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">X / Twitter</span>
                            </button>
                        </div>

                        {/* Referral Link Field */}
                        <div className="mb-8">
                            <label className="block text-[#0e151b] dark:text-slate-200 text-sm font-bold mb-2">Your Direct Referral Link</label>
                            <div className="flex items-stretch shadow-sm">
                                <div className="flex-1">
                                    <input 
                                        className="w-full h-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-l-lg px-4 text-primary font-medium text-sm focus:outline-none" 
                                        readOnly 
                                        value="https://blueoceanhub.info/refer/solaris-1029"
                                    />
                                </div>
                                <button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-r-lg flex items-center gap-2 transition-colors">
                                    <span className="material-symbols-outlined text-lg">content_copy</span>
                                    Copy
                                </button>
                            </div>
                        </div>

                        {/* Footer Badging & Dismiss */}
                        <div className="flex flex-col items-center gap-6 border-t border-slate-100 dark:border-slate-800 pt-6">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-tighter">BlueOceanHub Community</p>
                                        <p className="text-[10px] text-[#4e7597] dark:text-slate-500 font-medium">Joined by 500+ founders this month</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Powered by</p>
                                    <p className="text-xs font-extrabold text-slate-600 dark:text-slate-300">BookMeThat</p>
                                </div>
                            </div>
                            <button 
                                onClick={onClose}
                                className="text-sm font-medium text-[#4e7597] hover:text-slate-900 dark:hover:text-white transition-colors underline underline-offset-4 decoration-slate-300"
                            >
                                No thanks, maybe later
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};