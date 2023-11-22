import FeaturedPropertyCardBanner from 'components/common/banners/FeaturedPropertyBanner';
import SectionSeparator from 'components/common/dividers/SectionSeparator';
import Newsletter from 'components/common/NewsLetter';
import ListingBody from 'components/listings/ListingBody';
import ListingHeaderTitle from 'components/listings/ListingHeaderTitle';
import ListingPageHead from 'components/listings/ListingPageHead';
import ListingsContainer from 'components/listings/ListingsContainer';
import ListingsLayout from 'components/listings/ListingsLayout';
import ListingTitle from 'components/listings/ListingTitle';
import MoreListings from 'components/listings/MoreListings';
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
  resource: string;
}

const NO_LISTINGS: Listing[] = [];

export default function ListingPage(props: ListingPageProps) {
  const { preview, loading, moreListings = NO_LISTINGS, listing, settings, resource } = props;
  const { title = demo.title } = settings || {};

  const slug = listing?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      <ListingPageHead settings={settings} listing={listing} />

      <ListingsLayout preview={preview} loading={loading}>
        <ListingsContainer>
          {/* <ListingsHeader title={title} level={2} /> */}
          {preview && !listing ? (
            <ListingTitle>Loading…</ListingTitle>
          ) : (
            <>
              <article>
                <ListingHeaderTitle resource={resource} title={listing.title} location={listing.location} neighbourhood={listing.neighbourhood} postalCode={listing.postalCode} />
                {/* <ListingHeader title={listing.title} coverImage={listing.coverImage} price={listing.price} author={listing.author} agent={listing.agent} /> */}
                <ListingBody listing={listing} />
              </article>
              <SectionSeparator />
            </>
          )}
        </ListingsContainer>
        <Newsletter />
        <SectionSeparator />
        {/* <FeaturedPropertyCardBanner title='Popular Properties For You' listings={demo.featuredListingsMock} /> */}
        {/* <ListingsContainer>{moreListings?.length > 0 && <MoreListings listings={moreListings} />}</ListingsContainer> */}
        <ListingsContainer>
          <FeaturedPropertyCardBanner ctaLink={`/${resource}`} title='Popular Properties For You' listings={demo.featuredListingsMock} />
        </ListingsContainer>
        <SectionSeparator />
      </ListingsLayout>
    </>
  );
}
