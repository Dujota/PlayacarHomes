// Components
import Newsletter from 'components/common/forms/NewsLetter';
import PageTitle from 'components/common/headers/PageTitle';
import NewsLetterModal from 'components/common/modals/NewsLetterModal';
import JsonLd from 'components/common/seo/JSONLD';
import PropertyList from 'components/listings/PropertyList';
// Sanity
import { getAllVacationRentals, getSettings } from 'lib/sanity.client';
// Types
import type { Settings } from 'lib/sanity.queries/settings';
import type { VacationRental } from 'lib/sanity.queries/vacation-rentals';
import { createListingCollectionStructuredData } from 'lib/seo/structuredData';
import type { GetStaticProps, NextPage, PreviewData } from 'next';
import type { Query } from 'types/sanity-queries';

const pageTitle = 'Vacation Rentals For You';

const VacationRentalsIndexPage: NextPage = ({ vacationRentals, settings }: PageProps) => {
  return (
    <>
      <JsonLd data={createListingCollectionStructuredData(vacationRentals, 'vacation')} />
      <div className='relative flex w-full flex-col items-center justify-center gap-[6.5rem] overflow-hidden bg-white'>
        <main className='font-poppins flex flex-col items-center justify-center gap-[4.94rem] self-stretch text-center text-[2.25rem] text-black'>
          <PageTitle title={pageTitle} />
          <PropertyList resource='vacation-rentals' listings={vacationRentals} />
          <Newsletter />
          <NewsLetterModal />
        </main>
      </div>
    </>
  );
};

interface PageProps {
  vacationRentals: VacationRental[];
  settings?: Settings;
  preview: boolean;
  token: string | null;
  loading?: boolean;
}

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  // @ts-ignore
  const token = previewData.token;

  const [settings, vacationRentals] = await Promise.all([getSettings(), getAllVacationRentals()]);

  if (!vacationRentals) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vacationRentals,
      settings,
      preview,
      token: token ?? null,
    },
    revalidate: 10,
  };
};

export default VacationRentalsIndexPage;
