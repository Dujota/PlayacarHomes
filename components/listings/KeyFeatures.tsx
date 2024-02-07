import Date from 'components/common/Date';
import { Listing } from 'lib/sanity.queries/listings';
import { capitalizeEveryWord, formatPrice } from 'lib/utils';

import FeatureItem from './FeatureItem';

export default function KeyFeatures({ listing }: { listing: Listing }) {
  return (
    <div className='gap-[2rem]} mb-10 flex flex-col items-start justify-start'>
      <h2 className='font-inherit relative m-0 mb-[2rem] font-medium text-inherit'>Key Features</h2>
      <div id='feature-container' className='flex flex-wrap items-baseline justify-center gap-[1rem] text-[0.88rem] text-grey'>
        <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
          {/* Left Column */}
          {/* <FeatureItem title='Listed on' value='June 23, 2023' />
          <FeatureItem title='Available' value='Yes' />
          <FeatureItem title='Property Type' value='Home' />
          <FeatureItem title='Laundry' value='Yes' />
          <FeatureItem title='Air Conditioner' value='Yes' />
          <FeatureItem title='Insulation' value='Yes' /> */}
          <FeatureItem title='Listed on' value={<Date dateString={listing.date} /> || 'N/A'} />
          <FeatureItem title='Available' value={capitalizeEveryWord(listing.status) || 'N/A'} />
          <FeatureItem title='Property Type' value={capitalizeEveryWord(listing.typeOfProperty) || 'N/A'} />
          <FeatureItem title='Price' value={`${formatPrice(listing.price)}` || 'N/A'} />
          <FeatureItem title='Bedrooms' value={listing.bedrooms?.toString() || 'N/A'} />
          <FeatureItem title='Bathrooms' value={listing.bathrooms?.toString() || 'N/A'} />
        </div>

        <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
          {/* Right Column */}
          {/* <FeatureItem title='City' value='Mexico' />
          <FeatureItem title='Built In' value='2018' />
          <FeatureItem title='Size' value='2,124 sqft' />
          <FeatureItem title='Parking Area' value='Yes' />
          <FeatureItem title='Price' value='$2,400' /> */}
          <FeatureItem title='City' value={capitalizeEveryWord(listing.location?.city) || 'N/A'} />
          <FeatureItem title='Postal Code' value={listing.postalCode || 'N/A'} />
          <FeatureItem title='Size' value={`${listing?.area} m²` || 'N/A'} />
          <FeatureItem title='Neighbourhood' value={capitalizeEveryWord(listing.neighbourhood) || 'N/A'} />
          <FeatureItem title='Style' value={listing.style || 'N/A'} />
          <FeatureItem title='Association Fee' value={`${formatPrice(listing.associationFee)}` || 'N/A'} />
        </div>
      </div>
    </div>
  );
}
