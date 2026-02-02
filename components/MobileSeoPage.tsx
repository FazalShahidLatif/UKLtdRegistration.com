
import React from 'react';

export const MobileSeoPage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-white font-sans min-h-screen flex justify-center bg-[#0a0a14] animate-fade-in">
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            {/* Mobile Container Emulator */}
            <div className="relative w-full max-w-[430px] bg-background-light dark:bg-[#121220] border-x border-[#262745] shadow-2xl flex flex-col min-h-screen">
                {/* Sticky Header & Progress Bar */}
                <div className="sticky top-0 z-50 w-full bg-[#121220]/95 backdrop-blur-md border-b border-[#262745]">
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-[#363763]">
                        <div className="h-full bg-primary" style={{ width: '35%' }}></div>
                    </div>
                    <header className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('landing')}>
                            <div className="size-6 text-primary">
                                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                                </svg>
                            </div>
                            <span className="text-lg font-bold tracking-tight text-white">UK Ltd</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-1 rounded-lg bg-[#262745] px-2 py-1 text-xs font-bold border border-[#363763] text-white">
                                <span className="material-symbols-outlined !text-sm">language</span>
                                EN-UK
                            </button>
                            <button className="p-1 text-white">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                    </header>
                </div>

                {/* Geo-Detection Banner */}
                <div className="px-4 pt-4">
                    <div className="flex items-center justify-between gap-3 rounded-lg border border-primary/30 bg-primary/10 p-3">
                        <div className="flex flex-col gap-0.5">
                            <p className="text-[13px] font-bold leading-none text-white">Content localized</p>
                            <p className="text-[11px] text-[#9697c5]">Detected location: London, UK</p>
                        </div>
                        <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white transition-all active:scale-95">
                            Change
                        </button>
                    </div>
                </div>

                {/* Article Content */}
                <main className="flex-1 pb-20">
                    {/* Page Heading */}
                    <div className="px-4 pt-6 pb-4">
                        <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-white mb-3">
                            How to Register a UK Ltd Company: The Ultimate 2024 Guide
                        </h1>
                        <div className="flex items-center gap-2 text-[#9697c5] text-xs font-medium">
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-sm">person</span> Sarah Jenkins</span>
                            <span className="size-1 rounded-full bg-[#363763]"></span>
                            <span>15 min read</span>
                        </div>
                    </div>

                    {/* Intro Body Text */}
                    <div className="px-4">
                        <p className="text-[#cbd5e1] text-lg leading-relaxed mb-6 font-normal">
                            Starting a business in the UK is a streamlined process, but understanding the legal requirements is crucial for long-term SEO and authority. This comprehensive pillar guide covers everything from choosing a name to filing with Companies House in the 2024 regulatory landscape.
                        </p>
                    </div>

                    {/* Full-Width Featured Image */}
                    <div className="w-full my-6">
                        <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAk1BrdBhVxvBw_AbJneZYxhc24Ma_zsM1wh9m3oLmt4QQ45oMfsjB1k_39WZYzPPnlG6nr3_TWQYhAknQq7Id5UqmP0D10pxjPc7A9cHO2NnytMXUbBIZpWcMMiWkDhqyWleP8grdWKzDwjbv3P6qjH2uRejmITo6YFJ9ypkYzF8HoI8DmWIm2jI_fVTAQGl20HvD2DzfS0zhVov9bVnFi9N8lfjicWt5ieAx-vOiUzPhoizJd9BACsMq6Rl9NKyWfLofLKkV5071a")' }}></div>
                        <p className="px-4 mt-2 text-[11px] text-[#9697c5] italic">The City of London: A global hub for registered UK limited companies.</p>
                    </div>

                    {/* Inline Search Widget */}
                    <div className="px-4 my-8">
                        <div className="rounded-xl bg-[#1a1b3a] p-5 border border-[#262745] shadow-xl">
                            <h3 className="text-lg font-bold text-white mb-4">Check Company Name Availability</h3>
                            <div className="flex flex-col gap-3">
                                <div className="relative">
                                    <input className="w-full rounded-lg bg-[#262745] border-[#363763] text-white px-4 py-3 placeholder:text-[#9697c5] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Enter your business name" type="text" />
                                    <span className="absolute right-3 top-3 text-[#9697c5]">.ltd.uk</span>
                                </div>
                                <button 
                                    onClick={() => onNavigate('wizard')}
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">search</span>
                                    Check Availability
                                </button>
                            </div>
                            <p className="mt-3 text-[11px] text-center text-[#9697c5]">Free search across Companies House registry.</p>
                        </div>
                    </div>

                    {/* Deep Dive Content */}
                    <article className="px-4 space-y-6">
                        <h2 className="text-2xl font-bold text-white pt-2">1. Choosing Your Business Structure</h2>
                        <p className="text-[#cbd5e1] text-base leading-relaxed">
                            The Private Limited Company (Ltd) is the most popular choice for startups due to its limited liability protection. For international entrepreneurs, it provides a stable legal framework that is recognized globally by banks and investors alike.
                        </p>
                        <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                            <p className="text-sm italic text-[#9697c5]">
                                "Establishing a UK entity can significantly boost your brand's authority in European markets, regardless of where you are physically located."
                            </p>
                        </div>
                        <h2 className="text-2xl font-bold text-white pt-2">2. Legal Requirements for 2024</h2>
                        <p className="text-[#cbd5e1] text-base leading-relaxed">
                            To register, you must provide a registered office address in the UK. This address will be public and used for all official correspondence from HMRC and Companies House. Many non-residents opt for a virtual office service to satisfy this requirement.
                        </p>
                    </article>

                    {/* Read Next Carousel */}
                    <div className="mt-12 mb-8">
                        <div className="px-4 flex justify-between items-end mb-4">
                            <h3 className="text-xl font-bold text-white">Read Next</h3>
                            <a className="text-primary text-sm font-bold cursor-pointer">View all</a>
                        </div>
                        <div className="flex overflow-x-auto gap-4 px-4 pb-4 hide-scrollbar">
                            {/* Carousel Item 1 */}
                            <div className="min-w-[260px] bg-[#1a1b3a] rounded-xl border border-[#262745] overflow-hidden">
                                <div className="h-32 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA49OWL35B7k6Sb7tTIV0nHGDrVZExV4aO7bQE7plK6LuGlaQUuyd-FgCd8iwuI7XhB6NNl93KO9wYOkdXCV2ruBKflnUe8B3a6DJ0-YM_7iDDZeiBXdwPh3Jyhaoltmt-k988OjZUMyBA0GJb_YKIdgzNlFMnUjxOupfuC2wNKEenZxNiloPaUHXZ-nyqvmnQP7po6IDgyGl7JsWUFVVVEfAm5qQQ-vVXkPqVyeogazL3I9GHg_ZMvl0TKax1t-7ynCBdnmKnGBm0b")' }}></div>
                                <div className="p-4">
                                    <h4 className="font-bold text-sm mb-2 line-clamp-2 text-white">Registering a Delaware LLC for UK Residents</h4>
                                    <p className="text-[#9697c5] text-xs">8 min read</p>
                                </div>
                            </div>
                            {/* Carousel Item 2 */}
                            <div className="min-w-[260px] bg-[#1a1b3a] rounded-xl border border-[#262745] overflow-hidden">
                                <div className="h-32 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxTT8GKJGaNBi8mvL_5eIEVEcrk4C9y6iZfcQ_rl833LQIuhuNvLOCHbV7rAi7FPEywYpbdHycmUa-lJzgJYX4o7yuSgAqKNybqcXF9cEr-eIaGiUMMizmG5ykugE0IrOzrccCdEQrcFk68bTpsGyud5vrRH4xFcSsL8YmINSpr87S_0zE5SNzc4vQtfXRjkTKjRNF2LPOND0WcU70AHwNk0zLswmdbCYqibRloipQk2A4O-D4nWAsEh5ZiFbz9fs7FHRx0-FzDKqo")' }}></div>
                                <div className="p-4">
                                    <h4 className="font-bold text-sm mb-2 line-clamp-2 text-white">VAT Requirements for EU Trade Post-Brexit</h4>
                                    <p className="text-[#9697c5] text-xs">12 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compressed Footer */}
                    <footer className="bg-[#0a0a14] border-t border-[#262745] p-6 text-center mt-10">
                        <div className="flex justify-center gap-6 mb-6">
                            <span className="material-symbols-outlined text-[#9697c5]">verified</span>
                            <span className="material-symbols-outlined text-[#9697c5]">security</span>
                            <span className="material-symbols-outlined text-[#9697c5]">public</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs font-medium text-[#9697c5] mb-8">
                            <a className="hover:text-white cursor-pointer">Privacy Policy</a>
                            <a className="hover:text-white cursor-pointer">Terms of Service</a>
                            <a className="hover:text-white cursor-pointer">Contact Us</a>
                            <a className="hover:text-white cursor-pointer">Pricing</a>
                        </div>
                        <p className="text-[10px] text-[#4a4b7c]">© 2024 UK Ltd Registration Hub. All rights reserved.</p>
                    </footer>
                </main>

                {/* Floating Table of Contents */}
                <button className="fixed bottom-20 right-[calc(50%-180px)] md:right-auto md:absolute md:bottom-20 md:right-6 z-50 size-14 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center transition-transform active:scale-90 ring-4 ring-[#121220]">
                    <span className="material-symbols-outlined text-3xl">list_alt</span>
                </button>

                {/* Sticky Bottom CTA (Mobile Optimized) */}
                <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#121220]/95 backdrop-blur-md border-t border-[#262745] p-3 z-40">
                    <div className="flex gap-3">
                        <button 
                            onClick={() => onNavigate('wizard')}
                            className="flex-1 bg-primary text-white font-bold py-3 rounded-lg text-sm transition-all active:scale-95"
                        >
                            Start Registration
                        </button>
                        <button className="size-11 flex items-center justify-center rounded-lg bg-[#262745] border border-[#363763] text-white">
                            <span className="material-symbols-outlined">bookmark</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
