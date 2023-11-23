import { groq } from 'next-sanity';

import { postFields } from './blog';
import { listingFields } from './listings';
import { longTermRentalFields } from './long-term-rentals';
import { vacationRetnalFields } from './vacation-rentals';

export const homepageDataQuery = groq`
{
  "featuredPosts": *[_type == "post"] | order(date desc, _updatedAt desc)[0...2] {
    content,
    ${postFields}
  },
  "featuredListings": *[_type == "listing"] | order(date desc, _updatedAt desc)[0...2] {
    ${listingFields}
  },
  "featuredLongTermRentals": *[_type == "rentals"] | order(date desc, _updatedAt desc)[0...2] {
    ${longTermRentalFields}
  },
  "featuredVacationRentals": *[_type == "vacationRentals"] | order(date desc, _updatedAt desc)[0...2] {
    ${vacationRetnalFields}
  }
}`;
