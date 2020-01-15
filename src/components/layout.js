/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

// import Header from "./header";
// import "./layout.css";
import { GlobalStyle } from "../styles/global";
import { SiteWrapper } from "../styles/containers";

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <SiteWrapper>{children}</SiteWrapper>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
