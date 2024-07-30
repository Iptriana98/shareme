import {defineField, defineType} from 'sanity'

export const userType = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'userName',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'string',
    }),
  ],
})