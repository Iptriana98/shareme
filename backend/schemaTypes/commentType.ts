import { defineType, defineField } from "sanity";

export const commentType = defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'string',
        }),
        defineField({
            name: 'postedBy',
            title: 'PostedBy',
            type: 'string',
        }),
    ],
})