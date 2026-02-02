import React from 'react';

export const AdminHelpDesk = ({ onNavigate, onExit }: { onNavigate: (view: string) => void, onExit: () => void }) => {
    return (
        <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark text-[#0e151b] dark:text-slate-200 font-sans overflow-hidden fixed inset-0 z-50">
            {/* TopNavBar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#d0dce7] dark:border-slate-700 bg-white dark:bg-background-dark px-6 py-3 shrink-0">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={() => onNavigate('admin')}>
                        <div className="size-8">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[#0e151b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">UK Ltd Registration Admin</h2>
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4e7597]">Live Desk Connected</span>
                            </div>
                        </div>
                    </div>
                    <label className="flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="text-[#4e7597] flex border-none bg-[#e7eef3] dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg">
                                <span className="material-symbols-outlined text-xl">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-[#e7eef3] dark:bg-slate-800 text-[#0e151b] dark:text-white focus:ring-0 h-full placeholder:text-[#4e7597] px-4 rounded-r-lg pl-2 text-sm font-normal outline-none" placeholder="Search tickets, clients..." />
                        </div>
                    </label>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Managed by BlueOceanHub</span>
                    </button>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#e7eef3] dark:bg-slate-800 text-[#0e151b] dark:text-white">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#e7eef3] dark:bg-slate-800 text-[#0e151b] dark:text-white relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                    </div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#d0dce7]" data-alt="Admin user avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-P5vZ53UPQWrnkFhoLPRFiLQSqzt1DkPVI0LtrjV7lI5USEdPm8u_YY1mz3uc634aBkwcq8d5VkrBwsI8-PSEY4BB39jkRusxRi5bB9SSTYaLYF_uo1OMCgy-8FJ1cGO4mbIZsZMNf3k-rOEZUfTp1CN7dLhBBu--S37LsqVcrSzamjT9cppeJb4sowHuQOSRc9RGVjTKicvw6BA_FlUH_k_2HTYL5Bt0AZnZDj8WoGPUW2ums0GvVfgEOytmMgrKvM3RAzUNOlvD")' }}></div>
                </div>
            </header>

            {/* Main Dashboard Layout */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Ticket Sidebar */}
                <div className="w-80 flex flex-col border-r border-[#d0dce7] dark:border-slate-700 bg-white dark:bg-background-dark overflow-hidden shrink-0">
                    <div className="p-4">
                        <h1 className="text-[#0e151b] dark:text-white text-base font-bold">Client Support</h1>
                        <p className="text-[#4e7597] text-xs font-normal">Active Registration Tickets</p>
                    </div>
                    {/* Tabs Component */}
                    <div className="border-b border-[#d0dce7] dark:border-slate-700 flex overflow-x-auto no-scrollbar">
                        <a className="flex-1 text-center py-3 text-xs font-bold border-b-[3px] border-primary text-[#0e151b] dark:text-white cursor-pointer">New</a>
                        <a className="flex-1 text-center py-3 text-xs font-bold text-[#4e7597] hover:text-primary cursor-pointer">Pending</a>
                        <a className="flex-1 text-center py-3 text-xs font-bold text-[#4e7597] hover:text-primary cursor-pointer">Priority</a>
                        <a className="flex-1 text-center py-3 text-xs font-bold text-[#4e7597] hover:text-primary cursor-pointer">Resolved</a>
                    </div>
                    {/* Ticket List */}
                    <div className="flex-1 overflow-y-auto divide-y divide-[#e7eef3] dark:divide-slate-800">
                        {/* Active Ticket */}
                        <div className="p-4 bg-primary/10 border-l-4 border-primary cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-bold text-primary">ID: #4921</span>
                                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase">UK Resident</span>
                            </div>
                            <h3 className="text-sm font-bold text-[#0e151b] dark:text-white">James Sterling</h3>
                            <p className="text-xs text-[#4e7597] truncate">Sterling Logistics Ltd</p>
                            <p className="text-[11px] mt-2 text-[#4e7597] italic truncate">"Help with authentication code..."</p>
                        </div>
                        {/* Other Tickets */}
                        <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-bold text-[#4e7597]">ID: #4918</span>
                                <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 text-[10px] font-bold uppercase">International</span>
                            </div>
                            <h3 className="text-sm font-bold text-[#0e151b] dark:text-white">Chen Wei</h3>
                            <p className="text-xs text-[#4e7597] truncate">Wei Tech Global Ltd</p>
                            <p className="text-[11px] mt-2 text-red-500 font-medium">Awaiting ID verification (High Priority)</p>
                        </div>
                        <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-bold text-[#4e7597]">ID: #4915</span>
                                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase">UK Resident</span>
                            </div>
                            <h3 className="text-sm font-bold text-[#0e151b] dark:text-white">Sarah Jenkins</h3>
                            <p className="text-xs text-[#4e7597] truncate">Jenkins Creative Co</p>
                            <p className="text-[11px] mt-2 text-[#4e7597]">Last reply: 2 hours ago</p>
                        </div>
                    </div>
                </div>

                {/* Central Chat Window */}
                <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 overflow-hidden min-w-0">
                    {/* Context Header */}
                    <div className="px-6 py-4 bg-white dark:bg-background-dark border-b border-[#d0dce7] dark:border-slate-700 shrink-0">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">JS</div>
                                    <div>
                                        <h2 className="text-base font-bold text-[#0e151b] dark:text-white">James Sterling</h2>
                                        <p className="text-xs text-[#4e7597]">Sterling Logistics Ltd · Registered Office: London</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 rounded bg-[#e7eef3] dark:bg-slate-800 text-xs font-bold flex items-center gap-1 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                        <span className="material-symbols-outlined text-sm">history</span> Case History
                                    </button>
                                    <button className="px-3 py-1.5 rounded bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors">Assign to Agent</button>
                                </div>
                            </div>
                            <div className="mt-4 p-3 rounded-lg border border-[#d0dce7] dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex flex-wrap items-center justify-between gap-2">
                                <div className="flex flex-col">
                                    <p className="text-[#0e151b] dark:text-white text-xs font-bold">Formation Status: <span className="text-primary uppercase tracking-wide">Awaiting CH Approval</span></p>
                                    <p className="text-[#4e7597] text-[11px]">Submission sent to Companies House on Oct 24, 09:12 AM</p>
                                </div>
                                <a className="text-xs font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer" onClick={() => onNavigate('dashboard')}>
                                    View Success Hub <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Chat Feed */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        <div className="flex justify-center">
                            <span className="text-[10px] font-bold text-[#4e7597] bg-[#e7eef3] dark:bg-slate-800 px-3 py-1 rounded-full uppercase tracking-widest">Today</span>
                        </div>
                        {/* Client Message */}
                        <div className="flex items-start gap-3 max-w-[80%]">
                            <div className="size-8 rounded-full bg-slate-200 shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZvGacJfKg1Xy624Ah-FEb8nQUUS4LD1qgPSp0CsVp7MA7AU8ByxaxjNDDWDm1Btb4z2YLjVGA1Yg2lZhX3HwClPgyjPvgdnYNHXujdzkXDjdgtVoZh4BOqUqCMbGgTPHQ9DyPCJJFF3gfOeAoVNVHhgp5YzWVGuJ5cUqcZ5iFiUhSEHmcPM4TBjdV-6fI_N1ASA466gU7aNeXrIdaSaUzEdMFmfdc16EsxVcYcVwHnZQw4UaQm5R44D0UkIgQn2XCr3f7OlG4BVr9")' }}></div>
                            <div className="flex flex-col gap-1">
                                <div className="bg-white dark:bg-background-dark p-3 rounded-xl rounded-tl-none border border-[#d0dce7] dark:border-slate-700 shadow-sm">
                                    <p className="text-sm">Hello, I've just submitted my application but I realized I forgot to add an additional director. Is it too late to change this or do I need to wait for Companies House approval first?</p>
                                </div>
                                <span className="text-[10px] text-[#4e7597] ml-1">10:45 AM</span>
                            </div>
                        </div>
                        {/* Admin Message */}
                        <div className="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
                            <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold shrink-0">AD</div>
                            <div className="flex flex-col gap-1 items-end">
                                <div className="bg-primary text-white p-3 rounded-xl rounded-tr-none shadow-sm">
                                    <p className="text-sm">Hi James, since your application is already with Companies House (Awaiting Approval), we cannot modify the initial submission. You can add the director immediately after incorporation is successful via your dashboard.</p>
                                </div>
                                <div className="flex items-center gap-1 mr-1">
                                    <span className="material-symbols-outlined text-[12px] text-green-500">done_all</span>
                                    <span className="text-[10px] text-[#4e7597]">11:02 AM</span>
                                </div>
                            </div>
                        </div>
                        {/* Client Typing Indicator */}
                        <div className="flex items-center gap-2 text-[#4e7597]">
                            <div className="flex gap-1 px-3 py-2 bg-slate-200 dark:bg-slate-800 rounded-full">
                                <div className="w-1.5 h-1.5 bg-[#4e7597] rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-[#4e7597] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-1.5 h-1.5 bg-[#4e7597] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            </div>
                            <span className="text-[10px] font-medium italic">James is typing...</span>
                        </div>
                    </div>

                    {/* Chat Input Area */}
                    <div className="p-4 bg-white dark:bg-background-dark border-t border-[#d0dce7] dark:border-slate-700 shrink-0">
                        <div className="flex items-center gap-3 bg-[#e7eef3] dark:bg-slate-800 p-2 rounded-xl">
                            <button className="text-[#4e7597] hover:text-primary px-1">
                                <span className="material-symbols-outlined">attach_file</span>
                            </button>
                            <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 text-[#0e151b] dark:text-white outline-none" placeholder="Write a message... (Cmd + Enter to send)" type="text"/>
                            <button className="text-[#4e7597] hover:text-primary px-1">
                                <span className="material-symbols-outlined">sentiment_satisfied</span>
                            </button>
                            <button className="bg-primary text-white p-2 rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Contextual Sidebar */}
                <div className="w-72 flex flex-col border-l border-[#d0dce7] dark:border-slate-700 bg-white dark:bg-background-dark overflow-hidden shrink-0 hidden lg:flex">
                    {/* Sidebar Navigation (Tabs) */}
                    <div className="flex border-b border-[#d0dce7] dark:border-slate-700">
                        <button className="flex-1 py-3 text-xs font-bold border-b-[3px] border-primary text-[#0e151b] dark:text-white flex items-center justify-center gap-1">
                            <span className="material-symbols-outlined text-sm">auto_awesome</span> AI Assistant
                        </button>
                        <button className="flex-1 py-3 text-xs font-bold text-[#4e7597] hover:text-primary flex items-center justify-center gap-1">
                            <span className="material-symbols-outlined text-sm">sticky_note_2</span> Notes
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                        {/* AI Support Assistant Section */}
                        <div>
                            <h4 className="text-[10px] font-bold text-[#4e7597] uppercase tracking-wider mb-3">Suggested Responses</h4>
                            <div className="space-y-3">
                                <div className="p-3 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 cursor-pointer transition-colors group">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs font-bold text-primary">Add/Change Director</span>
                                        <span className="material-symbols-outlined text-xs text-primary opacity-0 group-hover:opacity-100">content_copy</span>
                                    </div>
                                    <p className="text-[11px] text-[#4e7597] line-clamp-2">"Once incorporated, you can add new directors via the 'Officers' tab in your dashboard..."</p>
                                </div>
                                <div className="p-3 rounded-lg border border-[#d0dce7] dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer group">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs font-bold text-[#0e151b] dark:text-white">Authentication Code</span>
                                        <span className="material-symbols-outlined text-xs text-[#4e7597] opacity-0 group-hover:opacity-100">content_copy</span>
                                    </div>
                                    <p className="text-[11px] text-[#4e7597] line-clamp-2">"The auth code is usually mailed by CH to your registered office within 5 days..."</p>
                                </div>
                                <div className="p-3 rounded-lg border border-[#d0dce7] dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer group">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs font-bold text-[#0e151b] dark:text-white">Lost Certificate</span>
                                        <span className="material-symbols-outlined text-xs text-[#4e7597] opacity-0 group-hover:opacity-100">content_copy</span>
                                    </div>
                                    <p className="text-[11px] text-[#4e7597] line-clamp-2">"You can download a digital copy of your Certificate of Incorporation from the Documents..."</p>
                                </div>
                            </div>
                        </div>
                        {/* Case Timeline */}
                        <div>
                            <h4 className="text-[10px] font-bold text-[#4e7597] uppercase tracking-wider mb-3">Submission Timeline</h4>
                            <div className="relative pl-4 space-y-4 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[#d0dce7] dark:before:bg-slate-700">
                                <div className="relative">
                                    <div className="absolute -left-[13px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary border-2 border-white dark:border-background-dark"></div>
                                    <p className="text-[11px] font-bold">Sent to Companies House</p>
                                    <p className="text-[10px] text-[#4e7597]">Oct 24, 09:12 AM</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[13px] top-1.5 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-background-dark"></div>
                                    <p className="text-[11px] font-bold">ID Verified Successfully</p>
                                    <p className="text-[10px] text-[#4e7597]">Oct 23, 15:45 PM</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[13px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-background-dark"></div>
                                    <p className="text-[11px] font-bold">Payment Processed</p>
                                    <p className="text-[10px] text-[#4e7597]">Oct 23, 14:20 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Internal Notes Quick Entry */}
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 border-t border-[#d0dce7] dark:border-slate-700 shrink-0">
                        <p className="text-[10px] font-bold text-[#4e7597] uppercase mb-2">Internal Note</p>
                        <textarea className="w-full h-20 bg-white dark:bg-slate-900 border border-[#d0dce7] dark:border-slate-700 rounded-lg text-xs placeholder:italic p-2 resize-none outline-none focus:border-primary" placeholder="Add a private note for admins..."></textarea>
                        <button className="w-full mt-2 py-2 bg-slate-200 dark:bg-slate-700 text-[#0e151b] dark:text-white text-xs font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">Save Note</button>
                    </div>
                </div>
            </div>
        </div>
    );
};