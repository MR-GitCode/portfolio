type section = {
    text: {
        de: string[];
        en: string[];
    }
    title: {
        de: string;
        en: string;
    }
};

export interface ImprintContent {
    portfolioURL: string;
    developerAkademieURL: string;
    imprint: section;
    terms: section;
    ownership: section;
    proprietaryRights: section;
    useOfProduct: section;
    disclaimer: section;
    indemnity: section;
}