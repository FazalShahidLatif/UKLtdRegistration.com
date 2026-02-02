import React, { useState } from 'react';
import { RegistrationData } from '../types';
import { ReferralModal } from './ReferralModal';

export const SuccessHub = ({ data, onLogout, onNavigate }: { data: Partial<RegistrationData>, onLogout: () => void, onNavigate: (view: string) => void }) => {
    const companyName = data.companyName ? data.companyName.toUpperCase() : "BRITISH TECH LTD";
    const address = data.address || "London, UK";
    const [showReferral, setShowReferral] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#0e151a] dark:text-white min-h-screen animate-fade-in font-sans relative">
            {showReferral && <ReferralModal onClose={() => setShowReferral(false)} />}
            
            {/* =======================
                DESKTOP VIEW (md:block)
               ======================= */}
            <div className="hidden md:block">
                {/* Global TopNavBar */}
                <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-solid border-[#e8edf2] dark:border-gray-800 px-10 py-3 flex items-center justify-between whitespace-nowrap">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={onLogout}>
                            <div className="size-6">
                                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-[#0e151a] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">UKLtdRegistration.com</h2>
                        </div>
                        <nav className="flex items-center gap-9">
                            <a className="text-primary text-sm font-semibold leading-normal border-b-2 border-primary pb-1 cursor-pointer">Dashboard</a>
                            <a className="text-[#517594] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('compliance')}>Compliance</a>
                            <a className="text-[#517594] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Documents</a>
                            <a className="text-[#517594] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer" onClick={() => setShowReferral(true)}>Referrals</a>
                            <a className="text-[#517594] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('ecosystem')}>Ecosystem</a>
                        </nav>
                    </div>
                    <div className="flex flex-1 justify-end gap-8 items-center">
                        <label className="flex flex-col min-w-40 !h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                <div className="text-[#517594] flex border-none bg-gray-100 dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </div>
                                <input className="form-input flex w-full min-w-0 flex-1 border-none bg-gray-100 dark:bg-gray-800 focus:ring-0 h-full placeholder:text-[#517594] px-4 rounded-r-lg text-sm focus:outline-none" placeholder="Search filings..." />
                            </div>
                        </label>
                        <div className="flex gap-2">
                            <button className="flex items-center justify-center rounded-lg size-10 bg-gray-100 dark:bg-gray-800 text-[#0e151a] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <button className="flex items-center justify-center rounded-lg size-10 bg-gray-100 dark:bg-gray-800 text-[#0e151a] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                <span className="material-symbols-outlined">settings</span>
                            </button>
                        </div>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuf70ugrVSG3n-uWFBcxJiuGTZmOfRk24GIKBj5wN1bpsJUVgFS_MwqgocnXcnntVVMj_kOzMAG_IUvr2jA595L01qy4JS0hp0XK1G-OsCoCwOYPpyHhi0U7fjynhr7ly8raiu5HyK7poLo1SR3LM9EE9j2BT_IRwsqE0tvr42zVEQ8vosWdvB8qGxX06yfDkCqFljgBnOTl4fODv64_fyxNrg6pea9qGErJvnzgyv7gSPN6pGh7QEYt5BMsNKaklTmXJrw7HbBmct")' }}></div>
                    </div>
                </header>

                <main className="max-w-[1440px] mx-auto px-10 py-8">
                    {/* Existing Desktop Content - PageHeading */}
                    <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-[#0e151a] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Founder's Success Hub</h1>
                            <div className="flex items-center gap-2">
                                <p className="text-[#517594] dark:text-gray-400 text-base font-medium">{companyName}</p>
                                <span className="text-gray-300">|</span>
                                <p className="text-[#517594] dark:text-gray-400 text-sm">Company No: 81920374</p>
                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">Active</span>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold text-sm shadow-sm hover:bg-primary/90 transition-all">
                            <span className="material-symbols-outlined text-[20px]">cloud_download</span>
                            <span>Download Statutory Bundle</span>
                        </button>
                    </div>

                    {/* Existing Desktop Content - Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            {/* Stats Overview */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-background-dark border border-[#d1dce6] dark:border-gray-800 shadow-sm">
                                    <div className="flex items-center justify-between text-primary mb-2">
                                        <p className="text-sm font-bold uppercase tracking-wider opacity-70">Corporation Tax</p>
                                        <span className="material-symbols-outlined">account_balance_wallet</span>
                                    </div>
                                    <p className="text-[#0e151a] dark:text-white tracking-tight text-2xl font-black">Up to Date</p>
                                    <p className="text-xs text-[#517594] dark:text-gray-400">Next payment: Jan 2026</p>
                                </div>
                                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-background-dark border border-[#d1dce6] dark:border-gray-800 shadow-sm border-l-4 border-l-primary">
                                    <div className="flex items-center justify-between text-primary mb-2">
                                        <p className="text-sm font-bold uppercase tracking-wider opacity-70">Next Filing</p>
                                        <span className="material-symbols-outlined">event_upcoming</span>
                                    </div>
                                    <p className="text-[#0e151a] dark:text-white tracking-tight text-2xl font-black">Oct 24, 2026</p>
                                    <p className="text-xs text-green-500 font-semibold">Filed successfully</p>
                                </div>
                                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-background-dark border border-[#d1dce6] dark:border-gray-800 shadow-sm">
                                    <div className="flex items-center justify-between text-primary mb-2">
                                        <p className="text-sm font-bold uppercase tracking-wider opacity-70">Office</p>
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <p className="text-[#0e151a] dark:text-white tracking-tight text-lg font-black truncate">{address.split(',')[0]}</p>
                                    <p className="text-xs text-[#517594] dark:text-gray-400 truncate">{address}</p>
                                </div>
                            </div>

                            {/* Compliance Calendar Section */}
                            <section className="bg-white dark:bg-background-dark rounded-xl border border-[#d1dce6] dark:border-gray-800 shadow-sm overflow-hidden">
                                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
                                    <h2 className="text-[#0e151a] dark:text-white text-xl font-bold leading-tight">Compliance Calendar</h2>
                                    <button className="text-primary text-sm font-bold hover:underline" onClick={() => onNavigate('compliance')}>View Full Schedule</button>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-[48px_1fr] gap-x-4">
                                        {/* Item 1 */}
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="bg-primary/10 text-primary rounded-full p-2">
                                                <span className="material-symbols-outlined text-[24px]">description</span>
                                            </div>
                                            <div className="w-[2px] bg-gray-100 dark:bg-gray-800 h-12"></div>
                                        </div>
                                        <div className="flex flex-1 justify-between items-start pb-8">
                                            <div>
                                                <p className="text-[#0e151a] dark:text-white text-lg font-bold leading-none mb-1">Confirmation Statement</p>
                                                <p className="text-red-500 text-sm font-medium">Critical Deadline: Oct 24, 2026</p>
                                                <p className="text-[#517594] dark:text-gray-400 text-sm mt-2 max-w-md">Required yearly update of company information for Companies House.</p>
                                            </div>
                                            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">
                                                Handle for Me
                                            </button>
                                        </div>
                                        {/* Item 2 */}
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-full p-2">
                                                <span className="material-symbols-outlined text-[24px]">receipt_long</span>
                                            </div>
                                            <div className="w-[2px] bg-gray-100 dark:bg-gray-800 h-12"></div>
                                        </div>
                                        <div className="flex flex-1 justify-between items-start pb-8">
                                            <div>
                                                <p className="text-[#0e151a] dark:text-white text-lg font-bold leading-none mb-1">Annual Accounts Filing</p>
                                                <p className="text-[#517594] dark:text-gray-400 text-sm font-medium">Due in 45 days (Dec 12, 2026)</p>
                                                <p className="text-[#517594] dark:text-gray-400 text-sm mt-2 max-w-md">Financial summary for the previous fiscal year.</p>
                                            </div>
                                            <button className="bg-white border border-gray-200 text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">
                                                Pre-Order Filing
                                            </button>
                                        </div>
                                        {/* Item 3 */}
                                        <div className="flex flex-col items-center">
                                            <div className="bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-full p-2">
                                                <span className="material-symbols-outlined text-[24px]">payments</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 justify-between items-start">
                                            <div>
                                                <p className="text-[#0e151a] dark:text-white text-lg font-bold leading-none mb-1">VAT Return Deadline</p>
                                                <p className="text-[#517594] dark:text-gray-400 text-sm font-medium">Due in 60 days (Jan 04, 2027)</p>
                                            </div>
                                            <button className="bg-white border border-gray-200 text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">
                                                Remind Me
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Success Hub: Statutory Documents */}
                            <section>
                                <h2 className="text-[#0e151a] dark:text-white text-xl font-bold mb-4">Success Hub Documents</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-[32px]">workspace_premium</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold">Certificate of Incorporation</p>
                                            <p className="text-xs text-[#517594]">PDF Document • 1.2 MB</p>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-400">download</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="size-12 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                                            <span className="material-symbols-outlined text-[32px]">menu_book</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold">Memorandum &amp; Articles</p>
                                            <p className="text-xs text-[#517594]">PDF Document • 3.4 MB</p>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-400">download</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="size-12 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                                            <span className="material-symbols-outlined text-[32px]">badge</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold">Share Certificates</p>
                                            <p className="text-xs text-[#517594]">Digital Registry</p>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-400">visibility</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="size-12 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                                            <span className="material-symbols-outlined text-[32px]">history_edu</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold">Registers (Statutory)</p>
                                            <p className="text-xs text-[#517594]">Excel Format • 0.8 MB</p>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-400">download</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 flex flex-col gap-6">
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#0e3f7c] p-6 text-white shadow-lg">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                                            <span className="material-symbols-outlined text-white">smart_toy</span>
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Exclusive Access</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-2">Free AI Strategist Bot</h3>
                                    <p className="text-blue-100 text-sm mb-6 leading-relaxed">Ask anything about UK taxes, business scaling, or regulatory changes. Powered by custom LLMs trained on UK law.</p>
                                    <button className="w-full bg-white text-primary font-black py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                                        <span>Launch Strategist</span>
                                        <span className="material-symbols-outlined text-[20px]">bolt</span>
                                    </button>
                                </div>
                                <div className="absolute -right-10 -bottom-10 opacity-20">
                                    <span className="material-symbols-outlined text-[200px] rotate-12">automation</span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold">Ecosystem Rewards</h3>
                                    <span className="material-symbols-outlined text-primary">auto_awesome</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 p-3 rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
                                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary text-[20px]">account_balance</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Revolut Business</p>
                                            <p className="text-xs text-[#517594]">£50 welcome bonus + 0% fees for 3 months.</p>
                                            <a className="text-xs text-primary font-bold mt-1 inline-block hover:underline" href="#">Claim Reward</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
                                        <div className="size-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-indigo-600 text-[20px]">cloud</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">AWS Startup Credits</p>
                                            <p className="text-xs text-[#517594]">Up to $5,000 in activation credits for 2 years.</p>
                                            <a className="text-xs text-primary font-bold mt-1 inline-block hover:underline" href="#">View Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                                        <p className="text-xs font-bold text-gray-500 uppercase mb-2">Member Status</p>
                                        <div className="inline-flex items-center gap-2 mb-2">
                                            <div className="size-2 bg-primary rounded-full"></div>
                                            <span className="text-sm font-black text-primary">BlueOceanHub Elite</span>
                                        </div>
                                        <p className="text-xs text-[#517594] px-4">You have access to 14 active founder perks worth £12,000+.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 shadow-sm">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Recent Activity</h3>
                                <div className="space-y-6 relative before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gray-100 dark:before:bg-gray-800">
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 size-6 rounded-full bg-white dark:bg-background-dark border-2 border-primary flex items-center justify-center">
                                            <div className="size-2 bg-primary rounded-full"></div>
                                        </div>
                                        <p className="text-sm font-bold">VAT Registered</p>
                                        <p className="text-xs text-[#517594]">Yesterday at 2:14 PM</p>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 size-6 rounded-full bg-white dark:bg-background-dark border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                            <div className="size-2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                        </div>
                                        <p className="text-sm font-bold">Document Signed: Mem &amp; Arts</p>
                                        <p className="text-xs text-[#517594]">Oct 08, 2026</p>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 size-6 rounded-full bg-white dark:bg-background-dark border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                            <div className="size-2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                        </div>
                                        <p className="text-sm font-bold">Incorporation Confirmed</p>
                                        <p className="text-xs text-[#517594]">Oct 05, 2026</p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>

                {/* Footer Stats Overlay (Fixed Bottom) */}
                <footer className="fixed bottom-0 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 py-3 hidden md:block">
                    <div className="max-w-[1440px] mx-auto px-10 flex justify-between items-center text-xs">
                        <div className="flex gap-6">
                            <span className="flex items-center gap-1.5 text-[#517594]"><span className="size-1.5 rounded-full bg-green-500"></span> HMRC Sync: Live</span>
                            <span className="flex items-center gap-1.5 text-[#517594]"><span className="size-1.5 rounded-full bg-green-500"></span> Companies House: Connected</span>
                        </div>
                        <p className="text-[#517594]">© 2026 UKLtdRegistration.com. All regulatory data encrypted via AES-256.</p>
                    </div>
                </footer>
            </div>

            {/* =======================
                MOBILE VIEW (md:hidden)
               ======================= */}
            <div className="md:hidden flex flex-col min-h-screen pb-24">
                {/* Mobile Top Navigation */}
                <header className="sticky top-0 z-20 flex items-center justify-between bg-white dark:bg-background-dark/90 backdrop-blur-md px-6 py-4 border-b border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="flex items-center gap-3 text-primary" onClick={onLogout}>
                        <div className="size-6">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0e151b] dark:text-white text-lg font-bold leading-tight">UK Ltd Portal</h2>
                    </div>
                    <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                </header>

                {/* Mobile Main Content */}
                <main className="flex flex-col gap-4 p-4">
                    {/* Compliance Countdown Banner */}
                    <section className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm border-l-4 border-primary">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-[#0e151b] dark:text-white text-sm font-bold uppercase tracking-wider">Compliance Countdown</h3>
                            <span className="text-primary font-bold text-xs bg-primary/10 px-2 py-1 rounded">Action Required</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Your Annual Confirmation Statement is due soon.</p>
                        <div className="flex gap-2">
                            <div className="flex flex-1 flex-col items-center gap-1">
                                <div className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                    <p className="text-primary text-lg font-bold">12</p>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-[10px] font-medium uppercase">Days</p>
                            </div>
                            <div className="flex flex-1 flex-col items-center gap-1">
                                <div className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                    <p className="text-[#0e151b] dark:text-white text-lg font-bold">08</p>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-[10px] font-medium uppercase">Hrs</p>
                            </div>
                            <div className="flex flex-1 flex-col items-center gap-1">
                                <div className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                                    <p className="text-[#0e151b] dark:text-white text-lg font-bold">42</p>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-[10px] font-medium uppercase">Min</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-primary text-white text-sm font-bold tracking-wide shadow-md">
                                Handle for Me
                            </button>
                        </div>
                    </section>

                    {/* Compliance Calendar Card */}
                    <section className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                        <h2 className="text-[#0e151b] dark:text-white text-base font-bold px-4 pt-5 pb-2">Upcoming Deadlines</h2>
                        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4 pb-4">
                            {/* Event 1 */}
                            <div className="flex flex-col items-center gap-1 pt-3">
                                <div className="text-primary">
                                    <span className="material-symbols-outlined text-xl">event_upcoming</span>
                                </div>
                                <div className="w-[1.5px] bg-gray-200 dark:bg-gray-700 h-6 grow"></div>
                            </div>
                            <div className="flex flex-1 flex-col py-3 border-b border-gray-100 dark:border-gray-800">
                                <p className="text-[#0e151b] dark:text-white text-sm font-semibold">Confirmation Statement</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">Due Oct 12, 2024</p>
                            </div>
                            {/* Event 2 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-[1.5px] bg-gray-200 dark:bg-gray-700 h-4"></div>
                                <div className="text-gray-400">
                                    <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                                </div>
                                <div className="w-[1.5px] bg-gray-200 dark:bg-gray-700 h-6 grow"></div>
                            </div>
                            <div className="flex flex-1 flex-col py-3 border-b border-gray-100 dark:border-gray-800">
                                <p className="text-[#0e151b] dark:text-white text-sm font-semibold">Corporation Tax Filing</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">Due Dec 01, 2024</p>
                            </div>
                            {/* Event 3 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-[1.5px] bg-gray-200 dark:bg-gray-700 h-4"></div>
                                <div className="text-gray-400">
                                    <span className="material-symbols-outlined text-xl">receipt_long</span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col py-3">
                                <p className="text-[#0e151b] dark:text-white text-sm font-semibold">VAT Return</p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">Due Jan 15, 2025</p>
                            </div>
                        </div>
                    </section>

                    {/* Statutory Documents Card */}
                    <section className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between px-4 pt-5 pb-3">
                            <h2 className="text-[#0e151b] dark:text-white text-base font-bold">Statutory Documents</h2>
                            <span className="material-symbols-outlined text-gray-400 text-sm">more_horiz</span>
                        </div>
                        <div className="flex flex-col gap-2 px-4 pb-5">
                            {/* Doc 1 */}
                            <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">description</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Incorporation Certificate</span>
                                        <span className="text-[10px] text-gray-500">PDF • 1.2 MB</span>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 text-xl">download</span>
                            </div>
                            {/* Doc 2 */}
                            <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">description</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Share Certificates</span>
                                        <span className="text-[10px] text-gray-500">PDF • 850 KB</span>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 text-xl">download</span>
                            </div>
                        </div>
                    </section>

                    {/* Rewards Banner (Simplified) */}
                    <section className="relative overflow-hidden bg-primary rounded-lg p-4 shadow-sm text-white">
                        <div className="relative z-10">
                            <h3 className="text-sm font-bold mb-1">Founder Rewards</h3>
                            <p className="text-xs text-white/80 mb-3">Claim your £200 AWS credit and exclusive perks.</p>
                            <button 
                                onClick={() => onNavigate('resources')}
                                className="bg-white text-primary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase hover:bg-gray-100"
                            >
                                View All Rewards
                            </button>
                        </div>
                        {/* Abstract Gradient Decor */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-black/10 rounded-full blur-2xl"></div>
                    </section>
                </main>

                {/* Bottom Navigation Bar */}
                <nav className="fixed bottom-0 left-0 right-0 z-30 flex justify-center bg-transparent pointer-events-none">
                    <div className="flex w-full max-w-[420px] items-center justify-around bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 px-2 py-3 pointer-events-auto">
                        <a className="flex flex-col items-center gap-1 text-primary cursor-pointer" onClick={() => onNavigate('dashboard')}>
                            <span className="material-symbols-outlined">home</span>
                            <span className="text-[10px] font-bold">Home</span>
                        </a>
                        <a className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('compliance')}>
                            <span className="material-symbols-outlined">rule</span>
                            <span className="text-[10px] font-medium">Compliance</span>
                        </a>
                        <a className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-primary transition-colors cursor-pointer">
                            <span className="material-symbols-outlined">folder_open</span>
                            <span className="text-[10px] font-medium">Docs</span>
                        </a>
                        <a className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('resources')}>
                            <span className="material-symbols-outlined">military_tech</span>
                            <span className="text-[10px] font-medium">Rewards</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};