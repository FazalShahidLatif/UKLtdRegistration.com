
import React from 'react';

export const AffiliatePortalPage = ({ onNavigate, onLogout }: { onNavigate: (view: string) => void, onLogout: () => void }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans min-h-screen animate-fade-in fixed inset-0 z-50 overflow-hidden">
            <div className="flex h-full">
                {/* SideNavBar */}
                <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col justify-between p-4 hidden lg:flex">
                    <div className="flex flex-col gap-6">
                        {/* User Profile */}
                        <div className="flex items-center gap-3 px-2 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" onClick={() => onNavigate('expert-profile')}>
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSTq-BJohxKyFPQxUkP6AOLOn2sPulM4pS86cq-z8emuRNdMuhxPdfdQPtoU81oMzo2J9FwBAo1rtqlltwiNLnWJe2WO-hZnA_qWUK6uSIN7EO-oX0G15fkacPSBKrqF1LYmrs4Zt_SIST_t-eFgKVgEwk4DCNJuZxDUV96I22qEbtrwR4am4gNR0zyZp-Fnh4Xx-G933WXO11q6dfryl-FOgVmW-2Q-UKWBJRvgmHejSxiHzdVKStThIm6pqC6pMnjDYwGR5tzRQH")' }}></div>
                            <div className="flex flex-col">
                                <h1 className="text-slate-900 dark:text-white text-sm font-bold leading-tight">James Sterling</h1>
                                <p className="text-primary text-xs font-semibold leading-normal uppercase tracking-wider">Tier 5 Affiliate</p>
                            </div>
                        </div>
                        {/* Nav Links */}
                        <nav className="flex flex-col gap-1">
                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-white cursor-pointer">
                                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                                <p className="text-sm font-medium">Dashboard</p>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
                                <span className="material-symbols-outlined text-[20px]">task_alt</span>
                                <p className="text-sm font-medium">Affiliate Tasks</p>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
                                <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                                <p className="text-sm font-medium">Commission Tracker</p>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors" onClick={() => onNavigate('resources')}>
                                <span className="material-symbols-outlined text-[20px]">folder_open</span>
                                <p className="text-sm font-medium">Marketing Resources</p>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
                                <span className="material-symbols-outlined text-[20px]">settings</span>
                                <p className="text-sm font-medium">Settings</p>
                            </div>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                            <p className="text-xs text-primary font-bold mb-2 uppercase tracking-tight">Need Help?</p>
                            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-[18px]">support_agent</span>
                                <p className="text-xs font-medium">Partner Support</p>
                            </div>
                        </div>
                        <button onClick={onLogout} className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">logout</span>
                            <span>Sign Out</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto scroll-smooth bg-background-light dark:bg-background-dark">
                    {/* Mobile Header */}
                    <div className="lg:hidden p-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark sticky top-0 z-10">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">verified_user</span>
                            <span className="font-bold text-slate-900 dark:text-white">Partner Portal</span>
                        </div>
                        <button onClick={onLogout} className="text-slate-500">
                            <span className="material-symbols-outlined">logout</span>
                        </button>
                    </div>

                    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col gap-8">
                        {/* PageHeading */}
                        <div className="flex flex-wrap justify-between items-end gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-black rounded uppercase tracking-widest">Official Portal</span>
                                    <span className="text-slate-400 text-xs font-medium">/ Partner ID: UK-8829-TL</span>
                                </div>
                                <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Affiliate Partner Dashboard</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Welcome back to the UKLtdRegistration Onboarding &amp; Payout Portal 2024.</p>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => onNavigate('super-admin-analytics')} className="flex items-center justify-center rounded-lg h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                    <span className="material-symbols-outlined text-[18px] mr-2">bar_chart</span> Performance Reports
                                </button>
                            </div>
                        </div>

                        {/* Onboarding Progress Section */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                            <h2 className="text-slate-900 dark:text-white text-lg font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">verified</span> Onboarding Progress
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
                                {/* Connecting lines for desktop */}
                                <div className="hidden md:block absolute top-[11px] left-[15%] w-[70%] h-[2px] bg-slate-100 dark:bg-slate-800 z-0"></div>
                                {/* Step 1 */}
                                <div className="flex flex-col items-center text-center z-10">
                                    <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center mb-3 outline outline-4 outline-white dark:outline-slate-900">
                                        <span className="material-symbols-outlined text-[14px]">check</span>
                                    </div>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Contract Signed</p>
                                    <p className="text-slate-400 text-xs mt-1">Completed Oct 12, 2024</p>
                                </div>
                                {/* Step 2 */}
                                <div className="flex flex-col items-center text-center z-10">
                                    <div className="size-6 rounded-full bg-amber-400 text-white flex items-center justify-center mb-3 outline outline-4 outline-white dark:outline-slate-900">
                                        <span className="material-symbols-outlined text-[14px]">sync</span>
                                    </div>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Stripe Connect Linked</p>
                                    <p className="text-amber-500 text-xs font-semibold mt-1">Awaiting Verification</p>
                                </div>
                                {/* Step 3 */}
                                <div className="flex flex-col items-center text-center z-10">
                                    <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center mb-3 outline outline-4 outline-white dark:outline-slate-900">
                                        <span className="material-symbols-outlined text-[14px]">download</span>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-bold">Marketing Kit Downloaded</p>
                                    <p className="text-slate-400 text-xs mt-1">Pending Action</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid / Commission Tracker */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex justify-between items-start">
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Referral Count</p>
                                    <span className="material-symbols-outlined text-primary text-[20px]">groups</span>
                                </div>
                                <p className="text-slate-900 dark:text-white text-3xl font-black leading-tight">142</p>
                                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +12% this month
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                                <div className="flex justify-between items-start">
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Pending Commission</p>
                                    <span className="material-symbols-outlined text-amber-500 text-[20px]">hourglass_empty</span>
                                </div>
                                <p className="text-slate-900 dark:text-white text-3xl font-black leading-tight">£1,240.00</p>
                                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +5.2%
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400/20"></div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex justify-between items-start">
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Total Earned 2024</p>
                                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">payments</span>
                                </div>
                                <p className="text-slate-900 dark:text-white text-3xl font-black leading-tight">£8,450.00</p>
                                <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +22.4% vs 2023
                                </div>
                            </div>
                        </div>

                        {/* Main Grid Layout for Tasks & Payout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Task Management */}
                            <div className="lg:col-span-2 flex flex-col gap-4">
                                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                                        <h3 className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">checklist</span> Affiliate Tasks
                                        </h3>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">4 Active Tasks</span>
                                    </div>
                                    <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
                                        {/* Task Item 1 */}
                                        <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                            <div className="flex gap-4 items-center">
                                                <div className="size-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                                                    <span className="material-symbols-outlined">description</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Publish UKLtdRegistration Review</p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">Status: <span className="text-emerald-500 font-semibold">Live &amp; Verified</span></p>
                                                </div>
                                            </div>
                                            <button className="text-primary text-xs font-bold hover:underline opacity-0 group-hover:opacity-100 transition-opacity">View Details</button>
                                        </div>
                                        {/* Task Item 2 */}
                                        <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                            <div className="flex gap-4 items-center">
                                                <div className="size-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
                                                    <span className="material-symbols-outlined">share</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Share 0800 Number Discount</p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">Status: <span className="text-amber-500 font-semibold">Pending Verification</span></p>
                                                </div>
                                            </div>
                                            <button className="px-3 py-1.5 bg-primary text-white text-[11px] font-bold rounded hover:bg-primary-dark transition-colors">Submit Proof</button>
                                        </div>
                                        {/* Task Item 3 */}
                                        <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                            <div className="flex gap-4 items-center">
                                                <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center">
                                                    <span className="material-symbols-outlined">link</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Embed Referral Banner in Footer</p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">Status: <span className="text-slate-400">Not Started</span></p>
                                                </div>
                                            </div>
                                            <button className="text-primary text-xs font-bold hover:underline">Get Code</button>
                                        </div>
                                    </div>
                                </div>
                                {/* Resource Hub */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 flex flex-col gap-3">
                                        <h4 className="text-primary text-sm font-black uppercase tracking-tight">Your Referral Link</h4>
                                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-2 rounded border border-primary/20">
                                            <code className="text-xs text-slate-600 dark:text-slate-300 truncate font-mono">ukltdregistration.com/ref?id=123-STERLING</code>
                                            <button className="size-8 flex items-center justify-center rounded bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white transition-all text-slate-600 dark:text-slate-300">
                                                <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-slate-900 dark:bg-slate-800 rounded-xl p-5 flex flex-col justify-center text-white relative overflow-hidden">
                                        <div className="z-10">
                                            <h4 className="text-xs font-black uppercase tracking-tight text-primary-300 mb-1">Brand Assets Hub</h4>
                                            <p className="text-sm font-medium mb-3">Download the latest UKLtd 2024 Campaign Kit.</p>
                                            <button className="flex items-center gap-2 text-xs font-bold bg-primary px-3 py-2 rounded-lg hover:bg-primary/80 transition-all">
                                                <span className="material-symbols-outlined text-[16px]">extension</span> Download ZIP (42MB)
                                            </button>
                                        </div>
                                        <div className="absolute -right-4 -bottom-4 opacity-10">
                                            <span className="material-symbols-outlined text-[120px]">brush</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Payout Process & Stripe Widget */}
                            <div className="flex flex-col gap-4">
                                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-full">
                                    <div className="p-6 bg-primary text-white">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="px-2 py-1 bg-white/20 rounded text-[10px] font-black uppercase">Stripe Connect</div>
                                            <span className="material-symbols-outlined text-white/50">verified_user</span>
                                        </div>
                                        <p className="text-xs text-white/70 font-medium">Available Payout Balance</p>
                                        <h3 className="text-3xl font-black mt-1">£1,240.00</h3>
                                        <div className="mt-6 flex flex-col gap-3">
                                            <button className="w-full bg-white text-primary hover:bg-slate-100 transition-colors py-3 rounded-lg text-sm font-black shadow-lg">
                                                Request Payout
                                            </button>
                                            <p className="text-[10px] text-center text-white/60">Payouts processed every 24-48 hours via Stripe.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col gap-4 flex-1">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Scheduled Transfers</p>
                                            <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                                                <div className="flex flex-col">
                                                    <p className="text-xs font-bold text-slate-800 dark:text-white">November 1st, 2024</p>
                                                    <p className="text-[10px] text-slate-500">Auto-recurring</p>
                                                </div>
                                                <p className="text-xs font-black text-slate-900 dark:text-white">£450.00</p>
                                            </div>
                                            <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                                                <div className="flex flex-col">
                                                    <p className="text-xs font-bold text-slate-800 dark:text-white">December 1st, 2024</p>
                                                    <p className="text-[10px] text-slate-500">Auto-recurring</p>
                                                </div>
                                                <p className="text-xs font-black text-slate-900 dark:text-white">£450.00</p>
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                                            <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                            <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tight">System Status: Active</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <footer className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2 grayscale opacity-50">
                                    <div className="h-6 w-px bg-slate-300"></div>
                                    <p className="text-xs font-medium">Managed by <span className="font-bold">BlueOceanHub.info</span></p>
                                </div>
                                <div className="flex items-center gap-2 grayscale opacity-50">
                                    <div className="h-6 w-px bg-slate-300"></div>
                                    <p className="text-xs font-medium">Powered by <span className="font-bold">BookMeThat.com</span></p>
                                </div>
                            </div>
                            <p className="text-[10px] font-medium uppercase tracking-widest">© 2024 UKLtdRegistration - All Rights Reserved</p>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
};
