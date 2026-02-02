import React from 'react';

export const SuperAdminSecurityPage = ({ onNavigate, onExit }: { onNavigate: (view: string) => void, onExit: () => void }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 animate-fade-in fixed inset-0 z-50 overflow-y-auto">
            {/* Top Navigation Bar */}
            <header className="border-b border-solid border-[#263745] bg-[#0b0c0c] px-6 lg:px-20 py-3 sticky top-0 z-50">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between whitespace-nowrap">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-white cursor-pointer" onClick={() => onNavigate('admin')}>
                            <div className="size-6 text-[#1d70b8]">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-white text-lg font-bold leading-tight tracking-tight">UK Ltd Registration</h2>
                                <span className="text-[10px] uppercase tracking-widest text-primary font-black">Super Admin Portal</span>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                <div className="text-[#96afc5] flex border-none bg-[#263745] items-center justify-center pl-4 rounded-l-lg border-r-0">
                                    <span className="material-symbols-outlined text-sm">search</span>
                                </div>
                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#263745] focus:border-none h-full placeholder:text-[#96afc5] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal" placeholder="Search security logs..." />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end gap-6 items-center">
                        <nav className="hidden xl:flex items-center gap-6">
                            <a className="text-[#96afc5] hover:text-white text-sm font-medium transition-colors cursor-pointer">System Health</a>
                            <a className="text-white text-sm font-semibold border-b-2 border-primary py-1 cursor-pointer">Security</a>
                            <a className="text-[#96afc5] hover:text-white text-sm font-medium transition-colors cursor-pointer">Registrations</a>
                            <a className="text-[#96afc5] hover:text-white text-sm font-medium transition-colors cursor-pointer">API Keys</a>
                        </nav>
                        <div className="flex gap-3">
                            <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-600 hover:bg-red-700 text-white text-sm font-bold transition-all shadow-lg shadow-red-900/20">
                                <span className="material-symbols-outlined text-sm mr-2">lock_reset</span>
                                <span className="truncate">Quick Revoke</span>
                            </button>
                            <button className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-[#263745] text-white hover:bg-[#364e63] transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2 flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                            </button>
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#364e63]" data-alt="Super Admin User Avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIhvovAmEzxNXE0kMUzvy70Vy3I2VuUqYgwO3Z4GnOoXhXdR8jbGyiRrq03L9FLIce2oYe_fdwKzpTHAD-pDbYoYvpWfOUv36vciBIXT-5WUWvB4KSi3H2itkspMDkgBpQPiAVsbnYG7YdKk7CsSQL6ZAJ81MO7E4DFawsbMdjn0OON3owfvjiSLPKCAKSHgIZC9Ro7-9Q2yE2trLjIxbs1Jf2MPOqLYL-YxktbRur_Ai4tfSN6fK7TtF-vfgTzK7tCQoVyHK8N9-G")' }}></div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 lg:px-20 py-8 bg-[#0b0c0c]">
                {/* Page Heading */}
                <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-tight">Security &amp; Permissions</h1>
                        <p className="text-[#96afc5] text-lg max-w-2xl">Manage platform-wide access, cryptographic roles, and real-time security protocols for the registration infrastructure.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#1b2731] border border-[#364e63] rounded-lg text-white text-sm font-medium hover:bg-[#263745] transition-colors">
                            <span className="material-symbols-outlined text-sm">download</span> Export Audit
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#1d70b8] rounded-lg text-white text-sm font-bold hover:bg-blue-600 transition-colors">
                            <span className="material-symbols-outlined text-sm">person_add</span> Add Administrator
                        </button>
                    </div>
                </div>
                {/* Security Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#1b2731] border border-[#364e63] hover:border-gov-blue/50 transition-colors">
                        <div className="flex justify-between items-start">
                            <p className="text-[#96afc5] text-sm font-medium">Active Sessions</p>
                            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse mt-1"></span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <p className="text-white tracking-tight text-3xl font-bold">24</p>
                            <p className="text-[#0bda5b] text-xs font-bold leading-normal flex items-center"><span className="material-symbols-outlined text-xs">trending_up</span> +12%</p>
                        </div>
                        <div className="mt-2 w-full bg-[#121920] h-1 rounded-full overflow-hidden">
                            <div className="bg-[#1d70b8] h-full w-3/4"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#1b2731] border border-[#364e63]">
                        <p className="text-[#96afc5] text-sm font-medium">2FA Compliance</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-white tracking-tight text-3xl font-bold">98.2%</p>
                            <p className="text-[#0bda5b] text-xs font-bold leading-normal flex items-center"><span className="material-symbols-outlined text-xs">check_circle</span> +0.5%</p>
                        </div>
                        <div className="mt-2 w-full bg-[#121920] h-1 rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full w-[98%]"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#1b2731] border border-[#364e63]">
                        <p className="text-[#96afc5] text-sm font-medium">Pending Requests</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-white tracking-tight text-3xl font-bold">3</p>
                            <p className="text-[#fa6238] text-xs font-bold leading-normal flex items-center"><span className="material-symbols-outlined text-xs">warning</span> -20%</p>
                        </div>
                        <div className="mt-2 w-full bg-[#121920] h-1 rounded-full overflow-hidden">
                            <div className="bg-orange-500 h-full w-1/4"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#1b2731] border border-[#364e63]">
                        <p className="text-[#96afc5] text-sm font-medium">Last Breach Check</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-white tracking-tight text-3xl font-bold">Clean</p>
                            <p className="text-[#96afc5] text-xs font-bold flex items-center italic">14 mins ago</p>
                        </div>
                        <div className="mt-2 w-full bg-[#121920] h-1 rounded-full overflow-hidden">
                            <div className="bg-[#1d70b8] h-full w-full opacity-30"></div>
                        </div>
                    </div>
                </div>
                {/* Multi-Tab Interface */}
                <div className="bg-[#1b2731] rounded-xl border border-[#364e63] overflow-hidden flex flex-col">
                    <div className="border-b border-[#364e63] px-6 flex gap-8">
                        <button className="flex flex-col items-center justify-center border-b-2 border-primary text-white pb-3 pt-4 px-2 group">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                                <p className="text-sm font-bold tracking-tight">Admins</p>
                            </div>
                        </button>
                        <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-[#96afc5] hover:text-white pb-3 pt-4 px-2 group transition-all">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">shield_with_heart</span>
                                <p className="text-sm font-bold tracking-tight">Roles</p>
                            </div>
                        </button>
                        <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-[#96afc5] hover:text-white pb-3 pt-4 px-2 group transition-all">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">history_edu</span>
                                <p className="text-sm font-bold tracking-tight">Audit Log</p>
                            </div>
                        </button>
                        <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-[#96afc5] hover:text-white pb-3 pt-4 px-2 group transition-all">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">security</span>
                                <p className="text-sm font-bold tracking-tight">2FA Settings</p>
                            </div>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Main Data Grid (LHS + Center) */}
                        <div className="lg:col-span-2 border-r border-[#364e63]">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-[#121920]/50">
                                            <th className="px-6 py-4 text-white text-xs font-black uppercase tracking-widest">Admin Name</th>
                                            <th className="px-6 py-4 text-white text-xs font-black uppercase tracking-widest">Role</th>
                                            <th className="px-6 py-4 text-white text-xs font-black uppercase tracking-widest">Last Login</th>
                                            <th className="px-6 py-4 text-white text-xs font-black uppercase tracking-widest">Status</th>
                                            <th className="px-6 py-4 text-[#96afc5] text-xs font-black uppercase tracking-widest text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#364e63]">
                                        <tr className="hover:bg-[#121920] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-[#1d70b8]/20 flex items-center justify-center text-[#1d70b8] font-bold text-xs border border-[#1d70b8]/30">JW</div>
                                                    <div>
                                                        <p className="text-white text-sm font-semibold">James Wilson</p>
                                                        <p className="text-[#96afc5] text-[10px]">james.w@ukltd.gov.uk</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 rounded-full bg-[#1d70b9]/20 text-[#1d70b8] text-[10px] font-black uppercase border border-[#1d70b8]/20 tracking-wider">Site Admin</span>
                                            </td>
                                            <td className="px-6 py-4 text-[#96afc5] text-sm">2023-10-24 14:20</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                    <span className="text-white text-xs font-medium uppercase tracking-tight">2FA Active</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-[#1d70b8] hover:text-blue-400 font-bold text-xs uppercase tracking-widest">Manage</button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#121920] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs border border-purple-500/30">SC</div>
                                                    <div>
                                                        <p className="text-white text-sm font-semibold">Sarah Chen</p>
                                                        <p className="text-[#96afc5] text-[10px]">s.chen@ukltd.gov.uk</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-300 text-[10px] font-black uppercase border border-slate-600 tracking-wider">Support</span>
                                            </td>
                                            <td className="px-6 py-4 text-[#96afc5] text-sm">2023-10-24 13:05</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                    <span className="text-white text-xs font-medium uppercase tracking-tight">2FA Active</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-[#1d70b8] hover:text-blue-400 font-bold text-xs uppercase tracking-widest">Manage</button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#121920] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs border border-emerald-500/30">RT</div>
                                                    <div>
                                                        <p className="text-white text-sm font-semibold">Robert Taylor</p>
                                                        <p className="text-[#96afc5] text-[10px]">r.taylor@ukltd.gov.uk</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase border border-emerald-500/20 tracking-wider">Finance</span>
                                            </td>
                                            <td className="px-6 py-4 text-[#96afc5] text-sm">2023-10-23 09:45</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                                                    <span className="text-red-400 text-xs font-medium uppercase tracking-tight">2FA Disabled</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-[#1d70b8] hover:text-blue-400 font-bold text-xs uppercase tracking-widest">Manage</button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-[#121920] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-xs">EL</div>
                                                    <div>
                                                        <p className="text-white text-sm font-semibold">Emily Lawson</p>
                                                        <p className="text-[#96afc5] text-[10px]">e.lawson@ukltd.gov.uk</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-300 text-[10px] font-black uppercase border border-slate-600 tracking-wider">Support</span>
                                            </td>
                                            <td className="px-6 py-4 text-[#96afc5] text-sm">2023-10-22 18:12</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                    <span className="text-white text-xs font-medium uppercase tracking-tight">2FA Active</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-[#1d70b8] hover:text-blue-400 font-bold text-xs uppercase tracking-widest">Manage</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Role Configurator (RHS Sidebar) */}
                        <div className="p-6 bg-[#0b0c0c]/40">
                            <h3 className="text-white text-md font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#1d70b8]">tune</span>
                                Quick Config: Site Admin
                            </h3>
                            <p className="text-[#96afc5] text-xs mb-6">Modify granular permissions for the selected role across the entire platform.</p>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-[#121920] border border-[#364e63]">
                                    <div>
                                        <p className="text-white text-xs font-semibold">Approve Refunds</p>
                                        <p className="text-[10px] text-[#96afc5]">Authorize financial returns</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input defaultChecked className="sr-only peer" type="checkbox" />
                                        <div className="w-9 h-5 bg-[#263745] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1d70b8]"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-[#121920] border border-[#364e63]">
                                    <div>
                                        <p className="text-white text-xs font-semibold">Edit Formation Queue</p>
                                        <p className="text-[10px] text-[#96afc5]">Modify pending registrations</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input defaultChecked className="sr-only peer" type="checkbox" />
                                        <div className="w-9 h-5 bg-[#263745] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1d70b8]"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-[#121920] border border-[#364e63]">
                                    <div>
                                        <p className="text-white text-xs font-semibold">View Revenue Analytics</p>
                                        <p className="text-[10px] text-[#96afc5]">Access sensitive financial data</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input className="sr-only peer" type="checkbox" />
                                        <div className="w-9 h-5 bg-[#263745] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1d70b8]"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-[#121920] border border-[#364e63]">
                                    <div>
                                        <p className="text-white text-xs font-semibold">Global API Access</p>
                                        <p className="text-[10px] text-[#96afc5]">Rotate keys and endpoints</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input className="sr-only peer" type="checkbox" />
                                        <div className="w-9 h-5 bg-[#263745] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#1d70b8]"></div>
                                    </label>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-3 bg-[#1d70b8] hover:bg-blue-600 rounded-lg text-white text-sm font-bold shadow-lg shadow-blue-500/10 transition-all active:scale-95">
                                Save Policy Changes
                            </button>
                        </div>
                    </div>
                </div>
                {/* Audit Log and Detailed Feed */}
                <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <div className="bg-[#1b2731] rounded-xl border border-[#364e63] flex flex-col h-[400px]">
                        <div className="p-6 border-b border-[#364e63] flex justify-between items-center">
                            <h3 className="text-white text-lg font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-orange-500">history</span>
                                System Audit Log
                            </h3>
                            <div className="flex gap-2">
                                <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase">3 Warnings</span>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
                            {/* Feed Item */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                                        <span className="material-symbols-outlined text-sm">security_update_warning</span>
                                    </div>
                                    <div className="w-px h-full bg-[#364e63] mt-2"></div>
                                </div>
                                <div className="flex-1 pb-4">
                                    <div className="flex justify-between items-start mb-1">
                                        <p className="text-white text-sm font-bold">Policy Change</p>
                                        <span className="text-[#96afc5] text-[10px]">2 mins ago</span>
                                    </div>
                                    <p className="text-[#96afc5] text-xs leading-relaxed">Admin <span className="text-white font-medium">James Wilson</span> modified 'Refund' permissions for 'Support' role.</p>
                                    <div className="mt-2 flex gap-2">
                                        <span className="px-2 py-0.5 rounded bg-[#121920] border border-[#364e63] text-white text-[9px]">ID: AUD-4029</span>
                                        <span className="px-2 py-0.5 rounded bg-[#121920] border border-[#364e63] text-white text-[9px]">IP: 192.168.1.42</span>
                                    </div>
                                </div>
                            </div>
                            {/* Feed Item */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="h-8 w-8 rounded-full bg-[#1d70b8]/20 flex items-center justify-center text-[#1d70b8]">
                                        <span className="material-symbols-outlined text-sm">vpn_key</span>
                                    </div>
                                    <div className="w-px h-full bg-[#364e63] mt-2"></div>
                                </div>
                                <div className="flex-1 pb-4">
                                    <div className="flex justify-between items-start mb-1">
                                        <p className="text-white text-sm font-bold">API Key Rotation</p>
                                        <span className="text-[#96afc5] text-[10px]">1 hour ago</span>
                                    </div>
                                    <p className="text-[#96afc5] text-xs leading-relaxed">System automatically rotated <span className="text-white font-medium">Companies House API v3</span> production keys.</p>
                                </div>
                            </div>
                            {/* Feed Item */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                        <span className="material-symbols-outlined text-sm">move_up</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <p className="text-white text-sm font-bold">Role Elevation</p>
                                        <span className="text-[#96afc5] text-[10px]">4 hours ago</span>
                                    </div>
                                    <p className="text-[#96afc5] text-xs leading-relaxed">User <span className="text-white font-medium">Sarah Chen</span> elevated from 'Junior' to 'Site Admin' by SuperAdmin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Security Distribution/Summary */}
                    <div className="bg-[#1b2731] rounded-xl border border-[#364e63] p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-white text-lg font-bold mb-6">Access Geographic Distribution</h3>
                            <div className="aspect-video bg-[#0b0c0c] rounded-lg border border-[#364e63] relative overflow-hidden flex items-center justify-center">
                                <span className="material-symbols-outlined text-6xl text-[#263745]">map</span>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0c] to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-4 left-4 flex flex-col">
                                    <span className="text-white text-sm font-bold uppercase tracking-widest">Active Nodes</span>
                                    <span className="text-[#1d70b8] text-xs">London · Manchester · Belfast</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-[#121920] border border-[#364e63]">
                                <p className="text-[#96afc5] text-[10px] font-black uppercase mb-1">Session Timeout</p>
                                <p className="text-white font-bold">45 Minutes</p>
                            </div>
                            <div className="p-4 rounded-lg bg-[#121920] border border-[#364e63]">
                                <p className="text-[#96afc5] text-[10px] font-black uppercase mb-1">IP Whitelist</p>
                                <p className="text-white font-bold">12 Registered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className="mt-auto border-t border-[#364e63] bg-[#0b0c0c] py-6 px-20">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#1d70b9] text-white text-[10px] font-bold">v18.2.0</span>
                        <p className="text-[#96afc5] text-sm">Technical Stack: React 18.2 + Next.js App Router</p>
                    </div>
                    <div className="text-[#96afc5] text-sm flex items-center gap-2">
                        Managed by <span className="text-white font-bold tracking-tight">BlueOceanHub</span>
                        <span className="h-1 w-1 rounded-full bg-[#364e63]"></span>
                        <span>© 2023 UK Registry Portal</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};