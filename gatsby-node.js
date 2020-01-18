/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
           allSanityPage {
    edges {
      node {
        _rawSection(resolveReferences: {maxDepth: 5})
        description
        indexing
        slug {
          current
          _type
        }
        title
      }
    }
  }
        }
  `);

    if (result.errors) {
        throw result.errors;
    }

    const pages = result.data.allSanityPage.edges || [];
    pages.forEach((edge, index) => {
        const path = `/${edge.node.slug.current}`;
        const seo = {
            description: edge.node.description,
            indexing: edge.node.indexing,
            title: edge.node.title,
        };
        createPage({
            path,
            component: require.resolve('./src/templates/page.js'),
            context: { slug: edge.node.slug.current, sections: edge.node._rawSection.sections, seo },
        });
    });
};
