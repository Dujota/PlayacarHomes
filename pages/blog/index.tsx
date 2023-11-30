import BlogList from 'components/blog/BlogList';
import PageTitle from 'components/common/headers/PageTitle';
import NewsLetterModal from 'components/common/modals/NewsLetterModal';
import Newsletter from 'components/common/NewsLetter';
import { getAllPosts, getSettings } from 'lib/sanity.client';
import type { Post } from 'lib/sanity.queries/blog';
import type { Settings } from 'lib/sanity.queries/settings';
import type { GetStaticProps, NextPage } from 'next';
import type { PreviewData, Query } from 'types/sanity-queries';

const pageTitle = 'Latest From The Blog';

interface PageProps {
  posts: Post[];
  settings?: Settings;
  preview: boolean;
  token: string | null;
}

const BlogLandingPage: NextPage = ({ posts }: PageProps) => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-[6.25rem] overflow-hidden bg-white'>
      <NewsLetterModal />
      <main className='font-poppins flex flex-col items-center justify-start gap-[2.5rem] self-stretch text-center text-[2.25rem] text-black'>
        <PageTitle title={pageTitle} />
        {/* <TabbingWithArrow />*/}
        <BlogList cards={posts} />
        <Newsletter />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  const token = previewData.token;

  const [settings, posts] = await Promise.all([getSettings(), getAllPosts()]);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      settings,
      preview,
      token: token ?? null,
    },
    revalidate: 10,
  };
};

export default BlogLandingPage;
