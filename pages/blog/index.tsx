// import BlogCardGridContainer from '../components/blog-card-grid-container';
// import TabbingWithArrow from '../components/tabbing-with-arrow';
import BlogList from 'components/blog/BlogList';
import PageTitle from 'components/common/headers/PageTitle';
import Newsletter from 'components/common/NewsLetter';
import { blogPostWithAuthorMock, featuredBlogPostsMock } from 'lib/demo.data';
import type { NextPage } from 'next';

const pageTitle = 'Latest From The Blog';
const blogCardData = [...featuredBlogPostsMock, blogPostWithAuthorMock, ...featuredBlogPostsMock, ...featuredBlogPostsMock, ...featuredBlogPostsMock];

const BlogLandingPage: NextPage = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-[6.25rem] overflow-hidden bg-white'>
      <main className='font-poppins flex flex-col items-center justify-start gap-[2.5rem] self-stretch text-center text-[2.25rem] text-black'>
        <PageTitle title={pageTitle} />
        {/* <TabbingWithArrow />*/}
        <BlogList cards={blogCardData} />
        <Newsletter />
      </main>
    </div>
  );
};

export default BlogLandingPage;
