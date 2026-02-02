
import React from 'react';

export const AdminDashboard = ({ onExit, onNavigate }: { onExit: () => void, onNavigate: (view: string) => void }) => {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-sans animate-fade-in fixed inset-0 z-50">
            <style>{`
                .active-nav {
                    background-color: #222f49;
                    border-left: 3px solid #0d59f2;
                    color: white;
                }
                .skeleton-shimmer {
                    background: linear-gradient(90deg, #1e293b 25%, #2d3e5a 50%, #1e293b 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                }
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
            {/* Sidebar Navigation */}
            <aside className="w-64 flex flex-col bg-background-light dark:bg-[#101623] border-r border-slate-200 dark:border-[#222f49] shrink-0">
                <div className="p-6 flex flex-col h-full">
                    {/* Branding */}
                    <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={onExit}>
                        <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">account_balance</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-base font-bold leading-tight">UK Ltd Portal</h1>
                            <p className="text-slate-500 dark:text-[#90a4cb] text-xs font-medium">Operations Center</p>
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1 flex-1">
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg active-nav cursor-pointer">
                            <span className="material-symbols-outlined text-primary">analytics</span>
                            <span className="text-sm font-medium">Formation Queue</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-[#222f49] transition-colors cursor-pointer" onClick={() => onNavigate('admin-refunds')}>
                            <span className="material-symbols-outlined text-slate-500 dark:text-[#90a4cb]">payments</span>
                            <span className="text-sm font-medium">Financials</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-[#222f49] transition-colors cursor-pointer" onClick={() => onNavigate('super-admin-analytics')}>
                            <span className="material-symbols-outlined text-slate-500 dark:text-[#90a4cb]">public</span>
                            <span className="text-sm font-medium">Global Analytics</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-[#222f49] transition-colors cursor-pointer" onClick={() => onNavigate('super-admin-partner-strategy')}>
                            <span className="material-symbols-outlined text-slate-500 dark:text-[#90a4cb]">handshake</span>
                            <span className="text-sm font-medium">Partner Strategy</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-[#222f49] transition-colors cursor-pointer" onClick={() => onNavigate('super-admin-launch-checklist')}>
                            <span className="material-symbols-outlined text-slate-500 dark:text-[#90a4cb]">rocket_launch</span>
                            <span className="text-sm font-medium">Launch Checklist</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-[#222f49] transition-colors cursor-pointer" onClick={() => onNavigate('admin-help-desk')}>
                            <span className="material-symbols-outlined text-slate-500 dark:text-[#90a4cb]">support_agent</span>
                            <span className="text-sm font-medium">Support Desk</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-[#222f49] transition-colors cursor-pointer" onClick={() => onNavigate('super-admin-security')}>
                            <span className="material-symbols-outlined text-slate-500 dark:text-[#90a4cb]">admin_panel_settings</span>
                            <span className="text-sm font-medium">Security Portal</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-[#222f49] transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-slate-500 dark:text-[#90a4cb]">group</span>
                            <span className="text-sm font-medium">User Management</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-[#222f49] transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-slate-500 dark:text-[#90a4cb]">storefront</span>
                            <span className="text-sm font-medium">Marketplace</span>
                        </a>
                        <div className="my-4 border-t border-slate-200 dark:border-[#222f49]"></div>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-[#222f49] transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-slate-500 dark:text-[#90a4cb]">settings</span>
                            <span className="text-sm font-medium">Settings</span>
                        </a>
                    </nav>
                    {/* Support Badge */}
                    <div className="mt-auto p-4 bg-slate-100 dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-[#314368]">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#90a4cb]">HM Government Certified</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">Authorized Companies House E-Filing Partner #9420-UK</p>
                    </div>
                </div>
            </aside>
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                {/* Top Navigation Bar */}
                <header className="flex items-center justify-between px-8 py-4 border-b border-slate-200 dark:border-[#222f49] bg-background-light dark:bg-[#101623] sticky top-0 z-10">
                    <div className="flex items-center gap-6 flex-1">
                        <h2 className="text-lg font-bold tracking-tight">Admin Operations Dashboard</h2>
                        <div className="relative w-full max-w-md">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                            <input className="w-full bg-slate-100 dark:bg-[#222f49] border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white outline-none" placeholder="Search companies, directors, or IDs..." type="text"/>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-sm font-bold text-white hover:bg-primary/90 transition-all">
                            <span className="material-symbols-outlined text-base">add_circle</span>
                            Add New Task
                        </button>
                        <div className="h-8 w-px bg-slate-200 dark:border-[#222f49]"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="text-sm font-bold leading-none">James Harrington</p>
                                <p className="text-[10px] text-slate-500 dark:text-[#90a4cb] font-medium">Head of Operations</p>
                            </div>
                            <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30">
                                <img alt="Admin Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx0WeT9hni8g7qEcSP1gF5qgkEkMCTDCrMNCCVbuexUuUtEUgYR-BJEx0F1VFkuNMZ0oVXdMlIFayjxhXs3dXtIveihnMvgh0vvOo9GMUgBjqqJUp1feQkraK3mr_xVJkglYQeUXYJpU16WXavdexjxP8Bczy9xHA99toLT8MptzvS6kH-rzgSiecJChOyRagdqpPekYr8TOvfykrW0ajuWu--BNHd-kdrWQ1jCdIG1fedkGYjZKVJcKMLvzWCQfYpcjHbWo63OVSs"/>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="p-8 space-y-8">
                    {/* Page Heading & Quick Stats */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <div>
                            <h3 className="text-3xl font-black tracking-tight mb-1 text-slate-900 dark:text-white">Operational Overview</h3>
                            <p className="text-slate-500 dark:text-[#90a4cb]">Monitoring real-time formations and ecosystem health.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex min-w-[180px] flex-col gap-1 rounded-xl p-4 border border-slate-200 dark:border-[#314368] bg-white dark:bg-[#1e293b]/30">
                                <p className="text-slate-500 dark:text-[#90a4cb] text-xs font-bold uppercase tracking-wider">Stripe Connect</p>
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <p className="text-xl font-bold text-slate-900 dark:text-white">Operational</p>
                                </div>
                            </div>
                            <div className="flex min-w-[180px] flex-col gap-1 rounded-xl p-4 border border-slate-200 dark:border-[#314368] bg-white dark:bg-[#1e293b]/30">
                                <p className="text-slate-500 dark:text-[#90a4cb] text-xs font-bold uppercase tracking-wider">Pending Refunds</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">£1,240 <span className="text-sm font-normal text-amber-500 ml-1">(12)</span></p>
                            </div>
                            <div className="flex min-w-[180px] flex-col gap-1 rounded-xl p-4 border border-slate-200 dark:border-[#314368] bg-white dark:bg-[#1e293b]/30">
                                <p className="text-slate-500 dark:text-[#90a4cb] text-xs font-bold uppercase tracking-wider">Net Profit (MTD)</p>
                                <p className="text-xl font-bold text-emerald-400">£12,450</p>
                            </div>
                        </div>
                    </div>
                    {/* Financial Ledger & Vendor Management Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* High Density Financial Chart */}
                        <div className="lg:col-span-2 bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-[#314368] p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Financial Ledger Infographic</h4>
                                    <p className="text-sm text-slate-500 dark:text-[#90a4cb]">Gross Revenue vs. Net Profit (Real-time)</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1 text-xs font-bold rounded bg-primary text-white">30D</button>
                                    <button className="px-3 py-1 text-xs font-bold rounded bg-slate-100 dark:bg-[#222f49] text-slate-600 dark:text-slate-300">90D</button>
                                    <button className="px-3 py-1 text-xs font-bold rounded bg-slate-100 dark:bg-[#222f49] text-slate-600 dark:text-slate-300">FY24</button>
                                </div>
                            </div>
                            <div className="h-64 relative group">
                                <svg className="w-full h-full opacity-30 blur-[2px]" viewBox="0 0 800 240">
                                    <path d="M0,200 Q100,120 200,150 T400,80 T600,100 T800,40" fill="none" stroke="#0d59f2" strokeWidth="3"></path>
                                    <path d="M0,220 Q100,150 200,170 T400,120 T600,130 T800,90" fill="none" stroke="#0bda5e" strokeDasharray="4" strokeWidth="2"></path>
                                </svg>
                                <div className="absolute inset-0 flex flex-col justify-center items-center gap-4">
                                    <div className="w-3/4 h-4 rounded-full skeleton-shimmer"></div>
                                    <div className="w-1/2 h-4 rounded-full skeleton-shimmer"></div>
                                    <div className="w-2/3 h-4 rounded-full skeleton-shimmer"></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-100 dark:border-[#314368]">
                                <div className="flex items-center gap-2">
                                    <span className="size-3 rounded-full bg-primary"></span>
                                    <span className="text-xs font-bold text-slate-500 dark:text-[#90a4cb] uppercase">Gross Revenue</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-3 rounded-full bg-emerald-500"></span>
                                    <span className="text-xs font-bold text-slate-500 dark:text-[#90a4cb] uppercase">Net Profit</span>
                                </div>
                            </div>
                        </div>
                        {/* Vendor Management Section */}
                        <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-[#314368] p-6 flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Pro/Vendor Network</h4>
                                <button className="text-primary text-xs font-bold hover:underline">View All</button>
                            </div>
                            <div className="space-y-4 flex-1">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#222f49]">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-lg bg-slate-300 dark:bg-slate-700 overflow-hidden">
                                            <img alt="Vendor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6hOK0go0kduH_v9pNN2nuL5_lBAM_tE75Rkn-o51svnYWg1PNDZXpdZbOYGXJHCYeQ05zpk8MvT7ZW2apdD3ILyshVgj0ZqrF7ctGUj6IsurI5_WpYkS0c_MCLGZYez4nb4qn7vOTTgCBfjmFFUTSzMeVSd5eH1i2EmhRbS51cQ3SZ9PsvqCtAFYZZvpoNgK-Zuf9iaKcahQ2KZ_aZg-GXxC9rloBEweM9FeBJGQWMonMlC7VEfyNEifQNqwVkD3ii1l6HHpVWv9"/>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">Alistair Davies</p>
                                            <p className="text-[10px] text-slate-500 dark:text-[#90a4cb] uppercase font-bold tracking-tighter">Senior Solicitor</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-primary">8 Active</p>
                                        <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-1.5 py-0.5 rounded font-bold">Online</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#222f49]">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-lg bg-slate-300 dark:bg-slate-700 overflow-hidden">
                                            <img alt="Vendor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIV2XLZnYcuqDqOJn5fSPRAjlA0NKIgbbqeqkbMdtQ9LzQo-pQw5ciK93hb05sPwn-cDwtUwCSS9l57tBKDhmi8PkbiVbE4GLW4bfzuMhpLYJNxySE6gDweX-8P2D6IxDIs1M4TGiSAa8-BYYdthJ9gvd9nD-SaCahVobZ-M2SOOfoH5JevkQOsCw-QiLd3llNeYNwaO4F37KMM15mcGOKSagIZ-v87BOwUvFW-SQirNPNfMeiq3u1R-4DbXgek0rLeXMvHW2qaXxV"/>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">Sarah Reed</p>
                                            <p className="text-[10px] text-slate-500 dark:text-[#90a4cb] uppercase font-bold tracking-tighter">Lead Developer</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-primary">3 Active</p>
                                        <span className="text-[10px] bg-slate-500/20 text-slate-400 px-1.5 py-0.5 rounded font-bold">Away</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-2 bg-slate-100 dark:bg-[#222f49] hover:bg-slate-200 dark:hover:bg-[#314368] text-slate-700 dark:text-white text-sm font-bold rounded-lg transition-colors">
                                Manage Network
                            </button>
                        </div>
                    </div>
                    {/* Real-Time Formation Queue Table */}
                    <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-[#314368] overflow-hidden">
                        <div className="p-6 border-b border-slate-200 dark:border-[#314368]">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Formation Queue</h4>
                                    <p className="text-sm text-slate-500 dark:text-[#90a4cb]">Live Companies House API Sync</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-[#222f49] rounded text-xs font-bold text-slate-700 dark:text-white">
                                        <span className="material-symbols-outlined text-sm">download</span> Export
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 p-4 bg-slate-50 dark:bg-[#151e2e] rounded-lg border border-slate-200 dark:border-[#314368]">
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-400">Filing Status</label>
                                    <select className="bg-white dark:bg-[#222f49] border-slate-200 dark:border-[#314368] rounded-md text-xs py-1.5 focus:ring-primary min-w-[140px] text-slate-900 dark:text-white">
                                        <option>All Statuses</option>
                                        <option>Processing</option>
                                        <option>Success</option>
                                        <option>Rejected</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-400">Residency</label>
                                    <select className="bg-white dark:bg-[#222f49] border-slate-200 dark:border-[#314368] rounded-md text-xs py-1.5 focus:ring-primary min-w-[140px] text-slate-900 dark:text-white">
                                        <option>UK Residents</option>
                                        <option>Non-Residents</option>
                                        <option>EEA Only</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
                                    <label className="text-[10px] font-bold uppercase text-slate-400">Search Officer/ID</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
                                        <input className="w-full bg-white dark:bg-[#222f49] border-slate-200 dark:border-[#314368] rounded-md text-xs py-1.5 pl-8 focus:ring-primary text-slate-900 dark:text-white" placeholder="Filter current view..." type="text"/>
                                    </div>
                                </div>
                                <div className="self-end pb-0.5">
                                    <button className="text-primary text-xs font-bold px-3 py-1.5 hover:bg-primary/10 rounded-md transition-all">Clear Filters</button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-[#151e2e]">
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#90a4cb]">Company Name</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#90a4cb]">Submission ID</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#90a4cb]">Timestamp</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#90a4cb]">Officer</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#90a4cb]">Status</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#90a4cb] text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-[#314368]">
                                    <tr className="hover:bg-slate-50 dark:hover:bg-[#222f49]/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-sm text-slate-900 dark:text-white">QuantuMedics Ltd</td>
                                        <td className="px-6 py-4 font-mono text-xs text-slate-400">#UK-884210</td>
                                        <td className="px-6 py-4 text-xs text-slate-500 dark:text-[#90a4cb]">2 Mins Ago</td>
                                        <td className="px-6 py-4 text-xs font-medium text-slate-700 dark:text-slate-300">Robert Sterling</td>
                                        <td className="px-6 py-4">
                                            <span className="flex items-center gap-1.5 w-fit bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                <span className="size-1.5 rounded-full bg-primary animate-pulse"></span> Processing
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="material-symbols-outlined text-slate-400 hover:text-white transition-colors">more_horiz</button>
                                        </td>
                                    </tr>
                                    {/* Skeleton Rows */}
                                    <tr className="border-b border-slate-100 dark:border-[#314368]">
                                        <td className="px-6 py-4"><div className="h-4 w-32 rounded skeleton-shimmer"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 w-20 rounded skeleton-shimmer"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 w-16 rounded skeleton-shimmer"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 w-24 rounded skeleton-shimmer"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 w-24 rounded-full skeleton-shimmer"></div></td>
                                        <td className="px-6 py-4 text-right"><div className="h-4 w-4 rounded skeleton-shimmer ml-auto"></div></td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-[#314368]">
                                        <td className="px-6 py-4"><div className="h-4 w-40 rounded skeleton-shimmer"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 w-20 rounded skeleton-shimmer"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 w-16 rounded skeleton-shimmer"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 w-24 rounded skeleton-shimmer"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 w-24 rounded-full skeleton-shimmer"></div></td>
                                        <td className="px-6 py-4 text-right"><div className="h-4 w-4 rounded skeleton-shimmer ml-auto"></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 bg-slate-50 dark:bg-[#151e2e] flex items-center justify-between border-t border-slate-200 dark:border-[#314368]">
                            <p className="text-xs text-slate-500 dark:text-[#90a4cb]">Showing 1 actual + 2 fetching of 128 submissions</p>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 bg-slate-200 dark:bg-[#222f49] text-xs font-bold rounded disabled:opacity-50 text-slate-600 dark:text-white" disabled>Previous</button>
                                <button className="px-3 py-1 bg-slate-200 dark:bg-[#222f49] text-xs font-bold rounded hover:bg-primary hover:text-white transition-colors text-slate-600 dark:text-white">Next</button>
                            </div>
                        </div>
                    </div>
                    {/* New Task Validation Protocol */}
                    <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-[#314368] p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-amber-500">info</span>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">New Task Validation Protocol</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold uppercase text-slate-400">SIC Industry Code (Strict Validation)</label>
                                <div className="relative">
                                    <input className="w-full bg-emerald-500/5 border-emerald-500/30 text-emerald-500 rounded-lg py-2 px-3 text-sm focus:ring-emerald-500" readOnly type="text" value="62010"/>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 text-sm">check_circle</span>
                                </div>
                                <p className="text-[10px] text-emerald-500 font-medium">Validated: Computer programming activities</p>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-bold uppercase text-slate-400">Director ID Number</label>
                                <div className="relative">
                                    <input className="w-full bg-red-500/5 border-red-500/30 text-red-500 rounded-lg py-2 px-3 text-sm focus:ring-red-500" placeholder="Enter ID..." type="text"/>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-sm">error</span>
                                </div>
                                <p className="text-[10px] text-red-500 font-medium">Required: 8-digit identification required</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <footer className="mt-auto px-8 py-6 border-t border-slate-200 dark:border-[#222f49] flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 grayscale opacity-50">
                            <span className="material-symbols-outlined text-lg">shield</span>
                            <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-900 dark:text-white">Secure Operations</span>
                        </div>
                        <p className="text-[10px] text-slate-500 dark:text-[#90a4cb]">© 2024 UK Ltd Registration Portal. All rights reserved. E-Filing System v4.2.1-PRO</p>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-[#90a4cb]">
                        <a className="hover:text-primary" href="#">Audit Log</a>
                        <a className="hover:text-primary" href="#">API Status</a>
                        <a className="hover:text-primary" href="#">Privacy Policy</a>
                    </div>
                </footer>
            </main>
        </div>
    );
};
