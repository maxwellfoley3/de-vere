import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `The Edward De Vere Truther Society`,
    siteUrl: `https://edwarddeveretruthersociety.org`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": "abe4eyj4cbv7"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/rose-favicon.png',
    },
  }]
};


export default config;
