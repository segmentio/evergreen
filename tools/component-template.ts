interface ComponentTemplateOptions {
  componentName: string
}

const componentTemplate = (options: ComponentTemplateOptions): string => {
  const { componentName } = options

  return `
import React, { memo, forwardRef } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'

export interface ${componentName}OwnProps {}

export type ${componentName}Props = PolymorphicBoxProps<'div', ${componentName}OwnProps>

const ${componentName}: React.FC<${componentName}Props> = memo(
  forwardRef((props, ref) => {
    const { ...restProps } = props

    return (
      <Box ref={ref} {...restProps}>
        ${componentName}
      </Box>
    )
  })
)

export default ${componentName}
`.trim()
}

export default componentTemplate
