import * as React from "react"
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
  useEffect(() => {
    navigate('/home');
  }, []);
  return null;
};

/*
const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main>
      <title>Edward De Vere Truther Society</title>
      <h1>
        Edward De Vere Truther Society
      </h1>
      <p>
        🚧 Website under construction! 🚧
      </p>
      <p>
        For information, follow Phoebe Nir (<a href="https://twitter.com/allthefrensy">@allthefrensy</a>) on Twitter
      </p>
    </main>
  )
}*/

/*
export const query = graphql`
  query PageQuery {
    page {
      title
      body
    }
  }`*/
  /*
export const data = graphql`
  query pageQuery {
    contentfulPage {
      title
      body {
        raw
      }
    }
  }
`;*/
/*
export const data = graphql`
  query allPagesQuery {
    allContentfulPage(sort: {createdAt: DESC}) {
      nodes {
        title
      }
    }
  }`


export default IndexPage*/