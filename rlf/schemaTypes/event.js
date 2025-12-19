import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
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
      name: 'start',
      title: 'Start',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'end',
      title: 'End',
      type: 'datetime',
    }),
    defineField({
      name: 'allDay',
      title: 'All day',
      type: 'boolean',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Used to group or color-code events (e.g. Outreach, Meeting).',
    }),
    defineField({
      name: 'colorClass',
      title: 'Tailwind color class',
      type: 'string',
      description: 'CSS classes to apply in the calendar (e.g. "bg-green-100 text-green-800").',
    }),
    defineField({
      name: 'externalLink',
      title: 'External link',
      type: 'url',
    }),
  ],

  preview: {
    select: { title: 'title', start: 'start', media: 'image' },
    prepare(selection) {
      const { start } = selection
      return { ...selection, subtitle: start ? new Date(start).toLocaleString() : '' }
    }
  }
})
