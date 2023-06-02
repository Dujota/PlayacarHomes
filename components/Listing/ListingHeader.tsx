import Avatar from 'components/AuthorAvatar';
import CoverImage from 'components/CoverImage';
import ListingTitle from 'components/Listing/ListingTitle';
import type { Listing } from 'lib/sanity.queries/listings';

export default function ListingHeader(props: Pick<Listing, 'title' | 'coverImage' | 'price' | 'author' | 'agent' | 'slug'>) {
  const { title, coverImage, price, author, slug, agent } = props;

  // Use agent if available, otherwise use author
  const representative = agent || author;

  // Format price as currency
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price || 0);
  return (
    <>
      <ListingTitle>{title}</ListingTitle>
      <div className='hidden md:mb-12 md:block'>{author && <Avatar name={author.name} picture={author.picture} />}</div>
      <div className='mb-8 sm:mx-0 md:mb-16'>
        <CoverImage title={title} image={coverImage} priority slug={slug} type='listings' />
      </div>
      <div className='mx-auto max-w-2xl'>
        <div className='mb-6 block md:hidden'>{representative && <Avatar name={representative.name} picture={representative.picture} />}</div>
        <div className='mb-6 text-lg'>
          <span>{`Price: ${formattedPrice}`}</span>
        </div>
      </div>
    </>
  );
}
