import { FaWpforms } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'whyUsCard',
  title: 'Why Us Card',
  type: 'object',
  icon: FaWpforms,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(30),
    }),
    defineField({
      name: 'text',
      type: 'text',
      validation: (Rule) => Rule.required().min(100).max(180),
    }),
  ],
});
