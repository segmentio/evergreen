import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-unresolved
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
    return (
      <Pane display="flex" marginTop={24} paddingTop={24} borderTop>
        <Pane flexShrink={0} flexGrow={1} flex={1} paddingRight={12}>
          {this.props.renderComponent()}
        </Pane>
        <Pane flexShrink={0} flexGrow={1} flex={1} className="Content">
          <p className="paragraph" style={{ marginTop: 0, marginBottom: 0 }}>
            Font family: <strong>{this.getFontFamilyVariable()}</strong>
            <br />
            Font size: <strong>{this.props.fontSize}</strong>
            <br />
            Font weight: <strong>{this.props.fontWeight}</strong>
            <br />
            Line height: <strong>{this.props.lineHeight}</strong>
            <br />
            Letter spacing: <strong>{this.props.letterSpacing}</strong>
            <br />
            {this.props.color && (
              <React.Fragment>
                color: <strong>{this.props.color}</strong>
                <br />
              </React.Fragment>
            )}
            {this.props.marginTop && (
              <React.Fragment>
                Default margin top:{' '}
                <strong>
                  {this.props.marginTop}
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
