import { Listing } from 'lib/sanity.queries/listings';
import { deriveLocation } from 'lib/utils';
import Image from 'next/image';

import Price from './Price';

interface PropertyCardDetailsProps extends Listing {
  resource?: string;
}

const PropertyCardDetails: React.FC<PropertyCardDetailsProps> = ({ title, price, location, neighbourhood, postalCode, resource, mxnPrice }) => {
  return (
    <>
      <h5 className='font-inherit relative m-0 inline-block w-[28.5rem] font-medium text-inherit sm:w-auto sm:self-stretch'>{title}</h5>

      <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[1.31rem] text-blue'>
        <Price resource={resource} price={price} isMxn={mxnPrice} />
      </div>

      <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[0.94rem]'>
        <Image width={500} height={500} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src='/listing-location.svg' />
        <span className='relative inline-block w-[19.5rem] shrink-0'>{deriveLocation(location, neighbourhood, postalCode)}</span>
      </div>
    </>
  );
};

export default PropertyCardDetails;
