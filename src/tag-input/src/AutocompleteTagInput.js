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
    onClick: PropTypes.func
  }

  render() {
    const { options, onClick } = this.props

    return (
      <Box
        position="absolute"
        top="135%"
        height="70px"
        overflow="auto"
        width="100%"
        left="0"
        color="#425A70"
        background="#E4E7EB"
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
