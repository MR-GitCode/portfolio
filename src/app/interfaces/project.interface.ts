export interface Project {
    title: string;
    description: {
        de: string;
        en: string;
    };
    imgURL: string;
    demoURL: string;
    order?: number;
    id: string;
    showSticker?: boolean;
}