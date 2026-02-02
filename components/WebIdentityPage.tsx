
import React from 'react';

export const WebIdentityPage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#0e151a] dark:text-white antialiased font-sans min-h-screen flex flex-col animate-fade-in">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 w-full border-b border-[#e8edf2] dark:border-[#2d3741] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 lg:px-40 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('landing')}>
                        <div className="size-6 text-primary">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0e151a] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">UK Ltd Registration Portal</h2>
                    </div>
                    <div className="hidden md:flex items-center gap-9">
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('wizard')}>Registration</a>
                        <a className="text-primary text-sm font-semibold border-b-2 border-primary pb-1 cursor-pointer">Web Packages</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('resources')}>Help</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90" onClick={() => onNavigate('dashboard')}>
                            My Account
                        </button>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-[#e8edf2] dark:border-[#2d3741]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjfjVX9HwN70nhTrRNKJzTM1N0JIySeSQd00QDW0r8Vf7LM_Yp0r5wRL-OVAZN8UpOaQncX76bALmJaow4wZtvsBR8q8mebLv6gKKUNozRnUCsWlv_hrGckgLKvICEnDgKRLwK0KPwGtUXduhz0OzNUoexj4rvKCKmvMG9DCBa374Tj_3ll0e7tJ6QNMYb9D2XB9zRS_enIJYrCKq0KxSSFMDre0YAAQaZ14i7l-xtXGziqjLQscrXrIKhEx2CfpDPceR1R3JpYlHu")' }}></div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40 py-10 w-full">
                {/* Managed Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Managed by BlueOceanHub</span>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="flex-1 flex flex-col gap-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#0e151a] dark:text-white">
                            Launch Your Professional <span className="text-primary">UK Business</span> Website Today
                        </h1>
                        <p className="text-lg text-[#517594] dark:text-[#94a3b8] leading-relaxed">
                            Seamlessly integrate your new UK Ltd company with a high-performance WordPress presence. Hand-crafted designs optimized for the British market.
                        </p>
                        <div className="flex gap-4">
                            <button className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base hover:shadow-lg hover:shadow-primary/20 transition-all">
                                View Packages
                            </button>
                            <button className="h-12 px-8 rounded-lg bg-white dark:bg-background-dark border border-[#d1dce6] dark:border-[#2d3741] font-bold text-base hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                Compare Plans
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-[#f6f7f8] dark:from-primary/30 dark:to-background-dark border border-[#d1dce6] dark:border-[#2d3741] p-4 shadow-2xl overflow-hidden">
                            <img className="w-full h-full object-cover rounded-lg" alt="Modern WordPress business website mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmN-Kfb-pl2p0wSLoiyjCrPrM24Zteb-DhbzmO8zSg5uAFrJn9-BanSsHvyT9jUglKKgnMOBq-7J8nByMj_4l9cXCGy88KOnFy2YiRRE-_xgzESqRb0lIzk7jCa6zaV9y6LYrU-AaYKBHwm9xemhdbrqUEf7e5tg6hdCepb7PRqquYehMO0NvnA836Dc2sxk-Y8ps-m9xDb3BRndMbUgSgwCQX4_9whT1pa8K3jqHgHhVydithn1_OKflRDQ8e05fwvbVfkUXb4pZh" />
                        </div>
                        {/* Device Badges */}
                        <div className="absolute -bottom-6 -left-6 hidden md:block w-32 aspect-square bg-white dark:bg-background-dark p-2 rounded-xl shadow-xl border border-[#d1dce6] dark:border-[#2d3741]">
                            <img className="w-full h-full rounded-lg object-cover" alt="Mobile responsive mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJnDD0dcM9aEvTXHGnh_fdmtjSMAptGiYCcg9059cGWPWALGCdjGRUTDUGr0dQapPg8Ei7uhKFkc9SRPlGk1TUC8w5yHz62x7mJCtvj4rGZThL9wHovjMfxX7c0KSEH3XANqpB68Nb0jslgmqNR8wr7jy1T8XMjEccyjyTyJdgxv84tzKZS1WeBROn4Fpp8piuvSd7RxtlfCKSEiEfrez8AJovQPmO4QKqjYc2KGOo9U2qy1CVf8Su00u8r2-AMQKmurTls2DBgCE7" />
                        </div>
                    </div>
                </section>

                {/* Pillars Infographic */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                    <div className="flex items-center gap-4 p-5 rounded-xl border border-[#d1dce6] dark:border-[#2d3741] bg-white dark:bg-background-dark/50">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-[32px]">bolt</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#0e151a] dark:text-white text-lg">Speed</h3>
                            <p className="text-sm text-[#517594] dark:text-[#94a3b8]">UK-Edge Content Delivery</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 rounded-xl border border-[#d1dce6] dark:border-[#2d3741] bg-white dark:bg-background-dark/50">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-[32px]">shield</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#0e151a] dark:text-white text-lg">Security</h3>
                            <p className="text-sm text-[#517594] dark:text-[#94a3b8]">Enterprise-Grade Protection</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 rounded-xl border border-[#d1dce6] dark:border-[#2d3741] bg-white dark:bg-background-dark/50">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-[32px]">search_insights</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#0e151a] dark:text-white text-lg">SEO-Ready</h3>
                            <p className="text-sm text-[#517594] dark:text-[#94a3b8]">Optimized for UK Rankings</p>
                        </div>
                    </div>
                </section>

                {/* Package Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#0e151a] dark:text-white mb-4 tracking-tight">Choose Your Web Identity Package</h2>
                    <p className="text-[#517594] dark:text-[#94a3b8]">Professional grade solutions for every stage of your business growth.</p>
                </div>

                {/* Package Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
                    {/* Launchpad */}
                    <div className="flex flex-col rounded-xl border border-[#d1dce6] dark:border-[#2d3741] bg-white dark:bg-background-dark p-8 hover:shadow-xl transition-shadow relative">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">The Launchpad</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-[#0e151a] dark:text-white">£299</span>
                                <span className="text-xs font-semibold text-[#517594]">one-time</span>
                            </div>
                            <p className="text-xs text-[#517594] dark:text-[#94a3b8] mt-1">+ annual hosting fee</p>
                        </div>
                        <div className="flex-grow space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>WordPress Setup</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>1 Year Premium Hosting</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>Free SSL Certificate</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>1 Professional Niche Template</span>
                            </div>
                        </div>
                        <button className="w-full h-11 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                            Select Launchpad
                        </button>
                    </div>

                    {/* Authority */}
                    <div className="flex flex-col rounded-xl border-2 border-primary bg-white dark:bg-background-dark p-8 shadow-2xl relative scale-105 z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                            Most Popular
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">The Authority</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-[#0e151a] dark:text-white">£599</span>
                                <span className="text-xs font-semibold text-[#517594]">one-time</span>
                            </div>
                            <p className="text-xs text-[#517594] dark:text-[#94a3b8] mt-1">+ performance hosting</p>
                        </div>
                        <div className="flex-grow space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span className="font-semibold">Bespoke Custom Design</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>High-Performance Hosting</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>Professional Email Setup</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>3 Months Priority Support</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>Basic SEO Pack</span>
                            </div>
                        </div>
                        <button className="w-full h-11 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors">
                            Select Authority
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className="flex flex-col rounded-xl border border-[#d1dce6] dark:border-[#2d3741] bg-white dark:bg-background-dark p-8 hover:shadow-xl transition-shadow relative">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">The Enterprise</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-[#0e151a] dark:text-white">£1299</span>
                                <span className="text-xs font-semibold text-[#517594]">one-time</span>
                            </div>
                            <p className="text-xs text-[#517594] dark:text-[#94a3b8] mt-1">+ monthly management</p>
                        </div>
                        <div className="flex-grow space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>Full Custom Development</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>Fully Managed Cloud Hosting</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>Advanced SEO Strategy</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span className="font-semibold">Dedicated Account Manager</span>
                            </div>
                        </div>
                        <button className="w-full h-11 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                            Select Enterprise
                        </button>
                    </div>
                </section>

                {/* Feature Comparison Table */}
                <section className="mb-20 overflow-hidden rounded-xl border border-[#d1dce6] dark:border-[#2d3741] bg-white dark:bg-background-dark">
                    <div className="p-6 border-b border-[#e8edf2] dark:border-[#2d3741]">
                        <h3 className="text-xl font-bold">Feature Comparison</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-background-dark/50">
                                    <th className="p-4 text-sm font-bold border-r dark:border-[#2d3741]">Features</th>
                                    <th className="p-4 text-sm font-bold text-center border-r dark:border-[#2d3741]">Launchpad</th>
                                    <th className="p-4 text-sm font-bold text-center border-r dark:border-[#2d3741] text-primary">Authority</th>
                                    <th className="p-4 text-sm font-bold text-center">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e8edf2] dark:divide-[#2d3741]">
                                <tr>
                                    <td className="p-4 text-sm border-r dark:border-[#2d3741]">Domain Registration</td>
                                    <td className="p-4 text-center border-r dark:border-[#2d3741]"><span className="material-symbols-outlined text-green-500">check</span></td>
                                    <td className="p-4 text-center border-r dark:border-[#2d3741]"><span className="material-symbols-outlined text-green-500">check</span></td>
                                    <td className="p-4 text-center"><span className="material-symbols-outlined text-green-500">check</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-sm border-r dark:border-[#2d3741]">SSL Protection</td>
                                    <td className="p-4 text-center border-r dark:border-[#2d3741]">Standard</td>
                                    <td className="p-4 text-center border-r dark:border-[#2d3741] font-semibold">Premium</td>
                                    <td className="p-4 text-center font-bold">Wildcard</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-sm border-r dark:border-[#2d3741]">Daily Backups</td>
                                    <td className="p-4 text-center border-r dark:border-[#2d3741]"><span className="material-symbols-outlined text-gray-300">close</span></td>
                                    <td className="p-4 text-center border-r dark:border-[#2d3741]"><span className="material-symbols-outlined text-green-500">check</span></td>
                                    <td className="p-4 text-center"><span className="material-symbols-outlined text-green-500">check</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-sm border-r dark:border-[#2d3741]">Development Time</td>
                                    <td className="p-4 text-center border-r dark:border-[#2d3741]">3-5 Days</td>
                                    <td className="p-4 text-center border-r dark:border-[#2d3741]">7-10 Days</td>
                                    <td className="p-4 text-center">14-21 Days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Dynamic Add-ons */}
                <section className="p-8 rounded-xl border border-primary/30 bg-primary/5 mb-20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Need an Extra Boost?</h3>
                            <p className="text-[#517594] dark:text-[#94a3b8]">Add specialized services to any package in one click.</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-3 bg-white dark:bg-background-dark p-4 rounded-lg border border-[#d1dce6] dark:border-[#2d3741] shadow-sm">
                                <input className="rounded text-primary focus:ring-primary h-5 w-5" id="seo-audit" type="checkbox"/>
                                <label className="flex flex-col cursor-pointer" htmlFor="seo-audit">
                                    <span className="text-sm font-bold">SEO Deep Audit</span>
                                    <span className="text-xs text-primary">+ £149</span>
                                </label>
                            </div>
                            <div className="flex items-center gap-3 bg-white dark:bg-background-dark p-4 rounded-lg border border-[#d1dce6] dark:border-[#2d3741] shadow-sm">
                                <input className="rounded text-primary focus:ring-primary h-5 w-5" id="logo-design" type="checkbox"/>
                                <label className="flex flex-col cursor-pointer" htmlFor="logo-design">
                                    <span className="text-sm font-bold">Logo Design</span>
                                    <span className="text-xs text-primary">+ £99</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="bg-white dark:bg-background-dark border-t border-[#e8edf2] dark:border-[#2d3741] py-12">
                <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                        <div className="max-w-xs">
                            <div className="flex items-center gap-2 mb-4 text-[#0e151a] dark:text-white">
                                <div className="size-5 text-primary">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="font-bold">UK Portal</span>
                            </div>
                            <p className="text-sm text-[#517594] dark:text-[#94a3b8]">The official hub for new UK business registration and digital identity setup.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-sm uppercase tracking-widest text-[#517594]">Powered By</h4>
                            <div className="flex items-center gap-4">
                                <div className="h-8 w-24 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center font-bold text-xs text-gray-400">
                                    BOOKMETHAT
                                </div>
                                <div className="h-8 w-24 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center font-bold text-xs text-gray-400">
                                    BLUEOCEANHUB
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-sm uppercase tracking-widest text-[#517594]">Trust Badges</h4>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                    <span className="material-symbols-outlined text-[16px] text-[#517594]">verified</span>
                                    <span className="text-[10px] font-bold text-[#517594]">STRIPE VERIFIED</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                    <span className="material-symbols-outlined text-[16px] text-[#517594]">handshake</span>
                                    <span className="text-[10px] font-bold text-[#517594]">OFFICIAL PARTNER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-[#e8edf2] dark:border-[#2d3741] flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-[#517594] dark:text-[#94a3b8]">© 2024 UK Ltd Registration Portal. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a className="text-xs text-[#517594] hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <a className="text-xs text-[#517594] hover:text-primary transition-colors" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
