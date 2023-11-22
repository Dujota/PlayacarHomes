import { format, parseISO } from 'date-fns';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

import agentType from './agent';
import authorType from './author';
import contactType from './objects/contact';
/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you
 * create or edit a post in the studio.
 *
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'vacationRentals',
  title: 'Vacation Rentals',
  icon: MdOutlineBedroomParent,
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'detail', title: 'Details' },
    { name: 'media', title: 'Media' },
    { name: 'metadata', title: 'Metadata' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This will be the url (e.g. /vacation-rentals/3-bedroom-playacar)',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      group: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'content',
      description: 'Add the featured status of the listing',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Add a general description for the listing',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'content',
      description: 'This will display on listing tiles as a preview of the listing',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'media',
      description: 'This will be the main image for the listing',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      group: 'content',
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'gallery',
      description: 'Add images to the gallery',
      group: 'media',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: authorType.name }],
      group: 'content',
    }),
    defineField({
      name: 'agent',
      title: 'Agent',
      type: 'reference',
      to: [{ type: agentType.name }],
      group: 'detail',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      description: 'Add the contact information for the listing if it is different from the agent',
      type: 'contact',
      group: 'detail',
    }),
    // SEO fields
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoKeywords',
      title: 'Keywords',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoImage',
      title: 'Image',
      type: 'image',
      group: ['seo', 'media'],
    }),
    // Details of the listing
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      group: 'detail',
      description: 'Add the price of the listing',
    }),
    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      group: 'detail',
      description: 'Add the number of bedrooms',
    }),
    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
      group: 'detail',
      description: 'Add the number of bathrooms',
    }),
    defineField({
      name: 'area',
      title: 'Area',
      type: 'number',
      group: 'detail',
      description: 'Add the area of the listing',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
      group: 'detail',
      description: 'Add the location of the listing',
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'detail',
      description: 'Add the amenities of the listing',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'detail',
      description: 'Add the tags of the listing',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Sold', value: 'sold' },
          { title: 'Rented', value: 'rented' },
        ],
      },
      group: 'detail',
      description: 'Add the status of the listing',
    }),
    // add fields for association fee, type of property, postal code, neighbourhood, style,
    defineField({
      name: 'associationFee',
      title: 'Association Fee',
      type: 'number',
      group: 'detail',
      description: 'Add the association fee of the listing',
    }),
    defineField({
      name: 'typeOfProperty',
      title: 'Type of Property',
      type: 'string',
      options: {
        list: [
          { title: 'House', value: 'house' },
          { title: 'Condo', value: 'condo' },
          { title: 'Townhouse', value: 'townhouse' },
          { title: 'Apartment', value: 'apartment' },
          { title: 'Villa', value: 'villa' },
          // { title: 'Land', value: 'land' },
          // { title: 'Commercial', value: 'commercial' },
        ],
      },
      group: 'detail',
      description: 'Add the type of property of the listing',
    }),
    defineField({
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
      group: 'detail',
      description: 'Add the postal code of the listing',
    }),
    defineField({
      name: 'neighbourhood',
      title: 'Neighbourhood',
      type: 'string',
      group: 'detail',
      description: 'Add the neighbourhood of the listing',
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          // { title: 'Commercial', value: 'commercial' },
          // { title: 'Industrial', value: 'industrial' },
          // { title: 'Farm', value: 'farm' },
          { title: 'Multi-family', value: 'multi-family' },
          { title: 'Other', value: 'other' },
        ],
      },
      group: 'detail',
      description: 'Add the style of the listing',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      featured: 'featured',
      description: 'description',
      excerpt: 'excerpt',
      coverImage: 'coverImage',
      date: 'date',
      gallery: 'gallery',
      author: 'author.name',
      seoTitle: 'seoTitle',
      seoKeywords: 'seoKeywords',
      seoImage: 'seoImage',
      price: 'price',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      area: 'area',
      location: 'location',
      amenities: 'amenities',
      tags: 'tags',
      status: 'status',
      associationFee: 'associationFee',
      typeOfProperty: 'typeOfProperty',
      postalCode: 'postalCode',
      neighbourhood: 'neighbourhood',
      style: 'style',
      agentName: 'agent.name',
      agentContact: 'agent.contact',
      contact: 'contact',
    },
    prepare(selection) {
      const { title, slug, date, author, coverImage, ...rest } = selection;

      // Format the date
      const formattedDate = date ? format(parseISO(date), 'LLL d, yyyy') : '';

      // Create a subtitle
      const subtitles = [author && `by ${author}`, formattedDate].filter(Boolean).join(' ');

      return {
        title,
        media: coverImage,
        subtitle: subtitles,
        extendedPreview: rest,
      };
    },
  },
});

// OLD

// preview: {
//   select: {
//     title: 'title',
//     author: 'author.name',
//     date: 'date',
//     media: 'coverImage',
//   },
//   prepare({ title, media, author, date }) {
//     const subtitles = [author && `by ${author}`, date && `on ${format(parseISO(date), 'LLL d, yyyy')}`].filter(Boolean);

//     return { title, media, subtitle: subtitles.join(' ') };
//   },
// },
