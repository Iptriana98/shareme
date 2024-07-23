import { defineType } from "sanity";

export const postedByType = defineType({
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{ type: 'user' }],
})