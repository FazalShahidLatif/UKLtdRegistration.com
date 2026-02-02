import React, { useState } from 'react';

export const PhoneSelectionPage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    const [billing, setBilling] = useState<'monthly' | 'annual'>('annual');

    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-[#0e141a] dark:text-[#f8fafb] min-h-screen flex flex-col animate-fade-in">
             {/* Component-specific Header to match design */}
             <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8edf2] dark:border-b-gray-800 px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
                <div className="flex items-center gap-4 text-[#0e141a] dark:text-[#f8fafb] cursor-pointer" onClick={() => onNavigate('landing')}>
                    <div className="size-6 text-primary">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">UK Ltd Registration</h2>
                </div>
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-9">
                        <a className="text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('wizard')}>Company Details</a>
                        <a className="text-sm font-medium leading-normal hover:text-primary transition-colors border-b-2 border-primary cursor-pointer">Phone Presence</a>
                        <a className="text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Bank Account</a>
                    </div>
                    <button onClick={() => onNavigate('dashboard')} className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
                        Save &amp; Continue
                    </button>
                </div>
            </header>

            <main className="flex flex-1 justify-center py-10 px-4 sm:px-10 lg:px-40">
                <div className="flex flex-col max-w-[1024px] flex-1">
                    {/* Hero */}
                    <div className="mb-12">
                        <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(29, 107, 185, 0.9), rgba(14, 20, 26, 0.95)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWgCETHaRzpE9Vup9FJEQe30ke_aUWqtaqdplZSZfgghd0nU9k2eDj_6xfQSuzWb3dMvNClWsIFdQ2mGg56G5zBTLAEXyQJKJX_HNj9c2QvlNwX8zfPP2mncSNBEcX3JWeg7sU7G5dNhM0tp83-728pfxW_aeAbpoxTN18pRsVaV36az4MJ4glpnd6-QAJq2R83pMP1pky9w6fNzhx0G-WADZNHxDe4RAfbbkuZMIMUSx2QBFJvK_BrAOl-7MJZ7-M53zfLH7kxNie")' }}>
                             <div className="flex flex-col gap-4 max-w-2xl z-10">
                                <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                                    Establish Your UK Presence with a Professional Business Number
                                </h1>
                                <p className="text-white/90 text-lg font-normal leading-relaxed">
                                    Route 0800 or Local calls directly to your existing mobile, anywhere in the world. No hardware required.
                                </p>
                            </div>
                            {/* Visual */}
                             <div className="flex items-center justify-center gap-6 mt-8 z-10 text-white">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-md">
                                        <span className="material-symbols-outlined text-3xl">cloud</span>
                                    </div>
                                    <span className="text-xs font-medium">UK Cloud</span>
                                </div>
                                <div className="w-16 h-px bg-white/40 border-t-2 border-dashed border-white/40"></div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-md">
                                        <span className="material-symbols-outlined text-3xl">call</span>
                                    </div>
                                    <span className="text-xs font-medium">Forwarding</span>
                                </div>
                                <div className="w-16 h-px bg-white/40 border-t-2 border-dashed border-white/40"></div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-md">
                                        <span className="material-symbols-outlined text-3xl">smartphone</span>
                                    </div>
                                    <span className="text-xs font-medium">Your Device</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search Section */}
                    <div className="mb-10 bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-[#e8edf2] dark:border-gray-800">
                        <h2 className="text-[#0e141a] dark:text-[#f8fafb] text-2xl font-bold leading-tight tracking-[-0.015em] mb-4">Find Your Perfect Number</h2>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex flex-1 items-stretch rounded-lg h-12">
                                <div className="text-[#517394] flex border border-r-0 border-[#d1d5db] dark:border-gray-700 bg-[#f0f2f4] dark:bg-gray-800 items-center justify-center px-4 rounded-l-lg">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                                <input className="flex-1 min-w-0 border-[#d1d5db] dark:border-gray-700 bg-white dark:bg-gray-800 text-[#0e141a] dark:text-[#f8fafb] focus:ring-primary focus:border-primary px-4 text-base font-normal leading-normal outline-none border-y border-r rounded-r-none" placeholder="Enter preferred digits or area code (e.g. 0800, 020...)" />
                                <button className="rounded-r-lg bg-primary text-white px-6 font-bold text-sm h-full hover:bg-blue-700 transition-colors">
                                    Check Availability
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="text-xs text-gray-500 font-medium">Recent suggestions:</span>
                            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold cursor-pointer">0800 123 45XX <span className="material-symbols-outlined text-xs">check_circle</span></span>
                            <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-bold cursor-pointer">020 7946 01XX <span className="material-symbols-outlined text-xs">add</span></span>
                        </div>
                    </div>

                    {/* Pricing Toggle */}
                    <div className="flex justify-center mb-8">
                        <div className="flex h-11 w-full max-w-sm items-center justify-center rounded-lg bg-[#e8edf2] dark:bg-gray-800 p-1">
                            <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-4 text-sm font-semibold transition-all ${billing === 'monthly' ? 'bg-white dark:bg-gray-700 shadow-sm text-[#0e141a] dark:text-white' : 'text-[#517394]'}`}>
                                <span>Monthly Billing</span>
                                <input className="hidden" name="billing" type="radio" value="monthly" checked={billing === 'monthly'} onChange={() => setBilling('monthly')}/>
                            </label>
                            <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-4 text-sm font-semibold transition-all ${billing === 'annual' ? 'bg-white dark:bg-gray-700 shadow-sm text-[#0e141a] dark:text-white' : 'text-[#517394]'}`}>
                                <span>Annual Billing (Save 20%)</span>
                                <input className="hidden" name="billing" type="radio" value="annual" checked={billing === 'annual'} onChange={() => setBilling('annual')}/>
                            </label>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {/* Starter */}
                        <div className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-xl border border-[#e8edf2] dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold mb-1 text-[#0e141a] dark:text-white">Starter</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black text-[#0e141a] dark:text-white">£{billing === 'annual' ? '9' : '12'}</span>
                                    <span className="text-gray-500 text-sm">/mo</span>
                                </div>
                                <p className="text-xs text-primary font-bold mt-1">{billing === 'annual' ? 'Billed annually' : 'Billed monthly'}</p>
                            </div>
                            <ul className="flex flex-col gap-3 mb-8 flex-1">
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    Local 020 or 01 Area Code
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    100 Inbound Minutes
                                    <span className="material-symbols-outlined text-gray-400 text-xs cursor-help" title="Routing to UK mobile/landline">info</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="material-symbols-outlined text-lg">close</span>
                                    Toll-Free Numbers
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    Basic Voicemail-to-Email
                                </li>
                            </ul>
                            <button className="w-full h-11 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors">Select Starter</button>
                        </div>
                         {/* Professional */}
                         <div className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-primary shadow-xl relative scale-105 z-10">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Recommended</div>
                            <div className="mb-6">
                                <h3 className="text-lg font-bold mb-1 text-[#0e141a] dark:text-white">Professional</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black text-[#0e141a] dark:text-white">£{billing === 'annual' ? '19' : '25'}</span>
                                    <span className="text-gray-500 text-sm">/mo</span>
                                </div>
                                <p className="text-xs text-primary font-bold mt-1">{billing === 'annual' ? 'Billed annually' : 'Billed monthly'}</p>
                            </div>
                            <ul className="flex flex-col gap-3 mb-8 flex-1">
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    <span><strong>0800 Toll-Free</strong> or Local</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    Unlimited Inbound Minutes
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    Custom Voicemail Greeting
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    Business Hours Routing
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    Mobile App Integration
                                </li>
                            </ul>
                            <button className="w-full h-11 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20">Claim Number</button>
                        </div>
                        {/* Enterprise */}
                        <div className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-xl border border-[#e8edf2] dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold mb-1 text-[#0e141a] dark:text-white">Enterprise</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black text-[#0e141a] dark:text-white">£{billing === 'annual' ? '39' : '49'}</span>
                                    <span className="text-gray-500 text-sm">/mo</span>
                                </div>
                                <p className="text-xs text-primary font-bold mt-1">{billing === 'annual' ? 'Billed annually' : 'Billed monthly'}</p>
                            </div>
                            <ul className="flex flex-col gap-3 mb-8 flex-1">
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    0800 + Multi-User VoIP
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    International Outbound
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    Call Recording &amp; Analytics
                                </li>
                                <li className="flex items-center gap-2 text-sm text-[#0e141a] dark:text-gray-300">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check</span>
                                    Priority 24/7 Support
                                </li>
                            </ul>
                            <button className="w-full h-11 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors">Contact Sales</button>
                        </div>
                    </div>

                    {/* Upsell Box */}
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-16 flex flex-col md:flex-row items-center gap-8">
                        <div className="bg-primary text-white p-4 rounded-xl flex shrink-0">
                            <span className="material-symbols-outlined text-4xl">language</span>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold mb-2 text-[#0e141a] dark:text-white">Instant Web Identity</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Connect your new business number to a matching website. Get a .co.uk domain and a professional landing page designed automatically based on your Ltd company name.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-w-[160px]">
                            <button className="bg-primary text-white py-2 px-4 rounded font-bold text-sm hover:bg-blue-700 transition-colors">Learn More</button>
                            <span className="text-[10px] text-center text-gray-400 uppercase font-black tracking-widest">+ £5.00/MO</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="border-t border-[#e8edf2] dark:border-gray-800 pt-10 pb-20">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="flex flex-col gap-2 items-center md:items-start">
                                <p className="text-sm text-gray-500">Powered by <strong className="text-[#0e141a] dark:text-white">BookMeThat</strong></p>
                                <div className="flex gap-4 grayscale opacity-60">
                                    <div className="h-6 w-12 bg-gray-300 rounded" title="PCI DSS Badge"></div>
                                    <div className="h-6 w-12 bg-gray-300 rounded" title="Secure Payment Badge"></div>
                                    <div className="h-6 w-12 bg-gray-300 rounded" title="Data Protected Badge"></div>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <a className="text-xs text-gray-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                                <a className="text-xs text-gray-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
                                <a className="text-xs text-gray-500 hover:text-primary transition-colors" href="#">Contact Support</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
};