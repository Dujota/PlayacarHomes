import PropertyCard from 'components/common/cards/PropertyCard';

interface ListingProps {
  listings: {
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
  }[];
}

const ListingsCardGridContainer = ({ listings }: ListingProps) => {
  return (
    <section className='font-poppins flex flex-col items-center justify-center gap-[3.75rem] self-stretch text-left text-[1.5rem] text-black'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-[7.0rem] self-stretch'>
        {listings.map((listing, idx) => (
          <PropertyCard key={idx} details={listing} />
        ))}
      </div>
    </section>
  );
};

export default ListingsCardGridContainer;
