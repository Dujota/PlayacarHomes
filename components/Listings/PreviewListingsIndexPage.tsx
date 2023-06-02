import ListingsIndexPage from 'components/Listings/ListingsIndexPage';
import { usePreview } from 'lib/sanity.preview';
import { type Listing, listingsIndexQuery } from 'lib/sanity.queries/listings';
import { type Settings, settingsQuery } from 'lib/sanity.queries/settings';

export default function PreviewListingsIndexPage({ token }: { token: null | string }) {
  const listings: Listing[] = usePreview(token, listingsIndexQuery) || [];
  const settings: Settings = usePreview(token, settingsQuery) || {};

  return <ListingsIndexPage preview listings={listings} settings={settings} />;
}
