export interface ProjectsOverviewContent {
    subtitle: {
        de: string;
        en: string;
    };

    text: {
        de: string;
        en: string;
    };

    title: {
        de: string;
        en: string;
    };
}

export interface Project {
    animationImg: boolean;

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