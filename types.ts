
export interface AnalysisResult {
    isAvailable: boolean;
    score: number;
    reason: string;
    alternatives: string[];
}

export interface SicSuggestion {
    code: string;
    description: string;
}

export interface DirectorDetails {
    firstName: string;
    lastName: string;
    email: string;
}

export interface RegistrationData {
    companyName: string;
    sic: SicSuggestion | null;
    director: DirectorDetails | null;
    privacy: 'public' | 'private';
    address?: string;
    extras?: {
        office: boolean;
        solicitor: boolean;
    };
}

export interface StepProps {
    onNext: (data: Partial<RegistrationData>) => void;
    onBack?: () => void;
    data?: Partial<RegistrationData>;
}

export interface Article {
    id: string;
    title: string;
    subtitle?: string;
    tag: string;
    readTime: string;
    date: string;
    image: string;
    content: string;
    relatedIds: string[];
}

export type ViewType = 'landing' | 'wizard' | 'dashboard' | 'resources' | 'admin' | 'vendor' | 'admin-refunds' | 'phone-selection' | 'web-identity' | 'compliance' | 'ecosystem' | 'admin-help-desk' | 'super-admin-security' | 'seo-guide' | 'super-admin-analytics' | 'mobile-seo' | 'expert-profile' | 'expert-booking' | 'super-admin-partner-strategy' | 'affiliate-portal' | 'super-admin-launch-checklist' | 'article';
