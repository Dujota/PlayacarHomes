// Components
import BlogContainer from 'components/blog/BlogContainer';
import BlogLayout from 'components/blog/BlogLayout';
import MoreStories from 'components/blog/MoreStories';
import PostBody from 'components/blog/PostBody';
import PostPageHead from 'components/blog/PostPageHead';
import PostTitle from 'components/blog/PostTitle';
import SectionSeparator from 'components/common/dividers/SectionSeparator';
import PostHeader from 'components/common/headers/PostHeader';
import Newsletter from 'components/common/forms/NewsLetter';
// Sanity
import type { Post } from 'lib/sanity.queries/blog';
import type { Settings } from 'lib/sanity.queries/settings';
// Next
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

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <BlogLayout preview={preview} loading={loading}>
        <BlogContainer>
          {/* <BlogHeader title={title} level={2} /> */}
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
            </>
          )}
        </BlogContainer>
        <Newsletter />
        <BlogContainer>
          <SectionSeparator />
          {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          <SectionSeparator />
        </BlogContainer>
      </BlogLayout>
    </>
  );
}
