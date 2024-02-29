import { detailIcons } from 'lib/constants';
import { getCapitalizedText } from 'lib/helpers/string-helpers';
import { Listing } from 'lib/sanity.queries/listings';
import Image from 'next/image';

const { beds, baths, area, type } = detailIcons;

interface PropertyCardDetailIconProps {
  details: Listing;
  resource: string;
}

const PropertyCardDetailIcon = ({ details, resource = 'listing' }: PropertyCardDetailIconProps) => {
  return (
    <div className='flex flex-row items-center justify-start gap-[3rem] self-stretch text-[0.88rem] sm:gap-[1.25rem]'>
      {/* Beds */}
      <div className='flex flex-row items-center justify-start gap-[0.5rem]'>
        <Image width={200} height={200} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt={beds.label} src={beds.icon} />
        <span className='relative font-medium leading-[140%]'>{`${details.bedrooms} ${beds.label}`}</span>
      </div>
      {/* Bathrooms */}
      <div className='flex flex-row items-center justify-start gap-[0.5rem]'>
        <Image width={200} height={200} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt={baths.label} src={baths.icon} />
        <span className='relative font-medium leading-[140%]'>{`${details.bathrooms} ${baths.label}`}</span>
      </div>

      {resource !== 'listings' ? (
        <div className='flex flex-row items-center justify-start gap-[0.5rem]'>
          <Image width={200} height={200} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt={type.label} src={type.icon} />
          <span className='relative font-medium leading-[140%]'>{getCapitalizedText(details.typeOfProperty)}</span>
        </div>
      ) : (
        <div className='flex flex-row items-center justify-start gap-[0.5rem]'>
          <Image width={200} height={200} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt={area.label} src={area.icon} />
          <span className='relative font-medium leading-[140%]'>{`${details.area} ${area.label}`}</span>
        </div>
      )}
    </div>
  );
};

export default PropertyCardDetailIcon;

// export type PropertyCardDetailIconProps = {
//   iconSrc: string;
//   label: string;
// };

// const PropertyCardDetailIcon: React.FC<PropertyCardDetailIconProps> = ({ iconSrc, label }) => {
//   return (
//     <div className='flex flex-row items-center justify-start gap-[0.5rem]'>
//       <Image width={200} height={200} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src={iconSrc} />
//       <span className='relative font-medium leading-[140%]'>{label}</span>
//     </div>
//   );
// };
