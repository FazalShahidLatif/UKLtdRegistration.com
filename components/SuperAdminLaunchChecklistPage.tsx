
import React from 'react';

export const SuperAdminLaunchChecklistPage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-sans animate-fade-in fixed inset-0 z-50 overflow-y-auto">
            <style>{`
                :root {
                    --checkbox-tick-svg: url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e');
                }
            `}</style>
            {/* Top Navigation Bar */}
            <header className="border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101622] sticky top-0 z-50">
                <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('admin')}>
                        <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                            <svg className="size-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold tracking-tight">UKLtdRegistration 2026</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('admin')}>Dashboard</a>
                        <a className="text-sm font-medium text-primary transition-colors cursor-pointer">Launch Tasks</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('super-admin-analytics')}>Revenue</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('super-admin-security')}>System Health</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined text-xl">notifications</span>
                        </button>
                        <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined text-xl">settings</span>
                        </button>
                        <div className="size-10 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_KjZ8wNFcLEoz6qEuEYHdJ9QALmu51mkMMv_3VSJjnUXj9eelGR5tIMUPzET65mXdv_kOV4Mw9-HABMkAz8q4VatUIb9-2IQElSx0KbxpkttE7vt6ZJmlq3yQ9CSRhmCrLSWSelP8EiklCnx54GNugV56gFkPKTOlV441kL3UIjBKfowKoPUJDDbDHy2v6g4nDflcQ6ig3rsCU4bN1JzTomP_AgOtIdg4_ELuGsETganXbLHIVjPK4lnz38HHMYtdolaoevN6RtBy")' }}></div>
                    </div>
                </div>
            </header>
            <main className="max-w-[1200px] mx-auto px-6 py-8">
                {/* Header & Progress */}
                <div className="mb-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Launch Readiness Checklist</h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Super Admin Operational Dashboard • Q1 2026 Rollout</p>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Last System Sync: 2 mins ago</span>
                        </div>
                    </div>
                    {/* Progress Bar Section */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">rocket_launch</span>
                                <p className="text-base font-semibold">2026 Readiness Progress</p>
                            </div>
                            <p className="text-xl font-bold text-primary">82%</p>
                        </div>
                        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: "82%" }}></div>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-sm">
                            <p className="text-slate-500 dark:text-slate-400">18 of 22 mission-critical tasks completed</p>
                            <div className="flex gap-4">
                                <span className="flex items-center gap-1.5 text-green-500 font-medium">
                                    <span className="size-2 rounded-full bg-green-500"></span>
                                    Operational
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Column 1 & 2: Main Checklist */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Section 1: Pre-Flight Checklist */}
                        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                <h2 className="text-lg font-bold">Pre-Flight Checklist</h2>
                                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">Critical</span>
                            </div>
                            <div className="p-2">
                                <label className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer">
                                    <input defaultChecked className="h-5 w-5 rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" type="checkbox"/>
                                    <div className="flex-1">
                                        <p className="text-base font-medium">API Keys for Companies House 2026 Rotated</p>
                                        <p className="text-xs text-slate-500">Last rotated: Oct 24, 2025</p>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-slate-400">info</span>
                                </label>
                                <label className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer">
                                    <input defaultChecked className="h-5 w-5 rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" type="checkbox"/>
                                    <div className="flex-1">
                                        <p className="text-base font-medium">Stripe Connect 2026 Verification Active</p>
                                        <p className="text-xs text-slate-500">Webhook health: 100%</p>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-slate-400">info</span>
                                </label>
                                <label className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer">
                                    <input className="h-5 w-5 rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" type="checkbox"/>
                                    <div className="flex-1">
                                        <p className="text-base font-medium">Pillar Article SEO Indexing Check</p>
                                        <p className="text-xs text-amber-500 font-medium">Pending: 12 articles awaiting crawl</p>
                                    </div>
                                    <button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors">Trigger Sync</button>
                                </label>
                                <label className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer">
                                    <input defaultChecked className="h-5 w-5 rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" type="checkbox"/>
                                    <div className="flex-1">
                                        <p className="text-base font-medium">2026 Compliance Calendar Logic Verified</p>
                                        <p className="text-xs text-slate-500">Automated filing schedules synced</p>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-slate-400">info</span>
                                </label>
                            </div>
                        </section>
                        {/* Section 3: Revenue Stream Verification */}
                        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                                <h2 className="text-lg font-bold">2026 Revenue Stream Verification</h2>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* UK Residents */}
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">home</span>
                                            UK Residents
                                        </h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                                                <span className="text-sm font-medium">Basic Formation</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-sm">£149</span>
                                                    <span className="size-2 rounded-full bg-green-500"></span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                                                <span className="text-sm font-medium">Premium Compliance</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-sm">£299</span>
                                                    <span className="size-2 rounded-full bg-green-500"></span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                                                <span className="text-sm font-medium">Pro Enterprise</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-sm">£599</span>
                                                    <span className="size-2 rounded-full bg-green-500"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* International Founders */}
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">public</span>
                                            International Founders
                                        </h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                                                <span className="text-sm font-medium">Global Launch</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-sm">$499</span>
                                                    <span className="size-2 rounded-full bg-green-500"></span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                                                <span className="text-sm font-medium">International Pro</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-sm">$899</span>
                                                    <span className="size-2 rounded-full bg-green-500"></span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                                                <span className="text-sm font-medium">VIP Concierge</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-sm">$1,999</span>
                                                    <span className="size-2 rounded-full bg-green-500"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Column 3: Global Integration Status */}
                    <aside className="space-y-8">
                        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                <h2 className="text-lg font-bold">Integration Status</h2>
                                <button className="material-symbols-outlined text-slate-400 text-lg hover:text-primary transition-colors">sync</button>
                            </div>
                            <div className="p-6 space-y-6">
                                {/* Integration Item 1 */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold">BlueOceanHub.info</span>
                                        <span className="flex items-center gap-1.5 text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded uppercase">
                                            <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                            Online
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed">Strategy Engine v4.2 indexing real-time 2026 market shifts.</p>
                                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                                        <span>Latency: 42ms</span>
                                        <span>Uptime: 99.99%</span>
                                    </div>
                                </div>
                                <hr className="border-slate-100 dark:border-slate-800"/>
                                {/* Integration Item 2 */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold">BookMeThat.com</span>
                                        <span className="flex items-center gap-1.5 text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded uppercase">
                                            <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                            Online
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed">Booking API connected. 2026 consultation slots active.</p>
                                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                                        <span>Latency: 18ms</span>
                                        <span>Uptime: 100%</span>
                                    </div>
                                </div>
                                <hr className="border-slate-100 dark:border-slate-800"/>
                                {/* Integration Item 3 */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold">UK Companies House</span>
                                        <span className="flex items-center gap-1.5 text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded uppercase">
                                            <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                            Online
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed">Official API Endpoint: XML/JSON 2026 standard.</p>
                                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                                        <span>Latency: 112ms</span>
                                        <span>Uptime: 99.8%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800/30">
                                <button className="w-full py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold rounded-lg hover:border-primary hover:text-primary transition-all">
                                    VIEW FULL LOGS
                                </button>
                            </div>
                        </section>
                        <section className="rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 p-6">
                            <h3 className="text-sm font-bold mb-2">Launch Countdown</h3>
                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                                    <div className="text-xl font-bold">12</div>
                                    <div className="text-[10px] uppercase text-slate-400">Days</div>
                                </div>
                                <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                                    <div className="text-xl font-bold">08</div>
                                    <div className="text-[10px] uppercase text-slate-400">Hours</div>
                                </div>
                                <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                                    <div className="text-xl font-bold">44</div>
                                    <div className="text-[10px] uppercase text-slate-400">Mins</div>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>
            </main>
            <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-10 bg-white dark:bg-[#101622]">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 opacity-50 grayscale">
                            <img alt="BlueOceanHub Logo" className="h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNntVi4aAaQRA5Ge3kD9MZxD_7cTsmXFCHICrIHFjSc0k2ozkesGmfEU9ANYtQBrhPmgQdNG4biFhgpPWYQeyA7lRdtabNOdkEO5rZ6viUQL-4qQFag1F5C9taT2SKd9ScH6zB33uik5sOGPDrlqjH62Ku7wyL9PTt0V8HEZTzW4VV-D50NQwT1jo26HuxgdFr1GvpXKRgkMW0b2Y8ncK2B9QkO7qnGENoEkDdmYorAkcPGeCF9XgrTzMU9gX5JHU5POCngp-OINOS"/>
                            <img alt="BookMeThat Logo" className="h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBszp0jn16ZzKlNPxvDrYxUTUslL8Cct6lOIE3aeDnaVVMrLvuuOCukvks2zvY09D_ssAakpCiEWeqbZZ6gDdheT8lci3VLK8AIksZqxB6HCYQ0BbsMnXO5aC0kS7OjI7g5RakAG3XHCZJc77gHpVX6s174JWW1YjXhecntrcTZGUQDTe3Ck2waZ5ep1Mt9p9EEb2FaAgxum7VW82bsbmzEVPPk4cAaYypOkLjJsbhjUlE6Tqmo8FLMDLfCtEXeAjE0qK_ZMoMFSd_m"/>
                        </div>
                        <p className="text-sm text-slate-500">
                            Managed by <a className="text-primary font-medium" href="https://blueoceanhub.info">BlueOceanHub.info</a> | Powered by <a className="text-primary font-medium" href="https://bookmethat.com">BookMeThat.com</a>
                        </p>
                        <div className="flex gap-6 text-xs text-slate-400">
                            <a className="hover:text-primary transition-colors" href="#">System Status</a>
                            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-primary transition-colors" href="#">Operational Manual</a>
                            <a className="hover:text-primary transition-colors" href="#">2026 Audit Trail</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
