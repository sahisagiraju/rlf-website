import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'template',
      title: 'Template',
      type: 'string',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'Programs', value: 'programs' },
          { title: 'Get Involved', value: 'get-involved' },
          { title: 'Donate', value: 'donate' },
          { title: 'Contact', value: 'contact' },
          { title: 'Blog Index', value: 'blog' },
          { title: 'Podcasts', value: 'podcasts' },
          { title: 'Events', value: 'events' }
        ],
      },
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'showInNav',
      title: 'Show in navigation',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Navigation Order',
      type: 'number',
      description: 'Smaller numbers appear earlier in nav. Optional.',
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'template', media: 'heroImage' }
  }
})
