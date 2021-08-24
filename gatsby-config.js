module.exports = {
  siteMetadata: {
    siteUrl: "https://18.221.27.127/tecelec/",
    title: "Tec Elec",
    description: "Tec Elec empresa 100% confiable dedicados a los servicios topograficos y construccion en general",
    author: "@donatto18",
    keywords: "topografia, construccion, construccion en general, contruccion acapulco, topografia acapulco, servicios topograficos, servicios topograficos acapulco",
    image: "../images/TECELEC1.jpg",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
};
