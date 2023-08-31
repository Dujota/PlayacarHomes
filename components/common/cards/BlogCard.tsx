import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';
// Types
import { BlogCardType } from 'types/blog';

type BlogCardProps = {
  blog: BlogCardType;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  const { title, excerpt, slug, coverImage: source } = blog;

  return (
    <div className='font-poppins relative h-[35rem] w-[25.19rem] text-center text-[1.19rem] text-black'>
      <Link href={`/blog/${slug}`}>
        <Image
          width={500}
          height={500}
          className='absolute left-[0rem] top-[0rem] h-[22.25rem] w-[25.19rem] object-cover'
          alt=''
          src={urlForImage(source).height(1000).width(2000).url()}
        />
        <div className='absolute left-[1.38rem] top-[26rem] flex flex-col items-start justify-start gap-[0.5rem]'>
          <div className='relative inline-block w-[22.5rem] font-medium leading-[140%]'>{title}</div>
          <div className='relative inline-block w-[22.5rem] text-[0.94rem] font-light leading-[160%] text-grey'>{excerpt}</div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
