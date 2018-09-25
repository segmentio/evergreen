import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class OverviewItem extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired
  }

  render() {
    const { children, image, id } = this.props
    return (
      <Link to={`/components/${id}`} className="OverviewItem">
        <img className="OverviewItem-image" src={image} alt={children} />
        <span className="OverviewItem-label">{children}</span>
      </Link>
    )
  }
}
