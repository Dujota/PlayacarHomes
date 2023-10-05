import ListingPage, { ListingPageProps } from 'components/listings/ListingPage';
import { usePreview } from 'lib/sanity.preview';
import { type Listing, listingAndMoreListingsQuery } from 'lib/sanity.queries/listings';

export default function PreviewListingPage({
  token,
  listing,
  settings,
  resource,
}: {
  token: null | string;
} & ListingPageProps) {
  const { listing: listingPreview, moreListings }: { listing: Listing; moreListings: Listing[] } = usePreview(token, listingAndMoreListingsQuery, {
    slug: listing.slug,
  }) || { listing: null, moreListings: [] };

  return <ListingPage resource={resource} preview listing={listingPreview} moreListings={moreListings} settings={settings} />;
}
