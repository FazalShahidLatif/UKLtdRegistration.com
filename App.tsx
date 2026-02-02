
import React, { useState, useEffect } from 'react';
import { RegistrationData } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { NameCheckStep } from './components/NameCheckStep';
import { DetailsStep } from './components/DetailsStep';
import { DirectorIntakeStep } from './components/DirectorIntakeStep';
import { SuccessHub } from './components/SuccessHub';
import { StepWizard } from './components/StepWizard';
import { ResourceHub } from './components/ResourceHub';
import { AdminDashboard } from './components/AdminDashboard';
import { VendorPortal } from './components/VendorPortal';
import { AdminRefundQueue } from './components/AdminRefundQueue';
import { PhoneSelectionPage } from './components/PhoneSelectionPage';
import { WebIdentityPage } from './components/WebIdentityPage';
import { CompliancePage } from './components/CompliancePage';
import { EcosystemPage } from './components/EcosystemPage';
import { AdminHelpDesk } from './components/AdminHelpDesk';
import { SuperAdminSecurityPage } from './components/SuperAdminSecurityPage';
import { SeoGuidePage } from './components/SeoGuidePage';
import { SuperAdminAnalyticsPage } from './components/SuperAdminAnalyticsPage';
import { MobileSeoPage } from './components/MobileSeoPage';
import { ExpertProfilePage } from './components/ExpertProfilePage';
import { ExpertBookingPage } from './components/ExpertBookingPage';
import { SuperAdminPartnerStrategyPage } from './components/SuperAdminPartnerStrategyPage';
import { AffiliatePortalPage } from './components/AffiliatePortalPage';
import { SuperAdminLaunchChecklistPage } from './components/SuperAdminLaunchChecklistPage';

