import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import MDXPlayground from './MDXPlayground'

/**
 * Use explicit class names for all the components being rendered.
 */
const Components = {}

Components.code = MDXPlayground
Components.inlineCode = props => <code className="code" {...props} />
Components.wrapper = props => <React.Fragment {...props} />
Components.h1 = props => <h1 className="heading h1" {...props} />
Components.h2 = props => <h2 className="heading h2" {...props} />
Components.h3 = props => <h3 className="heading h3" {...props} />
Components.h4 = props => <h4 className="heading h4" {...props} />
Components.h5 = props => <h5 className="heading h5" {...props} />
Components.h6 = props => <h6 className="heading h6" {...props} />
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
    children: PropTypes.node
  }

  render() {
    return (
      <MDXProvider components={Components}>{this.props.children}</MDXProvider>
    )
  }
}
