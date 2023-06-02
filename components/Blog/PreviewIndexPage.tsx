import IndexPage from 'components/Blog/IndexPage';
import { usePreview } from 'lib/sanity.preview';
import { indexQuery, type Post } from 'lib/sanity.queries/blog';
import { type Settings, settingsQuery } from 'lib/sanity.queries/settings';

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, indexQuery) || [];
  const settings: Settings = usePreview(token, settingsQuery) || {};

  return <IndexPage preview posts={posts} settings={settings} />;
}
