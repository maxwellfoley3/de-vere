import * as React from "react"
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { PageLinks } from '../components/PageLinks';
import { BLOCKS } from "@contentful/rich-text-types"
import { MailChimpForm } from '../components/MailChimpForm';

const Page = ({ data }) => {
  const { contentfulPage, allContentfulPage } = data;
  const options = {
    renderNode: {
       [BLOCKS.EMBEDDED_ASSET]: node => {
          console.log("node", node);
          const imageID = node.data.target.sys.id;
          const {
             file: {url}, 
             title
          } = contentfulPage.body.references.find(({contentful_id: id}) => id === imageID);
  
          return <img src={url} alt={title} />
       }
    }
  }
  console.log("data", data)
  return (
    <main>
      <title>{contentfulPage.title}</title>
      <h1>Edward De Vere Truther Society</h1>
      <h2>{contentfulPage.title}</h2>
      <PageLinks data={allContentfulPage}/>
      {renderRichText(contentfulPage.body, options)}
      {
        contentfulPage.title === 'Home' ? (
          <MailChimpForm/>
        ) : null
      }
    </main>
  );
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      title
      body {
        raw 
        references {
          ... on ContentfulAsset {
            gatsbyImageData(layout: CONSTRAINED, quality: 80, formats: [WEBP, AUTO], placeholder: BLURRED)
            contentful_id
            __typename
            title
            file {
              url
            }
          }
        }
      }
    }
    allContentfulPage(sort: {createdAt: ASC}) {
      nodes {
        title
        pagePath: gatsbyPath(filePath: "/{ContentfulPage.title}")
      }
    }
  }
`;


export default Page
