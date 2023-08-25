import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

interface BlogAsset {
  _ref: string;
  _type: string;
}

interface Author {
  name: string;
  picture: {
    _type: string;
    asset: BlogAsset;
  };
}

export interface Blog {
  slug: string;
  author: Author | null;
  _id: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: {
    asset: BlogAsset;
    _type: string;
  };
}

interface FeaturedBlogCardProps {
  blog: Blog;
}

const FeaturedBlogCard = ({ blog }: FeaturedBlogCardProps) => {
  const { title, slug, coverImage: source } = blog;
  return (
    <Link href={`/blog/${slug}`}>
      <div className='font-poppins flex h-[30.69rem] w-[38.25rem] flex-col items-center justify-center gap-[1rem] text-center text-[1.19rem] text-black sm:w-[25rem] sm:min-w-[18.75rem] sm:max-w-[25rem]'>
        <Image
          width={500}
          height={500}
          className='relative h-[26rem] w-[38.25rem] object-cover sm:w-auto sm:self-stretch'
          alt={title}
          src={urlForImage(source).height(1000).width(2000).url()}
        />
        <div className='flex flex-col items-start justify-start gap-[0.5rem]'>
          <p className='relative m-0 inline-block w-[22.5rem] font-medium leading-[140%]'>{title}</p>
          <p className='relative m-0 inline-block w-[22.5rem] text-[0.94rem] font-light leading-[160%] text-grey'>{blog.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedBlogCard;
