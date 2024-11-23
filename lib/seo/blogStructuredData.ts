import { urlForImage } from 'lib/sanity.image';

export interface Author {
  name?: string;
  picture?: any;
}

export interface Post {
  _id: string;
  title?: string;
  coverImage?: any;
  date?: string;
  excerpt?: string;
  author?: Author;
  slug?: string;
  content?: any;
}

export function createBlogPostStructuredData(post: Post) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com';
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.title,
    description: post.excerpt,
    ...(post.coverImage && {
      image: urlForImage(post.coverImage).url(),
    }),
    datePublished: post.date,
    dateModified: post.date,
    ...(post.author && {
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    }),
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

export function createBlogIndexStructuredData(posts: Post[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.playacarhomes.com';

  const itemListElements = posts.map((post, index) => ({
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

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Playacar Homes Blog',
    description: 'Latest news, guides, and insights about real estate in Playa del Carmen',
    url: `${baseUrl}/blog`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: itemListElements,
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
