import React, { useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as evergreen from 'evergreen-ui'
import CopyToClipboard from 'react-copy-to-clipboard'
import CodeSandboxIcon from './icons/CodeSandboxIcon'
import dracula from 'prism-react-renderer/themes/dracula'

interface Props {
  source: string
}

const {
  Pane,
  Button,
  Tooltip,
  IconButton,
  toaster,
  MaximizeIcon,
  MinimizeIcon,
  DocumentIcon,
  majorScale
} = evergreen

const TooltipIconButton: React.FC<{ message: string } & any> = ({
  message,
  ...buttonProps
}) => {
  return (
    <Tooltip content={message}>
      <IconButton {...buttonProps} />
    </Tooltip>
  )
}

const Playground: React.FC<Props> = ({ source }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <Pane display="flex" flexDirection="column" marginBottom={24}>
      <LiveProvider code={source.trim()} scope={{ ...evergreen }}>
        <LivePreview
          Component={({ children }) => (
            <Pane
              borderTopLeftRadius={5}
              borderTopRightRadius={5}
              borderBottomLeftRadius={isExpanded ? undefined : 5}
              borderBottomRightRadius={isExpanded ? undefined : 5}
              border="default"
              padding={majorScale(3)}
              backgroundColor="white"
            >
              {children}
            </Pane>
          )}
        />
        <LiveError />
        {isExpanded ? (
          <LiveEditor
            style={{
              fontSize: 14,
              outline: 'none',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5
            }}
            theme={dracula}
          />
        ) : null}
      </LiveProvider>
      <Pane paddingY={majorScale(2)} display="flex" alignItems="center">
        <TooltipIconButton
          message={isExpanded ? 'Collapse' : 'Expand'}
          icon={isExpanded ? MinimizeIcon : MaximizeIcon}
          onClick={() => setIsExpanded(expanded => !expanded)}
          size="small"
          appearance="minimal"
        />
        <CopyToClipboard
          text={source.trim()}
          onCopy={() => toaster.success('Copied to clipboard!')}
        >
          <TooltipIconButton
            message="Copy"
            icon={DocumentIcon}
            marginX={majorScale(2)}
            size="small"
            appearance="minimal"
          />
        </CopyToClipboard>
        <TooltipIconButton
          message="Open in CodeSandbox"
          icon={CodeSandboxIcon}
          onClick={() => {}}
          size="small"
          appearance="minimal"
        />
      </Pane>
    </Pane>
  )
}

export default Playground
