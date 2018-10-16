import React from 'react'

export default class LogoIcon extends React.PureComponent {
  render() {
    return (
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        aria-labelledby="title"
        {...this.props}
      >
        <title>Evergreen</title>
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <circle fill="#38A065" fillRule="nonzero" cx={16} cy={16} r={16} />
          <rect
            fill="#FFF"
            fillRule="nonzero"
            x={15}
            y={22}
            width={2}
            height={4}
          />
          <g transform="translate(9.000000, 7.000000)">
            <polygon points="7 0 14 14 0 14" fill="#FFF" />
            <polygon
              stroke="#FFF"
              strokeWidth="1.5"
              points="7 1.67705098 1.2135255 13.25 12.7864745 13.25"
            />
          </g>
        </g>
      </svg>
    )
  }
}
