import Date from 'components/common/Date';
import { formatMXN } from 'lib/helpers/price-helpers';
import { Listing } from 'lib/sanity.queries/listings';
import { capitalizeEveryWord, formatPrice } from 'lib/utils';

import FeatureItem from './FeatureItem';

export default function KeyFeatures({ listing, resource }: { listing: Listing; resource?: string }) {
  const isListing = resource === 'listings';
  return (
    <div className='gap-[2rem]} mb-10 flex flex-col items-start justify-start'>
      <h2 className='font-inherit relative m-0 mb-[2rem] font-medium text-inherit'>Key Features</h2>
      <div id='feature-container' className='flex flex-wrap items-baseline justify-center gap-[1rem] text-[0.88rem] text-grey'>
        {/* Left Column */}
        <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
          <FeatureItem title='Status' value={capitalizeEveryWord(listing.status) || 'N/A'} />
          <FeatureItem title='Property Type' value={capitalizeEveryWord(listing.typeOfProperty) || 'N/A'} />
          <FeatureItem
            resource={resource}
            title='Price'
            value={(listing?.price && (listing?.mxnPrice ? formatMXN(listing?.price) : `${formatPrice(listing?.price)} USD`)) || 'N/A'}
          />
          {isListing && (
            <FeatureItem
              title='Association Fee'
              value={(listing?.associationFee && (listing?.mxnPrice ? formatMXN(listing?.associationFee) : `${formatPrice(listing?.associationFee)} USD`)) || 'N/A'}
            />
          )}
          <FeatureItem title='Bedrooms' value={listing.bedrooms?.toString() || 'N/A'} />
          <FeatureItem title='Bathrooms' value={listing.bathrooms?.toString() || 'N/A'} />
        </div>

        {/* Right Column */}
        <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
          <FeatureItem title='City' value={capitalizeEveryWord(listing.location?.city) || 'N/A'} />
          <FeatureItem title='Postal Code' value={listing.postalCode || 'N/A'} />
          {isListing && <FeatureItem title='Land Size' value={`${listing?.landArea ?? 'N/A'} m²`} />}
          {isListing && <FeatureItem title='Construction Size' value={`${listing?.area ?? 'N/A'} m²`} />}
          <FeatureItem title='Neighbourhood' value={capitalizeEveryWord(listing.neighbourhood) || 'N/A'} />
          <FeatureItem title='Style' value={listing.style || 'N/A'} />
        </div>
      </div>
    </div>
  );
}
