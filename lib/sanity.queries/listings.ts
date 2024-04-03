import { groq } from 'next-sanity';

export const listingFields = groq`
  _id,
  title,
  "slug": slug.current,
  "author": author->{name, picture},
  featured,
  description,
  excerpt,
  coverImage,
  date,
  gallery,
  seoTitle,
  seoKeywords,
  seoImage,
  price,
  mxnPrice,
  bedrooms,
  bathrooms,
  area,
  landArea,
  location,
  amenities,
  tags,
  status,
  associationFee,
  typeOfProperty,
  postalCode,
  neighbourhood,
  style,
  "agent": agent->{name, picture, "contact": contact->{phone, email}},
  contact
`;

export const listingsIndexQuery = groq`
*[_type == "listing"] | order(orderRank) {
  ${listingFields}
}`;

export const listingAndMoreListingsQuery = groq`
{
  "listing": *[_type == "listing" && slug.current == $slug] | order(orderRank) [0] {
    ${listingFields}
  },
  "moreListings": *[_type == "listing" && slug.current != $slug] | order(orderRank) [0...3] {
    ${listingFields}
  }
}`;

export const listingSlugsQuery = groq`
*[_type == "listing" && defined(slug.current)][].slug.current
`;

export const listingBySlugQuery = groq`
*[_type == "listing" && slug.current == $slug][0] {
  ${listingFields}
}
`;

export interface Contact {
  phone?: string;
  email?: string;
}

export interface Agent {
  name?: string;
  picture?: any;
  contact?: Contact;
}

export interface Author {
  name?: string;
  picture?: any;
}

export interface Listing {
  _id: string;
  title?: string;
  author?: Author;
  slug?: string;
  featured?: boolean;
  description?: any[];
  excerpt?: string;
  coverImage?: any;
  date?: string;
  gallery?: any;
  seoTitle?: string;
  seoKeywords?: string;
  seoImage?: any;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  landArea?: number;
  location?: any;
  amenities?: string[];
  tags?: string[];
  status?: string;
  associationFee?: number;
  typeOfProperty?: string;
  postalCode?: string;
  neighbourhood?: string;
  style?: string;
  agent?: Agent;
  contact?: Contact;
  mxnPrice?: boolean;
}
