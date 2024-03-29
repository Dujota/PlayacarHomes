import Avatar from 'components/AuthorAvatar';
import Date from 'components/common/Date';
import CoverImage from 'components/CoverImage';
import type { Post } from 'lib/sanity.queries/blog';

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }: Omit<Post, '_id'>) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage title={title} image={coverImage} priority={false} />
      </div>
      <h3 className='mb-3 text-2xl leading-snug'>{title}</h3>
      <div className='mb-4 text-lg'>
        <Date dateString={date} />
      </div>
      {excerpt && <p className='text-md mb-4 leading-relaxed'>{excerpt}</p>}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
