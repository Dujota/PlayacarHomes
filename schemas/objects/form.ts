import { FaWpforms } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'form',
  title: 'Form',
  type: 'object',
  icon: FaWpforms,
  fields: [
    defineField({
      title: 'Title',
      name: 'label',
      type: 'string',
    }),
    defineField({
      title: 'Description (Optional)',
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'form',
      type: 'string',
      description: 'Select form type',
      options: {
        list: ['newsletter', 'register', 'contact'],
      },
    }),
  ],
});
