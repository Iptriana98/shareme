import {defineField, defineType} from 'sanity'

export const saveType = defineType({
    name: 'save',
    title: 'Save',
    type: 'document',
    fields: [
        defineField({
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        }),
        defineField({
            name: 'userId',
            title: 'UserId',
            type: 'string',
        }),
    ],
})