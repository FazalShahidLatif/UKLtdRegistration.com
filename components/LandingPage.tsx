
import React from 'react';
import { RegistrationData } from '../types';

interface LandingPageProps {
    onStart: (data?: Partial<RegistrationData>) => void;
    onNavigate: (view: string) => void;
}

export const LandingPage = ({ onStart, onNavigate }: LandingPageProps) => {
    return (
        <main className="flex-1 w-full animate-fade-in bg-white dark:bg-[#0a0f18]">
            {/* Professional Hero Section with Realistic Asset */}
            <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
                        alt="London Glass Skyscraper" 
                        className="w-full h-full object-cover brightness-[0.4] dark:brightness-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.2em] w-fit mx-auto lg:mx-0">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            Official 2026 Launch Partner
                        </div>
                        <h1 className="text-white text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter">
                            The Gateway to <br/><span className="text-primary">British Business.</span>
                        </h1>
                        <p className="text-slate-300 text-xl md:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                            Premium UK Limited Company formation for global founders. Strategically managed by <a href="https://blueoceanhub.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BlueOceanHub.info</a>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <button 
                                onClick={() => onStart()}
                                aria-label="Start Incorporation Process"
                                className="bg-primary text-white text-lg font-black px-12 py-5 rounded-full shadow-2xl shadow-primary/40 hover:scale-105 hover:shadow-primary/60 transition-all active:scale-95"
                            >
                                Start Your Incorporation
                            </button>
                            <button 
                                onClick={() => onNavigate('resources')}
                                aria-label="View Knowledge Base"
                                className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-bold px-10 py-5 rounded-full hover:bg-white/20 transition-all"
                            >
                                Browse Knowledge Hub
                            </button>
                        </div>
                    </div>

                    {/* Trust Card Overlay */}
                    <div className="hidden lg:block animate-fade-in [animation-delay:300ms]">
                        <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-6">
                            <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Trust Verification</p>
                                    <p className="text-lg font-black mt-1 dark:text-white">HMRC & Companies House Certified</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-slate-900 dark:text-white">
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                                    <p className="text-2xl font-black text-primary">24h</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Turnaround</p>
                                </div>
                                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                                    <p className="text-2xl font-black text-primary">100%</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Digital Process</p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 text-center font-medium italic">Powered by blueoceanhub.info strategy engine</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Content Feed - Blog Grid */}
            <section className="bg-white dark:bg-[#0a0f18] py-32 border-t border-slate-100 dark:border-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Knowledge Base</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">The Founder's Intelligence Hub.</h2>
                        </div>
                        <button 
                            onClick={() => onNavigate('resources')}
                            className="text-primary font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform"
                        >
                            View All Guides <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Non-Resident Banking in the UK: 2026 Strategy",
                                desc: "How to open high-street and digital accounts without UK residency status.",
                                img: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&w=800&q=80",
                                tag: "Banking"
                            },
                            {
                                title: "VAT Registration 101 for SaaS Founders",
                                desc: "Avoid common pitfalls when registering for VAT as an international e-commerce seller.",
                                img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
                                tag: "Compliance"
                            },
                            {
                                title: "Delaware LLC vs UK Ltd: The Comparison",
                                desc: "Why many US founders are moving their HQ to the United Kingdom in 2026.",
                                img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
                                tag: "Strategy"
                            }
                        ].map((post, i) => (
                            <div key={i} className="group flex flex-col cursor-pointer" onClick={() => onNavigate('resources')}>
                                <div className="aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-100 dark:border-slate-800 mb-6 shadow-sm group-hover:shadow-xl transition-all">
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="px-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">{post.tag}</span>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{post.desc}</p>
                                    <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <span>Jan 24, 2026</span>
                                        <span>•</span>
                                        <span>8 min read</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Backlink Booster CTA */}
            <section className="max-w-5xl mx-auto px-6 py-32 text-center">
                <div className="inline-flex items-center gap-4 mb-10 text-slate-400 dark:text-slate-600">
                    <div className="h-px w-16 bg-current"></div>
                    <span className="text-xs font-black uppercase tracking-[0.5em]">Strategic Partner</span>
                    <div className="h-px w-16 bg-current"></div>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-none text-slate-900 dark:text-white">Build Your Legacy via <br/><a href="https://blueoceanhub.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">BlueOceanHub.</a></h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button onClick={() => onStart()} className="bg-primary text-white text-lg font-black px-12 py-5 rounded-full shadow-2xl shadow-primary/30 hover:scale-105 transition-all">Launch Your Ltd Company</button>
                </div>
                <p className="mt-12 text-sm text-slate-400 font-bold uppercase tracking-widest">
                    Proudly Powered by <a href="https://blueoceanhub.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">blueoceanhub.info</a>
                </p>
            </section>
        </main>
    );
};
