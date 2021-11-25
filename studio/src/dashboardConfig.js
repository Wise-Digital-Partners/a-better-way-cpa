export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "619efe93b1f5aaef27a4006c",
                  title: "Sanity Studio",
                  name: "a-better-way-cpa-studio",
                  apiId: "4d6f4424-31fd-4da2-834c-7555ea2b1cff",
                },
                {
                  buildHookId: "619efe93c1cae5390e22354c",
                  title: "Blog Website",
                  name: "a-better-way-cpa",
                  apiId: "df4e9b85-5386-4c2d-97bc-21da537d6080",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/a-better-way-cpa",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://a-better-way-cpa.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
