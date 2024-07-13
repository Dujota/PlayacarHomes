import { groq } from 'next-sanity';

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

export interface LongTermRental {
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
}

export const longTermRentalFields = groq`
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

export const longTermRentalIndexQuery = groq`
*[_type == "rentals"] | order(orderRank) {
  ${longTermRentalFields}
}`;

export const longTermRentalSitemapSlugs = groq`
*[_type == "rentals"] | order(orderRank) {slug}`;

export const longTermRentalAndMoreLongTermRentalQuery = groq`
{
  "rental": *[_type == "rentals" && slug.current == $slug] | order(orderRank) [0] {
    ${longTermRentalFields}
  },
  "moreListings": *[_type == "rentals" && slug.current != $slug] | order(orderRank) [0...3] {
    ${longTermRentalFields}
  }
}`;

export const longTermRentalSlugsQuery = groq`
*[_type == "rentals" && defined(slug.current)][].slug.current
`;

export const longTermRentalBySlugQuery = groq`
*[_type == "rentals" && slug.current == $slug][0] {
  ${longTermRentalFields}
}
`;
