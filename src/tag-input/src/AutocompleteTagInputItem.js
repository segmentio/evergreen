/**
 * @overview Autocomplete Item of tag input component
 */

import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme } from '../../theme'

class AutocompleteTagInputItem extends React.Component {
  static propTypes = {
    /** String than will be shown in autocomplete. */
    word: PropTypes.string,
    /** Function than is called when autocomplete item is clicked  */
    onClick: PropTypes.func
  }

  render() {
    const { word, onClick } = this.props

    return (
      <Box display="block" width="100%" marginTop="5px" marginBottom="5px">
        <span
          onClick={() => {
            onClick(word)
          }}
        >
          {word}
        </span>
      </Box>
    )
  }
}

export default withTheme(AutocompleteTagInputItem)
