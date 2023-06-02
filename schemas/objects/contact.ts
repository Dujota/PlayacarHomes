import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      phone: 'phone',
      email: 'email',
    },
    prepare({ phone, email }) {
      return {
        title: `${phone}, ${email}`,
      };
    },
  },
});
