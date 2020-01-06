import React from "react";
import {
  // Link, useStaticQuery, 
  graphql
} from "gatsby";
import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
// import { Centered } from "../styles/containers";
import { renderFlexibleContent } from "../utils/renderFlexibleContent";

export const query = graphql`
  query HomePageQuery {
    pageData: sanityHome {
      _rawSection(resolveReferences: {maxDepth: 10})
    }
  }
`;

const IndexPage = ({ data }) => {
  const section = data.pageData ? data.pageData._rawSection : null;
  // console.error(data);
  return (
    <Layout>
      <SEO title="Home" />
      {section && renderFlexibleContent(section.sections)}
      {/* <BlockContent blocks={data.sanityHome._rawCenteredText} serializers={{ types: { centeredText } }} /> */}
      {/* <Image /> */}
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
};
export default IndexPage;
