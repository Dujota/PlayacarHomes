import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api';
import { indexQuery, type Post, postAndMoreStoriesQuery, postBySlugQuery, postSlugsQuery } from 'lib/sanity.queries/blog';
import { type Listing, listingAndMoreListingsQuery, listingBySlugQuery, listingsIndexQuery, listingSlugsQuery } from 'lib/sanity.queries/listings';
import { type Settings, settingsQuery } from 'lib/sanity.queries/settings';
import { createClient } from 'next-sanity';

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId ? createClient({ projectId, dataset, apiVersion, useCdn }) : null;

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {};
  }
  return {};
}

// BLOG POSTS
export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || [];
  }
  return [];
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getPostAndMoreStories(slug: string, token?: string | null): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    });
    return await client.fetch(postAndMoreStoriesQuery, { slug });
  }
  return { post: null, morePosts: [] };
}

// Listings
export async function getAllListings(): Promise<Listing[]> {
  if (client) {
    return (await client.fetch(listingsIndexQuery)) || [];
  }
  return [];
}

export async function getAllListingsSlugs(): Promise<Pick<Listing, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(listingSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getListingsBySlug(slug: string): Promise<Listing> {
  if (client) {
    return (await client.fetch(listingBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getListingAndMoreListings(slug: string, token?: string | null): Promise<{ listing: Listing; moreListings: Listing[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    });
    return await client.fetch(listingAndMoreListingsQuery, { slug });
  }
  return { listing: null, moreListings: [] };
}
