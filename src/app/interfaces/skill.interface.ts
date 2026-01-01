export interface Skill {
  name: string;
  imgURL: string;
  type?: 'skill' | 'interest';
  order?: number;
  category?: string;
}