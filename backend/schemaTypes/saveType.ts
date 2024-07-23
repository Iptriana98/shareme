import { defineType, defineField } from "sanity";

export const saveType = defineType({
    name: 'save',
    title: 'Save',
    type: 'document',
    fields: [
        defineField({
            name: 'userId', 
            title: 'UserId',
            type: 'string',
        }),
        defineField({
            name: 'postedBy',
            title: 'PostedBy',
            type: 'string',
        }),
    ],
})