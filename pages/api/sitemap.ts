// pages/api/sitemap.js
import { sitemapStaticPaths } from 'lib/constants';
import { getListingsSitemapSlugs, getLongTermRentalsSitemapSlugs, getPostSitemapSlugs, getVacationRentalsSitemapSlugs } from 'lib/sanity.client';
import xml from 'xml';

export default async function handler(req, res) {
  const [listings, rentals, vacationRentals, blogPosts] = await Promise.all([
    getListingsSitemapSlugs(),
    getLongTermRentalsSitemapSlugs(),
    getVacationRentalsSitemapSlugs(),
    getPostSitemapSlugs(),
  ]);

  const urls = [
    ...sitemapStaticPaths.map((slug) => ({ url: [{ loc: `https://www.playacarhomes.com/listings/${slug.current}` }] })),
    ...listings.map(({ slug }) => ({ url: [{ loc: `https://www.playacarhomes.com/listings/${slug.current}` }] })),
    ...rentals.map(({ slug }) => ({ url: [{ loc: `https://www.playacarhomes.com/rentals/${slug.current}` }] })),
    ...vacationRentals.map(({ slug }) => ({ url: [{ loc: `https://www.playacarhomes.com/vacation-rentals/${slug.current}` }] })),
    ...blogPosts.map(({ slug }) => ({ url: [{ loc: `https://www.playacarhomes.com/blog/${slug.current}` }] })),
  ];

  const sitemap = xml(
    {
      urlset: [{ _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } }, ...urls],
    },
    { declaration: true }
  );

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}
