import React from "react"
import { Pane } from "evergreen-ui"

interface Props {
  width?: number,
  height?: number
}

const PatternHomeImage = ({ width=120, height=100 }: Props) => {
  return (
    <Pane
      is="svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="31.5918" y="4" width="77.8163" height="37.9592" rx="2" fill="#DCF2EA"/>
      <rect x="50.5714" y="11.5918" width="51.2449" height="5.69388" rx="2" fill="#A3E6CD"/>
      <rect x="50.5714" y="20.1326" width="51.2449" height="5.69388" rx="2" fill="#A3E6CD"/>
      <rect x="50.5714" y="28.6736" width="51.2449" height="5.69388" rx="2" fill="#A3E6CD"/>
      <rect x="39.1837" y="11.5918" width="5.69388" height="5.69388" rx="2" fill="#A3E6CD"/>
      <rect x="39.1837" y="28.6736" width="77.8163" height="37.9592" rx="2" fill="#D6E0FF"/>
      <rect x="58.1633" y="36.2654" width="51.2449" height="5.69388" rx="2" fill="#9DB5FF"/>
      <rect x="58.1633" y="44.8062" width="51.2449" height="5.69388" rx="2" fill="#9DB5FF"/>
      <rect x="58.1633" y="53.3472" width="51.2449" height="5.69388" rx="2" fill="#9DB5FF"/>
      <rect x="46.7755" y="36.2654" width="5.69388" height="5.69388" rx="2" fill="#9DB5FF"/>
      <rect x="24" y="53.3469" width="77.8163" height="37.9592" rx="2" fill="#E7E4F9"/>
      <rect x="42.9796" y="60.9387" width="51.2449" height="5.69388" rx="2" fill="#897AE3"/>
      <rect x="42.9796" y="69.4795" width="51.2449" height="5.69388" rx="2" fill="#897AE3"/>
      <rect x="42.9796" y="78.0205" width="51.2449" height="5.69388" rx="2" fill="#897AE3"/>
      <rect x="31.5918" y="60.9387" width="5.69388" height="5.69388" rx="2" fill="#897AE3"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.1837 46.5662C9.71832 43.2734 5.61905 35.191 7.35198 27.1814C9.08492 19.1718 16.1777 13.4181 24.3634 13.3817L24.3626 13.5853C16.2731 13.6213 9.26364 19.3074 7.55107 27.2229C5.8385 35.1383 9.8896 43.1258 17.2672 46.3799L17.1837 46.5662Z" stroke="#C1C4D6"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.782 79.7791C5.05607 77.1553 0.262182 69.4645 1.28433 61.3336C2.30647 53.2027 8.86605 46.8477 17.0168 46.0919L17.0339 46.2947C8.97892 47.0417 2.49642 53.322 1.48629 61.3573C0.476153 69.3927 5.21371 76.9931 12.8488 79.5861L12.782 79.7791Z" stroke="#C1C4D6"/>
      <path d="M22 17C23.6569 17 25 15.6569 25 14C25 12.3431 23.6569 11 22 11C20.3431 11 19 12.3431 19 14C19 15.6569 20.3431 17 22 17Z" fill="#8F95B2"/>
      <path d="M16 49C17.6569 49 19 47.6569 19 46C19 44.3431 17.6569 43 16 43C14.3431 43 13 44.3431 13 46C13 47.6569 14.3431 49 16 49Z" fill="#8F95B2"/>
      <path d="M13 83C14.6569 83 16 81.6569 16 80C16 78.3431 14.6569 77 13 77C11.3431 77 10 78.3431 10 80C10 81.6569 11.3431 83 13 83Z" fill="#8F95B2"/>
    </Pane>
  )
}

export default PatternHomeImage