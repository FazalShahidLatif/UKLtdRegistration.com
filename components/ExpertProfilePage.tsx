
import React from 'react';

export const ExpertProfilePage = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-sans animate-fade-in flex flex-col">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e8edf2] dark:border-[#2d394a] px-6 md:px-10 py-3 bg-white dark:bg-background-dark shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={() => onNavigate('landing')}>
                        <div className="size-6">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
                        </div>
                        <h2 className="text-[#0e151a] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">UKLtdRegistration</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-9">
                        <a className="text-[#0e151a] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('resources')}>Expert Hub</a>
                        <a className="text-[#0e151a] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('seo-guide')}>SEO Hub</a>
                        <a className="text-[#0e151a] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate('resources')}>Resources</a>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-4 items-center">
                    <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                            <div className="text-[#517594] flex border-none bg-[#e8edf2] dark:bg-[#1d2732] items-center justify-center pl-4 rounded-l-xl">
                                <span className="material-symbols-outlined text-xl">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-[#e8edf2] dark:bg-[#1d2732] text-[#0e151a] dark:text-white focus:ring-0 h-full placeholder:text-[#517594] px-4 rounded-r-xl pl-2 text-sm outline-none" placeholder="Search insights..." />
                        </div>
                    </label>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-primary text-white text-sm font-bold transition-all hover:bg-opacity-90 active:scale-95">
                        <span className="truncate">Consultation</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-start py-10 px-4 sm:px-10 lg:px-40">
                <div className="flex flex-col max-w-[1000px] w-full gap-6">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 py-2">
                        <a className="text-[#517594] dark:text-gray-400 text-sm font-medium hover:text-primary cursor-pointer" onClick={() => onNavigate('landing')}>Home</a>
                        <span className="text-[#517594] dark:text-gray-600 text-sm">/</span>
                        <a className="text-[#517594] dark:text-gray-400 text-sm font-medium hover:text-primary cursor-pointer" onClick={() => onNavigate('resources')}>Global SEO Hub</a>
                        <span className="text-[#517594] dark:text-gray-600 text-sm">/</span>
                        <span className="text-[#0e151a] dark:text-white text-sm font-semibold">Authoritative Expert Profile</span>
                    </div>

                    {/* Expert Profile Card */}
                    <section className="bg-white dark:bg-[#1d2732] rounded-xl shadow-xl border border-[#e8edf2] dark:border-[#2d394a] overflow-hidden flex flex-col transition-all hover:shadow-2xl">
                        <div className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                {/* Profile Image with Badge */}
                                <div className="relative flex-shrink-0 group">
                                    <div className="size-40 rounded-full border-4 border-primary/10 p-1 bg-white dark:bg-background-dark">
                                        <div className="size-full rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVqMj8ld-OXSf1Y2foKSumt6LdaFRNjrBfiL6KLJcozlLnNNQvAkz3ajhmXZAGQgW2YAb3xz02nPoEStfNamP-fc-m-AIteCmWo4QDa9QdX5jSVP7PdEYGBPIlYy1snT2E5EaraQ6uKrbhzaKNZ0LQpSQU2CjBwrhgTJWTkzFwTRivpdePS9Wr-uv8S6U5xz1AVpA21X1-PkBGmNGBd4wJ52ToEnnKwAfJdK-Ku0LaPiD6-gaVOArcdp2gjpcOp-jzmKTQO9ojp_iY")' }}>
                                        </div>
                                    </div>
                                    {/* Verified Badge */}
                                    <div className="absolute -bottom-2 right-0 bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#B8860B] text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg border-2 border-white dark:border-[#1d2732] animate-pulse">
                                        <span className="material-symbols-outlined text-[14px] fill-1">verified</span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider">Verified Expert 2024</span>
                                    </div>
                                </div>
                                {/* Expert Details */}
                                <div className="flex-1 flex flex-col">
                                    <div className="flex flex-col mb-4">
                                        <h1 className="text-[#0e151a] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Alexander Thorne</h1>
                                        <p className="text-primary text-lg font-semibold flex items-center gap-2">
                                            LL.M., Senior Corporate Solicitor
                                            <span className="material-symbols-outlined text-lg">gavel</span>
                                        </p>
                                    </div>
                                    <p className="text-[#0e151a] dark:text-gray-200 text-base font-normal leading-relaxed mb-6">
                                        With over 15 years of specialized experience in UK company law, Alexander has facilitated the global expansion of hundreds of enterprises. His expertise bridges the gap between complex legal compliance and actionable strategic growth. He is a recognized authority on cross-border corporate structures and international tax efficiency.
                                    </p>
                                    {/* Expertise Pills */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 border border-primary/20 px-4">
                                            <span className="text-primary text-xs font-bold uppercase tracking-wide">Company Law</span>
                                        </div>
                                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 border border-primary/20 px-4">
                                            <span className="text-primary text-xs font-bold uppercase tracking-wide">International Tax</span>
                                        </div>
                                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 border border-primary/20 px-4">
                                            <span className="text-primary text-xs font-bold uppercase tracking-wide">Strategic Growth</span>
                                        </div>
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button 
                                            onClick={() => onNavigate('expert-booking')}
                                            className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
                                        >
                                            <span className="material-symbols-outlined mr-2">calendar_month</span>
                                            Book a 1:1 Consultation
                                        </button>
                                        <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-12 px-6 border-2 border-[#d1d5db] dark:border-gray-600 text-[#0e151a] dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95">
                                            <span className="material-symbols-outlined mr-2">person_add</span>
                                            LinkedIn Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Trust Bar & Footer */}
                        <div className="bg-[#f8fafb] dark:bg-[#141b24] border-t border-[#e8edf2] dark:border-[#2d394a] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-3xl">account_balance</span>
                                    <span className="text-[10px] font-bold leading-tight max-w-[80px] uppercase">The Law Society of England and Wales</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                                    <span className="text-[10px] font-bold leading-tight max-w-[80px] uppercase">Solicitors Regulation Authority</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center md:items-end text-right">
                                <p className="text-[#517594] dark:text-gray-500 text-[11px] font-medium tracking-tight">
                                    Managed by <span className="text-primary cursor-pointer hover:underline">BlueOceanHub.info</span>
                                </p>
                                <p className="text-[#517594] dark:text-gray-500 text-[11px] font-medium tracking-tight">
                                    Powered by <span className="text-primary cursor-pointer hover:underline">BookMeThat.com</span>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Profile Context/Description */}
                    <div className="px-4 py-2">
                        <h3 className="text-[#0e151a] dark:text-white text-xl font-bold mb-3">About the Authoritative Profile</h3>
                        <p className="text-[#517594] dark:text-gray-400 text-sm leading-normal">
                            This profile is part of the UKLtdRegistration verified directory. Experts featured here have undergone rigorous credential verification to provide the highest standard of legal and corporate registration guidance for 2024.
                        </p>
                    </div>
                </div>
            </main>

            <footer className="border-t border-[#e8edf2] dark:border-[#2d394a] py-8 px-10 text-center bg-white dark:bg-background-dark">
                <p className="text-sm text-[#517594] dark:text-gray-500">© 2024 UKLtdRegistration. All legal advice is subject to professional engagement terms.</p>
            </footer>
        </div>
    );
};
