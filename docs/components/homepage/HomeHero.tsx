import React, { useEffect, useRef } from 'react'

import { Pane, useTheme, majorScale, Heading, Paragraph, Button, minorScale } from 'evergreen-ui'
import Link from 'next/link'

const HomeHero = () => {
  const { colors } = useTheme()
  const ref = useRef(null)

  useEffect(() => {
    import('@lottiefiles/lottie-player')
  }, [])

  return (
    <Pane background={colors.gray50} paddingX={majorScale(5)}>
      <Pane paddingY={majorScale(5)} marginX="auto" maxWidth={majorScale(140)} alignItems="center" display="flex">
        <Pane display="flex" flex={2} flexDirection="column" alignItems="flex-start" justifyContent="center">
          <Heading size={900}>Meet Evergreen,</Heading>
          <Heading size={900} marginTop={minorScale(1)}>
            Segment’s design system
          </Heading>
          <Paragraph size={500} marginTop={majorScale(2)} marginBottom={majorScale(3)}>
            Evergreen is a React UI Framework for building ambitious products on the web. Brought to you by Segment.
          </Paragraph>
          <Link href="/introduction/getting-started">
            <Button appearance="primary">Get Started</Button>
          </Link>
        </Pane>
        <Pane flex={3}>
          <lottie-player
            ref={ref}
            style={{
              width: '100%',
              transform: 'scale(1.4)',
            }}
            src="https://assets3.lottiefiles.com/packages/lf20_dum5dwmu.json"
            autoplay
            loop
            mode="normal"
          />
        </Pane>
      </Pane>
    </Pane>
  )
}

export default HomeHero
