import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import components from '../components'

export default class Sidebar extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    components: PropTypes.array
  }

  static defaultProps = {
    components
  }

  constructor(props, context) {
    super(props, context)

    this.state = {}
  }

  render() {
    const { children, ...props } = this.props
    return (
      <aside className="MainLayout-sidebar Sidebar" {...props}>
        <div className="NavGroup">
          <h3 className="NavGroup-title">Components</h3>
          <nav className="NavGroup-nav">
            {components.map(({ name }) => <Link key={name}>{name}</Link>)}
          </nav>
        </div>
      </aside>
    )
  }
}
