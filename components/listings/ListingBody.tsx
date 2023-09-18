// import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import ListingDetails from 'components/listings/ListingDetails';

// import { formatPrice } from 'lib/utils';
import ListingSlider from './ListingSlider';

export default function ListingBody({ listing }) {
  // const representative = listing.agent || listing.author;
  // const formattedPrice = formatPrice(listing.price || 0);

  return (
    <>
      <ListingSlider listing={listing} />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <ListingDetails listing={listing} />
      </div>
    </>
  );
}
