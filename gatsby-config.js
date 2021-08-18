module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Tec Elec",
    description: "Tec Elec empresa 100% confiable dedicados a los servicios topograficos y construccion en general",
    author: "@donatto18",
    keywords: "topografia, construccion, construccion en general, contruccion acapulco, topografia acapulco, servicios topograficos",
    image: "src/images/TECELEC1.jpg",
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
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
