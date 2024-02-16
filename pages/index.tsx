import FeaturedPropertyCardBanner from 'components/common/banners/FeaturedPropertyBanner';
import LatestNewsBanner from 'components/common/banners/LatestNewsBanner';
import { Blog } from 'components/common/cards/FeaturedBlogCard';
import NewsLetterModal from 'components/common/modals/NewsLetterModal';
import Newsletter from 'components/common/NewsLetter';
import WhyUsSection from 'components/common/WhyUs';
import HeroSection from 'components/HeroSection';
// import CustomerTestimonials from '../components/customer-testimonials';
// import HomeSearch from '../components/home-search';
// import NearbyPropertiesSection from '../components/nearby-properties-section';
// import PropertiesByCategorySection from '../components/properties-by-category-section';
import { getHomepageSectionData, getSettings } from 'lib/sanity.client';
import type { Listing } from 'lib/sanity.queries/listings';
import type { LongTermRental } from 'lib/sanity.queries/long-term-rentals';
import type { Settings } from 'lib/sanity.queries/settings';
import type { VacationRental } from 'lib/sanity.queries/vacation-rentals';
import type { GetStaticProps, NextPage } from 'next';
import type { PreviewData, Query } from 'types/sanity-queries';

interface PageProps {
  featuredPosts: Blog[];
  featuredListings: Listing[];
  featuredLongTermRentals: LongTermRental[];
  featuredVacationRentals: VacationRental[];
  settings?: Settings;
  preview: boolean;
  token: string | null;
  pageBuilder: any[];
}

const Homepage: NextPage = ({ featuredPosts, featuredListings, featuredLongTermRentals, featuredVacationRentals, pageBuilder, settings, preview, token }: PageProps) => {
  const [heroSection, newsletterForm, whyUsSection] = pageBuilder;

  return (
    <div className='relative flex w-full flex-col items-start justify-start gap-[3.94rem] overflow-hidden bg-white'>
      <main className='flex flex-col items-center justify-center gap-[7.06rem] self-stretch'>
        <HeroSection heroSection={heroSection} />
        <FeaturedPropertyCardBanner resource='listings' title='Popular Properties For Sale' listings={featuredListings} ctaLink='/listings' />
        <WhyUsSection heading={whyUsSection.heading} subheading={whyUsSection.subheading} whyUsCards={whyUsSection.whyUsCards} />
        <FeaturedPropertyCardBanner resource='rentals' title='Long Term Rentals For You' listings={featuredLongTermRentals} ctaLink='/rentals' />
        <Newsletter title={newsletterForm.label} description={newsletterForm.heading} />
        <FeaturedPropertyCardBanner resource='vacation-rentals' title='Vacation Rentals For You' listings={featuredVacationRentals} ctaLink='/vacation-rentals' />
        {/* <PropertiesByCategorySection /> */}
        <LatestNewsBanner featuredBlogCards={featuredPosts} />
        {/* <NearbyPropertiesSection /> */}
        {/* <CustomerTestimonials /> */}
      </main>
      <NewsLetterModal />
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  const token = previewData.token;

  const [settings, { featuredPosts, featuredListings, featuredLongTermRentals, featuredVacationRentals, sections }] = await Promise.all([getSettings(), getHomepageSectionData()]);

  return {
    props: {
      pageBuilder: sections.pageBuilder,
      settings,
      featuredPosts,
      featuredListings,
      featuredLongTermRentals,
      featuredVacationRentals,
      preview,
      token: token ?? null,
    },
    revalidate: 10,
  };
};
export default Homepage;
