import React, { memo, forwardRef } from 'react'
import { IconComponent } from "../../types";
import Icon from '../src/Icon'

const svgPaths16 = [
  'M1 0C.44 0 0 .45 0 1v10c0 .54.45 1 1 1 .56 0 1-.45 1-1V7h4v4c0 .54.45 1 1 1 .56 0 1-.45 1-1V1c0-.54-.45-1-1-1-.56 0-1 .45-1 1v4H2V1c0-.54-.45-1-1-1zm13.71 11.72c.41.08.72.3.95.65.23.35.34.77.34 1.27 0 .37-.07.7-.2.97-.14.29-.32.54-.55.74-.23.2-.5.36-.8.47-.3.11-.62.16-.96.16-.41 0-.77-.06-1.08-.19-.31-.12-.56-.31-.77-.54-.21-.24-.36-.52-.47-.85-.11-.33-.16-.7-.17-1.1h1.14c-.01.47.09.86.32 1.17.23.31.57.47 1.02.47.39 0 .71-.12.97-.36s.39-.58.39-1.02c0-.3-.05-.53-.16-.71-.11-.17-.25-.31-.43-.4-.17-.09-.37-.15-.59-.17-.22-.02-.44-.03-.67-.02v-.93c.19.01.38 0 .57-.04.19-.03.36-.1.51-.19.14-.09.26-.22.35-.38.09-.16.14-.36.14-.59 0-.33-.1-.59-.31-.79-.2-.2-.47-.3-.79-.3-.21 0-.38.04-.53.13-.15.09-.27.21-.37.36-.1.15-.17.32-.22.51-.05.19-.07.38-.06.58h-1.15c.01-.38.08-.72.19-1.04.11-.32.27-.6.47-.83.19-.23.44-.42.72-.55.28-.13.6-.2.96-.2.28 0 .55.04.82.13.27.08.51.21.72.38.21.17.38.38.51.64s.19.56.19.9c0 .39-.08.73-.24 1.02-.16.29-.42.5-.76.63v.02z'
]
const svgPaths20 = [
  'M10.989 1c0-.55-.45-1-.999-1-.55 0-.999.45-.999 1v6H1.998V1c0-.55-.45-1-.999-1C.449 0 0 .45 0 1v14c0 .55.45 1 .999 1 .55 0 .999-.45.999-1V9h6.993v6c0 .55.45 1 .999 1 .55 0 .999-.45.999-1V1zm7.461 13.645c.49.11.87.38 1.14.82.27.44.41.97.41 1.61a3 3 0 01-.24 1.23c-.16.36-.38.67-.66.92-.27.25-.59.44-.96.58-.37.14-.75.21-1.16.21-.5 0-.93-.08-1.3-.24a2.55 2.55 0 01-.93-.68c-.25-.29-.44-.65-.57-1.06-.13-.42-.2-.88-.21-1.38h1.39c-.02.58.11 1.07.38 1.46.28.39.68.58 1.23.58.47 0 .86-.15 1.17-.45.31-.3.47-.72.47-1.27 0-.37-.07-.67-.2-.89-.13-.22-.3-.39-.51-.5-.21-.11-.45-.18-.71-.21-.26-.03-.53-.04-.81-.03v-1.17c.22.01.45 0 .68-.05.23-.05.43-.13.61-.24.18-.11.32-.27.43-.47.11-.2.16-.45.16-.74 0-.41-.12-.74-.37-.99s-.57-.37-.96-.37c-.24 0-.45.06-.63.17-.18.11-.33.26-.45.45s-.2.4-.26.63c-.05.23-.08.47-.07.72h-1.39c.01-.47.09-.9.23-1.3s.33-.75.57-1.04c.24-.3.53-.53.87-.69.34-.17.73-.25 1.16-.25.33 0 .66.05.98.16.32.11.61.27.87.48.26.21.47.47.62.8.15.32.23.7.23 1.12 0 .48-.09.91-.29 1.27-.2.36-.5.63-.92.79v.02z'
]

export const HeaderThreeIcon: IconComponent = memo(
  forwardRef(function HeaderThreeIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="header-three" {...props} />
  })
)
