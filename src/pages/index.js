import React from "react";
import {
  graphql
} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { renderFlexibleContent } from "../utils/renderFlexibleContent";

export const query = graphql`
  query HomePageQuery {
    pageData: sanityHome {
      _rawSection(resolveReferences: {maxDepth: 10})
    },
    images: allSanityImageAsset {
      nodes {
        id
        fluid(maxWidth: 400) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const section = data.pageData ? data.pageData._rawSection : null;

  return (
    <Layout>
      <SEO title="Home" />
      {section && renderFlexibleContent(section.sections, data.images.nodes)}
    </Layout>
  );
};
export default IndexPage;
