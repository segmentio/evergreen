import React from 'react'
import PropTypes from 'prop-types'

const TYPES = {
  OBJECT: 'Object',
  STRING: 'String',
  ARRAY: 'Array',
  arrayOf: type => `${TYPES.ARRAY} of ${type}s`,
  objectOf: type => `${TYPES.OBJECT} of ${type}s`
}

const attributes = [
  {
    name: 'avatarColors',
    required: true,
    type: TYPES.arrayOf(TYPES.STRING),
    description: () => (
      <span>
        Array of colors that correleate to the keys in the <code>fills</code>{' '}
        attribute. These colors will color the <code>Avatar</code> component.
      </span>
    )
  },
  {
    name: 'badgeColors',
    required: true,
    type: TYPES.arrayOf(TYPES.STRING),
    description: () => (
      <span>
        Array of colors that correleate to the keys in the <code>fills</code>{' '}
        attribute. These colors will color the <code>Badge</code> component.
      </span>
    )
  },
  {
    name: 'fills',
    required: true,
    type: TYPES.objectOf(TYPES.OBJECT),
    description: () => (
      <div>
        Object that looks like the following:{' '}
        <code>
          {`{\n
                    solid: {\n
                        colorName: {\n
                            color: 'some-color',\n
                            backgroundColor: 'some-color'\n
                        }\n
                    },\n
                    subtle: {\n
                        colorName: {\n
                            color: 'some-color',\n
                            backgroundColor: 'some-color'\n
                        }\n
                    }\n
                }`}
        </code>{' '}
        You are allowed to change the <code>colorName</code> keys to match your
        color choices.
      </div>
    )
  },
  {
    name: 'spinnerColor',
    required: true,
    type: TYPES.STRING,
    description: () => (
      <span>
        Color code for the <code>Spinner</code> component.
      </span>
    )
  }
]
/*
OverlayBackgroundColor,
getBadgeClassName,
getButtonClassName,
getLinkClassName,
getCheckboxClassName,
getRadioClassName,
getTagInputClassName,
getTextInputClassName,
getTextareaClassName,
getTextDropdownButtonClassName,
getTabClassName,
getTableCellClassName,
getTooltipProps,
getRowClassName,
getMenuItemClassName,
getSelectClassName,
getSegmentedControlRadioClassName,
getSwitchClassName,
getAlertProps,
getCodeProps,
getAvatarProps,
getBadgeProps,
getAvatarInitialsFontSize
*/
const Attribute = ({ name, required, type, description }) => (
  <div className="PropTypeWrapper">
    <div className="PropTypeHeading">
      <code style={{ padding: 0, marginRight: 5 }}>
        <span className="PropTypeHeading-name" style={{ margin: 0 }}>
          {name}
        </span>
      </code>
      <span className="PropTypeHeading-propType">{type}</span>

      {required ? (
        <span className="PropTypeHeading-required">required</span>
      ) : null}
    </div>
    <div className="PropTypeDescription">{description()}</div>
  </div>
)

Attribute.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.func.isRequired
}

export default () => (
  <div className="Content">
    <h2 className="h2">
      <code className="code">Theme Object</code> Attributes
    </h2>

    {attributes.map(attribute => (
      <Attribute key={attribute.name} {...attribute} />
    ))}
  </div>
)
