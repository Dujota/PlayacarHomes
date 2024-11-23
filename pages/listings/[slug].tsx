// Components
import { PreviewSuspense } from '@sanity/preview-kit';
import JsonLd from 'components/common/seo/JSONLD';
import ListingPage from 'components/listings/ListingPage';
// Sanity Client
import { getAllListingsSlugs, getListingAndMoreListings, getSettings } from 'lib/sanity.client';
import { Listing } from 'lib/sanity.queries/listings';
import { Settings } from 'lib/sanity.queries/settings';
import { createListingStructuredData } from 'lib/seo/structuredData';
// React & Next
import { GetStaticProps } from 'next';
import { lazy } from 'react';

const PreviewListingPage = lazy(() => import('components/listings/PreviewListingPage'));

interface PageProps {
  listing: Listing;
  moreListings: Listing[];
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

export default function ListingShowPage(props: PageProps) {
  const { settings, listing, moreListings, preview, token } = props;

  if (preview) {
    return (
      <PreviewSuspense fallback={<ListingPage resource='listings' loading preview listing={listing} moreListings={moreListings} settings={settings} />}>
        <PreviewListingPage resource='listings' token={token} listing={listing} moreListings={moreListings} settings={settings} />
      </PreviewSuspense>
    );
  }

  return (
    <>
      <JsonLd data={createListingStructuredData(listing, 'listing')} />
      <ListingPage resource='listings' listing={listing} moreListings={moreListings} settings={settings} />;
    </>
  );
}

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  const token = previewData.token;

  const [settings, { listing, moreListings }] = await Promise.all([getSettings(), getListingAndMoreListings(params.slug, token)]);

  if (!listing) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      listing,
      moreListings,
      settings,
      preview,
      token: previewData.token ?? null,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllListingsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/listings/${slug}`) || [],
    fallback: 'blocking',
  };
};
