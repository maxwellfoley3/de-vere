import * as React from "react"
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { PageLinks } from '../components/PageLinks';
import { BLOCKS } from "@contentful/rich-text-types"
import { MailChimpForm } from '../components/MailChimpForm';
import "./App.scss"
import edvtsBanner from '../images/edvts-banner.gif';
import bar from '../images/bar.gif';
import rose from '../images/rose.gif';
import cross from '../images/cross.gif';
import button1 from '../images/button1.gif';
import button3 from '../images/button3.gif';
import mask1 from '../images/mask1.png';
import mask2 from '../images/mask2.png';
import createyourdrama from '../images/stuff/createyourdrama.gif';
import dramaparty from '../images/stuff/dramaparty.gif';
import skull from '../images/stuff/skull.gif';
import freewill from '../images/stuff/freewill.gif';


import { DeVereMarquee } from "./DeVereMarquee";

const Page = ({ data }) => {
  const { contentfulPage, allContentfulPage } = data;
  const options = {
    renderNode: {
       [BLOCKS.EMBEDDED_ASSET]: node => {
          const imageID = node.data.target.sys.id;
          const {
             file: {url}, 
             title
          } = contentfulPage.body.references.find(({contentful_id: id}) => id === imageID);
  
          return <img src={url} alt={title} />
       }
    }
  }

  return (
    <main>
      <title>Edward De Vere Truther Society</title>
      <div className="App">
        <div>
          <img src={bar} className="flip-vertically" style={{position: "relative", top: "50px" }}/>
        </div>
        <div>
          <img src={rose}/>
          <img src={edvtsBanner} />
          <img src={cross} style={{position: "relative", top: "30px" }}/>
        </div>
        <div>
          <img src={bar}/>
        </div>
        <DeVereMarquee/>
        <PageLinks data={allContentfulPage}/>
        <div className="container">
          <h1 className="page-title">
            <img src={mask1} style={{height:"40px", paddingRight:"20px"}}/>
              {contentfulPage.title}
            <img src={mask2} style={{height:"40px", paddingLeft:"20px"}}/>
          </h1>
          <hr/>
          {
            contentfulPage.title === 'Home' ? (
              <MailChimpForm/>
            ) : null
          }
          {renderRichText(contentfulPage.body, options)}
        </div>
        <div>
          <img src={button3}/>
          <img src={button1}/>
        </div>
        <div>
          <img src={skull}/>
          <img src={createyourdrama}/>
          <img src={dramaparty}/>
        </div>
        <div>
          <img src={freewill}/>
        </div>
      </div>
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
