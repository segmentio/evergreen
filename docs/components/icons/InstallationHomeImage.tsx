import React from 'react'
import { Pane } from 'evergreen-ui'

interface Props {
  width?: number
  height?: number
}

const InstallationHomeImage = ({ width = 118, height = 101 }: Props) => {
  return (
    <Pane
      is="svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="56" width="82" height="24" rx="2" fill="#9DB5FF" />
      <rect x="6" y="68" width="6" height="6" rx="2" fill="white" />
      <rect x="16" y="68" width="6" height="6" rx="2" fill="white" />
      <rect x="26" y="68" width="6" height="6" rx="2" fill="white" />
      <rect y="28" width="82" height="24" rx="2" fill="#D6E0FF" />
      <rect x="6" y="40" width="6" height="6" rx="2" fill="white" />
      <rect x="16" y="40" width="6" height="6" rx="2" fill="white" />
      <rect x="26" y="40" width="6" height="6" rx="2" fill="white" />
      <rect width="82" height="24" rx="2" fill="#EBF0FF" />
      <rect x="6" y="12" width="6" height="6" rx="2" fill="white" />
      <rect x="16" y="12" width="6" height="6" rx="2" fill="white" />
      <rect x="26" y="12" width="6" height="6" rx="2" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M79.5658 50.7553C80.4884 50.3973 81.5116 50.3973 82.4342 50.7553L106.503 60.0923V59.8647H107.99V89.3517C108.05 89.776 107.842 90.2347 107.367 90.4189L82.4342 100.091C81.5116 100.449 80.4884 100.449 79.5658 100.091L54.6328 90.4189C54.2293 90.2624 54.0187 89.9076 54.0012 89.5442L54.0001 89.5063C54 89.4985 54 89.4908 54.0001 89.483L54.0001 59.8647H55.4871V60.0961L79.5658 50.7553Z"
        fill="#52BD94"
      />
      <path d="M54 60L81 70.5L71 83.5L44 73L54 60Z" fill="#DCF2EA" />
      <path d="M108 60L81 70.5L91 83.5L118 73L108 60Z" fill="#DCF2EA" />
      <path
        d="M79.5658 49.2684C80.4884 48.9105 81.5116 48.9105 82.4342 49.2684L107.367 58.9407C108.211 59.268 108.211 60.4619 107.367 60.7892L82.4342 70.4615C81.5116 70.8194 80.4884 70.8194 79.5658 70.4615L54.6328 60.7892C53.7891 60.4619 53.7891 59.268 54.6328 58.9407L79.5658 49.2684Z"
        fill="#EEF8F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86 67L86 50.7711L87.16 51.9422C87.88 52.7096 88.88 53.1538 90 53.1538C92.2 53.1538 94 51.3365 94 49.1153C94 47.9846 93.56 46.975 92.84 46.248L84.84 38.1711C84.12 37.4442 83.12 37 82 37C80.88 37 79.88 37.4442 79.16 38.1711L71.16 46.248C70.44 46.975 70 47.9846 70 49.1153C70 51.3365 71.8 53.1538 74 53.1538C75.12 53.1538 76.12 52.7096 76.84 51.9826L78 50.7711L78 66.9994L86 67Z"
        fill="url(#paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86 67L86 50.7711L87.16 51.9422C87.88 52.7096 88.88 53.1538 90 53.1538C92.2 53.1538 94 51.3365 94 49.1153C94 47.9846 93.56 46.975 92.84 46.248L84.84 38.1711C84.12 37.4442 83.12 37 82 37C80.88 37 79.88 37.4442 79.16 38.1711L71.16 46.248C70.44 46.975 70 47.9846 70 49.1153C70 51.3365 71.8 53.1538 74 53.1538C75.12 53.1538 76.12 52.7096 76.84 51.9826L78 50.7711L78 66.9994L86 67Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="82.5714" y1="37" x2="82.5714" y2="67" gradientUnits="userSpaceOnUse">
          <stop stopColor="#52BD94" />
          <stop offset="1" stopColor="#DCF2EA" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="82" y1="37" x2="82" y2="67" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F499DA" />
          <stop offset="1" stopColor="#FEF5FB" />
        </linearGradient>
      </defs>
    </Pane>
  )
}

export default InstallationHomeImage
