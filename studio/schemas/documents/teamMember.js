export default {
  name: "teamMember",
  type: "document",
  title: "Team Member",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
    prepare({ title = "No title", media }) {
      return {
        title,
        media,
      };
    },
  },
};
