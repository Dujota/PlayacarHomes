import ListingBody from 'components/Listing-starter/ListingBody';
import ListingHeader from 'components/Listing-starter/ListingHeader';
import ListingPageHead from 'components/Listing-starter/ListingPageHead';
import ListingTitle from 'components/Listing-starter/ListingTitle';
import MoreListings from 'components/Listing-starter/MoreListings';
import ListingsContainer from 'components/Listing-starter/listings-starter/ListingsContainer';
import ListingsHeader from 'components/Listing-starter/listings-starter/ListingsHeader';
import Layout from 'components/Listing-starter/listings-starter/ListingsLayout';
import SectionSeparator from 'components/common/dividers/SectionSeparator';
import * as demo from 'lib/demo.data'; // remove this line
import type { Listing } from 'lib/sanity.queries/listings';
import type { Settings } from 'lib/sanity.queries/settings';
import { notFound } from 'next/navigation';

export interface ListingPageProps {
  preview?: boolean;
  loading?: boolean;
  listing: Listing;
  moreListings: Listing[];
  settings: Settings;
}

const NO_LISTINGS: Listing[] = [];

export default function ListingPage(props: ListingPageProps) {
  const { preview, loading, moreListings = NO_LISTINGS, listing, settings } = props;
  const { title = demo.title } = settings || {};

  const slug = listing?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      <ListingPageHead settings={settings} listing={listing} />

      <Layout preview={preview} loading={loading}>
        <ListingsContainer>
          <ListingsHeader title={title} level={2} />
          {preview && !listing ? (
            <ListingTitle>Loading…</ListingTitle>
          ) : (
            <>
              <article>
                {/* <ListingHeader title={listing.title} coverImage={listing.coverImage} price={listing.price} author={listing.author} agent={listing.agent} /> */}
                <ListingBody listing={listing} />
              </article>
              <SectionSeparator />
              {moreListings?.length > 0 && <MoreListings listings={moreListings} />}
            </>
          )}
        </ListingsContainer>
      </Layout>
    </>
  );
}
