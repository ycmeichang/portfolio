/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Mei | Front-end Developer',
		url: 'https://mei.surge.sh'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `src/images/icon.png`
			}
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`
	]
}
