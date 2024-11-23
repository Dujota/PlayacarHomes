import { urlForImage } from 'lib/sanity.image';

import { Post } from './blogStructuredData';
import { Listing } from './structuredData';

interface WhyUsCard {
  heading?: string;
  text?: string;
}

interface HomepageSection {
  _type: string;
  heading?: string;
  tagline?: string;
  image?: any;
  whyUsCards?: WhyUsCard[];
}

interface HomepageData {
  sections: {
    pageBuilder: HomepageSection[];
  };
  featuredPosts: Post[];
  featuredListings: Listing[];
  featuredLongTermRentals: Listing[];
  featuredVacationRentals: Listing[];
}

function createFeaturedItems(items: Listing[], type: 'listing' | 'rental' | 'vacation') {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com';
  const urlPrefix = type === 'listing' ? 'listings' : type === 'rental' ? 'rentals' : 'vacation-rentals';

  return items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'RealEstateListing',
      name: item.title,
      url: `${baseUrl}/${urlPrefix}/${item.slug}`,
      ...(item.excerpt && {
        description: item.excerpt,
      }),
      ...(item.coverImage && {
        image: urlForImage(item.coverImage).url(),
      }),
      ...(item.price && {
        offers: {
          '@type': 'Offer',
          price: item.price,
          priceCurrency: item.mxnPrice ? 'MXN' : 'USD',
          availability: item.status === 'active' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
          ...(item.agent && {
            seller: {
              '@type': 'RealEstateAgent',
              name: item.agent.name,
              ...(item.agent.contact && {
                telephone: item.agent.contact.phone,
                email: item.agent.contact.email,
              }),
            },
          }),
        },
      }),
      ...(item.area && {
        floorSize: {
          '@type': 'QuantitativeValue',
          value: item.area,
          unitCode: 'MKT',
        },
      }),
      ...(item.landArea && {
        lotSize: {
          '@type': 'QuantitativeValue',
          value: item.landArea,
          unitCode: 'MKT',
        },
      }),
      ...((item.bedrooms || item.bathrooms) && {
        numberOfRooms: (item.bedrooms || 0) + (item.bathrooms || 0),
        ...(item.bedrooms && { bedrooms: item.bedrooms }),
        ...(item.bathrooms && { bathrooms: item.bathrooms }),
      }),
    },
  }));
}

