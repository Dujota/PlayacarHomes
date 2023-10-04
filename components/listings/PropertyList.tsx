import CardGrid from 'components/common/cards/CardGrid';
import PropertyCard from 'components/common/cards/PropertyCard';
import { Listing } from 'lib/sanity.queries/listings';

interface ListingProps {
  listings: Listing[];
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
