export interface Skill {
  name: {
    de: string;
    en: string;
  };
  imgURL: string;
  type?: 'skill' | 'interest';
  order?: number;
  category?: string;
}