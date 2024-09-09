export interface IImage {
    src: string;
    alt: string;
    creatorName: string;
    originalSource: string;
    _id: string;
}

interface IAddress {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: string;
}

export interface IBusinessCard {
    _id: string;
    title: string;
    subtitle: string;
    description?: string;
    phone: string;
    email: string;
    web: string;
    image: IImage;
    address: IAddress;
    likes: string[];
    user_id: string;
}

export interface IUpdateBusinessCard {
    title?: string;
    subtitle?: string;
    description?: string;
    phone?: string;
    email?: string;
    web?: string;
    image?: Partial<IImage>;
    address?: Partial<IAddress>;
}

export interface ISearchBusinessCard {
    searchTerm: string;
    searchFields: Array<'title' | 'subtitle' | 'description'>;
}
