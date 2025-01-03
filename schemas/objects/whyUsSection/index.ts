import React from 'react';
import { FaWpforms } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'whyUsSection',
  title: 'Why Us Banner',
  type: 'object',
  icon: FaWpforms,
  fields: [
    // defineField({
    //   name: 'heading',
    //   type: 'string',
    //   validation: (Rule) => Rule.required(),
    // }),
    defineField({
      name: 'heading',
      type: 'array',
      // @ts-ignore
      of: [
        {
          type: 'block',
          options: {
            spellcheck: true,
          },
          // styles: [],
          // lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              {
                title: 'Text Blue',
                value: 'span',
                // className: 'text-blue',
                // component: ({children})=> (<span className='text-blue'>{children} </span>)
              },
            ],
            annotations: [
              {
                name: 'color',
                title: 'Color',
                type: 'object',
                fields: [
                  {
                    name: 'textColor',
                    title: 'Text Color',
                    type: 'string',
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      validation: (Rule) => Rule.required().min(100).max(310),
    }),
    defineField({
      name: 'whyUsCards',
      type: 'array',
      // @ts-ignore
      of: [{ type: 'whyUsCard' }],
      validation: (Rule) => Rule.required().min(3).max(5),
    }),
  ],
});
