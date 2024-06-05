import BlogHeaderTitle from 'components/blog/BlogHeaderTitle';
import CoverImage from 'components/CoverImage';
import type { Post } from 'lib/sanity.queries/blog';

export default function PostHeader(props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>) {
  const { title, coverImage, date, author, slug } = props;
  return (
    <>
      <BlogHeaderTitle title={title} date={date} />
      <div className='mb-8 sm:mx-0 md:mb-16'>
        <CoverImage title={title} image={coverImage} priority slug={slug} type='posts' />
      </div>
    </>
  );
}
