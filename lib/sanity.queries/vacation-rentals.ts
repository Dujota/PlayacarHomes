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

export interface VacationRental {
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

export const vacationRetnalFields = groq`
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

export const vacationRentalsIndexQuery = groq`
*[_type == "vacationRentals"] | order(orderRank) {
  ${vacationRetnalFields}
}`;

export const vacationRentalsSitemapSlugsQuery = groq`
*[_type == "vacationRentals"] | order(orderRank) {slug}`;

export const vacationRentalsAndMoreVacationRentalsQuery = groq`
{
  "vacationRental": *[_type == "vacationRentals" && slug.current == $slug] | order(orderRank) [0] {
    ${vacationRetnalFields}
  },
  "moreListings": *[_type == "vacationRentals" && slug.current != $slug] | order(orderRank) [0...3] {
    ${vacationRetnalFields}
  }
}`;

export const vacationRentalsSlugsQuery = groq`
*[_type == "vacationRentals" && defined(slug.current)][].slug.current
`;

export const vacationRentalsBySlugQuery = groq`
*[_type == "vacationRentals" && slug.current == $slug][0] {
  ${vacationRetnalFields}
}
`;
