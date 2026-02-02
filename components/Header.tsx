
import React from 'react';

export const Header = ({ onHome, onSignIn, showProfile, onNavigate }: { onHome: () => void, onSignIn: () => void, showProfile?: boolean, onNavigate: (view: string) => void }) => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-[#0a0f18] sticky top-0 z-50 shadow-sm transition-colors duration-200">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={onHome} aria-label="Go to Homepage">
                <div className="size-10 text-primary transition-transform group-hover:scale-110">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-slate-900 dark:text-white text-xl font-black leading-tight tracking-tighter">UKLtdRegistration</h2>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">by BlueOceanHub</span>
                </div>
            </div>
            
            <nav className="hidden lg:flex flex-1 justify-center gap-10 items-center">
                 <button 
                    className="text-slate-600 dark:text-slate-300 text-sm font-bold hover:text-primary transition-colors cursor-pointer" 
                    onClick={() => onNavigate('landing')}
                 >Home</button>
                 <button 
                    className="text-slate-600 dark:text-slate-300 text-sm font-bold hover:text-primary transition-colors cursor-pointer" 
                    onClick={() => onNavigate('resources')}
                 >Knowledge Base</button>
                 <button 
                    className="text-slate-600 dark:text-slate-300 text-sm font-bold hover:text-primary transition-colors cursor-pointer" 
                    onClick={() => onNavigate('phone-selection')}
                 >Phone Presence</button>
                 <button 
                    className="text-slate-600 dark:text-slate-300 text-sm font-bold hover:text-primary transition-colors cursor-pointer" 
                    onClick={() => onNavigate('web-identity')}
                 >Web Identity</button>
                 <button 
                    className="text-slate-600 dark:text-slate-300 text-sm font-bold hover:text-primary transition-colors cursor-pointer" 
                    onClick={() => onNavigate('compliance')}
                 >Compliance</button>
            </nav>
            
            <div className="flex items-center gap-4">
                {showProfile ? (
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-bold text-slate-900 dark:text-white">Active Founder</p>
                            <a href="https://blueoceanhub.info" target="_blank" rel="noopener noreferrer" className="text-[10px] text-primary font-bold hover:underline">BlueOceanHub Elite</a>
                        </div>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASzNpUXXm_l-IOLfJpS1l7RBFadH46C5LJprFEVWcaeREt0iyD6eBZhMlNtDU9QjykNMCx9xZXHez3gDJm-9nANYuhs4dwsu_UhezO64STD0kNgh2ngJW_5cjJubOM7xrNhqPl3sJXW0GJw0_63-vc3PRlrELwIqtAOfXs_ew6mUE1b_91MqxKmbSammOsZhXqDH6a6GHU_nzzk1fxOCJw8NGYA6TGGuBMKcWwmJA5YY0U_3MX2UYq6oTdKEnqrTxFRZSKQepM6TSf")' }}></div>
                    </div>
                ) : (
                    <button 
                        onClick={onSignIn} 
                        className="bg-primary text-white text-sm font-black px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all transform active:scale-95"
                    >
                        Start Setup
                    </button>
                )}
            </div>
        </header>
    );
};
