import { format } from "date-fns";

export default {
  name: "post",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featured",
      type: "boolean",
      title: "Make this post featured",
    },
    {
      name: "seoTitle",
      type: "string",
      title: "SEO Title",
    },
    {
      name: "metaDescription",
      type: "string",
      title: "Meta Description",
    },
    {
      name: "featuredImage",
      type: "image",
      title: "Featured Image",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Body",
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "featuredImage",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const path = `/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
};
