import BlogCard from 'components/common/cards/BlogCard';
import CardGrid from 'components/common/cards/CardGrid';
import { Post } from 'lib/sanity.queries/blog';
import { BlogCardType } from 'types/blog';

type BlogListProps = {
  cards: Post[];
};

const BlogList = ({ cards }: BlogListProps) => {
  return (
    <CardGrid>
      {cards.map((card) => (
        <BlogCard key={card._id} blog={card} />
      ))}
    </CardGrid>
  );
};

export default BlogList;
