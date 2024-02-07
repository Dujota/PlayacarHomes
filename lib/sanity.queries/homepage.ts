import { groq } from 'next-sanity';

import { postFields } from './blog';
import { listingFields } from './listings';
import { longTermRentalFields } from './long-term-rentals';
import { vacationRetnalFields } from './vacation-rentals';

export const homepageDataQuery = groq`
{
  "sections" : *[_type == 'page' && title == "Homepage"][0]{
    pageBuilder[]{
      _type == "hero" => {
        _type,
        heading,
        tagline,
        image
      },
      _type == "form" && form == "newsletter"=> {
        _type,
        heading,
        label,
        form,
      },
      _type == "whyUs" => {
        _type,
        heading,
        subheading,
        whyUsCards[]{
          heading,
          text
        }
      },
    }
  },
  "featuredPosts": *[_type == "post"] | order(date desc, _updatedAt desc)[0...2] {
    content,
    ${postFields}
  },
  "featuredListings": *[_type == "listing"] | order(date desc, _updatedAt desc)[0...3] {
    ${listingFields}
  },
  "featuredLongTermRentals": *[_type == "rentals"] | order(date desc, _updatedAt desc)[0...3] {
    ${longTermRentalFields}
  },
  "featuredVacationRentals": *[_type == "vacationRentals"] | order(date desc, _updatedAt desc)[0...3] {
    ${vacationRetnalFields}
  }
}`;
