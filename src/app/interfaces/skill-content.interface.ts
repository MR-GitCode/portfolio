export interface SkillContent {
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
    sticker: {
        default: {
            de: string[];
            en: string[];  
        }
        pulled: {
            de: string[];
            en: string[];  
        }
    }
}

export interface Skill {
    name: string;
    imgURL: string;
    type?: 'skill' | 'interest';
    order?: number;
    category?: string;
}