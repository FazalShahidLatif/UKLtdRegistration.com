
import React, { useState } from 'react';
import { NewsletterModal } from './NewsletterModal';

export const ResourceHub = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    const [showNewsletter, setShowNewsletter] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 animate-fade-in relative">
            {showNewsletter && <NewsletterModal onClose={() => setShowNewsletter(false)} />}
            
            <section className="mb-20 text-center md:text-left">
                <div className="flex flex-col gap-6 max-w-4xl">
                    <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">Knowledge Center</span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                        Strategic Intelligence for <span className="text-primary">UK Founders.</span>
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                        Authoritative guides on company formation, taxation, and scaling. Curated by the specialists at <a href="https://blueoceanhub.info" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">BlueOceanHub.info</a>.
                    </p>
                </div>
            </section>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Main Content Column */}
                <div className="lg:col-span-8 space-y-20">
                    
                    <section>
                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-8 mb-12">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Pillar Guides</h2>
                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Latest Sync</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-12">
                            {[
                                {
                                    title: "Non-Resident Banking in the UK: 2026 Strategy",
                                    desc: "A comprehensive audit of digital and high-street banks for international Ltd directors seeking stable GBP settlement.",
                                    img: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&w=800&q=80",
                                    tag: "Banking & Finance"
                                },
                                {
                                    title: "Double Taxation Treaties: USA to UK",
                                    desc: "How Delaware LLCs and C-Corps can leverage UK Limited entities for tax optimization in the European market.",
                                    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
                                    tag: "Legal & Taxation"
                                },
                                {
                                    title: "Post-Brexit VAT Compliance for E-commerce",
                                    desc: "Understanding the new registration thresholds and OSS requirements for selling into the UK and EU.",
                                    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
                                    tag: "E-Commerce"
                                }
                            ].map((article, i) => (
                                <div key={i} className="group flex flex-col md:flex-row gap-10 cursor-pointer items-start">
                                    <div className="w-full md:w-72 aspect-[16/10] overflow-hidden rounded-3xl shrink-0 border border-slate-100 dark:border-slate-800 shadow-sm group-hover:shadow-lg transition-all">
                                        <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="flex flex-col justify-center py-2">
                                        <span className="text-[10px] font-black uppercase text-primary tracking-widest mb-3">{article.tag}</span>
                                        <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{article.desc}</p>
                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">calendar_month</span> Jan 24, 2026</span>
                                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">timer</span> 8 min read</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                
                {/* Sidebar Navigation */}
                <aside className="lg:col-span-4 space-y-10">
                    <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden ring-4 ring-primary/10">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-4 leading-tight">Partner Strategy</h3>
                            <p className="text-slate-400 text-sm mb-8 leading-relaxed">Scaling internationally requires more than just a registry entry. Our partners at BlueOceanHub provide dedicated legal and tax strategy for high-growth ventures.</p>
                            <a href="https://blueoceanhub.info" target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                                Contact Strategist <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                        <div className="absolute -right-12 -bottom-12 opacity-10">
                            <span className="material-symbols-outlined text-[180px]">hub</span>
                        </div>
                    </div>

                    <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-8">Intelligence Categories</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Formation', 'Taxation', 'VAT', 'Banking', 'Compliance', 'SEO Strategy', 'Digital ID'].map(cat => (
                                <span key={cat} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary cursor-pointer transition-all">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Simple Lead Magnet Widget */}
                    <div className="p-10 bg-primary/5 rounded-[2.5rem] border border-primary/20">
                        <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4">Stay Synchronized</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Join 5,000+ founders receiving weekly UK regulatory updates and scaling insights.</p>
                        <div className="flex flex-col gap-3">
                            <input className="w-full bg-white dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Email address" />
                            <button className="w-full bg-primary text-white font-black py-3 rounded-xl hover:opacity-90 transition-opacity">Join Hub</button>
                        </div>
                    </div>
                </aside>
            </div>
            
            <div className="mt-32 pt-12 border-t border-slate-100 dark:border-slate-800 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em] mb-4">
                    Content Engine Integrated with <a href="https://blueoceanhub.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BlueOceanHub.info</a>
                </p>
                <div className="flex justify-center gap-8 opacity-20 grayscale hover:grayscale-0 transition-all cursor-default">
                    <span className="material-symbols-outlined text-4xl">verified_user</span>
                    <span className="material-symbols-outlined text-4xl">gavel</span>
                    <span className="material-symbols-outlined text-4xl">account_balance</span>
                </div>
            </div>
        </div>
    );
};
