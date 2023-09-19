import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'linkComponent',
  title: 'Link Component',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
});
