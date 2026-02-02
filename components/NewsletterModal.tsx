
import React from 'react';

export const NewsletterModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in">
            {/* Modal Container */}
            <div className="relative w-full max-w-[960px] bg-white dark:bg-[#1c2630] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
                {/* Dismiss Icon */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 z-20 transition-colors"
                >
                    <span className="material-symbols-outlined text-[28px]">close</span>
                </button>

                {/* Visual Column (Left) */}
                <div className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-800/50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700 relative">
                    <div className="mb-6 flex items-center gap-2 self-start md:absolute md:top-8 md:left-8">
                        <div className="text-primary size-6">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path></svg>
                        </div>
                        <span className="text-slate-900 dark:text-white font-bold tracking-tight">UKLtdRegistration</span>
                    </div>
                    
                    {/* 3D eBook Mockup Visual */}
                    <div className="relative w-full aspect-[3/4] max-w-[320px] drop-shadow-2xl">
                        <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary to-[#165a96] p-6 text-white flex flex-col justify-between border-r-8 border-primary/30 shadow-inner overflow-hidden relative" aria-label="3D mockup of the UK Business Growth Blueprint eBook">
                            {/* Abstract Pattern Overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                            <div className="relative z-10">
                                <div className="bg-white/20 backdrop-blur-md rounded px-2 py-1 text-[10px] uppercase font-bold tracking-widest inline-block mb-4">2024 Edition</div>
                                <h3 className="text-3xl font-bold leading-tight">UK Business Growth Blueprint</h3>
                                <p className="mt-4 text-sm font-medium opacity-90">The complete guide to scaling your venture in the United Kingdom.</p>
                            </div>
                            <div className="relative z-10 flex items-center gap-3 border-t border-white/20 pt-6">
                                <div className="size-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-sm">auto_stories</span>
                                </div>
                                <span className="text-xs font-semibold">UKLtdRegistration Resource Hub</span>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-widest">Powered by BookMeThat.com</p>
                </div>

                {/* Content Column (Right) */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        {/* Headline Section */}
                        <div className="text-left mb-8">
                            <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight mb-3">
                                Get the 2024 UK Business Growth Blueprint
                            </h1>
                            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                                Exclusive tax guides and compliance updates for modern founders. Stay ahead of regulatory changes.
                            </p>
                        </div>

                        {/* Signup Form */}
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-slate-700 dark:text-slate-200 text-sm font-semibold">First Name</label>
                                <div className="relative">
                                    <input className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. John" required type="text"/>
                                    <span className="hidden absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 material-symbols-outlined">check_circle</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-slate-700 dark:text-slate-200 text-sm font-semibold">Email Address</label>
                                <div className="relative">
                                    <input className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. john@company.com" required type="email"/>
                                    <span className="hidden absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 material-symbols-outlined">check_circle</span>
                                </div>
                            </div>
                            {/* CTA Button */}
                            <button className="w-full bg-primary hover:bg-[#165a96] text-white font-bold h-14 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-lg mt-2" type="submit">
                                Join the Community
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </form>

                        {/* Social Proof */}
                        <div className="mt-6 flex items-center justify-center gap-2">
                            <div className="flex -space-x-2">
                                <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDIC4k9Zei4bpYDZD0XI5I2D7G5ikxPHBl86U42XpGqTTo0AkVCIfYU8veY3KVxwocJUiI-0nLe22PSeBuo09vBYp2z57nKKHvEtemq5QJLEZmWwf6-te4CsvJleqD3EStbjlt5zQN9hW-DZXY6ICXNfUFFVADKpTB6nB5LATtvRrL9Vq2DvrlVW2alJXX-xw3bV561OHnS_6DIaCuxp1CLJVBWT06iE6NnSb7HvR-TCA2YWKK2saCJFP9xU-PJpIa3N3huFI6S478')" }}></div>
                                <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoIZfpYy4lRb_4oAV6O2dpfG0EVPbYtYjTWWUxuHPAgE3hcWQXUV6WKvOrkb5FbIRIvPvgovqEghdRSXMfeIlrntbOXTVPElEa4mfeXjLP124p3x0RM1wNkOPgmZ80vT5GPWHiyypIPUfHUNXCo6FK8qzj-rV2PE12m5CtMdrJF33tLBRVp2kQwCmVji16zMP7X29JHu32AH4mL2bgPql9FOztVxA38idXlPUfkXeXJFoUwaGJLrYKGd9zj_7cqotVcUyyBM0VKjig')" }}></div>
                                <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-400 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDN7JO2MmXqiGf12FyxFVeqOmzyYbv9ElaxiBayhfYoE20gHqOb6DGmyCP607oHpGSNh9-mJhJL3RNtGlXhetvQ24QU5oP24buD183-aWNfnKfmTijil3GcdahfBJcGghfE4lCvZFxPfeQRHfWXm8roleFt_GJvod6tU71x98Aj7vrbVvjm071r5noKoqFPpL100yZfpkDezwF5zN8roxenykrbt1UYqKSTyLSBfYvg1nIvgHojXHk_KZklUqjwKI4DifanMNxvUOFc')" }}></div>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                                Join 5,000+ global founders receiving our weekly insights.
                            </p>
                        </div>

                        {/* Trust Signals */}
                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 text-center">
                            <p className="text-slate-400 dark:text-slate-500 text-xs leading-relaxed">
                                No spam, ever. Managed by <a className="font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">BlueOceanHub.info</a>.<br/>
                                Read our <a className="underline hover:text-primary transition-colors" href="#">Privacy Policy</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
