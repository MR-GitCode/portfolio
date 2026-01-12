export interface LegalContent {
    imprint: {
        de: { title: string }[];
        en: { title: string }[];
        title: {
            de: string;
            en: string;
        } 
    };

    privacyPolicy: {
        de: { title: string, text: string[] }[];
        en: { title: string, text: string[] }[];
        title: {
            de: string;
            en: string;
        } 
    };
}