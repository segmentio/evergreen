import React from 'react'
import PropTypes from 'prop-types'
import { SearchInput } from '../../../src'

class OverviewItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    image: PropTypes.string
  }

  render() {
    const { children, image } = this.props
    console.log(image)
    return (
      <a href="" className="OverviewItem">
        <img className="OverviewItem-image" src={image} alt={children} />
        <span className="OverviewItem-label">{children}</span>
      </a>
    )
  }
}

export default class Overview extends React.PureComponent {
  static propTypes = {
    /**
     * Information Architecture.
     */
    ia: PropTypes.object
  }

  render() {
    const { ia } = this.props
    return (
      <section className="Overview">
        <SearchInput
          height={40}
          width="100%"
          marginTop={40}
          placeholder="Search components and foundation..."
        />
        <div className="clearfix">
          <header>
            <h2>{ia.foundation.title}</h2>
            <p>{ia.foundation.description}</p>
          </header>
          <div className="Overview-groupItems">
            {ia.foundation.items.map(item => {
              return (
                <OverviewItem key={item.name} image={item.image}>
                  {item.name}
                </OverviewItem>
              )
            })}
          </div>
        </div>
        <div className="clearfix">
          <header>
            <h2>{ia.components.title}</h2>
          </header>
          <div>
            {ia.components.items.map(group => {
              return (
                <div key={group.title} className="Overview-group">
                  <h3 className="Overview-groupTitle">{group.title}</h3>
                  <div className="Overview-groupItems">
                    {group.items.map(item => {
                      return (
                        <OverviewItem key={item.name} image={item.image}>
                          {item.name}
                        </OverviewItem>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
