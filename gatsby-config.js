// TODO wordpressとの接続設定を行う
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-ts`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // Specify the URL of the WordPress source
        baseUrl: `localhost:8888`,
        protocol: `http`,
        // Indicates if a site is hosted on WordPress.com
        hostingWPCOM: false,
        // 取得する URL 構造を指定します。
        // 実際は以下のようなURLにならないと思われる。sample。
        includedRoutes: ["**/posts", "**/tags", "**/categories"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
