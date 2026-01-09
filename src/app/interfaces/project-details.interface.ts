import { SkillsProjectDetails } from "./skills-project-details.interface";

export interface ProjectDetails {
    demoURL: string;
    description: {
        text: {
            de: string;
            en: string;         
        }
        title: {
            de: string;
            en: string;         
        }
    };
    duration: {
        duration: {
            de: string;
            en: string;         
        }
        title: {
            de: string;
            en: string;         
        }
    };
    githubURL: string;
    imgURL: string;
    process: {
        text: {
            de: string;
            en: string;         
        }
        title: {
            de: string;
            en: string;         
        }
    };
    skills: SkillsProjectDetails[] | Record<string, SkillsProjectDetails>;
    title: string;
}
