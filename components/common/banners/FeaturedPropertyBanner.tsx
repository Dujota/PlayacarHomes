import PropertyList from 'components/listings/PropertyList';
import { Listing } from 'lib/sanity.queries/listings';

import CTAButton from '../buttons/CTAButton';
import FeaturedPropertyCard, { FeaturedPropertyCardProps } from '../cards/FeaturedPorpertyCard';
import SectionHeader from '../headers/SectionHeader';

interface FeaturedProperty {
  slug: string;
  featured: null | boolean;
  bedrooms: number;
  area: number;
  tags: null | string[];
  postalCode: string;
  _id: string;
  title: string;
  coverImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: number;
  bathrooms: number;
  location: null | string;
  neighbourhood: string;
}

type FeaturedPropertyCardBannerProps = {
  title: string;
  listings: Listing[];
  ctaLink: string;
  resource: string;
};

const FeaturedPropertyCardBanner: React.FC<FeaturedPropertyCardBannerProps> = ({ title, listings, ctaLink, resource }) => {
  return (
    <section className='font-poppins flex flex-col items-center justify-start gap-[3.75rem] self-stretch text-left text-[2.25rem] text-black' id='suggested-properties'>
      <SectionHeader title={title} />
      <div className='flex flex-row flex-wrap items-center justify-center gap-[1rem] text-[1.5rem]'>
        {/* {listings.map((listing, idx) => (
          <FeaturedPropertyCard resource={resource} key={idx} details={listing} />
        ))} */}
        <PropertyList resource={resource} listings={listings} featured={true} />
      </div>
      <CTAButton label='See More' href={ctaLink} />
    </section>
  );
};

export default FeaturedPropertyCardBanner;
