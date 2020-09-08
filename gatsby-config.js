require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Ronak Ganatra',
    siteUrl: `https://ronakganatra.com`,
    description:
      'Hi there! Ronak here. Currently the Head of Marketing and Growth at GraphCMS, and a big fan of sustainable growth and marketing automation.',
    keywords: 'Ronak Ganatra',
    image: "/images/Ronak-Ganatra-OG.png",
    twitterUsername: "@gunnyganatra",
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-react-svg',
      ptions: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://ronakganatra.us17.list-manage.com/subscribe/post?u=fe7458428d106b5e864c0f421&amp;id=55d57805ae',
          timeout: 3500,
      },
  },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ronak Ganatra",
        short_name: "GunnyGanatra",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#ffffff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.ico", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MZRSZWK",
      },
    },
  ],
}
