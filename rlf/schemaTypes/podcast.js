import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'podcast',
  title: 'Podcast Episode',
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
      name: 'episodeNumber',
      title: 'Episode Number',
      type: 'number',
    }),
    defineField({
      name: 'hosts',
      title: 'Hosts',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'author' } }],
    }),
    defineField({
      name: 'guests',
      title: 'Guests',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'author' } }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      description: 'Upload an mp3/m4a file or link via externalLinks',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Human readable duration (e.g. 01:02:34) or seconds',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
      description: 'Short summary / excerpt',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'externalLinks',
      title: 'External Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      episode: 'episodeNumber',
      media: 'coverImage',
    },
    prepare(selection) {
      const { episode } = selection
      return { ...selection, subtitle: episode ? `Episode ${episode}` : '' }
    },
  },
})
