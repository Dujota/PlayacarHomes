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

const listingFields = groq`
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
  bedrooms,
  bathrooms,
  area,
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
*[_type == "vacationRentals"] | order(date desc, _updatedAt desc) {
  ${listingFields}
}`;

export const vacationRentalsAndMoreVacationRentalsQuery = groq`
{
  "vacationRental": *[_type == "vacationRentals" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${listingFields}
  },
  "moreListings": *[_type == "vacationRentals" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    ${listingFields}
  }
}`;

export const vacationRentalsSlugsQuery = groq`
*[_type == "vacationRentals" && defined(slug.current)][].slug.current
`;

export const vacationRentalsBySlugQuery = groq`
*[_type == "vacationRentals" && slug.current == $slug][0] {
  ${listingFields}
}
`;
