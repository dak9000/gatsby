import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import BlockContent from '@sanity/block-content-to-react';
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { getColor } from "../utils";
import { Centered } from "../styles/containers";




const color = props => {
  const { mark } = props;
  const finalColor = getColor(mark);;
  return (
    <span style={{ color: finalColor }}>
      {props.children}
    </span>
  );
};

const centeredText = props => {
  console.error(props);
  return (
    <Centered>
      <BlockContent blocks={props.node.content} serializers={{ marks: { color } }} />
    </Centered>
  );
};

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query MyQuery {
        sanityHome {
        _rawCenteredText
      }
      }
      `);
  console.error(data);
  return (
    <Layout>
      <SEO title="Home" />
      <BlockContent blocks={data.sanityHome._rawCenteredText} serializers={{ types: { centeredText } }} />
      {/* <Image /> */}
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
};
export default IndexPage;;
