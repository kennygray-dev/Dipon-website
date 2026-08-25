import { defineArrayMember, defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The URL for this post. Click Generate after writing the title.",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary shown on the blog listing and in search/social previews.",
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Company News",
          "Construction",
          "Renewable Energy",
          "Real Estate",
          "Supply Chain",
          "Perspective",
          "Careers",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "DIPON Group",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title (optional)",
      type: "string",
      description: "Overrides the tab/search title. Falls back to the post title.",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description (optional)",
      type: "text",
      rows: 2,
      description: "Overrides the search/social description. Falls back to the excerpt.",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "mainImage" },
  },
});
