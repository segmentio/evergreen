import React, { forwardRef } from 'react'
import Box from 'ui-box'
import { useTheme, PolymorphicBoxProps, majorScale } from 'evergreen-ui'

interface Props extends PolymorphicBoxProps<'svg'> {
  size?: number
  color?: string
}

const CodeSandboxIcon: React.FC<Props> = forwardRef(function CodeSandboxIcon(props, ref) {
  const { size = majorScale(3), color = 'default', ...rest } = props
  const theme = useTheme()
  const iconColor = theme.colors.icon[color] || color
  return (
    <Box
      is="svg"
      width={size}
      height={size}
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9.365 21.17v-8.645L1.93 8.248v4.928l3.405 1.974v3.705l4.029 2.314zm1.93.05l4.104-2.363v-3.794l3.427-1.986V8.211l-7.53 4.348v8.661zm6.54-14.666L13.878 4.26l-3.475 2.017L6.9 4.257 2.907 6.583l7.452 4.288 7.477-4.316zM0 18.017V6.04L10.377 0l10.38 6.015v11.983l-10.38 5.98L0 18.018z"
        fill={iconColor}
        stroke={iconColor}
        strokeWidth="0.1"
      />
    </Box>
  )
})

export default CodeSandboxIcon
