import React, { memo, forwardRef } from 'react'
import Icon from '../Icon'

const svgPaths16 = [
  'M13.364 9l.879.879a1 1 0 11-1.415 1.414l-2.12-2.121A1.003 1.003 0 0110.568 9H9v1.604c.042.03.083.065.121.103l2.122 2.121a1 1 0 01-1.415 1.415L9 13.414V15a1 1 0 01-2 0v-1.636l-.879.879a1 1 0 11-1.414-1.415l2.121-2.12c.054-.054.111-.1.172-.139V9H5.38c-.038.06-.084.118-.137.172l-2.122 2.12A1 1 0 111.707 9.88L2.586 9H1a1 1 0 110-2h1.536l-.829-.828a1 1 0 011.414-1.415L5.243 6.88c.038.038.072.079.103.121H7V5.38a1.003 1.003 0 01-.172-.137L4.708 3.12A1 1 0 016.12 1.707L7 2.586V1a1 1 0 112 0v1.536l.828-.829a1 1 0 011.415 1.414L9.12 5.243A1.007 1.007 0 019 5.346V7h1.604c.03-.042.065-.083.103-.121l2.121-2.122a1 1 0 011.415 1.415L13.414 7H15a1 1 0 010 2h-1.636z'
]
const svgPaths20 = [
  'M11 11.776v2.81l2.31 2.242a.987.987 0 010 1.415c-.399.39-1.044.39-1.442 0L11 17.414V19a.99.99 0 01-.996 1A.996.996 0 019 19v-1.636l-.912.879c-.398.39-1.043.39-1.441 0a.987.987 0 010-1.415L9 14.536v-2.79l-2.548 1.435-.837 3.063c-.146.534-.705.85-1.248.707a.998.998 0 01-.721-1.224l.309-1.132-1.4.793a1.03 1.03 0 01-1.393-.366.99.99 0 01.373-1.366l1.445-.818-1.224-.322a.998.998 0 01-.72-1.225c.145-.533.704-.85 1.248-.707l3.193.84 2.462-1.395-2.532-1.434-3.123.82a1.022 1.022 0 01-1.249-.706.998.998 0 01.721-1.225L2.91 7.18l-1.4-.793a.99.99 0 01-.373-1.366 1.03 1.03 0 011.392-.366l1.445.818-.328-1.2a.998.998 0 01.72-1.225 1.022 1.022 0 011.25.707l.855 3.132L9 8.311V5.414L6.647 3.121a.987.987 0 010-1.414 1.033 1.033 0 011.441 0L9 2.586V1c0-.552.44-1 1.004-1A.99.99 0 0111 1l-.007 1.536.875-.829a1.033 1.033 0 011.441 0 .987.987 0 010 1.414L11 5.364v2.918l2.53-1.42.855-3.131c.146-.534.705-.85 1.249-.707a.998.998 0 01.72 1.224l-.327 1.2 1.4-.792a1.03 1.03 0 011.392.366.99.99 0 01-.373 1.366l-1.355.768 1.153.303a.998.998 0 01.721 1.225c-.146.533-.705.85-1.249.707l-3.123-.821-2.576 1.459 2.506 1.42 3.193-.84a1.022 1.022 0 011.249.707.998.998 0 01-.72 1.225l-1.224.322 1.4.793a.99.99 0 01.373 1.366 1.03 1.03 0 01-1.393.366l-1.356-.768.31 1.132a.998.998 0 01-.721 1.224 1.022 1.022 0 01-1.249-.707l-.837-3.063L11 11.776z'
]

export const SnowflakeIcon = memo(
  forwardRef((props, ref) => (
    <Icon
      svgPaths16={svgPaths16}
      svgPaths20={svgPaths20}
      ref={ref}
      {...props}
    />
  ))
)
