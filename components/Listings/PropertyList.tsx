import CardGrid from 'components/common/cards/CardGrid';
import PropertyCard from 'components/common/cards/PropertyCard';
import { Listing } from 'lib/sanity.queries/listings';

interface ListingProps {
  listings: Listing[];
  resource?: string;
  featured?: boolean;
}

const PropertyList = ({ listings, resource, featured }: ListingProps) => {
  return (
    <CardGrid>
      {listings.map((listing, idx) => (
        <PropertyCard resource={resource} key={idx} details={listing} isFeatured={featured} />
      ))}
    </CardGrid>
  );
};

export default PropertyList;
