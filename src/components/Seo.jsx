import React from 'react'
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

export const Seo = ({title ,description, lang, image:metaImage }) => {
    
    Seo.defaultProps = {
        lang: `en`,
        meta: [],
        description: ``,
    }

    Seo.propTypes = {
        description: PropTypes.string,
        lang: PropTypes.string,
        meta: PropTypes.arrayOf(PropTypes.object),
        title: PropTypes.string.isRequired,
        image: PropTypes.shape({
            src: PropTypes.string.isRequired,
            height: PropTypes.number.isRequired,
            weith: PropTypes.number.isRequired,  
        }),
    }
    
    const { site } = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                    description
                    author
                    siteUrl
                    keywords
                }
            }
        }
    `)

    const metaDescription = description || site.siteMetadata.description
    const image = metaImage && metaImage.src ? `${site.siteMetadata.siteUrl}${metaImage.src}` : null

    return (    
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content: site.siteMetadata.keywords,
                },
                {
                    name: 'image',
                    content: image,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
        }
        ></Helmet>
    )
}
