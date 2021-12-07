export default {
  name: "category",
  type: "document",
  title: "Blog Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
  ],
  orderings: [
    {
      name: "alphabeticalAsc",
      title: "A>Z",
      by: [
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "alphabeticalDesc",
      title: "Z->A",
      by: [
        {
          field: "title",
          direction: "desc",
        },
      ],
    },
  ],
};
