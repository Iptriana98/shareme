import { defineType, defineField } from "sanity";

export const PostedByType = defineType({
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{ type: 'user' }],
})