
import React from 'react';

export const Footer = ({ onAdminClick, onVendorClick, onAffiliateClick }: { onAdminClick?: () => void, onVendorClick?: () => void, onAffiliateClick?: () => void }) => {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 mt-20 pt-20 pb-12 bg-white dark:bg-[#0a0f18]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-8 text-primary">
                                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black tracking-tighter">UKLtdRegistration</h3>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-base max-w-sm leading-relaxed mb-6">
                            Streamlining UK company formation for the next generation of global entrepreneurs. Authorized formation agent #81294.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://blueoceanhub.info" target="_blank" className="text-primary font-bold hover:underline flex items-center gap-1">
                                BlueOceanHub.info <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">Knowledge Hub</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">SEO Guides</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">SIC Code Lookup</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">Terms of Service</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">Privacy Policy</a></li>
                            {onAdminClick && (
                                <li><a onClick={onAdminClick} className="text-slate-500 hover:text-primary transition-colors text-sm font-bold cursor-pointer">Admin Access</a></li>
                            )}
                        </ul>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 dark:border-slate-800 gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                            Powered by <a href="https://blueoceanhub.info" target="_blank" className="text-primary hover:underline">blueoceanhub.info</a>
                        </p>
                        <p className="text-xs text-slate-400 mt-1">© 2026 UKLtdRegistration. Global Gateway for Entrepreneurs.</p>
                    </div>
                    <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                        <span className="material-symbols-outlined text-3xl">verified_user</span>
                        <span className="material-symbols-outlined text-3xl">payments</span>
                        <span className="material-symbols-outlined text-3xl">gavel</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
