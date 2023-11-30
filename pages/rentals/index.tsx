// import ListingSearchForm from 'components/common/forms/ListingSearchForm';
import PageTitle from 'components/common/headers/PageTitle';
import NewsLetterModal from 'components/common/modals/NewsLetterModal';
import Newsletter from 'components/common/NewsLetter';
import PropertyList from 'components/listings/PropertyList';
import { getAllLongTermRentals, getSettings } from 'lib/sanity.client';
import type { LongTermRental } from 'lib/sanity.queries/long-term-rentals';
import type { Settings } from 'lib/sanity.queries/settings';
import type { GetStaticProps, NextPage, PreviewData } from 'next';
import type { Query } from 'types/sanity-queries';

// import CardGridContainer from '../components/card-grid-container';
// import ListingindexSearch from '../components/listingindex-search';
const pageTitle = 'Popular Properties For You';

interface PageProps {
  longTermRentals: LongTermRental[];
  settings?: Settings;
  preview: boolean;
  token: string | null;
  loading?: boolean;
}

const PropertyRentalsIndexPage: NextPage = ({ longTermRentals }: PageProps) => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-[6.5rem] overflow-hidden bg-white'>
      <main className='font-poppins flex flex-col items-center justify-center gap-[4.94rem] self-stretch text-center text-[2.25rem] text-black'>
        <PageTitle title={pageTitle} />
        {/* <ListingindexSearch /> */}
        <PropertyList resource='rentals' listings={longTermRentals} />
        <Newsletter />
        <NewsLetterModal />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  // @ts-ignore
  const token = previewData.token;

  const [settings, longTermRentals] = await Promise.all([getSettings(), getAllLongTermRentals()]);

  if (!longTermRentals) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      longTermRentals,
      settings,
      preview,
      token: token ?? null,
    },
    revalidate: 10,
  };
};

export default PropertyRentalsIndexPage;
