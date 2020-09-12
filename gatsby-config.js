/**
 * Configure your Gatsby site with this file.
 *
 * See: 
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      option: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      option: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        extensions: [`.md`, `.mdx`]
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        font: [
          `roboto mono`,
          `muli\:400,400i,700,700i`
        ],
        display: `swap`,
      }
    }
  ],
}
