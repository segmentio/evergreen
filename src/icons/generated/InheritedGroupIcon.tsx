import React, { memo, forwardRef } from 'react'
import { IconComponent } from '../../types'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M1 7c.51 0 .935.388.993.884L2 8v3c0 .51.388.935.884.993L3 12h1.59l-.3-.29a1.003 1.003 0 011.324-1.504l.096.084 2 2c.18.18.29.43.29.71 0 .233-.076.446-.206.614l-.084.096-2 2A1.003 1.003 0 014 15c0-.24.08-.458.224-.629l.076-.081.29-.29H3a2.996 2.996 0 01-2.995-2.823L0 11V8c0-.55.45-1 1-1zm5.388-7c.629 0 1.338.21 1.838.6.48.38.85.91 1.019 1.52.04.13.07.27.09.4.09.48.14 1.22.14 1.73v.07c.18.08.34.27.37.67.03.32-.09.59-.16.71-.06.28-.21.58-.48.63-.03.13-.07.26-.12.39 0 .01-.01.04-.01.04-.22.58-.55 1.08-.949 1.45v.18c.04.45-.12.77 1.059 1.3 1.179.53 2.947 1.09 3.307 1.95.37.86.22 1.36.22 1.36H9c0-.539-.21-1.045-.583-1.417l-2-2A1.997 1.997 0 005 9c-.149 0-.296-.015-.442-.045.099-.19.082-.37.101-.575 0-.05.01-.11.01-.17-.41-.35-.75-.86-.969-1.45v-.01s-.01-.01-.01-.02c-.04-.12-.09-.26-.12-.39-.28-.05-.44-.36-.5-.64-.06-.12-.19-.39-.16-.71.04-.41.21-.6.39-.68v-.06c0-.51.05-1.26.14-1.74.02-.13.05-.27.09-.4.17-.6.54-1.13 1.02-1.51C5.048.21 5.757 0 6.387 0zm4.625 2.04c.49 0 1.05.16 1.439.46.38.29.67.7.8 1.17.03.1.05.21.07.31.07.37.11.94.11 1.33v.05c.139.06.269.21.289.51.02.25-.07.45-.13.54-.05.21-.16.44-.38.48a1.711 1.711 0 01-.1.33c-.17.44-.43.83-.749 1.11v.14c.03.35-.09.59.83 1 .929.41 2.317.84 2.597 1.5.29.66.17 1.04.17 1.04H13.66v.01c-.05-.24-.14-.5-.25-.76-.36-.86-1.119-1.33-2.687-2-.14-.06-.59-.25-.6-.25-.21-.09-.36-.15-.5-.22.02-.1.02-.2.03-.31 0-.04.01-.08.01-.13-.07-.06-.13-.12-.19-.19.22-.32.4-.67.54-1.05.02-.06.02-.06.03-.1.29-.23.48-.57.59-.96.16-.33.25-.73.21-1.16-.03-.4-.16-.76-.37-1.03-.02-.53-.07-1.13-.15-1.54-.01-.06-.02-.12-.03-.19.23-.06.48-.09.72-.09z'
]
const svgPaths20 = [
  'M1 9c.55 0 1 .45 1 1v4c0 1.1.9 2 2 2h2.59l-.3-.29a1.003 1.003 0 011.42-1.42l2 2c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2 2A1.003 1.003 0 016 19c0-.28.11-.53.3-.71l.29-.29H4c-2.21 0-4-1.79-4-4v-4c0-.55.45-1 1-1zm6.996-9c.79 0 1.68.25 2.309.73a3.63 3.63 0 011.4 2.36c.11.6.17 1.52.17 2.15v.09c.22.09.42.32.47.82.03.39-.12.73-.2.87-.07.34-.27.71-.61.78-.04.16-.09.33-.15.48-.01.01-.02.05-.02.05-.27.71-.68 1.33-1.19 1.78 0 .08 0 .16.01.23.05.55-.15.95 1.33 1.6 1.469.66 3.698 1.35 4.178 2.39.45 1.05.27 1.67.27 1.67h-5.227a1.982 1.982 0 00-.319-.417l-2-2A2.003 2.003 0 005 15H4c-.548 0-1-.452-1-1v-1.462c.511-.213 1.023-.413 1.468-.608 1.479-.65 1.329-1.05 1.379-1.59l.01-.21c-.52-.45-.95-1.08-1.22-1.8l-.01-.01-.01-.03c-.07-.15-.12-.32-.16-.49-.34-.06-.54-.43-.62-.78-.08-.14-.24-.48-.2-.87.05-.51.26-.74.49-.83v-.08c0-.64.05-1.55.17-2.15a3.648 3.648 0 011.4-2.36C6.317.25 7.207 0 7.996 0zm5.997 3c.59 0 1.26.19 1.73.55.46.35.8.85.97 1.4.04.13.07.25.08.38.08.45.13 1.14.13 1.61v.07c.16.07.31.24.35.62.02.29-.09.55-.15.65-.05.26-.2.53-.46.59-.03.12-.07.25-.11.36-.01.01-.01.04-.01.04-.2.53-.51 1-.89 1.34 0 .06 0 .12.01.17.04.41-.11.71 1 1.19 1.099.5 2.768 1.01 3.128 1.79.34.79.2 1.25.2 1.25h-3.039V15c-.06-.33-.17-.69-.33-1.06-.45-.97-1.37-1.52-3.238-2.3-.17-.07-.76-.31-.77-.32-.1-.04-.2-.08-.28-.12.05-.14.04-.29.06-.45l.01-.16c-.25-.21-.47-.48-.65-.79.22-.34.41-.71.56-1.12l.028-.078-.002.013-.006.035.06-.15c.36-.26.6-.67.72-1.13.18-.37.29-.82.25-1.3-.05-.5-.21-.92-.47-1.22-.02-.53-.06-1.11-.12-1.59.38-.17.83-.26 1.24-.26z'
]

export const InheritedGroupIcon: IconComponent = memo(
  forwardRef(function InheritedGroupIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="inherited-group" {...props} />
  })
)
