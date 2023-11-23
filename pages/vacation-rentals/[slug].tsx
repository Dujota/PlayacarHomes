// Components
import { PreviewSuspense } from '@sanity/preview-kit';
import ListingPage from 'components/listings/ListingPage';
// Sanity Client
import { getAllVacationRentalsSlugs, getSettings, getVacationRentalsAndMoreVacationRentals } from 'lib/sanity.client';
import { Settings } from 'lib/sanity.queries/settings';
import { VacationRental } from 'lib/sanity.queries/vacation-rentals';
// React & Next
import { GetStaticProps } from 'next';
import { lazy } from 'react';

const PreviewListingPage = lazy(() => import('components/listings/PreviewListingPage'));

interface PageProps {
  vacationRental: VacationRental;
  moreListings: VacationRental[];
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

export default function VacationRentalShowPage(props: PageProps) {
  const { settings, vacationRental, moreListings, preview, token } = props;

  if (preview) {
    return (
      <PreviewSuspense fallback={<ListingPage resource='vacation-rentals' loading preview listing={vacationRental} moreListings={moreListings} settings={settings} />}>
        <PreviewListingPage resource='vacation-rentals' token={token} listing={vacationRental} moreListings={moreListings} settings={settings} />
      </PreviewSuspense>
    );
  }

  return <ListingPage resource='vacation-rentals' listing={vacationRental} moreListings={moreListings} settings={settings} />;
}

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  const token = previewData.token;

  const [settings, data] = await Promise.all([getSettings(), getVacationRentalsAndMoreVacationRentals(params.slug, token)]);
  const { vacationRental, moreListings } = data;

  if (!vacationRental) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vacationRental,
      moreListings,
      settings,
      preview,
      token: previewData.token ?? null,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllVacationRentalsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/vacation-rentals/${slug}`) || [],
    fallback: 'blocking',
  };
};
