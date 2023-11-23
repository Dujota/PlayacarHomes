import { urlForImage } from 'lib/sanity.image';
// Types
import type { Post } from 'lib/sanity.queries/blog';
import Image from 'next/image';
import Link from 'next/link';

type BlogCardProps = {
  blog: Post;
  featured?: boolean;
};

const BlogCard = ({ blog, featured = false }: BlogCardProps) => {
  const { title, excerpt, slug, coverImage: source } = blog;

  const styles = {
    featured: {
      container: 'font-poppins relative h-[35rem] w-[35.19rem] text-center text-[1.19rem] text-black',
      image: 'absolute left-[0rem] top-[0rem] h-[22.25rem] w-[35.19rem] object-cover',
      textContainer: 'absolute left-[6.38rem] top-[26rem] flex flex-col items-start justify-start gap-[0.5rem]',
    },
    base: {
      container: 'font-poppins relative h-[35rem] w-[25.19rem] text-center text-[1.19rem] text-black',
      image: 'absolute left-[0rem] top-[0rem] h-[22.25rem] w-[25.19rem] object-cover',
      textContainer: 'absolute left-[1.38rem] top-[26rem] flex flex-col items-start justify-start gap-[0.5rem]',
    },
  };

  return (
    <div className={`${featured ? styles.featured.container : styles.base.container}`}>
      <Link href={`/blog/${slug}`}>
        <Image
          width={500}
          height={500}
          className={`${featured ? styles.featured.image : styles.base.image}`}
          alt={title}
          src={urlForImage(source).height(1000).width(2000).url()}
        />
        <div className={`${featured ? styles.featured.textContainer : styles.base.textContainer}`}>
          <div className='relative inline-block w-[22.5rem] font-medium leading-[140%]'>{title}</div>
          <div className='relative inline-block w-[22.5rem] text-[0.94rem] font-light leading-[160%] text-grey'>{excerpt}</div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
