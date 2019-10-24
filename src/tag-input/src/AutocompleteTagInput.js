/**
 * @overview Autocomplete of tag input component
 */

import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme } from '../../theme'
import AutocompleteTagInputItem from './AutocompleteTagInputItem'

class AutocompleteTagInput extends React.Component {
  static propTypes = {
    /** String than will be shown in autocomplete. */
    options: PropTypes.array,
    /**
     * Callback invoked where autocomplete option is clicked.
     */
    onClick: PropTypes.func,
    /**
     * Size of font
     */
    fontSize: PropTypes.string,
    /**
     * Color of font
     */
    color: PropTypes.string,
    /**
     * Color of background
     */
    backgroundColor: PropTypes.string,
    /**
     * Font
     */
    fontFamily: PropTypes.string
  }

  render() {
    const {
      options = [],
      onClick,
      fontSize = '15px',
      color = '#425A70',
      backgroundColor = '#E4E7EB',
      fontFamily = 'helvetica'
    } = this.props

    return (
      <Box
        position="absolute"
        top="135%"
        height="70px"
        overflow="auto"
        width="100%"
        left="0"
        color={color}
        fontFamily={fontFamily}
        background={backgroundColor}
        fontSize={fontSize}
        paddingLeft="15px"
      >
        {options.map(element => (
          <AutocompleteTagInputItem
            onClick={onClick}
            word={element.word}
            key={element.id}
          />
        ))}
      </Box>
    )
  }
}

export default withTheme(AutocompleteTagInput)
