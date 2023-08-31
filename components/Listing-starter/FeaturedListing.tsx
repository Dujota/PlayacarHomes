import AuthorAvatar from 'components/AuthorAvatar';
import CoverImage from 'components/CoverImage';
import Date from 'components/Listing-starter/ListingDate';
import type { Listing } from 'lib/sanity.queries/listings';
import Link from 'next/link';

export default function FeaturedListing(props: Pick<Listing, 'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'agent' | 'slug' | 'price'>) {
  const { title, coverImage, date, excerpt, author, slug, price, agent } = props;

  // Use agent if available, otherwise use author
  const representative = agent || author;

  // Format price as currency
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price || 0);

  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage slug={slug} title={title} image={coverImage} type='listings' priority />
      </div>
      <div className='mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8'>
        <div>
          <h3 className='mb-4 text-4xl leading-tight lg:text-6xl'>
            <Link href={`/listings/${slug}`} className='hover:underline'>
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className='mb-4 text-lg md:mb-0'>
            <Date dateString={date} />
          </div>
          <div className='mb-4 text-lg md:mb-0'>Price: {formattedPrice}</div>
        </div>
        <div>
          {excerpt && <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>}
          {representative && <AuthorAvatar name={representative.name} picture={representative.picture} />}
        </div>
      </div>
    </section>
  );
}
