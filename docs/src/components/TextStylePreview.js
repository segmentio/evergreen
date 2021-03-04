import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from 'evergreen-ui'

export default class TextStylePreview extends React.Component {
  static propTypes = {
    renderComponent: PropTypes.func.isRequired,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    lineHeight: PropTypes.string,
    letterSpacing: PropTypes.string,
    marginTop: PropTypes.number,
    fontFamilies: PropTypes.object,
    fontFamily: PropTypes.string,
    color: PropTypes.string
  }

  getFontFamilyVariable() {
    return (
      Object.keys(this.props.fontFamilies).find(key => {
        return this.props.fontFamilies[key] === this.props.fontFamily
      }) || this.props.fontFamily
    )
  }

  render() {
    const {
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      color,
      marginTop
    } = this.props
    return (
      <Pane display="flex" marginTop={24} paddingTop={24} borderTop>
        <Pane flexShrink={0} flexGrow={1} flex={1} paddingRight={12}>
          {this.props.renderComponent()}
        </Pane>
        <Pane flexShrink={0} flexGrow={1} flex={1} className="Content">
          <p className="paragraph" style={{ marginTop: 0, marginBottom: 0 }}>
            Font family: <strong>{this.getFontFamilyVariable()}</strong>
            <br />
            Font size: <strong>{fontSize}</strong>
            <br />
            Font weight: <strong>{fontWeight}</strong>
            <br />
            Line height: <strong>{lineHeight}</strong>
            <br />
            Letter spacing: <strong>{letterSpacing}</strong>
            <br />
            {color && (
              <React.Fragment>
                color: <strong>{color}</strong>
                <br />
              </React.Fragment>
            )}
            {marginTop && (
              <React.Fragment>
                Default margin top:{' '}
                <strong>
                  {marginTop}
                  px
                </strong>
                <br />
              </React.Fragment>
            )}
          </p>
        </Pane>
      </Pane>
    )
  }
}
