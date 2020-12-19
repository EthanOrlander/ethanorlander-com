import React from "react";
import { graphql, PageProps } from "gatsby";

interface IndexPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

const IndexPage: React.FC<IndexPageProps> = (props) => {
  const { siteName } = props.data.site.siteMetadata;
  return (
    <>
      <h1>Heyo TypeScript world!</h1>
      <p>
        This site is named <strong>{siteName}</strong>
      </p>
    </>
  );
};

export default IndexPage;
