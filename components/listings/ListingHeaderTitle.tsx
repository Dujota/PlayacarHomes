import { formatAndCapitalize } from 'lib/helpers/string-helpers';
import { deriveLocation } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const ListingHeaderTitle = ({ title, location, neighbourhood, postalCode, resource }) => {
  return (
    <div className='font-poppins flex flex-col items-start justify-start gap-[1rem] self-stretch py-[1rem] text-left text-[1.13rem] text-blue'>
      <Link href={`/${resource}`}>
        <div className='flex flex-row items-center justify-center'>
          <Image width={200} height={200} className='relative h-[2.25rem] w-[2.25rem] shrink-0 overflow-hidden' alt='' src='/left.svg' />
          <div className='relative font-medium leading-[150%]'>{`Back to ${formatAndCapitalize(resource)}`}</div>
        </div>
      </Link>

      <h1 className='font-inherit relative m-0 self-stretch text-[2.25rem] font-medium text-black'>{title}</h1>

      <div className='flex flex-row items-center justify-start gap-[1.5rem] self-stretch text-grey'>
        <div className='flex flex-row items-center justify-start gap-[0.5rem]'>
          <Image width={200} height={200} className='relative h-[1.88rem] w-[1.88rem] shrink-0 overflow-hidden' alt='' src='/location-listing-heading.svg' />
          <span className='relative leading-[160%]'>{deriveLocation(location, neighbourhood, postalCode)}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingHeaderTitle;
