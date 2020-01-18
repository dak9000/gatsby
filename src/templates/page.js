import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { renderFlexibleContent } from '../utils/renderFlexibleContent';
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query pageQuery {
    images: allSanityImageAsset {
      nodes {
        id
        fluid(maxWidth: 400) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
  `);
  const { sections, seo } = pageContext;

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} indexing={seo.indexing} />
      {renderFlexibleContent(sections, data.images.nodes)}
    </Layout>
  );
};

export default IndexPage;
