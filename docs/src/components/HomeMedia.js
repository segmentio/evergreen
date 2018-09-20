import React from 'react'
import PropTypes from 'prop-types'
import figmaDesignSystems from '../images/design-systems-com.png'
import growingADesignSystem from '../images/growing-a-design-system.png'
import drivingAdoption from '../images/driving-adoption-of-a-design-system.png'

const MediaIcon = props => {
  return (
    <svg width="64px" height="64px" viewBox="0 0 64 64" {...props}>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <circle
          fillOpacity="0.1"
          fill="#47B881"
          fillRule="nonzero"
          cx={32}
          cy={32}
          r={32}
        />
        <path
          d="M36.2 24.154l-14.4 5.4v4.892l14.4 5.4V24.154zm.52 17.595l-16-6A.8.8 0 0 1 20.2 35v-6a.8.8 0 0 1 .52-.75l16-6a.8.8 0 0 1 1.08.75v18a.8.8 0 0 1-1.08.75zm3.486-13.56a.8.8 0 0 1-.812-1.379l1.7-1a.8.8 0 0 1 .812 1.38l-1.7 1zm-.812 9a.8.8 0 0 1 .812-1.379l1.7 1a.8.8 0 0 1-.812 1.38l-1.7-1zM41 32.8a.8.8 0 1 1 0-1.6h2a.8.8 0 1 1 0 1.6h-2zM28.2 38a.8.8 0 1 1 1.6 0v3a.8.8 0 0 1-.932.79l-6-1A.8.8 0 0 1 22.2 40v-4.2a.8.8 0 1 1 1.6 0v3.522l4.4.734V38zm-4-10.5a.8.8 0 1 1 1.6 0v9a.8.8 0 1 1-1.6 0v-9z"
          fill="#47B881"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}

class MediaItem extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    published: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  render() {
    return (
      <a href={this.props.link} className="MediaItem">
        <img
          src={this.props.image}
          alt={this.props.title}
          className="MediaItem-image"
        />
        <div className="MediaItem-content">
          <h3 className="MediaItem-title">{this.props.title}</h3>
          <p className="MediaItem-published">{this.props.published}</p>
        </div>
      </a>
    )
  }
}

export default class HomeMedia extends React.PureComponent {
  render() {
    return (
      <section className="HomeMedia bg-tint2 clearfix">
        <div className="HomeMedia-inner Container">
          <header style={{ textAlign: 'center', marginTop: 64 }}>
            <MediaIcon />
            <h2 className="h2" style={{ marginTop: 32 }}>
              Evergreen Related Media
            </h2>
          </header>
          <div className="HomeMedia-grid">
            <MediaItem
              title="Driving Adoption of a Design System"
              image={drivingAdoption}
              published="Coming Soon"
              link="https://segment.com/blog/"
            />
            <MediaItem
              title="Growing a Design System"
              image={growingADesignSystem}
              published="June, 2018"
              link="https://www.youtube.com/watch?v=aoxEhlLpG9k"
            />
            <MediaItem
              title="Hijack a project to convince your company it’s ready for a design system"
              image={figmaDesignSystems}
              published="April, 2018"
              link="https://www.designsystems.com/stories/convince-your-company-its-ready-for-a-design-system/"
            />
          </div>
        </div>
      </section>
    )
  }
}
