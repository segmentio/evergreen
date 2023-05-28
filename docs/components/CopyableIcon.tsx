import * as evergreen from 'evergreen-ui'
import CopyToClipboard from 'react-copy-to-clipboard'
import { css } from 'otion'
import { FunctionComponent, useCallback } from 'react'
import { majorScale, Pane, toaster, Text } from 'evergreen-ui'
import React from 'react'
import { EvergreenExport } from '../types/evergreen-export'

interface CopyableIconProps {
  name: EvergreenExport
}

const CopyableIcon: React.FC<CopyableIconProps> = ({ name }) => {
  const readableName = name.slice(0, name.indexOf('Icon'))

  const handleCopy = useCallback(() => {
    toaster.success('Successfully copied icon name to clipboard!')
  }, [])

  const icon = evergreen[name]

  if (icon == null) {
    return null
  }

  return (
    <CopyToClipboard text={name} onCopy={handleCopy}>
      <Pane
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        cursor="pointer"
        borderRadius={5}
        paddingY={majorScale(3)}
        className={css({
          ':hover': {
            background: '#efefef60',
          },
          ':active': {
            background: '#efefef90',
          },
        })}
      >
        {React.createElement(icon as FunctionComponent<evergreen.IconProps>, {
          size: majorScale(3),
          color: 'default',
          marginBottom: majorScale(3),
        })}
        <Text color="muted" size={300} maxWidth="100%">
          {readableName}
        </Text>
      </Pane>
    </CopyToClipboard>
  )
}

export default CopyableIcon