export const App = () => {
    const [view, setView] = useState<'landing' | 'wizard' | 'dashboard' | 'resources' | 'admin' | 'vendor' | 'admin-refunds' | 'phone-selection' | 'web-identity' | 'compliance' | 'ecosystem' | 'admin-help-desk' | 'super-admin-security' | 'seo-guide' | 'super-admin-analytics' | 'mobile-seo' | 'expert-profile' | 'expert-booking' | 'super-admin-partner-strategy' | 'affiliate-portal' | 'super-admin-launch-checklist'>('landing');
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<Partial<RegistrationData>>({});

    // Ensure smooth scrolling on view changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view, step]);

    const handleStartWizard = (data?: Partial<RegistrationData>) => {
        if (data) {
            setFormData(prev => ({ ...prev, ...data }));
        }
        setView('wizard');
        setStep(1);
    };

    const handleNext = (newData: Partial<RegistrationData>) => {
        setFormData(prev => ({ ...prev, ...newData }));
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        if (step === 1) {
            setView('landing');
            setFormData({}); 
        } else {
            setStep(prev => Math.max(1, prev - 1));
        }
    };

    const handleGoHome = () => {
        setView('landing');
        setStep(1);
        setFormData({});
    }

    const handleFinish = (finalData: Partial<RegistrationData>) => {
        setFormData(prev => ({ ...prev, ...finalData }));
        setView('dashboard');
    }

    const handleSignIn = () => {
        handleStartWizard();
    }

    const handleNavigate = (targetView: string) => {
        const validViews: any[] = [
            'landing', 'wizard', 'dashboard', 'resources', 'admin', 'vendor', 
            'admin-refunds', 'phone-selection', 'web-identity', 'compliance', 
            'ecosystem', 'admin-help-desk', 'super-admin-security', 'seo-guide', 
            'super-admin-analytics', 'mobile-seo', 'expert-profile', 'expert-booking', 
            'super-admin-partner-strategy', 'affiliate-portal', 'super-admin-launch-checklist'
        ];
        
        if (validViews.includes(targetView)) {
            setView(targetView as any);
            if (targetView === 'wizard') setStep(1);
        }
    }

    // High-Level View Switcher
    const renderView = () => {
        switch (view) {
            case 'dashboard': return <SuccessHub data={formData} onLogout={handleGoHome} onNavigate={handleNavigate} />;
            case 'admin': return <AdminDashboard onExit={handleGoHome} onNavigate={handleNavigate} />;
            case 'vendor': return <VendorPortal onExit={handleGoHome} />;
            case 'admin-refunds': return <AdminRefundQueue onExit={handleGoHome} onNavigate={handleNavigate} />;
            case 'phone-selection': return <PhoneSelectionPage onNavigate={handleNavigate} />;
            case 'web-identity': return <WebIdentityPage onNavigate={handleNavigate} />;
            case 'compliance': return <CompliancePage onNavigate={handleNavigate} />;
            case 'ecosystem': return <EcosystemPage onNavigate={handleNavigate} />;
            case 'admin-help-desk': return <AdminHelpDesk onNavigate={handleNavigate} onExit={handleGoHome} />;
            case 'super-admin-security': return <SuperAdminSecurityPage onNavigate={handleNavigate} onExit={handleGoHome} />;
            case 'seo-guide': return <SeoGuidePage onNavigate={handleNavigate} />;
            case 'super-admin-analytics': return <SuperAdminAnalyticsPage onNavigate={handleNavigate} onExit={handleGoHome} />;
            case 'mobile-seo': return <MobileSeoPage onNavigate={handleNavigate} />;
            case 'expert-profile': return <ExpertProfilePage onNavigate={handleNavigate} />;
            case 'expert-booking': return <ExpertBookingPage onNavigate={handleNavigate} />;
            case 'super-admin-partner-strategy': return <SuperAdminPartnerStrategyPage onNavigate={handleNavigate} />;
            case 'affiliate-portal': return <AffiliatePortalPage onNavigate={handleNavigate} onLogout={handleGoHome} />;
            case 'super-admin-launch-checklist': return <SuperAdminLaunchChecklistPage onNavigate={handleNavigate} />;
            default: return null;
        }
    }

    const specialViews = ['dashboard', 'admin', 'vendor', 'admin-refunds', 'phone-selection', 'web-identity', 'compliance', 'ecosystem', 'admin-help-desk', 'super-admin-security', 'seo-guide', 'super-admin-analytics', 'mobile-seo', 'expert-profile', 'expert-booking', 'super-admin-partner-strategy', 'affiliate-portal', 'super-admin-launch-checklist'];

    if (specialViews.includes(view)) {
        return renderView();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header onHome={handleGoHome} onSignIn={handleSignIn} showProfile={view === 'wizard'} onNavigate={handleNavigate} />
            
            {view === 'landing' && (
                <LandingPage 
                    onStart={(data) => handleStartWizard(data)} 
                    onNavigate={handleNavigate}
                />
            )}

            {view === 'resources' && (
                <ResourceHub onNavigate={handleNavigate} />
            )}

            {view === 'wizard' && (
                <main className="flex-grow max-w-[1280px] mx-auto w-full px-6 py-10">
                    <div className="w-full">
                        <StepWizard step={step} />
                        
                        {step === 1 && <NameCheckStep onNext={handleNext} onBack={handleBack} data={formData} />}
                        {step === 2 && <DetailsStep onNext={handleNext} onBack={handleBack} data={formData} />}
                        {step === 3 && <DirectorIntakeStep onNext={handleFinish} onBack={handleBack} data={formData as RegistrationData} />}
                    </div>
                </main>
            )}

            {(view === 'landing' || view === 'resources') && (
                <Footer 
                    onAdminClick={() => handleNavigate('admin')} 
                    onVendorClick={() => handleNavigate('vendor')} 
                    onAffiliateClick={() => handleNavigate('affiliate-portal')} 
                />
            )}
            
            {view === 'wizard' && (
                <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-auto bg-white/50 dark:bg-transparent">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 px-6">
                        <p>© 2026 UKLtdRegistration.com. Powered by blueoceanhub.info</p>
                        <div className="flex gap-6">
                            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                            <a className="hover:text-primary transition-colors" href="#">Help Center</a>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
};
