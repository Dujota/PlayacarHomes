import ListingSearchForm from 'components/common/forms/ListingSearchForm';
import Newsletter from 'components/common/NewsLetter';
import ListingsCardGridContainer from 'components/Listings/ListingsCardContainer';
import { listingsIndexMock } from 'lib/demo.data';
import type { NextPage } from 'next';

// import CardGridContainer from '../components/card-grid-container';
// import ListingindexSearch from '../components/listingindex-search';
const pageTitle = 'Popular Properties For You';

const PropertyListingsIndexPage: NextPage = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-[6.5rem] overflow-hidden bg-white'>
      <main className='font-poppins flex flex-col items-center justify-center gap-[4.94rem] self-stretch text-center text-[2.25rem] text-black'>
        <h1 className='font-inherit relative m-0 self-stretch font-medium text-inherit'>{pageTitle}</h1>
        {/* <ListingindexSearch /> */}

        <ListingsCardGridContainer listings={listingsIndexMock} />
        <Newsletter />
      </main>
    </div>
  );
};

export default PropertyListingsIndexPage;
