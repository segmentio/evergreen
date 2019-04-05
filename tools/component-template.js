'use strict'

module.exports = ({ componentName }) => {
  return `
import * as React from 'react'
import PropTypes from 'prop-types'
import Box, { BoxProps } from 'ui-box'

interface IProps extends BoxProps {
}

export default class ${componentName} extends React.PureComponent<IProps> {
  render() {
    const { ...props } = this.props

    return <Box {...props}>${componentName}</Box>
  }
}
`.trim()
}
