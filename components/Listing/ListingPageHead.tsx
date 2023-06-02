import ListingsMeta from 'components/Listings/ListingsMeta';
import { urlForImage } from 'lib/sanity.image';
import { Listing } from 'lib/sanity.queries/listings';
import { Settings } from 'lib/sanity.queries/settings';
import Head from 'next/head';

export interface ListingPageHeadProps {
  settings: Settings;
  listing: Listing;
}
export default function ListingPageHead({ settings, listing }: ListingPageHeadProps) {
  const title = settings.title ?? 'Default Title';
  return (
    <Head>
      <title>{listing.title ? `${listing.title} | ${title}` : title}</title>
      <ListingsMeta />
      {listing.gallery.images[0]?.asset?._ref && <meta property='og:image' content={urlForImage(listing.gallery.images[0]).width(1200).height(627).fit('crop').url()} />}
    </Head>
  );
}
