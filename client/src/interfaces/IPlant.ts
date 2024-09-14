// IPlant.ts

export interface IImage {
  src: string;
  alt: string;
  creatorName: string;
  originalSource: string;
  _id: string;
}

export interface ILanguage {
  family: string;
  synonyms: string;
  etymology: string;
  distribution: string;
  notes: string;
  propagation: string;
}

export interface IPlant {
  _id: string;
  name: string;
  latinName?: string;
  firstDescription?: string;
  sources?: string;
  height?: string;
  width?: string;
  temperature?: string;
  ph?: string;
  hardness?: string;
  light?: string;
  growthRate?: string;
  placement?: string;
  images: IImage[];
  languages: {
    en: ILanguage;
    he: ILanguage;
    ru: ILanguage;
  };
  likes: string[];
}
