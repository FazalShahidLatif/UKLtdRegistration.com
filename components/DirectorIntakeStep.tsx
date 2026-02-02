import React, { useState } from 'react';
import { StepProps } from '../types';

export const DirectorIntakeStep = ({ onNext, data }: StepProps) => {
    const [privacy, setPrivacy] = useState<'public' | 'private'>(data?.privacy || 'private');
    const [directors, setDirectors] = useState([
        { 
            id: 1, 
            name: `${data?.director?.firstName || 'Alex'} ${data?.director?.lastName || 'Thompson'}`, 
            status: 'verified', 
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb9xccS1aO5GyBIee2aBtT4vW41PzmQJtN2Ox02SNTLuvG5J0zuvtD3f6vqndHFyQoLS826a_ELHFb-3-co4qWhTUVBxXt564RXAaLdH3tOZMSoa83RCFuTRlZwg61GVTOBbug8fED2VLDQQizs-L6IMq0ehNP5D7xZD7dvO8s-MnY7R1srNdRfeqVNOWduRPH148m096qeNls-6fqdz2m0qDM1N6G2rlbSa09uDksbL4KIUxmQa5CA6A_PQrzq3MTpx3wPEjfzkjJ' 
        },
        { 
            id: 2, 
            name: 'Sarah Jenkins', 
            status: 'pending', 
            avatar: null 
        }
    ]);

    const basePrice = 19.99;
    const govFee = 50.00;
    const vat = 13.99;
    const privacyPrice = privacy === 'private' ? 30.00 : 0;
    const total = basePrice + govFee + vat + privacyPrice;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in w-full">
            <div className="lg:col-span-8 space-y-8">
                {/* Header */}
                <div className="mb-4">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Formation Pipeline</span>
                            <h3 className="text-2xl font-extrabold tracking-tight mt-1 text-slate-900 dark:text-white">AI-Powered Step 3</h3>
                        </div>
                        <div className="text-right hidden sm:block">
                            <span className="text-slate-400 text-xs font-medium uppercase">Schema: Zod/Strict</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="h-1 bg-primary rounded-full"></div>
                        <div className="h-1 bg-primary rounded-full"></div>
                        <div className="h-1 bg-primary rounded-full"></div>
                    </div>
                </div>

                {/* Privacy Section */}
                <section className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm">
                    <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Director Privacy</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="relative cursor-pointer group">
                            <input
                                type="radio"
                                name="privacy"
                                className="peer sr-only"
                                checked={privacy === 'public'}
                                onChange={() => setPrivacy('public')}
                            />
                            <div className="p-6 border-2 border-slate-200 dark:border-gray-800 rounded-xl peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">visibility</span>
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${privacy === 'public' ? 'border-primary' : 'border-slate-300'}`}>
                                        {privacy === 'public' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                                    </div>
                                </div>
                                <h5 className="font-bold text-slate-900 dark:text-white">Standard</h5>
                                <p className="text-xs text-slate-500 mt-1">Residential address on public record.</p>
                            </div>
                        </label>
                        <label className="relative cursor-pointer group">
                            <input
                                type="radio"
                                name="privacy"
                                className="peer sr-only"
                                checked={privacy === 'private'}
                                onChange={() => setPrivacy('private')}
                            />
                            <div className="p-6 border-2 border-slate-200 dark:border-gray-800 rounded-xl peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="material-symbols-outlined text-primary">security</span>
                                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">POPULAR</span>
                                </div>
                                <h5 className="font-bold text-slate-900 dark:text-white">Privacy Plus</h5>
                                <p className="text-xs text-slate-500 mt-1">Keeps personal address private (recurring billing).</p>
                            </div>
                        </label>
                    </div>
                </section>

                {/* Directors Section */}
                <section className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Appointed Directors</h4>
                        <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
                            <span className="material-symbols-outlined text-sm">add</span> Add Director
                        </button>
                    </div>
                    <div className="space-y-4">
                        {/* Verified Director */}
                        <div className="p-5 border border-slate-200 dark:border-gray-800 rounded-xl flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-slate-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                                    <img alt="Avatar" className="w-full h-full object-cover" src={directors[0].avatar || ''} />
                                </div>
                                <div>
                                    <h6 className="font-bold text-slate-900 dark:text-white">{directors[0].name}</h6>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full border border-green-500/20">ID Verified</span>
                                        <span className="text-[10px] text-slate-400">DOB: 12/05/1988</span>
                                    </div>
                                </div>
                            </div>
                            <button className="text-slate-400 hover:text-red-500 transition-colors">
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                        </div>

                        {/* Pending Director */}
                        <div className="p-5 border-2 border-dashed border-slate-200 dark:border-gray-800 rounded-xl flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-slate-100 dark:bg-gray-800 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-400">person_add</span>
                                </div>
                                <div>
                                    <h6 className="font-bold text-slate-400">Sarah Jenkins</h6>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="px-2 py-0.5 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded-full border border-amber-500/20 uppercase">Pending ID</span>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:scale-105 transition-transform">
                                Handle for Me
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
                <div className="sticky top-24 space-y-6">
                    <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-2xl border border-white/5">
                        <h5 className="text-sm font-bold mb-6 flex items-center justify-between">
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">analytics</span>
                                Strategic Summary
                            </span>
                            <span className="text-[10px] text-slate-500 uppercase">Live Hook</span>
                        </h5>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Registration Package</span>
                                <span className="font-bold">£{basePrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Gov Fee (Companies House)</span>
                                <span className="font-bold">£{govFee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">VAT (20%)</span>
                                <span className="font-bold">£{vat.toFixed(2)}</span>
                            </div>
                            {privacy === 'private' && (
                                <div className="flex justify-between text-sm pt-4 border-t border-white/10 animate-fade-in">
                                    <div className="flex flex-col">
                                        <span className="text-primary font-bold">Privacy Plus Subscription</span>
                                        <span className="text-[10px] text-slate-500 italic">Billed annually</span>
                                    </div>
                                    <span className="font-bold">£{privacyPrice.toFixed(2)}</span>
                                </div>
                            )}
                        </div>
                        <div className="pt-6 border-t-2 border-primary/20 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Total Investment</span>
                                <span className="text-3xl font-extrabold text-white mt-1">£{total.toFixed(2)}</span>
                            </div>
                            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-[#111827] border border-slate-200 dark:border-gray-800 rounded-2xl">
                        <h6 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Schema Validation Specs</h6>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                Strict Email (Zod .email())
                            </li>
                            <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                UK Postcode Regex
                            </li>
                            <li className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                Director DOB (&gt;16 years)
                            </li>
                        </ul>
                    </div>

                    <button 
                        onClick={() => onNext({ privacy, director: { firstName: 'Alex', lastName: 'Thompson', email: 'alex@example.com' } })}
                        className="w-full cursor-pointer flex items-center justify-center rounded-xl h-14 bg-primary text-white gap-3 text-lg font-bold shadow-xl shadow-primary/25 hover:translate-y-[-2px] active:translate-y-[1px] transition-all"
                    >
                        Finalize &amp; Review
                        <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
                    </button>
                </div>
            </aside>
        </div>
    );
};