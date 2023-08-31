import CTAButton from '../buttons/CTAButton';
// import FeaturedBlogCard from '../cards/FeaturedBlogCard';
import BlogCard from '../cards/BlogCard';
import type { Blog } from '../cards/FeaturedBlogCard';
import SectionHeader from '../headers/SectionHeader';

interface LatestNewsBannerProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  featuredBlogCards: Blog[];
}

const LatestNewsBanner = ({
  title = 'Latest From News',
  description = 'Explore our blog to gain valuable insights, industry trends, and expert advice on real estate in the Cancun Mexico area and stay informed throughout your real estate journey.',
  ctaLabel = 'Read All',
  ctaHref = '/blog',
  featuredBlogCards,
}: LatestNewsBannerProps) => {
  return (
    <section className='font-poppins mb-10 flex flex-row flex-wrap items-center justify-center self-stretch text-center text-[2.25rem] text-black sm:h-auto'>
      <div className='flex flex-col items-center justify-center gap-[2.5rem] sm:h-auto'>
        <SectionHeader title={title} description={description} />
        {/* <div className='flex flex-col items-center justify-start gap-[1.5rem] self-stretch px-[12.5rem] py-[0rem] sm:box-border sm:flex-1 sm:pl-[1rem] sm:pr-[1rem] md:box-border md:pl-[10rem] md:pr-[10rem]'>
          <h2 className='font-inherit relative m-0 font-medium text-inherit sm:w-auto sm:flex-1 sm:self-stretch'>{title}</h2>
          <p className='relative m-0 self-stretch text-[1rem] font-light leading-[190%] text-grey sm:flex-1'>{description}</p>
        </div> */}
        <div className='flex flex-row flex-wrap items-center justify-center gap-[5rem] overflow-hidden text-[1.19rem] sm:gap-[2rem]'>
          {featuredBlogCards.map((blog) => (
            <BlogCard key={blog._id} blog={blog} featured={true} />
          ))}
        </div>
        <CTAButton label={ctaLabel} href={ctaHref} />
      </div>
    </section>
  );
};

export default LatestNewsBanner;
