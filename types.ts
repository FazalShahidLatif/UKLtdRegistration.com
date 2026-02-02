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