import ListingPreview from 'components/Listing/ListingPreview';
import type { Listing } from 'lib/sanity.queries/listings';

export default function MoreListings({ listings }: { listings: Listing[] }) {
  return (
    <section>
      <h2 className='mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl'>More Listings</h2>
      <div className='mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32'>
        {listings.map((listing) => (
          <ListingPreview
            key={listing._id}
            price={listing.price}
            title={listing.title}
            coverImage={listing.coverImage}
            date={listing.date}
            author={listing.author}
            agent={listing.agent}
            slug={listing.slug}
            excerpt={listing.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
