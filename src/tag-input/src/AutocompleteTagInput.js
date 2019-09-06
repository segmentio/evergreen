/**
 * @overview Autocomplete of tag input component
 */

import React from 'react'
import PropTypes from 'prop-types'
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
      <div>
        {options.map(element => (
          <AutocompleteTagInputItem
            onClick={onClick}
            word={element.word}
            key={element.index}
          />
        ))}
      </div>
    )
  }
}

export default withTheme(AutocompleteTagInput)
