import Container from 'components/Blog/BlogContainer';
import BlogHeader from 'components/Blog/BlogHeader';
import Layout from 'components/Blog/BlogLayout';
import IndexPageHead from 'components/Blog/IndexPageHead';
import HeroPost from 'components/Post/HeroPost';
import MoreStories from 'components/Post/MoreStories';
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
