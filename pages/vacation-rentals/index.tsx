// import ListingSearchForm from 'components/common/forms/ListingSearchForm';
import PageTitle from 'components/common/headers/PageTitle';
import LargeModal from 'components/common/modals/LargeModal';
import Newsletter from 'components/common/NewsLetter';
import PropertyList from 'components/listings/PropertyList';
import { listingsIndexMock } from 'lib/demo.data';
import type { NextPage } from 'next';

// import CardGridContainer from '../components/card-grid-container';
// import ListingindexSearch from '../components/listingindex-search';
const pageTitle = 'Popular Properties For You';

const VacationRentalsIndexPage: NextPage = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-[6.5rem] overflow-hidden bg-white'>
      <main className='font-poppins flex flex-col items-center justify-center gap-[4.94rem] self-stretch text-center text-[2.25rem] text-black'>
        <PageTitle title={pageTitle} />
        {/* <ListingindexSearch /> */}
        <PropertyList resource='vacation-rentals' listings={listingsIndexMock} />
        <Newsletter />
        <LargeModal />
      </main>
    </div>
  );
};

export default VacationRentalsIndexPage;
