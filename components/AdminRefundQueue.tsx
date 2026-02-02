
import React from 'react';

export const AdminRefundQueue = ({ onNavigate, onExit }: { onNavigate: (view: string) => void, onExit: () => void }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#0d121c] dark:text-white transition-colors duration-200 font-sans animate-fade-in fixed inset-0 z-50 overflow-y-auto">
            {/* TopNavBar */}
            <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-[#e7ebf4] dark:border-gray-800 px-4 md:px-10 py-3 flex items-center justify-between whitespace-nowrap">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={() => onNavigate('landing')}>
                        <div className="size-8">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[#0d121c] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">UK Ltd Registration Portal</h2>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Admin Suite</span>
                        </div>
                    </div>
                    <nav className="hidden lg:flex items-center gap-9">
                        <a className="text-[#0d121c] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('admin')}>Dashboard</a>
                        <a className="text-primary text-sm font-bold border-b-2 border-primary py-1 cursor-pointer">Marketplace</a>
                        <a className="text-[#0d121c] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors cursor-pointer">Financials</a>
                        <a className="text-[#0d121c] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors cursor-pointer">Audit Log</a>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-4 items-center">
                    <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden border border-[#e7ebf4] dark:border-gray-700 bg-white dark:bg-gray-800">
                            <div className="text-[#49659c] dark:text-gray-400 flex items-center justify-center pl-4">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-sm placeholder:text-[#49659c] px-3 outline-none" placeholder="Search Transaction ID..." defaultValue=""/>
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#e7ebf4] dark:bg-gray-800 text-[#0d121c] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#e7ebf4] dark:bg-gray-800 text-[#0d121c] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                    </div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfc8ayWDHYAj8BW0hFFMCc4atij0LmLHh7tp4bQT-uQw8kV0uJIVQdQyzcH4dBdp498HRM5ZG2Rkf_ZleD-mLcDpBkeObZ-yi66157L1-_JPJZERixE9Ujh0caxVfB9CnwYhTvoVxpUNDw9z9zz_Ks-fvgBgryB6iYFiclnjiZe0LKY6dRN4ZsZmVDkOsOtYjieTEvM2iMZB80gNitdQbhLg4UoiRaWtOfTYjSfwHY2RXjC6vgh78tId7moLdErtWOJt4qR1ASCNy_")' }}></div>
                </div>
            </header>
            <main className="flex-1 px-4 md:px-20 lg:px-40 py-8 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
                {/* PageHeading */}
                <div className="flex flex-wrap justify-between items-end gap-4 px-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[#0d121c] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Marketplace Refund &amp; Credit Note Queue</h1>
                        <div className="flex items-center gap-2">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            <p className="text-[#49659c] dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Real-time Stripe API Sync Active</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-gray-800 border border-[#ced7e8] dark:border-gray-700 text-[#0d121c] dark:text-white text-sm font-bold hover:bg-gray-50 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">history</span>
                            <span>Audit Trail</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-blue-700 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            <span>Export CSV</span>
                        </button>
                    </div>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800 border border-[#ced7e8] dark:border-gray-700 shadow-sm">
                        <p className="text-[#49659c] dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Pending Refund Volume</p>
                        <p className="text-[#0d121c] dark:text-white tracking-tight text-3xl font-black">£12,450.00</p>
                        <div className="flex items-center gap-1 mt-1 text-red-500">
                            <span className="material-symbols-outlined text-[16px] font-bold">trending_up</span>
                            <p className="text-sm font-bold">+12.4% vs last week</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800 border border-[#ced7e8] dark:border-gray-700 shadow-sm">
                        <p className="text-[#49659c] dark:text-gray-400 text-sm font-bold uppercase tracking-wider">Total Credit Notes Issued</p>
                        <p className="text-green-600 dark:text-green-400 tracking-tight text-3xl font-black">£8,210.00</p>
                        <div className="flex items-center gap-1 mt-1 text-green-500">
                            <span className="material-symbols-outlined text-[16px] font-bold">check_circle</span>
                            <p className="text-sm font-bold">42 Requests Settled</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-primary dark:bg-primary/90 text-white shadow-lg shadow-primary/20">
                        <p className="text-white/80 text-sm font-bold uppercase tracking-wider">Net Impact on Profit</p>
                        <p className="tracking-tight text-3xl font-black">-£4,240.00</p>
                        <div className="flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-[16px] font-bold">info</span>
                            <p className="text-sm font-medium text-white/90">Calculated on Net Revenue</p>
                        </div>
                    </div>
                </div>
                {/* Filters Section */}
                <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-[#ced7e8] dark:border-gray-700 mx-4 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-[#ced7e8] dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                        <div className="flex flex-wrap gap-2 items-center">
                            <div className="flex items-center gap-2 bg-[#e7ebf4] dark:bg-gray-700 px-3 py-1.5 rounded-lg border border-[#ced7e8] dark:border-gray-600">
                                <span className="material-symbols-outlined text-[18px] text-[#49659c] dark:text-gray-400">calendar_today</span>
                                <span className="text-sm font-bold text-[#0d121c] dark:text-white">Oct 1, 2023 - Oct 31, 2023</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#e7ebf4] dark:bg-gray-700 px-3 py-1.5 rounded-lg border border-[#ced7e8] dark:border-gray-600">
                                <span className="text-sm font-medium text-[#49659c] dark:text-gray-400">Status:</span>
                                <span className="text-sm font-bold text-[#0d121c] dark:text-white">Pending</span>
                                <span className="material-symbols-outlined text-[18px]">expand_more</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#e7ebf4] dark:bg-gray-700 px-3 py-1.5 rounded-lg border border-[#ced7e8] dark:border-gray-600">
                                <span className="text-sm font-medium text-[#49659c] dark:text-gray-400">Vendor:</span>
                                <span className="text-sm font-bold text-[#0d121c] dark:text-white">All Marketplace</span>
                                <span className="material-symbols-outlined text-[18px]">expand_more</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-[#49659c] dark:text-gray-300 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">tune</span>
                            </button>
                            <button className="p-2 text-[#49659c] dark:text-gray-300 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">refresh</span>
                            </button>
                        </div>
                    </div>
                    {/* Data Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-gray-900/40 text-[#49659c] dark:text-gray-400 uppercase text-[11px] font-bold tracking-widest">
                                    <th className="px-6 py-4 border-b border-[#ced7e8] dark:border-gray-700">Transaction ID</th>
                                    <th className="px-6 py-4 border-b border-[#ced7e8] dark:border-gray-700">Client Name</th>
                                    <th className="px-6 py-4 border-b border-[#ced7e8] dark:border-gray-700">Service</th>
                                    <th className="px-6 py-4 border-b border-[#ced7e8] dark:border-gray-700">Amount</th>
                                    <th className="px-6 py-4 border-b border-[#ced7e8] dark:border-gray-700">Refund Reason</th>
                                    <th className="px-6 py-4 border-b border-[#ced7e8] dark:border-gray-700 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#ced7e8] dark:divide-gray-700">
                                {/* Row 1 */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                    <td className="px-6 py-4 font-mono text-xs text-[#0d121c] dark:text-gray-300 font-bold">TXN-9842-A8</td>
                                    <td className="px-6 py-4 text-sm font-bold text-[#0d121c] dark:text-white">Alistair Graham</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[10px] font-black uppercase">Solicitor Review</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-black text-red-600 dark:text-red-400">-£450.00</td>
                                    <td className="px-6 py-4 text-sm text-[#49659c] dark:text-gray-400 truncate max-w-[200px]">Duplicate charge during checkout</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2 justify-center">
                                            <button className="bg-primary text-white text-[11px] font-bold px-3 py-1.5 rounded hover:bg-blue-700 uppercase">Approve</button>
                                            <button className="bg-green-600 text-white text-[11px] font-bold px-3 py-1.5 rounded hover:bg-green-700 uppercase">Credit Note</button>
                                            <button className="text-gray-400 hover:text-primary transition-colors" title="Contact Vendor">
                                                <span className="material-symbols-outlined text-[20px]">mail</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                    <td className="px-6 py-4 font-mono text-xs text-[#0d121c] dark:text-gray-300 font-bold">TXN-4211-M2</td>
                                    <td className="px-6 py-4 text-sm font-bold text-[#0d121c] dark:text-white">Bright Blue Sky Ltd</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-full text-[10px] font-black uppercase">Address Registration</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-black text-red-600 dark:text-red-400">-£120.00</td>
                                    <td className="px-6 py-4 text-sm text-[#49659c] dark:text-gray-400 truncate max-w-[200px]">Incorrect address format requested</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2 justify-center">
                                            <button className="bg-primary text-white text-[11px] font-bold px-3 py-1.5 rounded hover:bg-blue-700 uppercase">Approve</button>
                                            <button className="bg-green-600 text-white text-[11px] font-bold px-3 py-1.5 rounded hover:bg-green-700 uppercase">Credit Note</button>
                                            <button className="text-gray-400 hover:text-primary transition-colors" title="Contact Vendor">
                                                <span className="material-symbols-outlined text-[20px]">mail</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 3 */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                    <td className="px-6 py-4 font-mono text-xs text-[#0d121c] dark:text-gray-300 font-bold">TXN-1102-X9</td>
                                    <td className="px-6 py-4 text-sm font-bold text-[#0d121c] dark:text-white">Seraphina James</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[10px] font-black uppercase">Vat Filing</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-black text-red-600 dark:text-red-400">-£2,100.00</td>
                                    <td className="px-6 py-4 text-sm text-[#49659c] dark:text-gray-400 truncate max-w-[200px]">Service not rendered within timeframe</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2 justify-center">
                                            <button className="bg-primary text-white text-[11px] font-bold px-3 py-1.5 rounded hover:bg-blue-700 uppercase">Approve</button>
                                            <button className="bg-green-600 text-white text-[11px] font-bold px-3 py-1.5 rounded hover:bg-green-700 uppercase">Credit Note</button>
                                            <button className="text-gray-400 hover:text-primary transition-colors" title="Contact Vendor">
                                                <span className="material-symbols-outlined text-[20px]">mail</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 4 */}
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                                    <td className="px-6 py-4 font-mono text-xs text-[#0d121c] dark:text-gray-300 font-bold">TXN-5561-K0</td>
                                    <td className="px-6 py-4 text-sm font-bold text-[#0d121c] dark:text-white">TechFlow Solutions</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-full text-[10px] font-black uppercase">Contract Template</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-black text-red-600 dark:text-red-400">-£45.00</td>
                                    <td className="px-6 py-4 text-sm text-[#49659c] dark:text-gray-400 truncate max-w-[200px]">Customer changed mind immediately after purchase</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2 justify-center">
                                            <button className="bg-primary text-white text-[11px] font-bold px-3 py-1.5 rounded hover:bg-blue-700 uppercase">Approve</button>
                                            <button className="bg-green-600 text-white text-[11px] font-bold px-3 py-1.5 rounded hover:bg-green-700 uppercase">Credit Note</button>
                                            <button className="text-gray-400 hover:text-primary transition-colors" title="Contact Vendor">
                                                <span className="material-symbols-outlined text-[20px]">mail</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination / Table Footer */}
                    <div className="flex items-center justify-between px-6 py-4 border-t border-[#ced7e8] dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                        <p className="text-xs font-bold text-[#49659c] dark:text-gray-400">Showing 1 to 4 of 24 entries</p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 border border-[#ced7e8] dark:border-gray-700 rounded-md text-xs font-bold bg-white dark:bg-gray-800 disabled:opacity-50" disabled>Previous</button>
                            <button className="px-3 py-1.5 border border-[#ced7e8] dark:border-gray-700 rounded-md text-xs font-bold bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">Next</button>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className="mt-auto py-8 px-4 border-t border-[#e7ebf4] dark:border-gray-800">
                <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="size-6 text-primary">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <span className="text-xs font-bold text-[#49659c] dark:text-gray-400 tracking-wider">UK Ltd Registration Portal</span>
                    </div>
                    <div className="text-center">
                        <p className="text-xs font-medium text-[#49659c] dark:text-gray-500">
                            Managed by <span className="text-[#0d121c] dark:text-gray-300 font-bold">BlueOceanHub</span> | Powered by <span className="text-primary font-bold">BookMeThat</span>
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a className="text-xs font-bold text-[#49659c] dark:text-gray-400 hover:text-primary" href="#">Legal Notice</a>
                        <a className="text-xs font-bold text-[#49659c] dark:text-gray-400 hover:text-primary" href="#">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
