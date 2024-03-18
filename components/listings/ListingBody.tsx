import ListingDetails from 'components/listings/ListingDetails';

import ListingSlider from './ListingSlider';

export default function ListingBody({ listing, resource }) {
  return (
    <>
      <ListingSlider listing={listing} />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <ListingDetails resource={resource} listing={listing} />
      </div>
    </>
  );
}
