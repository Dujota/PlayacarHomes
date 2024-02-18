// import ListingSearchForm from 'components/common/forms/ListingSearchForm';
import PageTitle from 'components/common/headers/PageTitle';
import NewsLetterModal from 'components/common/modals/NewsLetterModal';
import Newsletter from 'components/common/forms/NewsLetter';
import PropertyList from 'components/listings/PropertyList';
import { getAllListings, getSettings } from 'lib/sanity.client';
import { Listing } from 'lib/sanity.queries/listings';
import { Settings } from 'lib/sanity.queries/settings';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

interface PageProps {
  listings: Listing[];
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

const pageTitle = 'Popular Properties For You';

const PropertyListingsIndexPage: NextPage = (props: PageProps) => {
  const { listings, settings, preview, token } = props;

  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-[6.5rem] overflow-hidden bg-white'>
      <main className='font-poppins flex flex-col items-center justify-center gap-[4.94rem] self-stretch text-center text-[2.25rem] text-black'>
        <PageTitle title={pageTitle} />
        {/* <ListingindexSearch /> */}
        <PropertyList resource='listings' listings={listings} />
        <Newsletter />
        <NewsLetterModal />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  const token = previewData.token;

  const [settings, listings] = await Promise.all([getSettings(), getAllListings()]);

  if (!listings) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      listings,
      settings,
      preview,
      token: token ?? null,
    },
    revalidate: 10,
  };
};

export default PropertyListingsIndexPage;
