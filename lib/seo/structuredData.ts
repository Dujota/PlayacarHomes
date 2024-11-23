import { urlForImage } from 'lib/sanity.image';

export function createListingStructuredData(listing: any, type: 'listing' | 'rental' | 'vacationRentals') {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com';
  const listingUrl = `${baseUrl}/${type}s/${listing.slug}`;

  const images = [urlForImage(listing.coverImage).url(), ...(listing.gallery?.images?.map((img: any) => urlForImage(img).url()) || [])].filter(Boolean);

  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: listing.title,
    description: listing.excerpt,
    url: listingUrl,
    image: images,
    primaryImageOfPage: urlForImage(listing.coverImage).url(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.neighbourhood,
      addressLocality: listing.neighbourhood || 'Playa del Carmen',
      addressRegion: 'Q.R.',
      postalCode: listing.postalCode,
      addressCountry: 'Mexico',
    },
    offers: {
      '@type': 'Offer',
      price: listing.price,
      priceCurrency: listing.mxnPrice ? 'MXN' : 'USD',
      itemCondition: 'https://schema.org/NewCondition',
      availability: listing.status === 'active' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: listing.agent?.name || 'Playacar Homes',
        url: listingUrl,
        logo: `${baseUrl}/logo.png`,
        telephone: listing.agent?.contact?.phone || listing.contact?.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Xaman-ha',
          addressLocality: 'Playa del Carmen',
          addressRegion: 'Q.R.',
          postalCode: '77717',
          addressCountry: 'Mexico',
        },
      },
    },
    numberOfRooms: (listing.bedrooms || 0) + (listing.bathrooms || 0),
    numberOfBedrooms: listing.bedrooms,
    numberOfFullBathrooms: listing.bathrooms,
    permittedUsage: 'Perfectly suitable for a family with kids.',
    petsAllowed: 'Pets are allowed, but check with agent on any additional restrictions',
    leaseLength: {
      '@type': 'QuantitativeValue',
      value: listing.leaseLength,
      unitText: 'months',
    },
    ...(listing.area && {
      floorSize: {
        '@type': 'QuantitativeValue',
        value: listing.area,
        unitCode: 'MTK',
      },
    }),
    ...(listing.landArea && {
      lotSize: {
        '@type': 'QuantitativeValue',
        value: listing.landArea,
        unitCode: 'MTK',
      },
    }),
    ...(listing.yearBuilt && {
      yearBuilt: listing.yearBuilt,
    }),
    ...(listing.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: listing.aggregateRating.ratingValue,
        ratingCount: listing.aggregateRating.ratingCount,
      },
    }),
    additionalType: listingUrl,
  };

  // Add rental-specific properties
  if (type === 'rental' || type === 'vacationRentals') {
    return {
      ...baseStructuredData,
      '@type': 'Accommodation',
      accommodationCategory: type === 'vacationRentals' ? 'Vacation Rental' : 'Rental Property',
      tourBookingPage: listingUrl,
    };
  }

  return baseStructuredData;
}

// Collections for the Index Pages
export interface Author {
  name?: string;
  // add other author properties as needed
}

export interface Agent {
  name?: string;
  contact?: Contact;
  // add other agent properties as needed
}

export interface Contact {
  phone?: string;
  email?: string;
  // add other contact properties as needed
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

export function createListingCollectionStructuredData(listings: Listing[], pageType: 'listing' | 'rental' | 'vacation', currentPage: number = 1) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com';
  const urlPrefix = pageType === 'listing' ? 'listings' : pageType === 'rental' ? 'rentals' : 'vacation-rentals';

  const itemListElements = listings.map((listing, index) => ({
    '@type': 'ListItem',
    position: (currentPage - 1) * listings.length + index + 1,
    item: {
      '@type': 'RealEstateListing',
      name: listing.title,
      url: `${baseUrl}/${urlPrefix}/${listing.slug}`,
      ...(listing.excerpt && { description: listing.excerpt }),
      ...(listing.coverImage?.asset?.url && {
        image: urlForImage(listing.coverImage).url(),
      }),
      primaryImageOfPage: urlForImage(listing.coverImage).url(),
      ...(listing.price && {
        offers: {
          '@type': 'Offer',
          price: listing.price,
          priceCurrency: listing.mxnPrice ? 'MXN' : 'USD',
        },
      }),
      ...((listing.bedrooms || listing.bathrooms) && {
        numberOfRooms: (listing.bedrooms || 0) + (listing.bathrooms || 0),
        ...(listing.bedrooms && { numberOfBedrooms: listing.bedrooms }),
        ...(listing.bathrooms && { numberOfFullBathrooms: listing.bathrooms }),
      }),
      ...(listing.area && {
        floorSize: {
          '@type': 'QuantitativeValue',
          value: listing.area,
          unitCode: 'MKT',
        },
      }),
      ...(listing.landArea && {
        lotSize: {
          '@type': 'QuantitativeValue',
          value: listing.landArea,
          unitCode: 'MKT',
        },
      }),
      ...(listing.location && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: listing.location.lat,
          longitude: listing.location.lng,
        },
      }),
      ...(listing.status && {
        availability: listing.status === 'active' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      }),
    },
  }));

  const collectionName = pageType === 'listing' ? 'Properties for Sale' : pageType === 'rental' ? 'Long Term Rentals' : 'Vacation Rentals';

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${collectionName} in Maya Riviera`,
    description: `Browse our collection of ${collectionName.toLowerCase()} in Maya Riviera, Mexico`,
    url: `${baseUrl}/${urlPrefix}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: listings.length,
      itemListElement: itemListElements,
    },
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Playacar Homes',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Xaman-ha',
        addressLocality: 'Playa del Carmen',
        addressRegion: 'Q.R.',
        postalCode: '77717',
        addressCountry: 'Mexico',
      },
    },
  };
}

// Website structured data remains the same
export function createWebsiteStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Playacar Homes',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Playacar Homes',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.jpg`,
      },
    },
  };
}
