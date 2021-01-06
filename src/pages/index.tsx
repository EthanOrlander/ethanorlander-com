import React from "react";
import { graphql, PageProps } from "gatsby";
import "./styles.css";

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
    <div id="main-container">
      <h1>Welcome to my site.</h1>
      <p>
        I haven't had a chance to set it up yet. In the meantime, check out
        these great organizations:
      </p>
      <a href="https://blacktechpipeline.com/" target="_blank">
        <h3>Black Tech Pipeline</h3>
        <p>
          Bringing exposure, resources and opportunities to Black technologists.
        </p>
      </a>
      <a href="https://girlsintech.org/" target="_blank">
        <h3>Girls in Tech</h3>
        <p>
          Inspiring programs and a diverse community to help girls enter into,
          and excel in, tech.
        </p>
      </a>
      <a href="https://osmihelp.org/" target="_blank">
        <h3>Open Sourcing Mental Illness</h3>
        <p>Changing how we talk about mental health in the tech community.</p>
      </a>
      <a href="https://blackandbrownfounders.com/" target="_blank">
        <h3>Black & Brown Founders</h3>
        <p>
          We provide community, education, and access to Black and Latinx
          entrepreneurs, allowing them to launch and build tech businesses with
          modest resources.
        </p>
      </a>
      <a href="https://femalefoundersfund.com/" target="_blank">
        <h3>Female Founders Fund</h3>
        <p>Investing in the exponential power of exceptional female talent.</p>
      </a>
    </div>
  );
};

export default IndexPage;
