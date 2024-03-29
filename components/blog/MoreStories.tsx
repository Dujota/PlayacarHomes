import PostPreview from 'components/blog/PostPreview';
import type { Post } from 'lib/sanity.queries/blog';
import Link from 'next/link';

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      {/* <h2 className='mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl'>More Stories</h2> */}
      <h2 className='font-inherit relative m-0 self-stretch text-[2.25rem] font-medium text-black'>More Stories</h2>
      <div className='mb-32 grid grid-cols-2 gap-x-16 gap-y-20 gap-y-32 md:grid-cols-1 lg:gap-x-32'>
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug}`}>
            <PostPreview key={post._id} title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} slug={post.slug} excerpt={post.excerpt} />
          </Link>
        ))}
      </div>
    </section>
  );
}
