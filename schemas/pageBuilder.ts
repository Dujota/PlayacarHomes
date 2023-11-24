// ./schemas/pageType.ts

import { RiPagesLine } from 'react-icons/ri';
import { defineArrayMember, defineField, defineType } from 'sanity';

const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Web Pages',
  icon: RiPagesLine,
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      // @ts-ignore
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
          description: 'Optional',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'whyUs',
          type: 'whyUsSection',
          description: 'Slider with the Why Us section',
        }),
        // defineArrayMember({
        //   name: 'gallery',
        //   type: 'gallery',
        // }),
        defineArrayMember({
          name: 'form',
          type: 'form',
          description: 'Labels and headings for Forms on a page',
        }),
        // defineArrayMember({
        //   name: 'video',
        //   type: 'video',
        // }),
        defineArrayMember({
          name: 'callToAction',
          type: 'reference',
          to: [{ type: 'linkComponent' }],
        }),
        // etc...
      ],
    }),
  ],
});

export default pageType;
