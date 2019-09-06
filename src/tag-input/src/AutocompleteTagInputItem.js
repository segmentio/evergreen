/**
 * @overview Autocomplete Item of tag input component
 */

import React from 'react'
import PropTypes from 'prop-types'
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
      <h1
        onClick={() => {
          onClick(word)
        }}
      >
        {word}
      </h1>
    )
  }
}

export default withTheme(AutocompleteTagInputItem)
