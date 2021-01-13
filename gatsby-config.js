module.exports = {
  siteMetadata: {
    title: 'The Developer Experience Manifesto',
    siteUrl: 'https://dxmanifesto.dev',
    description:
      'Developer experience best practices, principles, for how to build better software for engineers',
    titleTemplate: '%s · DX Manifesto',
    url: 'https://dxmanifesto.dev', // No trailing slash allowed!
    image: '/images/icon.jpg', // Path to your image you placed in the 'static' folder
  },

  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'GA-XXX',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
  ],
}
