
import React from 'react';

export const SuperAdminPartnerStrategyPage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    return (
        <div className="bg-[#f6f7f8] dark:bg-[#111921] text-[#0e151b] dark:text-white min-h-screen flex flex-col font-sans animate-fade-in fixed inset-0 z-50 overflow-y-auto">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e8eef3] dark:border-[#2d3a4a] bg-white dark:bg-[#1a2530] px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-[#1b70bb] cursor-pointer" onClick={() => onNavigate('admin')}>
                        <div className="size-6">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0e151b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">UKLtdRegistration 2024</h2>
                    </div>
                    <label className="flex flex-col min-w-40 h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#e8eef3] dark:bg-[#2d3a4a]">
                            <div className="text-[#507595] dark:text-[#a0b0c0] flex items-center justify-center pl-4">
                                <span className="material-symbols-outlined text-xl">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-[#0e151b] dark:text-white placeholder:text-[#507595] px-2 text-sm outline-none" placeholder="Search strategy..." />
                        </div>
                    </label>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <nav className="flex items-center gap-6">
                        <a className="text-[#0e151b] dark:text-white text-sm font-medium hover:text-[#1b70bb] transition-colors cursor-pointer">Board</a>
                        <a className="text-[#0e151b] dark:text-white text-sm font-medium hover:text-[#1b70bb] transition-colors cursor-pointer">Partners</a>
                        <a className="text-[#0e151b] dark:text-white text-sm font-medium hover:text-[#1b70bb] transition-colors cursor-pointer">Affiliates</a>
                        <a className="text-[#0e151b] dark:text-white text-sm font-medium hover:text-[#1b70bb] transition-colors cursor-pointer">Reports</a>
                    </nav>
                    <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#1b70bb] text-white text-sm font-bold shadow-sm hover:bg-[#1b70bb]/90 transition-all">
                        <span className="truncate">Add Partner</span>
                    </button>
                    <div className="flex items-center gap-3 border-l border-[#e8eef3] dark:border-[#2d3a4a] pl-6">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-bold text-[#0e151b] dark:text-white">Super Admin</p>
                            <p className="text-[10px] text-[#507595]">Strategy Lead</p>
                        </div>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#1b70bb]/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWL9jyZoiYrSYYTytd7w_MMizrmRqAS4e5buV-jom7UPR2FKM8WmkMPvaP7TiC5qEmwm_8wuiZmztuP9jSbCOslD34g3siXjAxEDdj3BtjS71PJpiWHkJcYdaKH1srcLjO96em0hsHpRXU_b-pU2iuN3IwsKMeqNDwqnCkbOgdPfWGe2_R5WvaiguDaMaEr20P4_QWHRkya6elc46ZkuUy7vofFEGj8D1qUww5esOm3A9llnMNh1k1vPssqDIOMqdLvVkEVhLsNaHZ")' }}></div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 md:px-10 py-8">
                {/* Global Affiliate Stats Section */}
                <section className="mb-10">
                    <div className="flex items-center justify-between mb-6 px-2">
                        <h3 className="text-[#0e151b] dark:text-white text-xl font-bold">Global Affiliate Performance</h3>
                        <span className="text-xs text-[#507595] flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Last update: 2 mins ago</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2530] border border-[#d1dce6] dark:border-[#2d3a4a] shadow-sm">
                            <div className="flex justify-between items-start">
                                <p className="text-[#507595] dark:text-[#a0b0c0] text-sm font-medium">Total Affiliate Revenue 2024</p>
                                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded"> +12.4%</span>
                            </div>
                            <p className="text-[#0e151b] dark:text-white tracking-tight text-3xl font-bold">£1,240,500</p>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 mt-2 rounded-full overflow-hidden">
                                <div className="bg-[#1b70bb] h-full w-[78%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2530] border border-[#d1dce6] dark:border-[#2d3a4a] shadow-sm">
                            <div className="flex justify-between items-start">
                                <p className="text-[#507595] dark:text-[#a0b0c0] text-sm font-medium">Pending Payouts</p>
                                <span className="bg-blue-100 text-[#1b70bb] dark:bg-[#1b70bb]/20 dark:text-[#1b70bb] text-xs font-bold px-2 py-1 rounded">Active</span>
                            </div>
                            <p className="text-[#0e151b] dark:text-white tracking-tight text-3xl font-bold">£45,200</p>
                            <p className="text-[#507595] text-xs">84 pending transactions</p>
                        </div>
                        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2530] border border-[#d1dce6] dark:border-[#2d3a4a] shadow-sm">
                            <div className="flex justify-between items-start">
                                <p className="text-[#507595] dark:text-[#a0b0c0] text-sm font-medium">Top Performing Affiliate</p>
                                <span className="material-symbols-outlined text-yellow-500">military_tech</span>
                            </div>
                            <p className="text-[#0e151b] dark:text-white tracking-tight text-3xl font-bold">Xero - Platinum</p>
                            <p className="text-green-600 dark:text-green-400 text-sm font-medium flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">trending_up</span> 18% growth this month
                            </p>
                        </div>
                    </div>
                </section>

                {/* Partner Lifecycle Board */}
                <section className="flex flex-col gap-6">
                    <div className="flex items-center justify-between px-2">
                        <div>
                            <h2 className="text-[#0e151b] dark:text-white text-2xl font-bold tracking-[-0.015em]">Partner Strategy Board</h2>
                            <p className="text-[#507595] text-sm">Organize and prioritize your UK partner ecosystem</p>
                        </div>
                        <div className="flex bg-white dark:bg-[#1a2530] p-1 rounded-lg border border-[#d1dce6] dark:border-[#2d3a4a]">
                            <button className="px-3 py-1.5 text-xs font-bold bg-[#1b70bb] text-white rounded-md shadow-sm">Board View</button>
                            <button className="px-3 py-1.5 text-xs font-bold text-[#507595] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">List View</button>
                        </div>
                    </div>

                    {/* Kanban Board */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start overflow-x-auto pb-4">
                        {/* Column: Prospective Partners */}
                        <div className="flex flex-col gap-4 min-w-[320px] bg-[#edf2f7] dark:bg-[#1e293b] p-4 rounded-xl">
                            <div className="flex items-center justify-between px-1 mb-2">
                                <h4 className="text-sm font-bold text-[#507595] dark:text-[#a0b0c0] uppercase tracking-wider flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">explore</span> Prospective Partners
                                </h4>
                                <span className="bg-gray-200 dark:bg-gray-700 text-[#507595] dark:text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
                            </div>
                            
                            {/* AI Suggested Card 1 */}
                            <div className="bg-white dark:bg-[#1a2530] p-4 rounded-lg shadow-sm border-l-4 border-[#1b70bb] group cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] bg-[#1b70bb]/10 text-[#1b70bb] font-bold px-2 py-1 rounded flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">bolt</span> AI SUGGESTION
                                    </span>
                                    <span className="material-symbols-outlined text-[#d1dce6] group-hover:text-[#507595]">more_horiz</span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <div className="size-10 rounded bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClsygsQCsuv9aNOd-K3F_ZV4fYmz07LH43JvOV3u8wgqbIFt1jRp-PphYT-KruU3vCHarqADubm3_gXtrjb4RCJzOUKHkNGo-YHxEq4NoAWaaA-3AMvCawJVn5wanwC2CPF3W-Ro1B8EF81le_qyi6RFqNDv-PAgpdp3uAViwC9Dzy0SU-TdJuwjRi36DGpyT36qQsxV0TkPDjoGvYc_PQpnSe7aadFQAyNkIqLIjQw9qIXeFY9wjSlrc5kbqfCuowo3SvseUfHGAk")' }}></div>
                                    <div>
                                        <h5 className="text-sm font-bold text-[#0e151b] dark:text-white">Business Banking (Tide)</h5>
                                        <p className="text-[10px] text-[#507595] font-medium mt-0.5">Fintech / SME Solutions</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between text-xs py-2 border-y border-dashed border-[#e8eef3] dark:border-[#2d3a4a]">
                                        <span className="text-[#507595]">Est. Commission</span>
                                        <span className="font-bold text-green-600 dark:text-green-400">£50/referral</span>
                                    </div>
                                    <div className="flex items-center -space-x-2 mt-1">
                                        <div className="size-6 rounded-full border-2 border-white dark:border-[#1a2530] bg-gray-200 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBd3UJ5n4vj9g-xf13zr4msf_wAAAucEVkH6oZbmUxXQJ9NjutDSuXrXnOgma4e4J_ClwSpgBzFbb1z0v8Zt-6Ml-kqjHj5ld1z56lej-3HKrMB9BRqTCOXQXW39WC8pckD5L5zVPm-IiHUTw1IiwuPP2il-f6uMFMkQc0Q4FdBLi2Kemy5LD0V2kMYcqYM_PVfrRgU4xCSu69Pjv_tN3Xqq5RLpPXiIYfuCfhKeOCTaae3pRyMsUw2CTesHzZ-4YIDHhsc1wpgYN9")' }}></div>
                                        <div className="size-6 rounded-full border-2 border-white dark:border-[#1a2530] bg-gray-300 flex items-center justify-center text-[10px] font-bold text-gray-600">+</div>
                                    </div>
                                </div>
                            </div>

                            {/* AI Suggested Card 2 */}
                            <div className="bg-white dark:bg-[#1a2530] p-4 rounded-lg shadow-sm border-l-4 border-[#1b70bb] group cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] bg-[#1b70bb]/10 text-[#1b70bb] font-bold px-2 py-1 rounded flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">bolt</span> AI SUGGESTION
                                    </span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <div className="size-10 rounded bg-red-50 flex items-center justify-center shrink-0 border border-red-100 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDp63NiZSjodBjIWZ1fqae1acIzT42C--Gzzvo7qbVIBlJaIFcwAwcZHd0Wdg7Q1WPtMW5a4yexpsa7hE9dhWkG8yYgxpXUCe3Sjtbs_ty_iYrfBTzhgeYZpMHhHj8Ws6QyOwxpZVtbeKuYVU5EDglZZJ6mdsNndrG_mNqr0vUyrmMvPZYbopEIpvccJKtie_BhcaOitKWDmaegJNt7gXClAdP7r3bFsw1J9Mguhpt3xFiYkKwNHqK-uxOu6mrUpzLJfONQrzJxRweA")' }}></div>
                                    <div>
                                        <h5 className="text-sm font-bold text-[#0e151b] dark:text-white">Insurance (Hiscox)</h5>
                                        <p className="text-[10px] text-[#507595] font-medium mt-0.5">Professional Liability</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between text-xs py-2 border-y border-dashed border-[#e8eef3] dark:border-[#2d3a4a]">
                                        <span className="text-[#507595]">Est. Commission</span>
                                        <span className="font-bold text-green-600 dark:text-green-400">£120/referral</span>
                                    </div>
                                </div>
                            </div>

                            {/* AI Suggested Card 3 */}
                            <div className="bg-white dark:bg-[#1a2530] p-4 rounded-lg shadow-sm border-l-4 border-[#1b70bb] group cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] bg-[#1b70bb]/10 text-[#1b70bb] font-bold px-2 py-1 rounded flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">bolt</span> AI SUGGESTION
                                    </span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <div className="size-10 rounded bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4_0YIheiPpgyCIK7zMb537UN936xRDdTxpIWt4OBAlYjNk5dsFMpFaNVUhR5F81gvrpgZclJRqivL_Frs54QI4Jnry2k9iQj9HuK0ivsJMuOJIgqh6VpWI8-iWLjctnEX5UJvz70er0qUfqlm2Xl3sP1UpJ6jwW-h8S2w7qftYHWcBNEgQnFoiKM2r0De_5ZMcgpdC9sDqj4OUwrpIlOJD3h3k9tJJcjx0hJAJvvm1phWcU12dxDUnJS-8w9P_KjbzXNzfRDDsfvO")' }}></div>
                                    <div>
                                        <h5 className="text-sm font-bold text-[#0e151b] dark:text-white">Revolut Business</h5>
                                        <p className="text-[10px] text-[#507595] font-medium mt-0.5">Cross-border Banking</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between text-xs py-2 border-y border-dashed border-[#e8eef3] dark:border-[#2d3a4a]">
                                        <span className="text-[#507595]">Est. Commission</span>
                                        <span className="font-bold text-green-600 dark:text-green-400">£75/referral</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-3 border-2 border-dashed border-[#d1dce6] dark:border-[#2d3a4a] text-[#507595] text-xs font-bold rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 mt-2">
                                <span className="material-symbols-outlined text-sm">add</span> Add Suggestion
                            </button>
                        </div>

                        {/* Column: In Negotiation */}
                        <div className="flex flex-col gap-4 min-w-[320px] bg-[#edf2f7] dark:bg-[#1e293b] p-4 rounded-xl">
                            <div className="flex items-center justify-between px-1 mb-2">
                                <h4 className="text-sm font-bold text-[#507595] dark:text-[#a0b0c0] uppercase tracking-wider flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">contract_edit</span> In Negotiation
                                </h4>
                                <span className="bg-[#1b70bb] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
                            </div>

                            <div className="bg-white dark:bg-[#1a2530] p-4 rounded-lg shadow-sm border-l-4 border-yellow-400 group cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 font-bold px-2 py-1 rounded">LEGAL REVIEW</span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <div className="size-10 rounded bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC84ByeUB3co34y60hf2G-blDX5voN5Rayjd7tKzMEwTmsXK9aOtbm_6YAqemD1LVG01u83hc0JpWdaQu7h_El4enpQ6IDRaJNuzLkwPMrzW4uZ9_qAbCLy_tPdJWGjV6IkYpojvm3hxePlAxORdxkozULT4u_0hwvMkZOoBnLi6GM4JubA4Zax1X-xrovBTzQuywLP18NOzPYOIf3xWmUICEOW_6-tiboLJHu-Xkurb01DgGDW93ILL_cBTK1DnP3Qu0rVlTQtSBpF")' }}></div>
                                    <div>
                                        <h5 className="text-sm font-bold text-[#0e151b] dark:text-white">QuickBooks UK</h5>
                                        <p className="text-[10px] text-[#507595] font-medium mt-0.5">Tax &amp; Payroll</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold">
                                        <span className="text-[#507595]">Contract Progress</span>
                                        <span className="text-[#1b70bb]">80%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-[#1b70bb] h-full w-[80%]"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#1a2530] p-4 rounded-lg shadow-sm border-l-4 border-yellow-400 group cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 font-bold px-2 py-1 rounded">TERMS PENDING</span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <div className="size-10 rounded bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAL17-6LuZHG-akvWGKyh-Pu6kEqwODqGSDhYf2Dt0LKLkeqO7LAzbDjjUgxn4KsKu8oJ-XJNKeE4IP2_WgKWjSgRo-piKejPbI0H5FyT1RcLqWw-wCmttr9H7uDCAJur4n0j7CwwxBD4DWf3xUbufMscx_gaZ1jv7DkdOoRQiprqEoGajhByeZKrA_A0gEeXM8Gd1jonYjjeHAN-Co3qqRWLzAgEHlos4LtN8UJycqzX7slsv2_Cw8AALknaHcORTh-syUzNcCcKPd")' }}></div>
                                    <div>
                                        <h5 className="text-sm font-bold text-[#0e151b] dark:text-white">Starling Bank</h5>
                                        <p className="text-[10px] text-[#507595] font-medium mt-0.5">Personal &amp; Business</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold">
                                        <span className="text-[#507595]">Contract Progress</span>
                                        <span className="text-[#1b70bb]">35%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-[#1b70bb] h-full w-[35%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column: Active Ecosystem */}
                        <div className="flex flex-col gap-4 min-w-[320px] bg-[#edf2f7] dark:bg-[#1e293b] p-4 rounded-xl">
                            <div className="flex items-center justify-between px-1 mb-2">
                                <h4 className="text-sm font-bold text-[#507595] dark:text-[#a0b0c0] uppercase tracking-wider flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg text-green-500">check_circle</span> Active Ecosystem
                                </h4>
                                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
                            </div>

                            <div className="bg-white dark:bg-[#1a2530] p-4 rounded-lg shadow-sm border-l-4 border-green-500 group cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold px-2 py-1 rounded">LIVE &amp; SYNCED</span>
                                    <span className="material-symbols-outlined text-green-500 text-sm">verified</span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <div className="size-10 rounded bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNZCA4y6_pwB81x6EuGi7SZPJ3ra_VZnT7div31kezic4Ji_O70nVjoplgaoXWR0C_N-wkOQXvXDb04UOUhkFhEbH_iIb1s7x-jhuwzoqI7XrQacL8nTIjkGWETSIoTiusJI3alf4dXy7d5qXe9Ci_HKmwLNiRehuPgP4oLatQcMyIh7OZmNadCV2A9WzEWjhvs3knQ9apAAvDusew8NBWk4lMRaXbAbGJEr0HLNC9SpgCZZo6kGA5wU4qUW1Cx1S1AqfB2Gm-1UUN")' }}></div>
                                    <div>
                                        <h5 className="text-sm font-bold text-[#0e151b] dark:text-white">Accounting (Xero)</h5>
                                        <p className="text-[10px] text-[#507595] font-medium mt-0.5">Top Tier Integration</p>
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-[#e8eef3] dark:border-[#2d3a4a] mt-2 flex justify-between items-center">
                                    <span className="text-[10px] text-[#507595]">Monthly Leads: <strong>412</strong></span>
                                    <span className="text-[10px] font-bold text-[#1b70bb]">View Analytics</span>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#1a2530] p-4 rounded-lg shadow-sm border-l-4 border-green-500 group cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold px-2 py-1 rounded">LIVE &amp; SYNCED</span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <div className="size-10 rounded bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxOATAhNBLJKvX9KPUb1Q5GlkR9AyxWAVpyTmQeP1bu2muGs7Ruygk1ECPDSr8-cnbW2IWnPCIY77OWANlXEKbApyfk7W6RH70sYUwVuUrfHeySHIxuIpJVL7tiUGUoGIP-dfCSg_T0ntqBhOB0RI52Rl8YvyUs_MLxq2OfmV_lujQZOJvIXw_3k6irHQLdnf2qr7SLF7MdOtWqBdTxGAQZrzECtqhtNgjmpUFVsQUqabSKpyXKke0eUH0B3H79ZA2i8_OejiXsuyj")' }}></div>
                                    <div>
                                        <h5 className="text-sm font-bold text-[#0e151b] dark:text-white">FreeAgent</h5>
                                        <p className="text-[10px] text-[#507595] font-medium mt-0.5">Accounting Platform</p>
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-[#e8eef3] dark:border-[#2d3a4a] mt-2 flex justify-between items-center">
                                    <span className="text-[10px] text-[#507595]">Monthly Leads: <strong>188</strong></span>
                                    <span className="text-[10px] font-bold text-[#1b70bb]">View Analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="mt-auto py-8 border-t border-[#e8eef3] dark:border-[#2d3a4a] bg-white dark:bg-[#1a2530]">
                <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="size-4 text-[#1b70bb] opacity-60">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                            </svg>
                        </div>
                        <p className="text-xs text-[#507595] font-medium">© 2024 UKLtdRegistration. All rights reserved.</p>
                    </div>
                    <div className="flex items-center gap-6 text-[11px] font-semibold text-[#507595] tracking-wide uppercase">
                        <span className="hover:text-[#1b70bb] cursor-pointer transition-colors">Managed by BlueOceanHub.info</span>
                        <span className="h-1 w-1 rounded-full bg-[#d1dce6] hidden md:block"></span>
                        <span className="hover:text-[#1b70bb] cursor-pointer transition-colors">Powered by BookMeThat.com</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-lg text-[#507595] hover:text-[#1b70bb] cursor-pointer transition-colors">settings</span>
                        <span className="material-symbols-outlined text-lg text-[#507595] hover:text-[#1b70bb] cursor-pointer transition-colors">help_outline</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
