export function createListingStructuredData(listing: any, type: 'listing' | 'rental' | 'vacationRentals') {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com';
  const listingUrl = `${baseUrl}/${type}s/${listing.slug.current}`;

  const images = [listing.coverImage?.asset?.url, ...(listing.gallery?.images?.map((img: any) => img.asset.url) || [])].filter(Boolean);

  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: listing.title,
    description: listing.excerpt,
    url: listingUrl,
    image: images,
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
        url: baseUrl,
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
    bedrooms: listing.bedrooms,
    bathrooms: listing.bathrooms,
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
