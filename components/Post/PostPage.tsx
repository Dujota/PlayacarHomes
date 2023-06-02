import Container from 'components/Blog/BlogContainer';
import BlogHeader from 'components/Blog/BlogHeader';
import Layout from 'components/Blog/BlogLayout';
import MoreStories from 'components/Post/MoreStories';
import PostBody from 'components/Post/PostBody';
import PostHeader from 'components/Post/PostHeader';
import PostPageHead from 'components/Post/PostPageHead';
import PostTitle from 'components/Post/PostTitle';
import SectionSeparator from 'components/SectionSeparator';
import * as demo from 'lib/demo.data';
import type { Post } from 'lib/sanity.queries/blog';
import type { Settings } from 'lib/sanity.queries/settings';
import { notFound } from 'next/navigation';

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  morePosts: Post[];
  settings: Settings;
}

const NO_POSTS: Post[] = [];

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props;
  const { title = demo.title } = settings || {};

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} level={2} />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
