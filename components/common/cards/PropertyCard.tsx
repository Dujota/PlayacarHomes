import { urlForImage } from 'lib/sanity.image';
import { Listing } from 'lib/sanity.queries/listings';
import Image from 'next/image';
import Link from 'next/link';

import CardLineBreak from '../dividers/CardLineBreak';
import PropertyCardDetailIcon from '../icons/PropertyCardDetailIcon';
import PropertyCardDetails from './PropertyCardDetails';

export type PropertyCardProps = {
  details: Listing;
  resource: string;
  isFeatured?: boolean;
};

const PropertyCard = ({ details, resource = 'listings', isFeatured = false }: PropertyCardProps) => {
  const { title, slug, coverImage: source, featured } = details;

  return (
    <Link href={`/${resource}/${slug}`} className={isFeatured ? 'bg-bg' : 'bg-white'}>
      <div
        className={`font-poppins relative box-border h-[29.5rem] w-[25rem] border-[1.5px] border-solid border-shades-of-purple-purple-96 ${
          isFeatured ? 'bg-bg' : 'bg-white'
        }text-left text-[1.5rem] text-black`}
      >
        {/* Favourite Icon */}
        <Image width={500} height={500} className='absolute left-[20.56rem] top-[-0.47rem] z-50 h-[5.37rem] w-[5.37rem]' alt='favourite' src='/favorite.svg' />
        {/* Listing Image */}
        <Image width={500} height={500} className='relative left-[0rem] top-[0rem] h-[13.75rem] w-full' alt={title} src={urlForImage(source).height(1000).width(2000).url()} />

        {/* Details container */}
        <div className='property-card-details-container absolute top-[15.75rem]  mx-3 flex w-[24.69rem] flex-col items-start justify-start gap-[1.5rem]'>
          <PropertyCardDetails {...details} resource={resource} />
          {/* Horizontal Line */}
          <CardLineBreak small />

          {/* TODO: remove container ???? */}
          <div className='flex flex-row items-center justify-start gap-[3rem] self-stretch text-[0.88rem] sm:gap-[1.25rem]'>
            <PropertyCardDetailIcon resource={resource} details={details} />
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
