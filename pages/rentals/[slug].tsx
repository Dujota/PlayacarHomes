// Components
import { PreviewSuspense } from '@sanity/preview-kit';
import ListingPage from 'components/listings/ListingPage';
// Sanity Client
import { getAllLongTermRentalsSlugs, getLongTermRentalsAndMoreLongTermRentals, getSettings } from 'lib/sanity.client';
import { LongTermRental } from 'lib/sanity.queries/long-term-rentals';
import { Settings } from 'lib/sanity.queries/settings';
// React & Next
import { GetStaticProps } from 'next';
import { lazy } from 'react';

const PreviewListingPage = lazy(() => import('components/listings/PreviewListingPage'));

interface PageProps {
  rental: LongTermRental;
  moreListings: LongTermRental[];
  settings?: Settings;
  preview: boolean;
  token: string | null;
}

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

export default function RentalShowPage(props: PageProps) {
  const { settings, rental, moreListings, preview, token } = props;

  if (preview) {
    return (
      <PreviewSuspense fallback={<ListingPage resource='rentals' loading preview listing={rental} moreListings={moreListings} settings={settings} />}>
        <PreviewListingPage resource='rentals' token={token} listing={rental} moreListings={moreListings} settings={settings} />
      </PreviewSuspense>
    );
  }

  return <ListingPage resource='rentals' listing={rental} moreListings={moreListings} settings={settings} />;
}

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  const token = previewData.token;

  const [settings, { rental, moreListings }] = await Promise.all([getSettings(), getLongTermRentalsAndMoreLongTermRentals(params.slug, token)]);

  if (!rental) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      rental,
      moreListings,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllLongTermRentalsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/rentals/${slug}`) || [],
    fallback: 'blocking',
  };
};
