import React from 'react'
import PropTypes from 'prop-types'
import { filter } from 'fuzzaldrin-plus'
import { SearchInput } from '../../../src'
import OverviewItem from './OverviewItem'

export default class Overview extends React.PureComponent {
  static propTypes = {
    /**
     * Information Architecture.
     */
    ia: PropTypes.object
  }

  state = {
    searchQuery: ''
  }

  search = () => {
    const searchQuery = this.state.searchQuery.trim()
    if (searchQuery.length < 2) return this.props.ia

    const ia = JSON.parse(JSON.stringify(this.props.ia))

    ia.foundation.items = ia.foundation.items.filter(item => {
      return filter([item.name, ...(item.tags || [])], searchQuery).length > 0
    })

    ia.components.items = ia.components.items.map(group => {
      return {
        ...group,
        items: group.items.filter(item => {
          return (
            filter([item.name, ...(item.tags || [])], searchQuery).length > 0
          )
        })
      }
    })

    return ia
  }

  handleChange = e => {
    this.setState({
      searchQuery: e.target.value
    })
  }

  render() {
    const ia = this.search()

    const isComponentsShown = ia.components.items.reduce((acc, group) => {
      return group.items.length > 0 || acc
    }, false)

    return (
      <section className="Overview Container">
        <SearchInput
          autoFocus
          height={40}
          width="100%"
          marginTop={40}
          placeholder="Search components and foundation..."
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
        {ia.foundation.items.length > 0 && (
          <div className="clearfix">
            <header>
              <h2>{ia.foundation.title}</h2>
              <p>{ia.foundation.description}</p>
            </header>
            <div className="Overview-groupItems">
              {ia.foundation.items.map(item => {
                return (
                  <OverviewItem key={item.name} id={item.id} image={item.image}>
                    {item.name}
                  </OverviewItem>
                )
              })}
            </div>
          </div>
        )}
        {isComponentsShown && (
          <div className="clearfix">
            <header>
              <h2>{ia.components.title}</h2>
            </header>
            <div>
              {ia.components.items.map(group => {
                if (group.items.length === 0) return null
                return (
                  <div key={group.title} className="Overview-group">
                    <h3 className="Overview-groupTitle">{group.title}</h3>
                    <div className="Overview-groupItems">
                      {group.items.map(item => {
                        return (
                          <OverviewItem
                            key={item.name}
                            id={item.id}
                            image={item.image}
                          >
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
        )}
      </section>
    )
  }
}
