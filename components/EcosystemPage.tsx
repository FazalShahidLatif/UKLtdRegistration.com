import React from 'react';

export const EcosystemPage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-[#0e151a] dark:text-white transition-colors duration-200 min-h-screen">
            <style>{`
                .connection-line {
                    position: relative;
                }
                .connection-line::after {
                    content: '';
                    position: absolute;
                    background-color: #d1dce6;
                    z-index: 0;
                }
                .revenue-badge {
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                }
            `}</style>
            
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8edf2] dark:border-b-[#2a3540] bg-white dark:bg-[#1a222c] px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={() => onNavigate('dashboard')}>
                        <div className="size-6">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0e151a] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">UK Ltd Registration Portal</h2>
                    </div>
                    <div className="flex items-center gap-9">
                        <a className="text-[#0e151a] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer text-primary border-b-2 border-primary pb-0.5">Ecosystem</a>
                        <a className="text-[#0e151a] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Sitemap</a>
                        <a className="text-[#0e151a] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">User Flows</a>
                        <a className="text-[#0e151a] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer">Revenue</a>
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <label className="flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="text-[#517594] flex border-none bg-[#e8edf2] dark:bg-[#2a3540] items-center justify-center pl-4 rounded-l-lg">
                                <span className="material-symbols-outlined text-xl">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-[#e8edf2] dark:bg-[#2a3540] text-[#0e151a] dark:text-white focus:ring-0 h-full placeholder:text-[#517594] px-4 rounded-r-lg text-sm outline-none" placeholder="Search architecture..." defaultValue=""/>
                        </div>
                    </label>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal">
                        <span className="truncate">Stakeholder View</span>
                    </button>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200" data-alt="User profile avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiOH4omW1Z__awy5JLLwCb6GOjlvLQH9qZJLXdi9jP7xrPHXO_I81XfHcNHyyf-QjvOQ33TC2qdW-CgWXWllNNtZjdUUR9z3GFylkkWzgjhWgtHf5ut1PecovPVdYN6UKWtgFSSOmK5JaowmgiIKpFgT5j0pCtqKhLOYM0eSLgWOk8RLLpqiOV9Ja6sCURfTbTftiX3rJO2I4Hj0bHoY3Xw8sGUVyErsqEgiPniuq45-KWOG9kEhmXNH2eaDQzrWX1v68ZdobuALKC")' }}></div>
                </div>
            </header>
            
            <main className="max-w-[1440px] mx-auto px-10 py-8">
                {/* Page Heading & Breadcrumbs */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <a className="text-[#517594] text-sm font-medium hover:text-primary cursor-pointer" onClick={() => onNavigate('dashboard')}>Dashboard</a>
                        <span className="text-[#517594] text-sm font-medium">/</span>
                        <span className="text-[#0e151a] dark:text-gray-400 text-sm font-medium">Architecture Overview</span>
                    </div>
                    <div className="flex flex-wrap justify-between items-end gap-3">
                        <div className="flex min-w-72 flex-col gap-2">
                            <h1 className="text-[#0e151a] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">System Ecosystem &amp; Sitemap Overview</h1>
                            <p className="text-[#517594] dark:text-gray-400 text-lg font-normal leading-normal max-w-2xl">A high-level architectural visualization of the UK Ltd Registration Portal for stakeholders, demonstrating user flow and revenue generation hubs.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 rounded-lg h-10 px-4 bg-[#e8edf2] dark:bg-[#2a3540] text-[#0e151a] dark:text-white text-sm font-bold hover:bg-gray-200 transition-colors">
                                <span className="material-symbols-outlined text-lg">download</span>
                                <span>Export Diagram</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-12 gap-8">
                    {/* Main Architecture Map */}
                    <div className="col-span-12 lg:col-span-9 flex flex-col gap-10">
                        {/* Section: Acquisition Funnel */}
                        <section className="bg-white dark:bg-[#1a222c] rounded-xl border border-[#e8edf2] dark:border-[#2a3540] p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="material-symbols-outlined text-primary">filter_alt</span>
                                <h2 className="text-xl font-bold">Registration Funnel Visualization</h2>
                            </div>
                            <div className="relative flex justify-between items-start gap-4">
                                {/* Horizontal Timeline Flow */}
                                <div className="absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[#d1dce6] dark:bg-[#2a3540] -z-0"></div>
                                {/* Step 1 */}
                                <div className="relative z-10 flex flex-col items-center text-center w-1/4">
                                    <div className="size-14 rounded-full bg-primary text-white flex items-center justify-center mb-4 border-4 border-white dark:border-[#1a222c]">
                                        <span className="material-symbols-outlined">language</span>
                                    </div>
                                    <h3 className="font-bold text-[#0e151a] dark:text-white">Landing Page</h3>
                                    <p className="text-xs text-[#517594] mt-1">Main Entry Point</p>
                                </div>
                                {/* Step 2 */}
                                <div className="relative z-10 flex flex-col items-center text-center w-1/4">
                                    <div className="size-14 rounded-full bg-primary text-white flex items-center justify-center mb-4 border-4 border-white dark:border-[#1a222c]">
                                        <span className="material-symbols-outlined">person_add</span>
                                    </div>
                                    <h3 className="font-bold text-[#0e151a] dark:text-white">Lead Capture Gate</h3>
                                    <p className="text-xs text-[#517594] mt-1">Funnel Start</p>
                                    {/* Revenue Badge */}
                                    <div className="mt-4 revenue-badge inline-flex items-center gap-1 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                        <span className="material-symbols-outlined text-xs">payments</span>
                                        Lead Value
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="relative z-10 flex flex-col items-center text-center w-1/4">
                                    <div className="size-14 rounded-full bg-primary text-white flex items-center justify-center mb-4 border-4 border-white dark:border-[#1a222c]">
                                        <span className="material-symbols-outlined">psychology</span>
                                    </div>
                                    <h3 className="font-bold text-[#0e151a] dark:text-white">AI Formation Wizard</h3>
                                    <p className="text-xs text-[#517594] mt-1">Data Collection</p>
                                </div>
                                {/* Step 4 */}
                                <div className="relative z-10 flex flex-col items-center text-center w-1/4">
                                    <div className="size-14 rounded-full bg-primary text-white flex items-center justify-center mb-4 border-4 border-white dark:border-[#1a222c]">
                                        <span className="material-symbols-outlined">call_split</span>
                                    </div>
                                    <h3 className="font-bold text-[#0e151a] dark:text-white">Path Segmentation</h3>
                                    <p className="text-xs text-[#517594] mt-1">UK vs International</p>
                                </div>
                            </div>
                        </section>
                        {/* Section: Ecosystem Hubs */}
                        <section>
                            <div className="flex items-center gap-3 mb-6 px-4">
                                <span className="material-symbols-outlined text-primary">hub</span>
                                <h2 className="text-xl font-bold">Central Ecosystem Hubs</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {/* Hub 1: Client Success */}
                                <div className="bg-white dark:bg-[#1a222c] p-6 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                            <span className="material-symbols-outlined size-6">shield_person</span>
                                        </div>
                                        <span className="revenue-badge bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full">ONE-TIME FEES</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Success Hub (Client)</h3>
                                    <p className="text-sm text-[#517594] mb-4">End-to-end company formation tracking and post-registration compliance vault.</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> KYB/KYC Integration</li>
                                        <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Document Repository</li>
                                    </ul>
                                </div>
                                {/* Hub 2: Site Admin */}
                                <div className="bg-white dark:bg-[#1a222c] p-6 rounded-xl border-l-4 border-slate-600 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => onNavigate('admin')}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-slate-700 dark:text-slate-300">
                                            <span className="material-symbols-outlined size-6">settings_applications</span>
                                        </div>
                                        <span className="revenue-badge bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-1 rounded-full">RECURRING SUBS</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Operations Center (Site Admin)</h3>
                                    <p className="text-sm text-[#517594] mb-4">Internal workflow management for verifying applications and handling service desk.</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-primary text-sm">analytics</span> Performance Dashboard</li>
                                        <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-primary text-sm">verified_user</span> Manual KYC Review</li>
                                    </ul>
                                </div>
                                {/* Hub 3: Super Admin */}
                                <div className="bg-white dark:bg-[#1a222c] p-6 rounded-xl border-l-4 border-indigo-600 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg text-indigo-700 dark:text-indigo-400">
                                            <span className="material-symbols-outlined size-6">monitoring</span>
                                        </div>
                                        <span className="revenue-badge bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-full">UPSELLS</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Empire Control (Super Admin)</h3>
                                    <p className="text-sm text-[#517594] mb-4">Global oversight of multi-tenant deployments, revenue metrics, and system-wide health.</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-indigo-500 text-sm">payments</span> Revenue Aggregation</li>
                                        <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-indigo-500 text-sm">settings_suggest</span> Global Config</li>
                                    </ul>
                                </div>
                                {/* Hub 4: Vendor */}
                                <div className="bg-white dark:bg-[#1a222c] p-6 rounded-xl border-l-4 border-emerald-600 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => onNavigate('vendor')}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg text-emerald-700 dark:text-emerald-400">
                                            <span className="material-symbols-outlined size-6">handshake</span>
                                        </div>
                                        <span className="revenue-badge bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full">AFFILIATES</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Project Pipeline (Vendor)</h3>
                                    <p className="text-sm text-[#517594] mb-4">Third-party service fulfillment hub for banking, address services, and tax agents.</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-emerald-500 text-sm">assignment_turned_in</span> Fulfillment Tasks</li>
                                        <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-emerald-500 text-sm">account_balance_wallet</span> Payout Tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Sidebar: Technical Stack */}
                    <aside className="col-span-12 lg:col-span-3 space-y-6">
                        <div className="bg-white dark:bg-[#1a222c] rounded-xl border border-[#e8edf2] dark:border-[#2a3540] p-6 shadow-sm">
                            <h3 className="text-sm font-bold text-[#517594] uppercase tracking-wider mb-6">Technical Stack</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-lg bg-[#e8edf2] dark:bg-[#2a3540] flex items-center justify-center">
                                        <img className="size-6" alt="React 18.2 Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5rJ0-XPNpxrii_x42XaAi1PvnwGT7_rdkfyDXWJHww98wXA3TuLCBVImvP-9yvdx58NuCwvuVH3hX2cD8NTkSrR3nLCwzfudMONpS969qzNuIyLgw5GFyjjwzf3PBPlEed4xRHOS5Pxy4pacb3ECXJBGT3j5mz0MafsYnlTfBZNJMm2YFw7xFzebacbsTY1kzQPMgExgcFlFFIDcRnWbbkgXxevj519GGnI6HZN_gogWaIp9uOdNiXADIGf3nLL3wT2o381B9gWF"/>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">React 18.2</p>
                                        <p className="text-xs text-[#517594]">Frontend UI Layer</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-lg bg-[#e8edf2] dark:bg-[#2a3540] flex items-center justify-center">
                                        <img className="size-6 rounded-md" alt="Next.js Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbIOG8JjOutBA8H_IwpKcYySS_8WMYVOoUhSjxOQE8dE7gsRTfNzW63ouWvORF4IX0mmbLWMFU9MFd3F9zoJgpqysPea2SMRacyGqo02PNXOTYikuJ4mhFbdRpsPRJaOa6YriSRoe_eDfRKl7of9z6ec8BxgKQmL9lMsdraRRO3E4q_kao2nhB2dho66QmQ-2kpqFuTiIK-HGqbgouN9CHr3kPf1szvg6LDuKYPhVcm-Bj35NtCKPly0nRZFcKtnPIFdhAbMje9RIc"/>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Next.js 14</p>
                                        <p className="text-xs text-[#517594]">App Router Architecture</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Stripe Connect</p>
                                        <p className="text-xs text-[#517594]">Multi-party Payments</p>
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-[#e8edf2] dark:border-[#2a3540]">
                                    <h4 className="text-xs font-bold text-[#517594] mb-3">SYSTEM HEALTH</h4>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs">Uptime</span>
                                        <span className="text-xs font-bold text-green-500">99.9%</span>
                                    </div>
                                    <div className="w-full bg-[#e8edf2] dark:bg-[#2a3540] h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-green-500 h-full w-[99.9%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Info Card */}
                        <div className="bg-primary p-6 rounded-xl text-white">
                            <span className="material-symbols-outlined mb-2">info</span>
                            <h3 className="font-bold mb-2">High-Ticket Upsells</h3>
                            <p className="text-sm text-white/80 leading-relaxed">Revenue optimization through automated VAT registration and corporate bank account introductions.</p>
                        </div>
                    </aside>
                </div>
                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-[#e8edf2] dark:border-[#2a3540] flex flex-wrap justify-between items-center text-[#517594] text-sm">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">architecture</span>
                        <span>Architecture by <span className="font-bold text-[#0e151a] dark:text-white">BookMeThat</span></span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>Managed by <span className="font-bold text-primary">BlueOceanHub</span></span>
                        <span>© 2024 UK Ltd Registration Portal</span>
                    </div>
                </footer>
            </main>
        </div>
    );
};