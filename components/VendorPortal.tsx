import React from 'react';

export const VendorPortal = ({ onExit }: { onExit: () => void }) => {
    return (
        <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans fixed inset-0 z-50 overflow-y-auto">
            {/* Sidebar Navigation */}
            <aside className="w-72 border-r border-border-dark bg-background-light dark:bg-background-dark flex flex-col fixed h-full shrink-0 hidden lg:flex">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-10 cursor-pointer" onClick={onExit}>
                        <div className="bg-primary size-10 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">domain</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white text-base font-bold leading-none">BlueOceanHub</h1>
                            <p className="text-slate-500 dark:text-[#90a4cb] text-xs font-medium mt-1">Vendor Portal</p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-2">
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20" href="#">
                            <span className="material-symbols-outlined">dashboard</span>
                            <p className="text-sm font-semibold">Active Projects</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 dark:text-[#90a4cb] hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
                            <span className="material-symbols-outlined">history</span>
                            <p className="text-sm font-medium">History</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 dark:text-[#90a4cb] hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
                            <span className="material-symbols-outlined">payments</span>
                            <p className="text-sm font-medium">Payouts</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 dark:text-[#90a4cb] hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" href="#">
                            <span className="material-symbols-outlined">person</span>
                            <p className="text-sm font-medium">Profile Settings</p>
                        </a>
                    </nav>
                </div>
                <div className="mt-auto p-6">
                    <div className="bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-border-dark p-4 rounded-xl">
                        <p className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-2">Resource Center</p>
                        <p className="text-slate-500 dark:text-[#90a4cb] text-xs mb-3">UK Compliance &amp; Vendor Guidelines</p>
                        <button className="w-full py-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-900 dark:text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">menu_book</span>
                            Read Docs
                        </button>
                    </div>
                </div>
            </aside>
            {/* Main Content Area */}
            <main className="flex-1 lg:ml-72 bg-white dark:bg-[#101622] min-h-screen">
                {/* Mobile Header (Visible only on small screens) */}
                <div className="lg:hidden p-4 flex justify-between items-center bg-background-light dark:bg-background-dark border-b border-border-dark">
                    <div className="flex items-center gap-2" onClick={onExit}>
                         <div className="bg-primary size-8 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-sm">domain</span>
                        </div>
                        <span className="font-bold text-slate-900 dark:text-white">Vendor Portal</span>
                    </div>
                    <button className="text-slate-500 dark:text-[#90a4cb]">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

                {/* Top Header & Stats */}
                <header className="p-8 pb-4 bg-background-light dark:bg-[#101622]">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                        <div>
                            <h2 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">Welcome back, Lexington Legal</h2>
                            <p className="text-slate-500 dark:text-[#90a4cb] text-base mt-1">You have 4 projects requiring attention today.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-500 dark:text-[#90a4cb]">notifications</span>
                            <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-border-dark bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4RLGm6Q1aowbzW4c3gfDd2NGYL-K-3zmE_hSipvCO5k7cud75R7kJ-pQXvWuj0N6o-jqumsv23wQVgW9dman47-U3uf_kMstk_ZOC8w99uDvzHDXKmruZ-JQyFdxBuz0ksl-ZzlAkixIQewPBaXYZHqku6Ghu2yA5QuIrk1Y_t4-Kn4xb44UQb77u-qM87aDY7v31uKtyzlzp7b2OtFVhae4f57ctCcUt61incmwXKvZ7di91_Xj54bhsgNfqGfoJHcEgDFLwEfZx")' }}></div>
                        </div>
                    </div>
                    {/* Stats Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-border-dark shadow-sm">
                            <div className="flex justify-between">
                                <p className="text-slate-500 dark:text-[#90a4cb] text-sm font-medium">Total Earnings</p>
                                <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                            </div>
                            <p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">£12,450.00</p>
                            <p className="text-[#0bda5e] text-xs font-medium">+12.5% from last month</p>
                        </div>
                        <div className="flex flex-col gap-2 rounded-xl p-6 bg-primary dark:bg-slate-800/50 border border-primary dark:border-border-dark relative overflow-hidden shadow-lg shadow-primary/20 dark:shadow-none">
                            <div className="flex justify-between relative z-10">
                                <p className="text-white dark:text-[#90a4cb] text-sm font-medium">Available for Withdrawal</p>
                                <div className="flex items-center gap-1 bg-white/20 dark:bg-white/10 px-2 py-0.5 rounded text-[10px] text-white font-bold uppercase">
                                    <span className="material-symbols-outlined text-[12px]">account_balance_wallet</span>
                                    Stripe
                                </div>
                            </div>
                            <p className="text-white tracking-tight text-3xl font-bold relative z-10">£2,105.00</p>
                            <div className="mt-2 flex items-center gap-4 relative z-10">
                                <button className="flex-1 bg-white text-primary dark:bg-primary dark:text-white hover:bg-slate-100 dark:hover:bg-primary/90 py-2 px-4 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all">
                                    <span className="material-symbols-outlined text-sm">arrow_upward</span>
                                    Withdraw Now
                                </button>
                            </div>
                             {/* Decorative background for light mode primary card */}
                             <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 dark:from-slate-800/50 dark:to-slate-800/50 -z-0"></div>
                        </div>
                        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-border-dark shadow-sm">
                            <div className="flex justify-between">
                                <p className="text-slate-500 dark:text-[#90a4cb] text-sm font-medium">Payout History</p>
                                <span className="material-symbols-outlined text-slate-400 dark:text-[#90a4cb] text-sm">receipt_long</span>
                            </div>
                            <div className="mt-1 space-y-2">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-500 dark:text-[#90a4cb]">24 Oct, 2023</span>
                                    <span className="text-slate-900 dark:text-white font-bold">£840.00</span>
                                </div>
                                <div className="flex justify-between items-center text-xs border-t border-slate-100 dark:border-border-dark pt-2">
                                    <span className="text-slate-500 dark:text-[#90a4cb]">12 Oct, 2023</span>
                                    <span className="text-slate-900 dark:text-white font-bold">£1,200.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Project Pipeline (Kanban) */}
                <section className="px-8 py-4 bg-background-light dark:bg-[#101622]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Project Pipeline</h3>
                        <div className="flex bg-slate-200 dark:bg-slate-800 rounded-lg p-1">
                            <button className="px-4 py-1.5 text-xs font-bold bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-md shadow-sm">Board View</button>
                            <button className="px-4 py-1.5 text-xs font-bold text-slate-500 dark:text-[#90a4cb] hover:text-slate-900 dark:hover:text-white">List View</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
                        {/* Column: In Progress */}
                        <div className="flex flex-col bg-slate-100 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-border-dark p-4">
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div className="flex items-center gap-2">
                                    <div className="size-2 rounded-full bg-blue-500"></div>
                                    <span className="text-sm font-bold text-slate-700 dark:text-white uppercase tracking-wider">In Progress</span>
                                    <span className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-[#90a4cb] px-2 py-0.5 rounded-full">2</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-400 dark:text-[#90a4cb] cursor-pointer">more_horiz</span>
                            </div>
                            <div className="space-y-4 custom-scrollbar overflow-y-auto pr-1">
                                {/* Card 1 */}
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-border-dark hover:border-primary/50 transition-all cursor-pointer group shadow-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded font-bold uppercase tracking-tight">Articles of Assoc</span>
                                        <span className="text-[10px] text-slate-500 dark:text-[#90a4cb] font-medium">Due in 2d</span>
                                    </div>
                                    <h4 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Drafting for 'NovaGenix Ltd'</h4>
                                    <p className="text-slate-500 dark:text-[#90a4cb] text-xs line-clamp-2 mb-3">Standard UK limited company incorporation docs for high-tech startup...</p>
                                    <div className="flex justify-between items-center border-t border-slate-100 dark:border-border-dark pt-3">
                                        <div className="flex -space-x-2">
                                            <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2rbPEss4vwV4jCXC1z666vP5Ki6_iDgebsY-NC0LkdRjw9mBaM6ECQoHWuk90q_pSax5kEjwb8QtDnZCjfdkYPe0eHb1EqhfpdmlQDwoLiXf06c8g5wf-Qq4IThuTu8Oad6oxtJBlqG6Kd2qsQb_nJnaTnha0AurJoY4ZaQRy3qCLtzNUFREI9PQXrLwZIIV8pVosRSjREs9z3IKfDAkoKfDsWJBVAbt31N69OQ6zq83NVB8gljWfgl1KInGhMOTnUuAPwd5yDqbp")' }}></div>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 dark:text-[#90a4cb] group-hover:text-primary text-lg">arrow_forward</span>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-border-dark hover:border-primary/50 transition-all cursor-pointer group shadow-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] bg-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded font-bold uppercase tracking-tight">Identity Setup</span>
                                        <span className="text-[10px] text-slate-500 dark:text-[#90a4cb] font-medium">Due in 5d</span>
                                    </div>
                                    <h4 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Web Portal for 'EcoSteam UK'</h4>
                                    <p className="text-slate-500 dark:text-[#90a4cb] text-xs line-clamp-2 mb-3">Domain registration and secure AWS landing page setup...</p>
                                    <div className="flex justify-between items-center border-t border-slate-100 dark:border-border-dark pt-3">
                                        <div className="flex -space-x-2">
                                            <div className="size-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDevWjz2yn6sZfRzVEoqKrln8mEMpVylDcqRQgd8A2hJVhutgUl_2mWkR6XdyGD2mt8St0yjIpLI5zsk7WySoQp5f4AKoVzgOIW2EMFps6WnLNI8xYxvisgAjWPjgQR9OoDEi1Ym0NJ2X5Q2d1tvTP2tec61n699jMdY782U2V8snoyLk9bHOLPsvYvVC9adIdka3YGQL6IxD_mgpvuSmeeYwzScgrskOL36TeK9CA6ezdb5h8E5r0vHqXzJIUZ7cU-6RbGA1XoxPR7")' }}></div>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 dark:text-[#90a4cb] group-hover:text-primary text-lg">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Column: Review */}
                        <div className="flex flex-col bg-slate-100 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-border-dark p-4">
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div className="flex items-center gap-2">
                                    <div className="size-2 rounded-full bg-amber-500"></div>
                                    <span className="text-sm font-bold text-slate-700 dark:text-white uppercase tracking-wider">Under Review</span>
                                    <span className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-[#90a4cb] px-2 py-0.5 rounded-full">1</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-400 dark:text-[#90a4cb] cursor-pointer">more_horiz</span>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-border-dark hover:border-amber-500/50 transition-all cursor-pointer shadow-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] bg-amber-500/20 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded font-bold uppercase tracking-tight">Compliance</span>
                                        <span className="text-[10px] text-slate-500 dark:text-[#90a4cb] font-medium">Pending Portal Admins</span>
                                    </div>
                                    <h4 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">KYC Check: 'GreenField Partners'</h4>
                                    <p className="text-slate-500 dark:text-[#90a4cb] text-xs line-clamp-2 mb-3">Waiting for Companies House approval on director verification...</p>
                                    <div className="flex justify-between items-center border-t border-slate-100 dark:border-border-dark pt-3">
                                        <span className="text-[10px] italic text-slate-500 dark:text-[#90a4cb]">Submitted 12h ago</span>
                                        <span className="material-symbols-outlined text-amber-500 text-lg">schedule</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Column: Completed */}
                        <div className="flex flex-col bg-slate-100 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-border-dark p-4">
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div className="flex items-center gap-2">
                                    <div className="size-2 rounded-full bg-emerald-500"></div>
                                    <span className="text-sm font-bold text-slate-700 dark:text-white uppercase tracking-wider">Completed</span>
                                    <span className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-[#90a4cb] px-2 py-0.5 rounded-full">1</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-400 dark:text-[#90a4cb] cursor-pointer">more_horiz</span>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white/50 dark:bg-slate-800/80 p-4 rounded-xl border border-emerald-500/30">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold uppercase tracking-tight">Payout Ready</span>
                                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">£450.00</span>
                                    </div>
                                    <h4 className="text-slate-500 dark:text-slate-400 text-sm font-semibold mb-1 line-through">Legal Drafting for 'SkyBound'</h4>
                                    <p className="text-slate-500 dark:text-[#90a4cb] text-xs mb-3">Project finalized and approved by client.</p>
                                    <div className="flex justify-between items-center border-t border-slate-200 dark:border-border-dark/50 pt-3">
                                        <span className="text-[10px] text-slate-500 dark:text-[#90a4cb]">Archived Oct 28</span>
                                        <span className="material-symbols-outlined text-emerald-500 text-lg">check_circle</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="p-8 mt-12 border-t border-border-dark flex flex-col md:flex-row items-center justify-between gap-4 bg-background-light dark:bg-[#101622]">
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-[#90a4cb]">
                        <span>© 2023 Managed by BlueOceanHub</span>
                        <span className="size-1 rounded-full bg-slate-400 dark:bg-slate-700"></span>
                        <a className="hover:text-primary dark:hover:text-white transition-colors" href="#">Technical Support</a>
                        <span className="size-1 rounded-full bg-slate-400 dark:bg-slate-700"></span>
                        <a className="hover:text-primary dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#90a4cb]">
                        <span className="flex items-center gap-1">
                            <span className="size-2 rounded-full bg-emerald-500"></span>
                            API Status: Normal
                        </span>
                    </div>
                </footer>
            </main>
        </div>
    );
};