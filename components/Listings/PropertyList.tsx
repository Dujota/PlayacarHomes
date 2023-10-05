import CardGrid from 'components/common/cards/CardGrid';
import PropertyCard from 'components/common/cards/PropertyCard';
import { Listing } from 'lib/sanity.queries/listings';

interface ListingProps {
  listings: Listing[];
  resource?: string;
}

const PropertyList = ({ listings, resource }: ListingProps) => {
  return (
    <CardGrid>
      {listings.map((listing, idx) => (
        <PropertyCard resource={resource} key={idx} details={listing} />
      ))}
    </CardGrid>
  );
};

export default PropertyList;
