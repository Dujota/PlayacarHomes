import CardGrid from 'components/common/cards/CardGrid';
import PropertyCard from 'components/common/cards/PropertyCard';
import { ListingType } from 'types/listing';

interface ListingProps {
  listings: ListingType[];
}

const PropertyList = ({ listings }: ListingProps) => {
  return (
    <CardGrid>
      {listings.map((listing, idx) => (
        <PropertyCard key={idx} details={listing} />
      ))}
    </CardGrid>
  );
};

export default PropertyList;
