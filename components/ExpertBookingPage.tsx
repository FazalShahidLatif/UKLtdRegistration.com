
import React, { useState } from 'react';

export const ExpertBookingPage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    const [selectedExpert, setSelectedExpert] = useState<string | null>(null);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#0e151a] dark:text-white font-sans animate-fade-in flex flex-col">
            {/* Header */}
            <header className="bg-white dark:bg-[#1a242e] border-b border-[#e8edf2] dark:border-gray-700 px-6 lg:px-40 py-3 sticky top-0 z-50">
                <div className="flex items-center justify-between max-w-[1280px] mx-auto">
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('landing')}>
                        <div className="text-primary size-8">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
                        </div>
                        <h2 className="text-lg font-black tracking-tight">UKLtdRegistration</h2>
                    </div>
                    <div className="flex items-center gap-8">
                        <nav className="hidden md:flex items-center gap-9">
                            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('expert-profile')}>Experts</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('landing')}>Services</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('resources')}>Resources</a>
                        </nav>
                        <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#165a96] transition-all">Sign In</button>
                        <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA92szwSW1XvBVJyhM3Jz48xTw-XXyRX2Iw9rFEItG6hnDMBxqnIJUPmgua4ljjbMKCdlGxXGfUU7b8x2gzUTDljpY5GDJp3GywAmtxO3lbmlE00wYc7KJ_ENwcW6v4VtlU4qS4g_PpU3-SWrx3Y7FkUWJZVWasckJODwfrHBVErDnhy8JcGfZ6-obuTAs1YSUoti2nKtnHl1sxjYRUaTd2BB9Gfe4KslIa1ls4gV_baXgGheI5ZekvPjyD2E7Rcu1onuN1TQxU5Y8u")' }}></div>
                    </div>
                </div>
            </header>

            <main className="flex-grow max-w-[1280px] mx-auto w-full px-6 lg:px-40 py-8">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 mb-6">
                    <a className="text-[#517594] text-sm font-medium hover:underline cursor-pointer" onClick={() => onNavigate('landing')}>Home</a>
                    <span className="material-symbols-outlined text-sm text-[#517594]">chevron_right</span>
                    <span className="text-[#0e151a] dark:text-gray-300 text-sm font-medium">Consultation Booking 2024</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Booking Area */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Page Heading */}
                        <div className="space-y-2">
                            <h1 className="text-4xl font-black tracking-tight leading-tight">Expert Consultation Booking</h1>
                            <p className="text-[#517594] dark:text-gray-400 text-lg max-w-2xl">Connect with legal and strategy experts powered by BookMeThat.com logic.</p>
                        </div>

                        {/* Progress Bar */}
                        <div className="bg-white dark:bg-[#1a242e] p-6 rounded-xl border border-[#e8edf2] dark:border-gray-700 shadow-sm">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Step 1 of 4</p>
                                    <p className="text-lg font-bold">Expert Selection</p>
                                </div>
                                <p className="text-primary font-bold">25% Complete</p>
                            </div>
                            <div className="h-2 w-full bg-[#d1dce6] dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: '25%' }}></div>
                            </div>
                            <div className="flex justify-between mt-3 text-xs font-medium text-[#517594] dark:text-gray-400">
                                <span className="text-primary">Experts</span>
                                <span>Calendar</span>
                                <span>Intake Form</span>
                                <span>Payment</span>
                            </div>
                        </div>

                        {/* Section: Step 1 Expert Selection */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold tracking-tight">Select an Expert</h2>
                                <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded uppercase">3 Specialists Online</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Expert Card 1 */}
                                <div className={`bg-white dark:bg-[#1a242e] border-2 rounded-xl p-5 relative shadow-md transition-all cursor-pointer ${selectedExpert === 'alexander' ? 'border-primary ring-2 ring-primary/20' : 'border-transparent dark:border-gray-700 hover:border-primary/50'}`} onClick={() => setSelectedExpert('alexander')}>
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[12px]">verified</span> Verified Expert 2024
                                        </span>
                                    </div>
                                    <div className="flex gap-4 mb-4">
                                        <div className="size-20 rounded-lg bg-cover bg-center border border-gray-100" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARCKqpuHEin2md6dfv83QLoPfS8r0XMFvZSSzzjjKO2jjazI9g4Gnj89MRwGT4MyJRihqTz-WowiWCMj9VpMhIta4yo0l652GPFJf2C6PNLtXVjdk4Ll-zqfjPHdaiL2A2T83p-VDRBocB6Rdq1BA8p6NuWLzVdUCAJ6XTeiNArl_WKOGlX_848CXkbQeQCgttppmeCc7mExjVsXSL7gEa9AkIuTC12gvhsOQIk8iLrGvN8oZS__1gTGqBS5YTkVCA_BzC9UI-jcM6")' }}></div>
                                        <div>
                                            <h3 className="text-lg font-bold">Alexander Thorne</h3>
                                            <p className="text-sm text-primary font-semibold">Strategic Lead &amp; UK Specialist</p>
                                            <div className="flex items-center gap-1 mt-1 text-[#517594]">
                                                <span className="material-symbols-outlined text-sm">schedule</span>
                                                <span className="text-xs font-medium">45-min sessions</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#517594] dark:text-gray-400 mb-6 line-clamp-2 italic">"Helping founders navigate UK incorporation and global scaling strategy since 2015."</p>
                                    <button className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${selectedExpert === 'alexander' ? 'bg-primary text-white hover:bg-[#165a96]' : 'border border-primary text-primary hover:bg-primary/5'}`}>
                                        {selectedExpert === 'alexander' ? 'Selected' : 'Select Expert'} {selectedExpert !== 'alexander' && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
                                    </button>
                                </div>
                                {/* Expert Card 2 */}
                                <div className={`bg-white dark:bg-[#1a242e] border-2 rounded-xl p-5 relative shadow-md transition-all cursor-pointer ${selectedExpert === 'elena' ? 'border-primary ring-2 ring-primary/20' : 'border-transparent dark:border-gray-700 hover:border-primary/50'}`} onClick={() => setSelectedExpert('elena')}>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full">Top Rated</span>
                                    </div>
                                    <div className="flex gap-4 mb-4">
                                        <div className="size-20 rounded-lg bg-cover bg-center border border-gray-100" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATzXf6OwmLT_0uAF8wE76FDgYbGJtN_FilvhpBRY5UELySfdKQa-KJg8GGzWI_NDZsguD86bRTgGaZd4Ebnh51GIJJLiYV09YZEY1mg9Zg9DcXy8fSXAIyAKb1lQe9iLcXuzdWtrhnRwLhXlOBGEFUBWgT6rsfJqqp9BiLzcJ2WHRUEaDufcFf2_ASUF_A9hlkdZhE3_qdeNCqKAwd3pI5S1shq7OHTIzokAPTVk_eVqQPou6mjTTjzwsE4ORMdmTfC9tB0WIwKSRB")' }}></div>
                                        <div>
                                            <h3 className="text-lg font-bold">Elena Rodriguez</h3>
                                            <p className="text-sm text-primary font-semibold">Legal Compliance Officer</p>
                                            <div className="flex items-center gap-1 mt-1 text-[#517594]">
                                                <span className="material-symbols-outlined text-sm">schedule</span>
                                                <span className="text-xs font-medium">60-min sessions</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#517594] dark:text-gray-400 mb-6 line-clamp-2 italic">"Specializing in international tax law and multi-jurisdictional compliance for startups."</p>
                                    <button className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${selectedExpert === 'elena' ? 'bg-primary text-white hover:bg-[#165a96]' : 'border border-primary text-primary hover:bg-primary/5'}`}>
                                        {selectedExpert === 'elena' ? 'Selected' : 'Select Expert'}
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Section: Step 2 Calendar */}
                        <section className={`bg-white dark:bg-[#1a242e] border border-[#e8edf2] dark:border-gray-700 rounded-xl p-6 transition-all duration-500 ${selectedExpert ? 'opacity-100' : 'opacity-60 pointer-events-none'}`}>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">calendar_month</span>
                                <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-200">Calendar Integration</h2>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center p-12">
                                {selectedExpert ? (
                                    <>
                                        <p className="text-sm font-bold text-primary mb-4">Availability for {selectedExpert === 'alexander' ? 'Alexander' : 'Elena'}</p>
                                        <div className="grid grid-cols-3 gap-2 w-full max-w-sm">
                                            {['09:00 AM', '11:30 AM', '02:00 PM', '03:45 PM', '05:00 PM'].map(time => (
                                                <button key={time} className="px-4 py-2 bg-white dark:bg-[#121920] border border-gray-200 dark:border-gray-600 rounded text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Select an expert to unlock calendar</p>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-6">
                        {/* Why Book Section */}
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-xl shadow-primary/20">
                            <h3 className="text-xl font-bold mb-6">Why book a strategy session?</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="size-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-sm">verified_user</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Official UK Guidance</p>
                                        <p className="text-xs text-white/80 leading-relaxed">Direct advice on HMRC and Companies House requirements.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="size-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-sm">public</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Global Scale Strategy</p>
                                        <p className="text-xs text-white/80 leading-relaxed">Frameworks for UK, USA, and International founders.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="size-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-sm">payments</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Tax Efficiency</p>
                                        <p className="text-xs text-white/80 leading-relaxed">Learn how to optimize your setup for long-term growth.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-10 pt-8 border-t border-white/10">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-4">Certified Partners</p>
                                <div className="flex gap-4 items-center">
                                    <div className="h-6 w-auto opacity-80 bg-white/10 px-2 rounded flex items-center justify-center">
                                        <span className="text-[10px] font-black tracking-tighter">HMRC</span>
                                    </div>
                                    <div className="h-6 w-auto opacity-80 bg-white/10 px-2 rounded flex items-center justify-center">
                                        <span className="text-[10px] font-black tracking-tighter">COMPANIES HOUSE</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Stats */}
                        <div className="bg-white dark:bg-[#1a242e] border border-[#e8edf2] dark:border-gray-700 p-6 rounded-xl">
                            <div className="flex items-center gap-2 text-primary mb-4">
                                <span className="material-symbols-outlined">stars</span>
                                <span className="text-sm font-bold uppercase tracking-wide">User Feedback</span>
                            </div>
                            <p className="text-2xl font-black">4.9/5.0</p>
                            <p className="text-xs text-[#517594] dark:text-gray-400 mt-1 mb-4">Average expert rating across 12,000+ bookings in 2023.</p>
                            <div className="flex -space-x-3 overflow-hidden">
                                <img className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-[#1a242e]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAg-nc9IfqRQeORv2l3VWHZMGdKh4sWDqgtaZrf_AliwriQi7G9Zmvpr2i3RiwpXsseGkkaJG0UiYg_SPnaih-PAG1ag26n5CChHHxZWMRhfjFbZdRHraeNlU9qFxV6-KmJcfrWhIY5D_UOZx83_IVfuDrbRNEyF9r6oJNLpDwy2E0_buZaRsxENgZ6SkwIhqxBRScSCMXNvjPKvnG67oviZ77t9LqzuyrUYyCguNO5nZlvqBORsKRrY_uzk-ydUbAsA0ir0hyk2UB" />
                                <img className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-[#1a242e]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAt9l9yG3NScASI6QMDe5bi3iEs1pYKavgIYDVeLN-QzP35thKjMIZAodgQYPQX8A8yNoLJoo1KoTxG6LvT7vuOOmL2o_MtMARYepEOeKdNyixv7gNq6x9CeVEUulI2goVmMSUDqaVK04tyv8Q72bvVbieLC_tK-22j23o0XTJRaXsoFNljTvgr5z7Uuc3MBSLfuude431P2KzfvOIiAr4P942ytYgoqcmYXUgpTo5K-K_MmjVaRDU6Axivq-N_-F556KlVuFCAUX2" />
                                <img className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-[#1a242e]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC077DcsWrY3mXo-CGyN18tcmTH7lYamUFpRPnSbkk_1sKQyruDy6s0Nsl-Bt3wlCH9dJ8-TwBfMRHjML7WZrjahz5lo8CV_lEn2xmdZqdQ_HS5_YyXryShNQ8Yh-vRx_wL8N_7wueLcgvXkq-vKWIjymleyY-Mx1PAMS-RQnW2i1BCYW0IIL_unaOSGcOtYtoF7_zZHgmIndvqYz17hY-6rVwR0IJwT74l_SiEUrHMKrIoj7vo_YGQJ0QPZSai4FHU2gzCIW3weJA7" />
                                <div className="flex items-center justify-center size-8 rounded-full bg-gray-100 dark:bg-gray-700 text-[10px] font-bold text-gray-600 dark:text-gray-300 ring-2 ring-white dark:ring-[#1a242e]">+1k</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-[#1a242e] border-t border-[#e8edf2] dark:border-gray-700 py-10 px-6 lg:px-40 mt-auto">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-[#517594] font-medium">© 2024 UKLtdRegistration. All rights reserved.</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold text-[#517594]">
                        <a className="hover:text-primary" href="#">Privacy Policy</a>
                        <a className="hover:text-primary" href="#">Terms of Service</a>
                        <a className="hover:text-primary" href="#">Stripe Secure</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[10px] font-bold text-[#517594] uppercase tracking-tighter">Powered by</p>
                        <div className="flex items-center gap-1 font-black text-sm text-[#0e151a] dark:text-white">
                            <span className="material-symbols-outlined text-primary text-lg">event_available</span>
                            BookMeThat.com
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
