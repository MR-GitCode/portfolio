export interface Testimonial {
    author: string;

    text: {
        de: string;
        en: string;
    };

    profilURL: string;
    role: string;
    order?: number;
    company: string
}

export interface TestimonialsContent {
    subtitle: {
        de: string;
        en: string;
    };
    
    title: {
        de: string;
        en: string;
    };
}