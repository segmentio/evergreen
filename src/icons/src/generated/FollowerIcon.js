import React, { memo, forwardRef } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M9.37 12.69c-1.2-.53-1.04-.85-1.08-1.29-.01-.06-.01-.12-.01-.19.41-.37.75-.87.97-1.44 0 0 .01-.03.01-.04.05-.13.09-.26.12-.39.28-.06.44-.36.5-.63.06-.11.19-.39.16-.7-.04-.4-.2-.59-.38-.67v-.07c0-.52-.05-1.26-.14-1.74a2.72 2.72 0 00-.09-.43 3.02 3.02 0 00-1.04-1.51C7.87 3.2 7.15 3 6.5 3c-.64 0-1.36.2-1.87.59-.5.38-.87.92-1.05 1.51-.04.13-.07.27-.09.4-.09.49-.14 1.24-.14 1.75v.06c-.19.07-.36.26-.4.68-.03.31.1.59.16.7.06.28.23.59.51.64.04.14.08.27.13.39 0 .01.01.02.01.02v.01c.22.59.57 1.1.99 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.12 1.29-1.2.53-3.01 1.1-3.38 1.95C-.13 15.5.02 16 .02 16h12.96s.15-.5-.22-1.36c-.38-.85-2.19-1.42-3.39-1.95zm6.33-10.4l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H9.99c-.55 0-1 .45-1 1s.45 1 1 1h2.58l-.29.29a1.003 1.003 0 001.42 1.42l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
]
const svgPaths20 = [
  'M11.54 15.92c-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15-.02-.17-.06-.33-.11-.5a3.69 3.69 0 00-1.29-1.86C9.69 4.25 8.8 4 8.01 4c-.8 0-1.69.25-2.32.73-.61.47-1.06 1.13-1.28 1.86-.05.17-.09.33-.11.5-.12.6-.18 1.51-.18 2.14v.08c-.23.09-.44.32-.49.83-.04.39.12.73.2.87.08.35.28.72.63.78.04.17.09.33.15.48 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.38 1.59-1.48.65-3.71 1.35-4.16 2.4C-.16 19.38.02 20 .02 20h15.95s.18-.62-.27-1.67c-.46-1.06-2.68-1.75-4.16-2.41zm8.15-12.63l-3-3a.956.956 0 00-.7-.29 1.003 1.003 0 00-.71 1.71L16.58 3H13c-.55 0-1 .45-1 1s.45 1 1 1h3.58l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.3-.71z'
]

export const FollowerIcon = memo(
  forwardRef((props, ref) => (
    <Icon
      svgPaths16={svgPaths16}
      svgPaths20={svgPaths20}
      ref={ref}
      {...props}
    />
  ))
)
