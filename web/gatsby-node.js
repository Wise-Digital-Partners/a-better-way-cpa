const { isFuture } = require("date-fns");
const fetch = require("node-fetch");
const crypto = require("crypto");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      });
    });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
};

async function createTeamMembers(actions) {
  const { createNode } = actions;

  // fetch raw data from the randomuser api
  const res = await fetch(
    `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
    title,
    name,
    emailAddress,
    biography,
    linkedinProfile,
    cpa,
    teamMemberOrder,
    "bookkeepingSpecialties": bookkeepingSpecialties[]->{title},
    "fractionalCFOSpecialties": fractionalCFOSpecialties[]->{title},
    "taxSpecialties": taxSpecialties[]->{title},
    "industriesFilter": industriesFilter[]->{title},
    "headshotUrl":headshot.asset->url, 
    "category":category->{title},
    "serviceTypes":serviceTypes[]->{title}`
  );
  const data = await res.json();
  data.result.map((i, index) => console.log(`${index} ${i.name}`));
  // map into these results and create nodes
  data.result.map((member, i) => {
    // Create your node object
    const memberNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `TeamMember`, // name of the graphQL query --> allRandommember {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      ...member,
      // headshot: {
      //   asset: {
      //     gatsbyImageData: member.headshot.asset,
      //   },
      // },
      // etc...
    };

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(memberNode))
      .digest(`hex`);
    // add it to memberNode
    memberNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(memberNode);
    console.log(`${i} ${memberNode.name}`);
  });

  return;
}

async function createTeamMemberServiceTypes(actions) {
  const { createNode } = actions;
  const res = await fetch(
    `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
    *[_type == "teamMemberServiceType"]{
      title
    }| order(order asc)`
  );
  const data = await res.json();
  data.result.map((item, i) => {
    const node = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `TeamMemberServiceType`,
      },
      children: [],
      ...item,
    };
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(node))
      .digest(`hex`);
    node.internal.contentDigest = contentDigest;
    createNode(node);
  });

  return;
}

async function createTeamMemberTaxSpecialties(actions) {
  const { createNode } = actions;
  const res = await fetch(
    `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
    *[_type == "teamMemberTaxSpecialty"]{
      title
    }| order(order asc)`
  );
  const data = await res.json();
  data.result.map((item, i) => {
    const node = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `TeamMemberTaxSpecialty`,
      },
      children: [],
      ...item,
    };
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(node))
      .digest(`hex`);
    node.internal.contentDigest = contentDigest;
    createNode(node);
  });

  return;
}

async function createTeamMemberBookkeepingSpecialties(actions) {
  const { createNode } = actions;
  const res = await fetch(
    `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
    *[_type == "teamMemberBookkeepingSpecialty"]{
      title
    }| order(order asc)`
  );
  const data = await res.json();
  data.result.map((item, i) => {
    const node = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `TeamMemberBookkeepingSpecialty`,
      },
      children: [],
      ...item,
    };
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(node))
      .digest(`hex`);
    node.internal.contentDigest = contentDigest;
    createNode(node);
  });

  return;
}

async function createTeamMemberFractionalCfoSpecialties(actions) {
  const { createNode } = actions;
  const res = await fetch(
    `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
    *[_type == "teamMemberFractionalCFOSpecialty"]{
      title
    }| order(order asc)`
  );
  const data = await res.json();
  data.result.map((item, i) => {
    const node = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `TeamMemberFractionalCfoSpecialty`,
      },
      children: [],
      ...item,
    };
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(node))
      .digest(`hex`);
    node.internal.contentDigest = contentDigest;
    createNode(node);
  });

  return;
}

async function createTeamMemberIndustries(actions) {
  const { createNode } = actions;
  const res = await fetch(
    `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
    *[_type == "teamMemberIndustry"]{
      title
    }| order(order asc)`
  );
  const data = await res.json();
  data.result.map((item, i) => {
    const node = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `TeamMemberIndustry`,
      },
      children: [],
      ...item,
    };
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(node))
      .digest(`hex`);
    node.internal.contentDigest = contentDigest;
    createNode(node);
  });

  return;
}

exports.sourceNodes = async ({ actions }) => {
  // await createTeamMembers(actions);
  await createTeamMemberServiceTypes(actions);
  await createTeamMemberTaxSpecialties(actions);
  await createTeamMemberBookkeepingSpecialties(actions);
  await createTeamMemberFractionalCfoSpecialties(actions);
  await createTeamMemberIndustries(actions);
};

exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /micromodal/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