function createFeaturedBlogPosts(posts: Post[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com';

  return posts.map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${baseUrl}/blog/${post.slug}`,
      description: post.excerpt,
      ...(post.coverImage && {
        image: urlForImage(post.coverImage).url(),
      }),
      datePublished: post.date,
      ...(post.author && {
        author: {
          '@type': 'Person',
          name: post.author.name,
        },
      }),
    },
  }));
}

export function createHomePageStructuredData(data: HomepageData) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com';
  const heroSection = data.sections.pageBuilder.find((section) => section._type === 'hero');
  const whyUsSection = data.sections.pageBuilder.find((section) => section._type === 'whyUs');

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: heroSection?.heading || 'Playacar Homes',
    description: heroSection?.tagline || 'Real Estate in Playa del Carmen',
    url: baseUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Playacar Homes',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.jpg`,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Xaman-ha',
        addressLocality: 'Playa del Carmen',
        addressRegion: 'Q.R.',
        postalCode: '77717',
        addressCountry: 'Mexico',
      },
      sameAs: [
        'https://www.facebook.com/playacarhomes',
        'https://www.instagram.com/playacarhomes',
        'https://wa.me/yournumberhere', // Replace with actual WhatsApp number
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'your@email.com', // Replace with actual email
          url: `${baseUrl}/contact`,
        },
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          url: 'https://wa.me/yournumberhere', // Replace with actual WhatsApp number
        },
      ],
    },
    mainEntity: [
      {
        '@type': 'ItemList',
        name: 'Featured Properties',
        numberOfItems: data.featuredListings.length,
        itemListElement: createFeaturedItems(data.featuredListings, 'listing'),
      },
      {
        '@type': 'ItemList',
        name: 'Featured Long Term Rentals',
        numberOfItems: data.featuredLongTermRentals.length,
        itemListElement: createFeaturedItems(data.featuredLongTermRentals, 'rental'),
      },
      {
        '@type': 'ItemList',
        name: 'Featured Vacation Rentals',
        numberOfItems: data.featuredVacationRentals.length,
        itemListElement: createFeaturedItems(data.featuredVacationRentals, 'vacation'),
      },
      {
        '@type': 'ItemList',
        name: 'Featured Blog Posts',
        numberOfItems: data.featuredPosts.length,
        itemListElement: createFeaturedBlogPosts(data.featuredPosts),
      },
      {
        '@type': 'ItemList',
        name: 'Why Choose Us',
        numberOfItems: whyUsSection?.whyUsCards?.length || 0,
        itemListElement:
          whyUsSection?.whyUsCards?.map((card, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Thing',
              name: card.heading,
              description: card.text,
            },
          })) || [],
      },
    ],
    potentialAction: [
      {
        '@type': 'ViewAction',
        name: 'Get Started',
        target: `${baseUrl}/#suggested-listings`,
      },
      {
        '@type': 'CommunicateAction',
        name: 'Contact Sales',
        target: `${baseUrl}/contact`,
      },
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      {
        '@type': 'ViewAction',
        name: 'View All Properties',
        target: `${baseUrl}/listings`,
      },
      {
        '@type': 'ViewAction',
        name: 'View All Long Term Rentals',
        target: `${baseUrl}/rentals`,
      },
      {
        '@type': 'ViewAction',
        name: 'View All Vacation Rentals',
        target: `${baseUrl}/vacation-rentals`,
      },
      {
        '@type': 'ViewAction',
        name: 'View All Blog Posts',
        target: `${baseUrl}/blog`,
      },
      {
        '@type': 'InteractAction',
        name: 'Newsletter Signup',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/api/newsletter-signup`,
          actionPlatform: ['http://schema.org/HttpRequestMethod'],
        },
      },
    ],
    offers: {
      '@type': 'AggregateOffer',
      name: 'Real Estate Services',
      itemOffered: [
        {
          '@type': 'Service',
          name: 'Property Sales',
          url: `${baseUrl}/listings`,
        },
        {
          '@type': 'Service',
          name: 'Long Term Rentals',
          url: `${baseUrl}/rentals`,
        },
        {
          '@type': 'Service',
          name: 'Vacation Rentals',
          url: `${baseUrl}/vacation-rentals`,
        },
      ],
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Playacar Homes',
      url: baseUrl,
      hasPart: [
        {
          '@type': 'WebPage',
          name: 'Blog',
          url: `${baseUrl}/blog`,
        },
        {
          '@type': 'WebPage',
          name: 'Properties for Sale',
          url: `${baseUrl}/listings`,
        },
        {
          '@type': 'WebPage',
          name: 'Long Term Rentals',
          url: `${baseUrl}/rentals`,
        },
        {
          '@type': 'WebPage',
          name: 'Vacation Rentals',
          url: `${baseUrl}/vacation-rentals`,
        },
        {
          '@type': 'ContactPage',
          name: 'Contact Us',
          url: `${baseUrl}/contact`,
        },
      ],
    },
  };
}

// export function createHomePageStructuredData(data: HomepageData) {
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com';

//   // Get hero section data
//   const heroSection = data.sections.pageBuilder.find((section) => section._type === 'hero');

//   // Create featured items list for all types of listings
//   const createFeaturedItems = (items: Listing[], type: 'listing' | 'rental' | 'vacation') => {
//     const urlPrefix = type === 'listing' ? 'listings' : type === 'rental' ? 'rentals' : 'vacation-rentals';

//     return items.map((item, index) => ({
//       '@type': 'ListItem',
//       position: index + 1,
//       item: {
//         '@type': 'RealEstateListing',
//         name: item.title,
//         url: `${baseUrl}/${urlPrefix}/${item.slug}`,
//         description: item.excerpt,
//         ...(item.coverImage?.asset?.url && {
//           image: item.coverImage.asset.url,
//         }),
//         offers: {
//           '@type': 'Offer',
//           price: item.price,
//           priceCurrency: item.mxnPrice ? 'MXN' : 'USD',
//           availability: item.status === 'active' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
//         },
//         ...((item.bedrooms || item.bathrooms) && {
//           numberOfRooms: (item.bedrooms || 0) + (item.bathrooms || 0),
//           bedrooms: item.bedrooms,
//           bathrooms: item.bathrooms,
//         }),
//       },
//     }));
//   };

//   // Create featured blog posts list
//   const featuredBlogPosts = data.featuredPosts.map((post, index) => ({
//     '@type': 'ListItem',
//     position: index + 1,
//     item: {
//       '@type': 'BlogPosting',
//       headline: post.title,
//       url: `${baseUrl}/blog/${post.slug}`,
//       description: post.excerpt,
//       ...(post.coverImage?.asset?.url && {
//         image: post.coverImage.asset.url,
//       }),
//       datePublished: post.date,
//       ...(post.author && {
//         author: {
//           '@type': 'Person',
//           name: post.author.name,
//         },
//       }),
//     },
//   }));

//   return {
//     '@context': 'https://schema.org',
//     '@type': 'WebPage',
//     name: heroSection?.heading || 'Playacar Homes',
//     description: heroSection?.tagline || 'Real Estate in Playa del Carmen',
//     url: baseUrl,
//     publisher: {
//       '@type': 'Organization',
//       name: 'Playacar Homes',
//       logo: {
//         '@type': 'ImageObject',
//         url: `${baseUrl}/logo.jpg`,
//       },
//       address: {
//         '@type': 'PostalAddress',
//         streetAddress: 'Xaman-ha',
//         addressLocality: 'Playa del Carmen',
//         addressRegion: 'Q.R.',
//         postalCode: '77717',
//         addressCountry: 'Mexico',
//       },
//       sameAs: [
//         'https://www.facebook.com/homeplayacar',
//         'https://www.instagram.com/playacar_homes',
//         'https://wa.me/529841130567?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20available%20properties%20and%20services.',
//       ],
//     },
//     mainEntity: [
//       {
//         '@type': 'ItemList',
//         name: 'Featured Properties',
//         numberOfItems: data.featuredListings.length,
//         itemListElement: createFeaturedItems(data.featuredListings, 'listing'),
//       },
//       {
//         '@type': 'ItemList',
//         name: 'Featured Long Term Rentals',
//         numberOfItems: data.featuredLongTermRentals.length,
//         itemListElement: createFeaturedItems(data.featuredLongTermRentals, 'rental'),
//       },
//       {
//         '@type': 'ItemList',
//         name: 'Featured Vacation Rentals',
//         numberOfItems: data.featuredVacationRentals.length,
//         itemListElement: createFeaturedItems(data.featuredVacationRentals, 'vacation'),
//       },
//       {
//         '@type': 'ItemList',
//         name: 'Featured Blog Posts',
//         numberOfItems: data.featuredPosts.length,
//         itemListElement: featuredBlogPosts,
//       },
//     ],
//     potentialAction: {
//       '@type': 'SearchAction',
//       target: {
//         '@type': 'EntryPoint',
//         urlTemplate: `${baseUrl}/search?q={search_term_string}`,
//       },
//       'query-input': 'required name=search_term_string',
//     },
//   };
// }
