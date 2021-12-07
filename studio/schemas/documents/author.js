export default {
  name: "author",
  type: "document",
  title: "Blog Author",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
