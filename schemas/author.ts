import { FaUser } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Authors',
  icon: FaUser,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
});
