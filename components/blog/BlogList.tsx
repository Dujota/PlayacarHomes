import BlogCard from 'components/common/cards/BlogCard';
import CardGrid from 'components/common/cards/CardGrid';
import { BlogCardType } from 'types/blog';

type BlogListProps = {
  cards: BlogCardType[];
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
