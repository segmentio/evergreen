import React from 'react'
import { Pane } from 'evergreen-ui'

interface Props {
  size?: number
}

const FigmaIcon = ({ size = 24 }: Props) => {
  return (
    <Pane
      is="svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M9.24912 23.9441C11.5946 23.9441 13.4982 22.1521 13.4982 19.9441V15.9441H9.24912C6.90361 15.9441 5 17.7361 5 19.9441C5 22.1521 6.90361 23.9441 9.24912 23.9441Z"
          fill="#1AD285"
        />
        <path
          d="M5 11.9443C5 9.73634 6.90361 7.94434 9.24912 7.94434H13.4982V15.9443H9.24912C6.90361 15.9443 5 14.1523 5 11.9443Z"
          fill="#7F43FF"
        />
        <path
          d="M5.00073 3.94433C5.00073 1.73634 6.90434 -0.0556641 9.24985 -0.0556641H13.499V7.94433H9.24985C6.90434 7.94433 5.00073 6.15233 5.00073 3.94433Z"
          fill="#C00045"
        />
        <path
          d="M13.4982 -0.0556641H17.7473C20.0928 -0.0556641 21.9964 1.73634 21.9964 3.94433C21.9964 6.15233 20.0928 7.94433 17.7473 7.94433H13.4982V-0.0556641Z"
          fill="#FF5252"
        />
        <path
          d="M21.9964 11.9443C21.9964 14.1523 20.0928 15.9443 17.7473 15.9443C15.4018 15.9443 13.4982 14.1523 13.4982 11.9443C13.4982 9.73634 15.4018 7.94434 17.7473 7.94434C20.0928 7.94434 21.9964 9.73634 21.9964 11.9443Z"
          fill="#00BBF5"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" transform="translate(0 0.00195312)" />
        </clipPath>
      </defs>
    </Pane>
  )
}

export default FigmaIcon
