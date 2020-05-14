import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import absolutePath from '../absolutePath'
import '../css/index.css' // eslint-disable-line import/no-unassigned-import

const description =
  'Evergreen is a React UI Framework for building ambitious products on the web. Brought to you by Segment.'

const TemplateWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        {/* Fallback properties */}
        <title>Evergreen</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Evergreen" />
        <meta property="og:url" content={absolutePath()} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={absolutePath('/og-image.png')} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:site" content="@segment" />
        <meta name="twitter:creator" content="@Jeroen_Ransijn" />
        <meta
          property="twitter:image"
          content={absolutePath('/twitter-og.png')}
        />
      </Helmet>
      {children}
    </React.Fragment>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.node
}

export default TemplateWrapper
