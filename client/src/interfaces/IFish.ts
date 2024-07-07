// IFish.ts

export interface IFishImage {
  src: string;
  alt: string;
  creatorName: string;
  originalSource: string;
  _id: string;
}

export interface IFish {
  _id: string;
  name: string;
  latinName: string;
  synonyms: string;
  etymology: string;
  firstDescription: string;
  images: IFishImage[];
  subclass: string;
  order: string;
  family: string;
  subfamily: string;
  tribe: string;
  distribution: string;
  fishSize: string;
  tankVolume: string;
  maxTemp: number;
  minTemp: number;
  ph: number;
  dGH: number;
  additionalRequirements: string;
  aquariumSetup: string;
  intraspeciesCompatibility: string;
  interspeciesCompatibility: string;
  feeding: string;
  sexualDimorphism: string;
  breeding: string;
  additionalInformation: string;
  sources: string;
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