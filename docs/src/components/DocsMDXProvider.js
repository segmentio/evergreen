import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import MDXPlayground from './MDXPlayground'

/**
 * Use explicit class names for all the components being rendered.
 */
const Components = {}

// eslint-disable-next-line prefer-named-capture-group
const regex = /\{#([a-zA-Z][\w\-_]*)\}/g

const extractId = value => {
  if (!value || typeof value !== 'string') {
    return value
  }

  let [heading, id] = value.split(regex)
  if (!id) {
    id = `heading_${value.toLowerCase().replace(/\s/g, '_')}`
  }

  return [heading, id]
}

const heading = Component => ({ children, ...props }) => {
  const [heading, id] = extractId(children)
  return (
    <Component className={`heading ${Component}`} {...props} id={id}>
      {heading}
    </Component>
  )
}

Components.code = MDXPlayground
Components.inlineCode = props => <code className="code" {...props} />
Components.wrapper = props => <React.Fragment {...props} />
Components.h1 = heading('h1')
Components.h2 = heading('h2')
Components.h3 = heading('h3')
Components.h4 = heading('h4')
Components.h5 = heading('h5')
Components.h6 = heading('h6')
Components.p = props => <p className="paragraph" {...props} />
Components.ul = props => <ul className="ul" {...props} />
Components.ol = props => <ol className="ol" {...props} />
Components.li = props => <li className="li" {...props} />
Components.a = props => <a className="link" {...props} />
Components.blockquote = props => (
  <blockquote className="blockquote" {...props} />
)
Components.strong = props => <strong className="strong" {...props} />

export default class DocsMDXProvider extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    noInline: PropTypes.bool
  }

  static defaultProps = {
    noInline: false
  }

  constructor(props) {
    super(props)

    // This feels hacky...
    Components.code = newProps => {
      return <MDXPlayground {...newProps} noInline={props.noInline} />
    }
  }

  render() {
    return (
      <MDXProvider components={Components}>{this.props.children}</MDXProvider>
    )
  }
}
