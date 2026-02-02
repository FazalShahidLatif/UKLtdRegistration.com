
import React from 'react';

export const SuperAdminAnalyticsPage = ({ onNavigate, onExit }: { onNavigate: (view: string) => void, onExit: () => void }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 min-h-screen animate-fade-in fixed inset-0 z-50 overflow-y-auto">
            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .glass-panel { background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(8px); border: 1px solid rgba(0, 0, 0, 0.05); }
                .dark .glass-panel { background: rgba(18, 18, 32, 0.5); border: 1px solid rgba(255, 255, 255, 0.05); }
            `}</style>
            
            {/* Navigation Header */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="px-6 h-16 flex items-center justify-between max-w-[1600px] mx-auto">
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('admin')}>
                        <div className="bg-primary p-2 rounded-lg">
                            <span className="material-symbols-outlined text-white">analytics</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold tracking-tight leading-tight">UK LTD REGISTRATION</h1>
                            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Super Admin Portal</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                            <button className="px-3 py-1.5 text-xs font-medium rounded bg-white dark:bg-primary text-primary dark:text-white shadow-sm transition-all">Real-time</button>
                            <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">24h</button>
                            <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">7d</button>
                            <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">30d</button>
                        </div>
                        <div className="h-8 w-px bg-slate-200 dark:border-slate-800"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold">System Admin</p>
                                <p className="text-[10px] text-green-500 flex items-center justify-end gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Live Node: Lon-04
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-primary/20 flex items-center justify-center cursor-pointer" onClick={onExit}>
                                <span className="material-symbols-outlined text-primary">account_circle</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="p-6 max-w-[1600px] mx-auto grid grid-cols-12 gap-6">
                {/* Top Metrics Row */}
                <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="glass-panel p-5 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Top Revenue Region</p>
                            <span className="material-symbols-outlined text-primary text-sm">public</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <h3 className="text-2xl font-bold">UK Central</h3>
                            <span className="text-green-500 text-xs font-bold mb-1 flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-xs">trending_up</span> 14%
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-primary mt-1">£4,281,090</p>
                        <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 mt-4 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[75%]"></div>
                        </div>
                    </div>
                    <div className="glass-panel p-5 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Growth Language</p>
                            <span className="material-symbols-outlined text-[#1d70b8] text-sm">translate</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <h3 className="text-2xl font-bold">Arabic</h3>
                            <span className="text-green-500 text-xs font-bold mb-1 flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-xs">trending_up</span> 22%
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-[#1d70b8] mt-1">1,402 <span className="text-sm font-normal text-slate-500">Units</span></p>
                        <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 mt-4 rounded-full overflow-hidden">
                            <div className="h-full bg-[#1d70b8] w-[42%]"></div>
                        </div>
                    </div>
                    <div className="glass-panel p-5 rounded-xl border-l-4 border-l-primary">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Total Formations</p>
                            <span className="material-symbols-outlined text-primary text-sm">business_center</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <h3 className="text-2xl font-bold">12,402</h3>
                            <span className="text-slate-400 text-xs font-bold mb-1">Target: 15k</span>
                        </div>
                        <p className="text-sm text-slate-500 mt-1 italic">Average conversion 4.8%</p>
                        <div className="flex gap-1 mt-4">
                            <div className="h-1 flex-1 bg-primary rounded-full"></div>
                            <div className="h-1 flex-1 bg-primary rounded-full"></div>
                            <div className="h-1 flex-1 bg-primary/30 rounded-full"></div>
                            <div className="h-1 flex-1 bg-primary/30 rounded-full"></div>
                        </div>
                    </div>
                    <div className="glass-panel p-5 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Global Traffic</p>
                            <span className="material-symbols-outlined text-slate-400 text-sm">sensors</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <h3 className="text-2xl font-bold">842.1k</h3>
                            <span className="text-red-500 text-xs font-bold mb-1 flex items-center gap-0.5">
                                <span className="material-symbols-outlined text-xs">trending_down</span> 2%
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 mt-1 italic">Unique visitors today</p>
                        <div className="flex items-center gap-1 mt-4">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                </div>

                {/* Main Dashboard Area */}
                <div className="col-span-12 lg:col-span-9 space-y-6">
                    {/* Global Heatmap Section */}
                    <div className="glass-panel rounded-xl overflow-hidden min-h-[500px] relative flex flex-col">
                        <div className="p-6 border-b border-white/5 flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-bold">Regional Conversion Heatmap</h2>
                                <p className="text-sm text-slate-500">Global formation density by auto-detected locale</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-white/5 rounded text-slate-500 hover:text-slate-700 dark:hover:text-white"><span className="material-symbols-outlined text-sm">fullscreen</span></button>
                                <button className="p-2 hover:bg-white/5 rounded text-slate-500 hover:text-slate-700 dark:hover:text-white"><span className="material-symbols-outlined text-sm">more_vert</span></button>
                            </div>
                        </div>
                        <div className="flex-grow relative bg-slate-900 overflow-hidden">
                            <img 
                                alt="Global Data Visualisation Map" 
                                className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp9A0H_QefhuQZNkhmNG8Y0-Fk6vUiwd7y2q37HKILiHkXLHi9yyGIRAZ808zy4O7-X6jZHroFwzsSVFW0W83_ttp3kVVKV0LB_sY72lllZ4b1X08Hf1294vPaNuv29bNeGQI35yFCApPmtY5Tj7USWIHj9KI0gigV267rQ8NajBUGcQojiHPGp5bTdeA6WBvPht0VW5VDySGPaHVKJESGM7-C9FUBvZjgJEB63D1TyqsVozo44GOH5OHKkdSafTlHQYJK0FHNZBAe"
                            />
                            {/* Pulsing Data Points */}
                            <div className="absolute top-[35%] left-[45%] w-8 h-8">
                                <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping"></div>
                                <div className="absolute inset-2 bg-primary rounded-full border-2 border-white/20 shadow-lg shadow-primary"></div>
                                <div className="absolute top-10 left-0 bg-black/80 p-2 rounded text-[10px] whitespace-nowrap backdrop-blur-md border border-white/10 z-10">
                                    <span className="font-bold text-primary">UK Region</span><br/>4,203 Formations
                                </div>
                            </div>
                            <div className="absolute top-[42%] left-[22%] w-6 h-6">
                                <div className="absolute inset-0 bg-[#1d70b8]/40 rounded-full animate-ping"></div>
                                <div className="absolute inset-1.5 bg-[#1d70b8] rounded-full border-2 border-white/20"></div>
                                <div className="absolute top-8 left-0 bg-black/80 p-2 rounded text-[10px] whitespace-nowrap backdrop-blur-md border border-white/10 z-10">
                                    <span className="font-bold text-[#1d70b8]">USA (Delaware Path)</span><br/>1,180 Formations
                                </div>
                            </div>
                            <div className="absolute top-[55%] left-[68%] w-5 h-5">
                                <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping"></div>
                                <div className="absolute inset-1 bg-primary rounded-full border-2 border-white/20"></div>
                                <div className="absolute top-8 left-0 bg-black/80 p-2 rounded text-[10px] whitespace-nowrap backdrop-blur-md border border-white/10 z-10">
                                    <span className="font-bold text-primary">Middle East</span><br/>2,890 Formations
                                </div>
                            </div>
                            {/* Legend Overlay */}
                            <div className="absolute bottom-6 left-6 p-4 glass-panel rounded-lg max-w-xs">
                                <h4 className="text-xs font-bold uppercase mb-3 text-slate-100">Regional Activity</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-xs text-slate-200">
                                        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> UK Mainland</span>
                                        <span className="font-mono">82.1%</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-slate-200">
                                        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#1d70b8]"></span> North America</span>
                                        <span className="font-mono">12.4%</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-slate-200">
                                        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-400"></span> South Asia</span>
                                        <span className="font-mono">5.5%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Language Conversion Chart */}
                        <div className="glass-panel p-6 rounded-xl">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Language Conversion Rates</h2>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="font-semibold">English (UK/US)</span>
                                        <span className="font-mono text-primary font-bold">7.2%</span>
                                    </div>
                                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                                        <div className="h-full bg-primary w-[72%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="font-semibold">Urdu (South Asia)</span>
                                        <span className="font-mono text-[#1d70b8] font-bold">4.8%</span>
                                    </div>
                                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                                        <div className="h-full bg-[#1d70b8] w-[48%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="font-semibold">Arabic (GCC)</span>
                                        <span className="font-mono text-indigo-400 font-bold">5.1%</span>
                                    </div>
                                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                                        <div className="h-full bg-indigo-400 w-[51%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="font-semibold">Mandarin</span>
                                        <span className="font-mono text-slate-400 font-bold">2.3%</span>
                                    </div>
                                    <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                                        <div className="h-full bg-slate-600 w-[23%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Traffic Source Data Grid */}
                        <div className="glass-panel p-6 rounded-xl flex flex-col">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">SEO Traffic Breakdown</h2>
                            <div className="overflow-x-auto flex-grow">
                                <table className="w-full text-left">
                                    <thead className="text-[10px] text-slate-500 uppercase border-b border-white/5">
                                        <tr>
                                            <th className="pb-2 font-bold">Resource Article</th>
                                            <th className="pb-2 font-bold">Locale</th>
                                            <th className="pb-2 font-bold text-right">Conv.</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs">
                                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-3 font-medium">Non-Resident Banking Guide</td>
                                            <td className="py-3"><span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[10px]">EN-UK</span></td>
                                            <td className="py-3 text-right font-mono">12.4%</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-3 font-medium">Dubai-to-UK Export Laws</td>
                                            <td className="py-3"><span className="px-2 py-0.5 rounded bg-[#1d70b8]/20 text-[#1d70b8] text-[10px]">AR-AE</span></td>
                                            <td className="py-3 text-right font-mono">9.8%</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-3 font-medium">Tech Startup Visa 2024</td>
                                            <td className="py-3"><span className="px-2 py-0.5 rounded bg-indigo-400/20 text-indigo-400 text-[10px]">UR-PK</span></td>
                                            <td className="py-3 text-right font-mono">5.2%</td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="py-3 font-medium">E-commerce VAT Guide</td>
                                            <td className="py-3"><span className="px-2 py-0.5 rounded bg-slate-400/20 text-slate-400 text-[10px]">ZH-CN</span></td>
                                            <td className="py-3 text-right font-mono">2.1%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className="w-full py-2 mt-4 text-xs font-bold text-primary hover:bg-primary/10 rounded transition-colors uppercase border border-primary/20">View Full Report</button>
                        </div>
                    </div>
                </div>

                {/* Strategic Insights Sidebar */}
                <aside className="col-span-12 lg:col-span-3 space-y-6">
                    <div className="glass-panel p-6 rounded-xl h-full border-t-4 border-t-gov-blue">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-[#1d70b8]">auto_awesome</span>
                            <h2 className="text-lg font-bold">AI Strategic Insights</h2>
                        </div>
                        <div className="space-y-4">
                            {/* Recommendation Card 1 */}
                            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm mt-1">lightbulb</span>
                                    <div>
                                        <h4 className="text-sm font-bold text-primary">Expansion Opportunity</h4>
                                        <p className="text-xs mt-1 leading-relaxed text-slate-600 dark:text-slate-400">
                                            Arabic traffic is up <span className="text-primary font-bold">15%</span> this week. Consider a localized <span className="italic font-medium">"US Identity Path"</span> campaign for Middle East users.
                                        </p>
                                    </div>
                                </div>
                                <button className="w-full mt-3 py-1.5 text-[10px] font-bold bg-primary text-white rounded uppercase hover:bg-primary/90 transition-colors">Launch Campaign</button>
                            </div>
                            {/* Recommendation Card 2 */}
                            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-yellow-500 text-sm mt-1">warning</span>
                                    <div>
                                        <h4 className="text-sm font-bold text-yellow-600 dark:text-yellow-500">Drop-off Alert</h4>
                                        <p className="text-xs mt-1 leading-relaxed text-slate-600 dark:text-slate-400">
                                            Urdu checkout page latency is <span className="text-red-500 font-bold">+2.4s</span> above baseline. Potential revenue risk: <span className="font-bold text-slate-900 dark:text-slate-200">£12k/day</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Recommendation Card 3 */}
                            <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-white/5">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-400 text-sm mt-1">insights</span>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200">SEO Efficiency</h4>
                                        <p className="text-xs mt-1 leading-relaxed text-slate-600 dark:text-slate-400">
                                            "VAT Compliance" articles in Mandarin have a 0% bounce rate but low CTA click-through. Add localized "Fast-Track" buttons.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5">
                            <h4 className="text-[10px] font-bold uppercase text-slate-500 mb-4 tracking-widest">Active Alerts</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    <span className="text-xs font-medium">Linguistic API Status: Stable</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                    <span className="text-xs font-medium">Geo-IP Database: Updated</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
                                    <span className="text-xs font-medium">Compliance Feed: Syncing...</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <div className="p-4 rounded-lg bg-[#1d70b8]/5 border border-[#1d70b8]/10 flex flex-col items-center text-center">
                                <img 
                                    alt="Data visualization preview" 
                                    className="w-full h-24 object-cover rounded-md mb-4 grayscale contrast-125" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5bx8txvqTWxLo-VAFYoOCktc-90ivSH7h2QrpDj6E3LgB_YTb3yoDybdaAnSe3P3h45C_yaIwrjyabykjorBRuoZG0cNz__h2lkVFXpdJwm769M3kBtLZqy3RrIsgBiwo-E6d-jAyNhM7kTJZVzZ3HHxhQirVUY5BI-Ln8RUBtlSmcRx5eGz6Jy5oHtQupRJxtFsyB9OLZmowibGjqGiIT2LR9LDpljvhdmhRc5SuPQfahFkNTum3Atmida3n4ZzkeQ7Q7eqKKQjR"
                                />
                                <h4 className="text-xs font-bold">Generate Monthly PDF</h4>
                                <p className="text-[10px] text-slate-500 mt-1">Full regional breakdown for stakeholders</p>
                                <button className="mt-3 px-6 py-2 bg-[#1d70b8] text-white rounded text-xs font-bold hover:bg-[#1d70b8]/80 transition-all">Download</button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Footer / Status Bar */}
                <footer className="col-span-12 py-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-[10px] text-slate-500 font-semibold uppercase tracking-widest">
                    <div className="flex gap-6">
                        <span className="hover:text-primary cursor-pointer">© 2024 UK Ltd Global Registry</span>
                        <span className="hover:text-primary cursor-pointer">Terms of Service</span>
                        <span className="hover:text-primary cursor-pointer">Privacy Shield Enabled</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Global Edge Nodes Active
                        </div>
                        <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>
                        <span>Server v2.4.12-pro</span>
                    </div>
                </footer>
            </main>
        </div>
    );
};
