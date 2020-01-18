import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image"
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

  console.error('this is pageContext!', pageContext);
  console.error('this is images!', data.images.nodes);
  return (
    <Layout>
      <SEO title={pageContext.title} />
      {renderFlexibleContent(pageContext.sections, data.images.nodes)}
    </Layout>
  );
};

export default IndexPage;
