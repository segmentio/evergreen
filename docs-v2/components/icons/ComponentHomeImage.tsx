import React from "react"
import { Pane } from "evergreen-ui"

interface Props {
  width?: number,
  height?: number
}

const ComponentHomeImage = ({ width=120, height=100 }: Props) => {
  return (
    <Pane
      is="svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="28" width="104" height="48" rx="2" fill="#EBF0FF"/>
      <rect x="18" y="38" width="28" height="28" rx="2" fill="#F499DA"/>
      <rect x="52" y="38" width="50" height="6" rx="2" fill="#D6E0FF"/>
      <rect x="52" y="49" width="50" height="6" rx="2" fill="#D6E0FF"/>
      <rect x="52" y="60" width="20" height="6" rx="2" fill="#A3E6CD"/>
      <path d="M35.5 42V18C35.5 14.6863 32.8137 12 29.5 12H21" stroke="#C1C4D6" strokeLinecap="square" strokeLinejoin="round" strokeDasharray="5 5"/>
      <path d="M85.5 18V40" stroke="#C1C4D6" strokeLinecap="square" strokeLinejoin="round" strokeDasharray="5 5"/>
      <circle cx="13.5" cy="11.5" r="7.5" fill="#F499DA"/>
      <circle cx="85.5" cy="11.5" r="7.5" fill="#9DB5FF"/>
      <path d="M87 88.5L63 88.5C59.6863 88.5 57 85.8137 57 82.5L57 65" stroke="#C1C4D6" strokeLinecap="square" strokeLinejoin="round" strokeDasharray="5 5"/>
      <circle cx="94.5" cy="88.5" r="7.5" fill="#A3E6CD"/>
    </Pane>
  )
}

export default ComponentHomeImage