import { urlForImage } from 'lib/sanity.image';
import { Listing } from 'lib/sanity.queries/listings';
import Image from 'next/image';
import Link from 'next/link';

import CardLineBreak from '../dividers/CardLineBreak';
import PropertyCardDetailIcon from '../icons/PropertyCardDetailIcon';
import PropertyCardDetails from './PropertyCardDetails';

export type PropertyCardProps = {
  details: Listing;
};

const PropertyCard = ({ details }: PropertyCardProps) => {
  const { title, slug, coverImage: source, featured } = details;
  return (
    <Link href={`/listings/${slug}`}>
      <div className='font-poppins relative box-border h-[29.5rem] w-[25rem] border-[1.5px] border-solid border-shades-of-purple-purple-96 bg-white text-left text-[1.5rem] text-black'>
        {/* Favourite Icon */}
        <Image width={500} height={500} className='absolute left-[20.56rem] top-[-0.47rem] z-50 h-[5.37rem] w-[5.37rem]' alt='favourite' src='/favorite.svg' />
        {/* Listing Image */}
        <Image width={500} height={500} className='relative left-[0rem] top-[0rem] h-[13.75rem] w-full' alt={title} src={urlForImage(source).height(1000).width(2000).url()} />

        {/* Details container */}
        <div className='property-card-details-container absolute top-[15.75rem]  mx-3 flex w-[24.69rem] flex-col items-start justify-start gap-[1.5rem]'>
          <PropertyCardDetails {...details} />
          {/* Horizontal Line */}
          <CardLineBreak small />

          {/* TODO: remove container ???? */}
          <div className='flex flex-row items-center justify-start gap-[3rem] self-stretch text-[0.88rem] sm:gap-[1.25rem]'>
            <PropertyCardDetailIcon details={details} />
          </div>
        </div>

        {/* <Image width={500} height={500}
        className="absolute top-[-0.47rem] left-[20.06rem] w-[5.37rem] h-[5.37rem]"
        alt=""
        src={propertyImageDimensionsLa}
      /> */}
      </div>
    </Link>
  );
};

export default PropertyCard;

// Prop Details Container
// <div className='flex flex-col items-start justify-start gap-[1.5rem]'>
// {/* Property Details */}
// <div className='flex flex-col items-start justify-start gap-[0.5rem]'>
//   {/* Property Title */}
//   <h2 className='font-inherit relative m-0 inline-block w-[21.44rem] font-medium text-inherit'>{addressLabel}</h2>

//   {/* Price */}
//   <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[1.31rem] text-blue'>
//     <div className='relative font-medium'>$2,095</div>
//     <div className='relative text-[0.88rem] font-medium text-grey'>/month</div>
//   </div>
// </div>

// {/* Address */}
// <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[0.94rem]'>
//   <Image width={500} height={500} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src='/icons8location-11.svg' />
//   <div className='relative inline-block w-[19.5rem] shrink-0'>{propertyAddress}</div>
// </div>
// </div>

// PROPERTY FEATURES
//    {/* Property Features */}
//    <div className='flex flex-row items-center justify-center gap-[1.5rem] text-[0.88rem]'>
//    <div className='flex flex-row items-center justify-start gap-[0.5rem]'>
//      <Image width={500} height={500} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='TEST' src={propertyImageId} />
//      <div className='relative font-medium leading-[140%]'>{bedroomCount}</div>
//    </div>
//    <div className='flex flex-row items-center justify-start gap-[0.5rem]'>
//      <Image width={500} height={500} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src='/icon--bath1.svg' />
//      <div className='relative font-medium leading-[140%]'>{bathroomCount}</div>
//    </div>
//    <div className='flex flex-row items-center justify-start gap-[0.5rem]'>
//      <Image width={500} height={500} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src='/icon--square-meters1.svg' />
//      <div className='relative font-medium leading-[140%]'>{roomSizeLabel}</div>
//    </div>
//  </div>
