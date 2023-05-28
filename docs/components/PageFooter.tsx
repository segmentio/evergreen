import React, { useCallback } from 'react'
import { openConsentManager } from '@segment/consent-manager'
import { majorScale, Pane, Text, Link } from 'evergreen-ui'

const PageFooter: React.FC = () => {
  const dataCollectionHandler = useCallback((e) => {
    e.preventDefault()
    openConsentManager()
  }, [])

  return (
    <Pane
      is="footer"
      width="100%"
      height={majorScale(8)}
      borderTop="muted"
      paddingX={majorScale(5)}
      paddingY={majorScale(3)}
      marginTop={majorScale(5)}
      display="flex"
      justifyContent="space-between"
    >
      <Pane display="flex" alignItems="center">
        <Pane is="img" width={80} src="/segment-logo.svg" marginRight={majorScale(5)} />
        <Text size={300} color="muted">
          © {new Date().getFullYear()}, Segment.io, Inc.
        </Text>
      </Pane>
      <Pane>
        <Link size={300} color="neutral" href="https://segment.com/jobs/" target="_blank" marginRight={majorScale(2)}>
          We're hiring!
        </Link>
        <Link size={300} color="neutral" href="#" onClick={dataCollectionHandler}>
          Website Data Collection
        </Link>
      </Pane>
    </Pane>
  )
}

export default PageFooter
