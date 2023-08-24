import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

import PropertyCardDetailIcon from '../icons/PropertyCardDetailIcon';
import CardLineBreak from './CardLineBreak';
import PropertyCardDetails, { PropertyCardDetailsProps } from './FeaturedPropertyCardDetails';

export type FeaturedPropertyCardProps = {
  details: PropertyCardDetailsProps;
};

const FeaturedPropertyCard: React.FC<FeaturedPropertyCardProps> = ({ details }) => {
  const { title, slug, coverImage: source } = details;

  return (
    <Link href={`/listings/${slug}`}>
      <div className='relative box-border h-[36.05rem] w-[32.19rem] border-[1.5px] border-solid border-shades-of-purple-purple-96 bg-bg sm:w-[25rem] sm:min-w-[18.75rem] sm:max-w-[25.63rem]'>
        <Image
          width={600}
          height={600}
          className='absolute left-[0rem] top-[0rem] h-[21.13rem] w-[32.19rem] object-cover sm:w-[25rem] sm:min-w-[18.75rem] sm:max-w-[25rem]'
          alt={title}
          src={urlForImage(source).height(1000).width(2000).url()}
        />

        <div className='absolute left-[0rem] top-[21.12rem] box-border flex h-[15rem] w-[32.19rem] flex-col items-start justify-center gap-[1.13rem] px-[1.5rem] py-[0rem] sm:h-auto sm:w-auto sm:min-w-[18.75rem] sm:max-w-[25.63rem] sm:[align-self:unset]'>
          <PropertyCardDetails {...details} />
          <CardLineBreak />
          <div className='flex flex-row items-center justify-start gap-[3rem] self-stretch text-[0.88rem] sm:gap-[1.25rem]'>
            <PropertyCardDetailIcon details={details} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPropertyCard;
