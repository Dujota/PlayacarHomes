import FeaturedListing from 'components/Listing-starter/FeaturedListing';
import MoreListings from 'components/Listing-starter/MoreListings';
import ListingsContainer from 'components/listings/starter/ListingsContainer';
import ListingsHeader from 'components/listings/starter/ListingsHeader';
import ListingsIndexPageHead from 'components/listings/starter/ListingsIndexPageHead';
import ListingsLayout from 'components/listings/starter/ListingsLayout';
import type { Listing } from 'lib/sanity.queries/listings';
import type { Settings } from 'lib/sanity.queries/settings';

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  listings: Listing[];
  settings: Settings;
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, listings, settings } = props;
  const [featuredListing, ...moreListings] = listings || [];
  const { title, description } = settings || {};

  return (
    <>
      <ListingsIndexPageHead settings={settings} />

      <ListingsLayout preview={preview} loading={loading}>
        <ListingsContainer>
          <ListingsHeader title={title} description={description} level={1} />
          {featuredListing && (
            <FeaturedListing
              price={featuredListing.price}
              title={featuredListing.title}
              coverImage={featuredListing.coverImage}
              date={featuredListing.date}
              author={featuredListing.author}
              slug={featuredListing.slug}
              excerpt={featuredListing.excerpt}
            />
          )}
          {moreListings.length > 0 && <MoreListings listings={moreListings} />}
        </ListingsContainer>
      </ListingsLayout>
    </>
  );
}
