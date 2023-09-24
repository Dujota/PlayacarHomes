import FeaturedPropertyCardBanner from 'components/common/banners/FeaturedPropertyBanner';
import LatestNewsBanner from 'components/common/banners/LatestNewsBanner';
import Newsletter from 'components/common/NewsLetter';
import WhyUsSection from 'components/common/WhyUs';
import WhyUsV2 from 'components/common/WhyUs-v2';
import WhyUsSlider from 'components/common/WhyUsSlider';
// import CustomerTestimonials from '../components/customer-testimonials';
// import FeaturedPropertyBanner from '../components/featured-property-banner';
// import HomeSearch from '../components/home-search';
// import LatestNewsBanner from '../components/latest-news-banner';
// import NearbyPropertiesSection from '../components/nearby-properties-section';
// import Newsletter from '../components/newsletter';
// import PropertiesByCategorySection from '../components/properties-by-category-section';
// import WhyUsSection from '../components/why-us-section';
import { featuredBlogPostsMock, featuredListingsMock } from 'lib/demo.data';
import type { NextPage } from 'next';
import Image from 'next/image';

const Homepage: NextPage = () => {
  return (
    <div className='relative flex w-full flex-col items-start justify-start gap-[3.94rem] overflow-hidden bg-white'>
      <main className='flex flex-col items-center justify-center gap-[7.06rem] self-stretch'>
        <section className='font-poppins relative ml-auto h-[41.31rem] w-[90%] self-stretch text-left text-[0.88rem] text-black md:w-full' id='hero-section'>
          <Image width={800} height={600} className='absolute right-[-0.01rem] top-[0rem] h-[37.69rem] w-[45.75rem] object-cover opacity-80' alt='' src='/hero_image.png' />
          {/* <HomeSearch /> */}
          {/* <div className='absolute left-[32.44rem] top-[27.56rem] hidden h-[13.75rem] w-[9.81rem]'>
            <div className='absolute left-[0rem] top-[0rem] box-border h-[13.75rem] w-[9.81rem] border-[1px] border-solid border-gray shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]' />
            <div className='absolute left-[9.56rem] top-[0.5rem] h-[0.25rem] w-[12.75rem] [transform-origin:0_0] [transform:_rotate(90deg)]'>
              <div className='absolute left-[0rem] top-[0rem] h-[0.25rem] w-[12.75rem] bg-grey opacity-[0.1] [transform-origin:0_0] [transform:_rotate(90deg)]' />
              <div className='absolute left-[0rem] top-[0rem] h-[0.25rem] w-[3.81rem] bg-blue [transform-origin:0_0] [transform:_rotate(90deg)]' />
            </div>
            <div className='absolute left-[0rem] top-[0rem] flex flex-col items-start justify-start'>
              <div className='relative h-[2.75rem] w-[9.06rem]'>
                <div className='absolute left-[0rem] top-[0rem] h-[2.75rem] w-[9.06rem] bg-bg' />
                <div className='absolute left-[1.38rem] top-[0.75rem]'>$500 - $1200</div>
              </div>
              <div className='relative h-[2.75rem] w-[9.06rem]'>
                <div className='absolute left-[0rem] top-[0rem] h-[2.75rem] w-[9.06rem]' />
                <div className='absolute left-[1.38rem] top-[0.75rem]'>$1200 - $1500</div>
              </div>
              <div className='relative h-[2.75rem] w-[9.06rem]'>
                <div className='absolute left-[0rem] top-[0rem] h-[2.75rem] w-[9.06rem]' />
                <div className='absolute left-[1.38rem] top-[0.75rem]'>$1500 - $2100</div>
              </div>
              <div className='relative h-[2.75rem] w-[9.06rem]'>
                <div className='absolute left-[0rem] top-[0rem] h-[2.75rem] w-[9.06rem]' />
                <div className='absolute left-[1.38rem] top-[0.75rem]'>$2100 - $2500</div>
              </div>
              <div className='relative h-[2.75rem] w-[9.06rem]'>
                <div className='absolute left-[0rem] top-[0rem] h-[2.75rem] w-[9.06rem]' />
                <div className='absolute left-[1.38rem] top-[0.75rem]'>$2500 - $3000</div>
              </div>
            </div>
          </div> */}
          <div className='absolute left-[0rem] top-[6.25rem] flex flex-row items-center justify-center py-[0rem] pl-[4rem] text-[3.38rem]'>
            <h1
              className='font-inherit relative m-0 inline-block w-[44.81rem] shrink-0 font-medium tracking-[-0.01em]
                        text-inherit sm:w-full sm:!max-w-[18rem] sm:text-[3.13rem] md:max-w-[25.63rem]'
              id='hero-text'
            >
              Your Gateway to Extraordinary Properties
            </h1>
          </div>
        </section>
        <FeaturedPropertyCardBanner title='Popular Properties For You' listings={featuredListingsMock} />
        <WhyUsSection />
        {/* <WhyUsV2 /> */}
        {/* <WhyUsSlider /> */}
        {/* <FeaturedPropertyBanner/> */}
        <Newsletter />
        {/* <PropertiesByCategorySection /> */}
        <LatestNewsBanner featuredBlogCards={featuredBlogPostsMock} />
        {/* <NearbyPropertiesSection /> */}
        {/* <CustomerTestimonials /> */}
      </main>
    </div>
  );
};

export default Homepage;
