import Container from 'components/blog/BlogContainer';
import Layout from 'components/blog/BlogLayout';
import MoreStories from 'components/blog/MoreStories';
import BlogHeader from 'components/OLD-Blog/BlogHeader';
import IndexPageHead from 'components/OLD-Blog/IndexPageHead';
import HeroPost from 'components/OLD-Posts/HeroPost';
import * as demo from 'lib/demo.data';
import type { Post } from 'lib/sanity.queries/blog';
import type { Settings } from 'lib/sanity.queries/settings';

export interface IndexPageProps {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props;
  const [heroPost, ...morePosts] = posts || [];
  const { title = demo.title, description = demo.description } = settings || {};

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
          {heroPost && (
            <HeroPost title={heroPost.title} coverImage={heroPost.coverImage} date={heroPost.date} author={heroPost.author} slug={heroPost.slug} excerpt={heroPost.excerpt} />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}
