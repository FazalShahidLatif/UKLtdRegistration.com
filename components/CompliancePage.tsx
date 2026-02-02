
import React from 'react';

export const CompliancePage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#0e151a] dark:text-white min-h-screen flex flex-col font-sans animate-fade-in">
            {/* Top Navigation Bar (Specific to Compliance View as per design) */}
            <header className="bg-white dark:bg-background-dark border-b border-[#e8edf2] dark:border-gray-800 px-6 lg:px-10 py-3 sticky top-0 z-50">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('landing')}>
                            <div className="size-8 bg-primary text-white flex items-center justify-center rounded">
                                <span className="material-symbols-outlined">account_balance</span>
                            </div>
                            <h2 className="text-[#0e151a] dark:text-white text-lg font-bold leading-tight tracking-tight">UK Ltd Registration Portal</h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-6">
                            <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors cursor-pointer" onClick={() => onNavigate('dashboard')}>Success Hub</a>
                            <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors cursor-pointer">Documents</a>
                            <a className="text-primary border-b-2 border-primary py-4 text-sm font-bold cursor-pointer">Compliance</a>
                            <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors cursor-pointer">Rewards</a>
                            <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors cursor-pointer">Settings</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="hidden sm:flex items-center bg-[#f0f2f5] dark:bg-gray-800 rounded-lg px-3 py-1.5 w-64">
                            <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-gray-400 outline-none" placeholder="Search filings..." type="text"/>
                        </label>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-gray-500 hover:text-primary cursor-pointer">notifications</span>
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border-2 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeYmJmPt4P6zK91-lpvVZc4FnY_NfS8woDGxuyo4GGCaojHr-1nSNilKs49Vy7ycmfXZ24iqBD84rKpg8dZ9aD2-WRlh9aerPZOYSciymGvgkOR-Tn2TFXiR7iIHMVoAcySEe5LHcZxMVRlVpg3W3kMbjN-aLMFXnBA6KEfptG5NJZAm0-6OnfQhAmDpDMgpFfKhQUQnzwwCoSRVFkcDWT8PCaKn7xOluhU6chris9isXvF_IvXQQFKCLHwwznqYbGhMxL663DJJMc")' }}></div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col xl:flex-row max-w-[1440px] mx-auto w-full px-4 lg:px-10 py-6 gap-6">
                {/* Sidebar Navigation */}
                <aside className="hidden xl:flex flex-col w-64 shrink-0 gap-6">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-[#e8edf2] dark:border-gray-800">
                        <h1 className="text-[#0e151a] dark:text-white text-base font-bold mb-1">Founder Hub</h1>
                        <p className="text-[#517594] text-xs font-normal mb-6">Managing: ACME HOLDINGS LTD</p>
                        <div className="flex flex-col gap-1">
                            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-background-light dark:hover:bg-gray-800 rounded-lg transition-all cursor-pointer" onClick={() => onNavigate('dashboard')}>
                                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-primary bg-primary/10 rounded-lg font-bold cursor-pointer">
                                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>event_note</span>
                                <span className="text-sm">Compliance Calendar</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-background-light dark:hover:bg-gray-800 rounded-lg transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-[20px]">description</span>
                                <span className="text-sm font-medium">Company Docs</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-background-light dark:hover:bg-gray-800 rounded-lg transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-[20px]">history_edu</span>
                                <span className="text-sm font-medium">Filing History</span>
                            </a>
                        </div>
                    </div>
                    {/* Urgency Widget */}
                    <div className="bg-primary text-white rounded-xl p-5 shadow-lg relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-xs uppercase tracking-widest font-bold text-white/70 mb-2">Next Critical Deadline</p>
                            <h3 className="text-lg font-bold leading-tight mb-4">Confirmation Statement</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-3xl font-black">12</span>
                                <span className="text-sm font-medium text-white/80">Days Remaining</span>
                            </div>
                            <button className="w-full bg-white text-primary text-sm font-bold py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
                                Handle for Me
                            </button>
                        </div>
                        {/* Abstract Pattern background */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    </div>
                    {/* Compliance Health Score */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-[#e8edf2] dark:border-gray-800">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Compliance Health</h3>
                        <div className="flex flex-col items-center">
                            <div className="relative size-32 flex items-center justify-center">
                                <svg className="size-full rotate-[-90deg]" viewBox="0 0 100 100">
                                    <circle className="text-gray-100 dark:text-gray-800" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                                    <circle className="text-primary" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="37.68" strokeLinecap="round" strokeWidth="8"></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-bold">85%</span>
                                    <span className="text-[10px] text-gray-500 font-medium">HEALTHY</span>
                                </div>
                            </div>
                            <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed">Your company is in good standing. 1 minor action required this month.</p>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col gap-6 min-w-0">
                    {/* Filter Bar & Chips */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 text-xs font-bold">
                                All Filings
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-primary transition-all">
                                <div className="size-2 rounded-full bg-[#1d70b9]"></div>
                                Confirmation Statement
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-primary transition-all">
                                <div className="size-2 rounded-full bg-[#f47738]"></div>
                                Annual Accounts
                            </button>
                            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-primary transition-all">
                                <div className="size-2 rounded-full bg-[#00703c]"></div>
                                VAT Return
                            </button>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700 w-fit">
                            <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-bold">Month</button>
                            <button className="px-3 py-1.5 text-xs font-medium text-gray-500">Year</button>
                        </div>
                    </div>

                    {/* Interactive Calendar */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl border border-[#e8edf2] dark:border-gray-800 overflow-hidden shadow-sm flex flex-col h-full min-h-[700px]">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8edf2] dark:border-gray-800">
                            <div className="flex items-center gap-4">
                                <h2 className="text-xl font-bold">October 2023</h2>
                                <div className="flex gap-1">
                                    <button className="size-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <span className="material-symbols-outlined text-gray-500">chevron_left</span>
                                    </button>
                                    <button className="size-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <span className="material-symbols-outlined text-gray-500">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            <button className="text-sm font-bold text-primary hover:underline">Today</button>
                        </div>
                        {/* Calendar Grid */}
                        <div className="flex-1 grid grid-cols-7 border-b border-[#e8edf2] dark:border-gray-800">
                            {/* Day Headers */}
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className={`py-3 text-center ${day !== 'Sat' ? 'border-r border-[#e8edf2] dark:border-gray-800' : ''} text-xs font-bold text-gray-400 uppercase tracking-widest`}>{day}</div>
                            ))}
                            
                            {/* Row 1 */}
                            {[24, 25, 26, 27, 28, 29, 30].map((day, i) => (
                                <div key={`prev-${day}`} className={`min-h-[120px] p-2 border-t ${i !== 6 ? 'border-r' : ''} border-[#e8edf2] dark:border-gray-800 text-gray-300`}>{day}</div>
                            ))}

                            {/* Row 2 */}
                            {[1, 2, 3, 4, 5, 6, 7].map((day, i) => (
                                <div key={day} className={`min-h-[120px] p-2 border-t ${i !== 6 ? 'border-r' : ''} border-[#e8edf2] dark:border-gray-800 font-bold`}>
                                    <span className="mb-1 block">{day}</span>
                                    {day === 3 && (
                                        <div className="bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                            VAT Return Filed
                                        </div>
                                    )}
                                    {day === 5 && (
                                        <div className="bg-primary/10 border-l-4 border-primary p-2 rounded-r-lg shadow-sm">
                                            <p className="text-[10px] font-black text-primary leading-none mb-1">DUE TODAY</p>
                                            <p className="text-[11px] font-bold text-gray-800 dark:text-gray-100">Corp Tax Payment</p>
                                            <div className="flex gap-1 mt-2">
                                                <button className="bg-primary text-white text-[9px] px-2 py-1 rounded font-bold hover:bg-primary-dark">Pay Now</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Row 3 */}
                            {[8, 9, 10, 11, 12, 13, 14].map((day, i) => (
                                <div key={day} className={`min-h-[120px] p-2 border-t ${i !== 6 ? 'border-r' : ''} border-[#e8edf2] dark:border-gray-800 font-bold`}>{day}</div>
                            ))}

                            {/* Row 4 */}
                            {[15, 16, 17, 18, 19, 20, 21].map((day, i) => (
                                <div key={day} className={`min-h-[120px] p-2 border-t ${i !== 6 ? 'border-r' : ''} border-[#e8edf2] dark:border-gray-800 font-bold`}>
                                    <span className="mb-1 block">{day}</span>
                                    {day === 21 && (
                                        <div className="bg-[#fef9c3] dark:bg-yellow-900/30 border-l-4 border-[#f47738] p-2 rounded-r-lg shadow-md scale-105 origin-top-right relative z-10">
                                            <p className="text-[10px] font-black text-[#f47738] leading-none mb-1 uppercase tracking-tighter">Action Required</p>
                                            <p className="text-[11px] font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight">Confirmation Statement</p>
                                            <div className="flex flex-col gap-1.5">
                                                <button className="w-full bg-primary text-white text-[10px] py-1.5 rounded font-bold hover:bg-blue-700">Handle for Me</button>
                                                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-[10px] py-1.5 rounded font-bold hover:bg-gray-300 dark:hover:bg-gray-600">File Now</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Row 5 */}
                            {[22, 23, 24, 25, 26, 27, 28].map((day, i) => (
                                <div key={day} className={`min-h-[120px] p-2 border-t ${i !== 6 ? 'border-r' : ''} border-[#e8edf2] dark:border-gray-800 font-bold`}>{day}</div>
                            ))}
                        </div>
                    </div>
                    {/* Mobile Only Action Call */}
                    <div className="xl:hidden bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-bold">Current Standing</h4>
                                <p className="text-xs text-gray-500">85% Compliance Health</p>
                            </div>
                            <button className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold">View Roadmap</button>
                        </div>
                    </div>
                </div>

                {/* Right Side Stats / Roadmap */}
                <aside className="hidden lg:flex flex-col w-72 shrink-0 gap-6">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-[#e8edf2] dark:border-gray-800">
                        <h3 className="text-sm font-bold mb-6">Statutory Roadmap</h3>
                        <div className="relative flex flex-col gap-8">
                            {/* Vertical Line */}
                            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-100 dark:bg-gray-800"></div>
                            {/* History Step */}
                            <div className="relative flex gap-4">
                                <div className="size-6 rounded-full bg-green-600 flex items-center justify-center text-white z-10 ring-4 ring-white dark:ring-gray-900">
                                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900 dark:text-white">Incorporation Filing</p>
                                    <p className="text-[10px] text-gray-400">Sep 15, 2023 • Completed</p>
                                </div>
                            </div>
                            <div className="relative flex gap-4">
                                <div className="size-6 rounded-full bg-green-600 flex items-center justify-center text-white z-10 ring-4 ring-white dark:ring-gray-900">
                                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900 dark:text-white">VAT Registration</p>
                                    <p className="text-[10px] text-gray-400">Sep 20, 2023 • Completed</p>
                                </div>
                            </div>
                            {/* Current Step */}
                            <div className="relative flex gap-4">
                                <div className="size-6 rounded-full bg-primary flex items-center justify-center text-white z-10 ring-4 ring-white dark:ring-gray-900">
                                    <span className="material-symbols-outlined text-sm font-bold">pending</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-primary">Confirmation Statement</p>
                                    <p className="text-[10px] text-primary/70">Due Oct 21, 2023</p>
                                </div>
                            </div>
                            {/* Future Step */}
                            <div className="relative flex gap-4 opacity-50">
                                <div className="size-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 z-10 ring-4 ring-white dark:ring-gray-900">
                                    <span className="material-symbols-outlined text-sm font-bold">schedule</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900 dark:text-white">Annual Accounts</p>
                                    <p className="text-[10px] text-gray-400">Due Dec 15, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Secondary CTA Card */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-dashed border-gray-300 dark:border-gray-700">
                        <span className="material-symbols-outlined text-primary mb-2">shield</span>
                        <h4 className="text-sm font-bold mb-2 leading-tight">Never miss a filing again</h4>
                        <p className="text-xs text-gray-500 mb-4 leading-relaxed">Upgrade to Full Compliance Management and we'll handle all HMRC and Companies House filings for you.</p>
                        <button className="w-full py-2 border-2 border-primary text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                            Explore Automated Filing
                        </button>
                    </div>
                </aside>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-background-dark border-t border-[#e8edf2] dark:border-gray-800 py-6 px-10">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <p className="text-xs text-gray-400">Powered by <span className="font-bold text-gray-600 dark:text-gray-300">BookMeThat</span></p>
                        <div className="w-px h-3 bg-gray-200"></div>
                        <p className="text-xs text-gray-400">Managed by <span className="font-bold text-gray-600 dark:text-gray-300">BlueOceanHub</span></p>
                    </div>
                    <div className="flex gap-6">
                        <a className="text-xs text-gray-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="text-xs text-gray-400 hover:text-primary transition-colors" href="#">Terms of Service</a>
                        <a className="text-xs text-gray-400 hover:text-primary transition-colors" href="#">Help Center</a>
                    </div>
                    <p className="text-xs text-gray-400">© 2026 UK Ltd Registration Portal. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};
