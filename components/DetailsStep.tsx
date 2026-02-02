import React, { useState } from 'react';
import { StepProps } from '../types';

export const DetailsStep = ({ onNext, onBack, data }: StepProps) => {
    const [privacy, setPrivacy] = useState<'public' | 'private'>(data?.privacy || 'private');
    const [director, setDirector] = useState(data?.director || { firstName: '', lastName: '', email: '' });
    const [address, setAddress] = useState(data?.address || '');

    const isValid = director.firstName && director.lastName && director.email && (privacy === 'private' || (privacy === 'public' && address.length > 5));

    return (
        <div className="animate-fade-in space-y-8">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 mb-8">
                <div className="flex min-w-72 flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-text-main">Registered Office &amp; Privacy</h1>
                    <p className="text-text-muted text-base font-normal">Every UK company requires a physical office address for public record. Choose how yours appears.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Side */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Director Details Section (Integrated) */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-bold flex items-center gap-2 text-text-main">
                            <span className="material-symbols-outlined text-primary">person</span>
                            Director Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-text-main">First Name</label>
                                <input 
                                    className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none transition-all" 
                                    placeholder="e.g. Sarah" 
                                    type="text"
                                    value={director.firstName}
                                    onChange={(e) => setDirector({...director, firstName: e.target.value})}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-text-main">Last Name</label>
                                <input 
                                    className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none transition-all" 
                                    placeholder="e.g. Smith" 
                                    type="text"
                                    value={director.lastName}
                                    onChange={(e) => setDirector({...director, lastName: e.target.value})}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Service Toggle */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-bold flex items-center gap-2 text-text-main">
                            <span className="material-symbols-outlined text-primary">location_on</span>
                            Registered Office Address
                        </h3>
                        <div className="flex flex-col sm:flex-row h-auto sm:h-14 w-full items-center justify-center rounded-xl bg-background-light dark:bg-background-dark p-1.5 gap-2 sm:gap-0">
                            <label className={`flex cursor-pointer h-12 sm:h-full grow items-center justify-center overflow-hidden rounded-lg px-2 transition-all w-full sm:w-auto ${privacy === 'public' ? 'bg-white dark:bg-card-dark shadow-md text-primary' : 'text-text-muted hover:text-text-main'}`}>
                                <span className="truncate font-bold text-sm">Use My Own (Public)</span>
                                <input 
                                    className="sr-only" 
                                    name="privacy-choice" 
                                    type="radio" 
                                    checked={privacy === 'public'}
                                    onChange={() => setPrivacy('public')}
                                />
                            </label>
                            <label className={`flex cursor-pointer h-12 sm:h-full grow items-center justify-center overflow-hidden rounded-lg px-2 transition-all relative w-full sm:w-auto ${privacy === 'private' ? 'bg-white dark:bg-card-dark shadow-md text-primary' : 'text-text-muted hover:text-text-main'}`}>
                                <span className="truncate font-bold text-sm">Privacy Service (+£12/mo)</span>
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">Recommended</span>
                                <input 
                                    className="sr-only" 
                                    name="privacy-choice" 
                                    type="radio" 
                                    checked={privacy === 'private'}
                                    onChange={() => setPrivacy('private')}
                                />
                            </label>
                        </div>

                        {/* Dynamic Input */}
                        {privacy === 'private' ? (
                            <div className="p-6 rounded-xl border-2 border-primary/30 bg-primary/5 space-y-4 animate-fade-in">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-primary">Privacy Address Active</p>
                                        <p className="text-sm text-text-muted leading-relaxed mt-1">
                                            Your personal address will be replaced by our professional London office on all public filings.
                                        </p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                                </div>
                                <div className="bg-white dark:bg-card-dark p-4 rounded-lg border border-border-light dark:border-border-dark">
                                    <p className="text-xs uppercase tracking-widest text-text-muted mb-1">Display Address</p>
                                    <p className="font-mono text-sm text-text-main">71-75 Shelton Street, Covent Garden,<br/>London, WC2H 9JQ, United Kingdom</p>
                                </div>
                            </div>
                        ) : (
                             <div className="p-6 rounded-xl border-2 border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark space-y-4 animate-fade-in">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-text-main">Home/Office Address</p>
                                        <p className="text-sm text-text-muted leading-relaxed mt-1">
                                            This address will be visible to the public on the Companies House register.
                                        </p>
                                    </div>
                                    <span className="material-symbols-outlined text-text-muted text-3xl">home</span>
                                </div>
                                <input 
                                    className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-card-dark focus:ring-2 focus:ring-primary outline-none transition-all" 
                                    placeholder="Start typing your address..." 
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        )}
                    </section>

                    {/* Additional Details */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold flex items-center gap-1 text-text-main">
                                Official Company Email
                                <span className="material-symbols-outlined text-[16px] text-text-muted cursor-help" title="Used for official Companies House correspondence">info</span>
                            </label>
                            <input 
                                className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-card-dark focus:ring-2 focus:ring-primary outline-none transition-all" 
                                placeholder="e.g. hello@yourcompany.co.uk" 
                                type="email"
                                value={director.email}
                                onChange={(e) => setDirector({...director, email: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold flex items-center gap-1 text-text-main">
                                Accounting Reference Date
                                <span className="material-symbols-outlined text-[16px] text-text-muted cursor-help" title="The date your financial year ends">info</span>
                            </label>
                            <div className="relative">
                                <input 
                                    className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-muted cursor-not-allowed outline-none" 
                                    readOnly 
                                    type="text" 
                                    value="31st March (Default)"
                                />
                                <span className="absolute right-3 top-3 material-symbols-outlined text-text-muted">calendar_month</span>
                            </div>
                        </div>
                    </section>

                    {/* Navigation */}
                    <div className="pt-8 flex items-center justify-between border-t border-border-light dark:border-border-dark">
                        <button 
                            onClick={onBack}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-text-muted hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                            Back
                        </button>
                        <button 
                            onClick={() => onNext({ director, privacy, address: privacy === 'public' ? address : '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ' })}
                            disabled={!isValid}
                            className="bg-primary hover:bg-primary-dark text-white px-10 py-3 rounded-lg font-bold shadow-lg shadow-primary/20 flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Save &amp; Continue
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="rounded-xl bg-white dark:bg-card-dark p-6 shadow-sm border border-border-light dark:border-border-dark">
                        <div className="flex flex-col gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg w-fit">
                                <span className="material-symbols-outlined text-primary text-3xl">security</span>
                            </div>
                            <h4 className="text-xl font-bold text-text-main">Why choose Privacy?</h4>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                    <p className="text-sm text-text-muted">Keep your home address hidden from Google Maps and public search.</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                    <p className="text-sm text-text-muted">Stop cold callers, junk mail, and unsolicited visitors at your door.</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                    <p className="text-sm text-text-muted">Project a professional image with a Central London HQ.</p>
                                </div>
                            </div>
                            {/* Visual Indicator */}
                            <div className="mt-4 p-4 bg-background-light dark:bg-background-dark rounded-lg border border-border-light dark:border-border-dark">
                                <p className="text-xs font-bold text-text-muted uppercase mb-3 text-center">Data Visibility Comparison</p>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between text-[10px] font-bold text-text-main">
                                            <span>Personal Address</span>
                                            <span className="text-red-500 uppercase">Public</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500 w-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between text-[10px] font-bold text-text-main">
                                            <span>Privacy Service</span>
                                            <span className="text-green-500 uppercase">Protected</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-1/4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-2 w-full py-2.5 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
                                View Address Locations
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};