/**
 * Configure your Gatsby site with this file.
 *
 * See: 
 */
module.exports = {
  plugins: [
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `muli\:400,400i,700,700i`,
          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}

// module.exports = {
//   /* Your site config here */
//   plugins: [
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `pages`,
//         path: `${__dirname}/src/pages`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       option: {
//         name: `posts`,
//         path: `${__dirname}/src/posts`,
//       }
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       option: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       }
//     },
//     `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
//     `gatsby-remark-images`,
//     {
//       resolve: `gatsby-plugin-mdx`,
//       options: {
//         gatsbyRemarkPlugins: [
//           {
//             resolve: `gatsby-remark-images`,
//             options: {
//               maxWidth: 590,
//             },
//           },
//         ],
//         extensions: [`.md`, `.mdx`]
//       },
//     },
//     {
//       resolve: `gatsby-plugin-google-fonts`,
//       options: {
//         font: [
//           `roboto mono`,
//           `muli\:400,400i,700,700i`
//         ],
//         display: `swap`,
//       }
//     }
//   ],
// }
