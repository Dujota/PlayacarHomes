import FeaturedPropertyCardBanner from 'components/common/banners/FeaturedPropertyBanner';
import SectionSeparator from 'components/common/dividers/SectionSeparator';
import Newsletter from 'components/common/NewsLetter';
import ListingBody from 'components/listings/ListingBody';
import ListingHeaderTitle from 'components/listings/ListingHeaderTitle';
import ListingPageHead from 'components/listings/ListingPageHead';
import ListingsContainer from 'components/listings/ListingsContainer';
import ListingsLayout from 'components/listings/ListingsLayout';
import ListingTitle from 'components/listings/ListingTitle';
import type { Listing } from 'lib/sanity.queries/listings';
import type { Settings } from 'lib/sanity.queries/settings';
import { notFound } from 'next/navigation';

export interface ListingPageProps {
  preview?: boolean;
  loading?: boolean;
  listing: Listing;
  moreListings: Listing[];
  settings: Settings;
  resource: string;
}

const NO_LISTINGS: Listing[] = [];

export default function ListingPage(props: ListingPageProps) {
  const { preview, loading, moreListings = NO_LISTINGS, listing, settings, resource } = props;

  const slug = listing?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      <ListingPageHead settings={settings} listing={listing} />

      <ListingsLayout preview={preview} loading={loading}>
        <ListingsContainer>
          {preview && !listing ? (
            <ListingTitle>Loading…</ListingTitle>
          ) : (
            <>
              <article>
                <ListingHeaderTitle resource={resource} title={listing.title} location={listing.location} neighbourhood={listing.neighbourhood} postalCode={listing.postalCode} />
                <ListingBody listing={listing} />
              </article>
              <SectionSeparator />
            </>
          )}
        </ListingsContainer>
        <Newsletter />
        <SectionSeparator />
        <ListingsContainer>
          <FeaturedPropertyCardBanner resource={resource} ctaLink={`/${resource}`} title='Popular Properties For You' listings={moreListings} />
        </ListingsContainer>
        <SectionSeparator />
      </ListingsLayout>
    </>
  );
}
