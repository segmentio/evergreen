import React, { useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as evergreen from 'evergreen-ui'
import CopyToClipboard from 'react-copy-to-clipboard'
import CodeSandboxIcon from './icons/CodeSandboxIcon'
import TooltipIconButton from './TooltipIconButton'
import { getCodeSandboxLink } from '../lib/codesandbox'
import theme from './playground-theme'

interface Props {
  source: string
}

const { Pane, toaster, MaximizeIcon, MinimizeIcon, DocumentIcon, Link, majorScale } = evergreen

const Playground: React.FC<Props> = ({ source }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <Pane display="flex" flexDirection="column" marginBottom={24}>
      <LiveProvider code={source.trim()} scope={{ ...evergreen }}>
        <LivePreview
          // eslint-disable-next-line
          // @ts-ignore -- The types for <LivePreview /> are unfortunately broken
          Component={({ children }) => (
            <Pane
              borderTopLeftRadius={5}
              borderTopRightRadius={5}
              borderBottomLeftRadius={isExpanded ? undefined : 5}
              borderBottomRightRadius={isExpanded ? undefined : 5}
              border="default"
              overflow="hidden"
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
              borderBottomRightRadius: 5,
            }}
            theme={theme}
          />
        ) : null}
      </LiveProvider>
      <Pane paddingY={majorScale(2)} display="flex" alignItems="center">
        <TooltipIconButton
          content={isExpanded ? 'Collapse' : 'Expand'}
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
            content="Copy"
            icon={DocumentIcon}
            marginX={majorScale(2)}
            size="small"
            appearance="minimal"
          />
        </CopyToClipboard>
        <TooltipIconButton
          // eslint-disable-next-line
          // @ts-ignore
          is={Link}
          target="_blank"
          href={getCodeSandboxLink(source)}
          content="Open in CodeSandbox"
          icon={CodeSandboxIcon}
          size="small"
          appearance="minimal"
        />
      </Pane>
    </Pane>
  )
}

export default Playground
