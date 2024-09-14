// IFish.ts

export interface IFishImage {
  src: string;
  alt: string;
  creatorName: string;
  originalSource: string;
  _id: string;
}

export interface ILanguage {
  subclass: string;
  order: string;
  family: string;
  subfamily: string;
  synonyms: string;
  etymology: string;
  distribution: string;
  additionalRequirements: string;
  aquariumSetup: string;
  intraspeciesCompatibility: string;
  interspeciesCompatibility: string;
  feeding: string;
  sexualDimorphism: string;
  breeding: string;
  additionalInformation: string;
}

export interface IFish {
  _id: string;
  name: string;
  latinName: string;
  firstDescription: string;
  sources: string;
  tankVolume: string;
  fishSize: string;
  images: IFishImage[];
  tribe: string;
  maxTemp: number;
  minTemp: number;
  ph: number;
  dGH: number;
  languages: {
    en: ILanguage;
    he: ILanguage;
    ru: ILanguage;
  };
  likes: string[];
  fishIndices: string[]; 
}

export interface IFishIndex {
  _id: string;
  hebrew: string;
  english: string;
  russian: string;
  image: IFishImage;
  fishes: IFish[];
  __v: number;
}
