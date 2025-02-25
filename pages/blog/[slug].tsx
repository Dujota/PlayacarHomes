import { PreviewSuspense } from '@sanity/preview-kit';
import PostPage from 'components/blog/PostPage';
import JsonLd from 'components/common/seo/JSONLD';
import { getAllPostsSlugs, getPostAndMoreStories, getSettings } from 'lib/sanity.client';
import { Post } from 'lib/sanity.queries/blog';
import { Settings } from 'lib/sanity.queries/settings';
import { createBlogPostStructuredData } from 'lib/seo/blogStructuredData';
import { GetStaticProps } from 'next';
import { lazy } from 'react';

const PreviewPostPage = lazy(() => import('components/blog/PreviewPostPage'));

interface PageProps {
  post: Post;
  morePosts: Post[];
  settings?: Settings;
  preview: boolean;
  token: string | null;
}

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

export default function BlogPost(props: PageProps) {
  const { settings, post, morePosts, preview, token } = props;

  if (preview) {
    return (
      <PreviewSuspense fallback={<PostPage loading preview post={post} morePosts={morePosts} settings={settings} />}>
        <PreviewPostPage token={token} post={post} morePosts={morePosts} settings={settings} />
      </PreviewSuspense>
    );
  }

  return (
    <>
      <JsonLd data={createBlogPostStructuredData(post)} />
      <PostPage post={post} morePosts={morePosts} settings={settings} />;
    </>
  );
}

export const getStaticProps: GetStaticProps<PageProps, Query, PreviewData> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  const token = previewData.token;

  const [settings, { post, morePosts }] = await Promise.all([getSettings(), getPostAndMoreStories(params.slug, token)]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      morePosts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/blog/${slug}`) || [],
    fallback: 'blocking',
  };
};
