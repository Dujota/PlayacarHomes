// add fields for the address
// add fields for the contact information
// add fields for the agent
// add fields for the listing agent
// add fields for the listing office
// add fields for the listing broker
// add fields for the listing brokerage
import { UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'agent',
  title: 'Agents',
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
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'contact',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      picture: 'picture',
      phone: 'contact.phone',
      email: 'contact.email',
    },
    prepare({ name, picture, phone, email }) {
      return {
        title: name,
        media: picture,
        subtitle: `${phone}, ${email}`,
      };
    },
  },
});

// export default defineType({
//   name: 'agent',
//   title: 'Agent',
//   icon: UserIcon,
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: 'picture',
//       title: 'Picture',
//       type: 'image',
//       options: { hotspot: true },
//       validation: (rule) => rule.required(),
//     }),
//     // defineField({
//     //   name: 'address',
//     //   title: 'Address',
//     //   type: 'string',
//     //   validation: (rule) => rule.required(),
//     // }),
//     // defineField({
//     //   name: 'contact',
//     //   title: 'Contact',
//     //   type: 'string',
//     //   validation: (rule) => rule.required(),
//     // }),
//   ],
// });
