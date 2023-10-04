export interface ListingType {
  slug: string;
  featured: null | boolean;
  bedrooms: number;
  area: number;
  tags: null | string[];
  postalCode: string;
  _id: string;
  title: string;
  coverImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: number;
  bathrooms: number;
  location: null | string;
  neighbourhood: string;
  images: {
    asset: {
      _ref: string;
    };
  }[];
  slug: {
    current: string;
  };
}
