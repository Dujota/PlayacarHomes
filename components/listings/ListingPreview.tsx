import Avatar from 'components/AuthorAvatar';
import CoverImage from 'components/CoverImage';
import Date from 'components/OLD-Listings/ListingDate';
import type { Listing } from 'lib/sanity.queries/listings';
import Link from 'next/link';

export default function ListingPreview({ title, coverImage, date, excerpt, author, agent, slug, price }: Omit<Listing, '_id'>) {
  // Format price as currency
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price || 0);

  // Use agent if available, otherwise use author
  const representative = agent || author;

  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} image={coverImage} priority={false} type='listings' />
      </div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <Link href={`/listings/${slug}`} className='hover:underline'>
          {title}
        </Link>
      </h3>
      <div className='mb-4 text-lg'>
        <Date dateString={date} />
      </div>
      <div className='mb-4 text-lg'>Price: {formattedPrice}</div>
      {excerpt && <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>}
      {representative && <Avatar name={representative.name} picture={representative.picture} />}
    </div>
  );
}
