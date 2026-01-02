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