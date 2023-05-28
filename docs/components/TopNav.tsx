import React from 'react'
import { Pane, majorScale, Link as EvergreenLink } from 'evergreen-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import GitHubButton from 'react-github-button'
import 'react-github-button/assets/style.css'

const TopNav: React.FC = () => {
  const router = useRouter()
  const { pathname } = router
  const parentPath = pathname.split('/')[1]

  return (
    <Pane
      is="nav"
      width="100%"
      position="sticky"
      top={0}
      backgroundColor="white"
      zIndex={10}
      height={majorScale(8)}
      flexShrink={0}
      display="flex"
      alignItems="center"
      borderBottom="muted"
      paddingX={majorScale(5)}
    >
      <Pane display="flex" alignItems="center" width={236}>
        <Link href="/">
          <Pane is="img" width={100} height={24} src="/evergreen-logo.svg" cursor="pointer" />
        </Link>
      </Pane>
      <Pane flex={1}>
        <Link href="/introduction/getting-started" passHref>
          <EvergreenLink color={parentPath !== 'introduction' ? 'neutral' : undefined} marginRight={majorScale(3)}>
            Introduction
          </EvergreenLink>
        </Link>
        <Link href="/foundations" passHref>
          <EvergreenLink color={parentPath !== 'foundations' ? 'neutral' : undefined} marginRight={majorScale(3)}>
            Foundations
          </EvergreenLink>
        </Link>
        <Link href="/components" passHref>
          <EvergreenLink color={parentPath !== 'components' ? 'neutral' : undefined} marginRight={majorScale(3)}>
            Components
          </EvergreenLink>
        </Link>
        <Link href="/patterns" passHref>
          <EvergreenLink color={parentPath !== 'patterns' ? 'neutral' : undefined} marginRight={majorScale(3)}>
            Patterns
          </EvergreenLink>
        </Link>
        <Link href="/resources" passHref>
          <EvergreenLink color={parentPath !== 'resources' ? 'neutral' : undefined} marginRight={majorScale(3)}>
            Resources
          </EvergreenLink>
        </Link>
      </Pane>
      <Pane display="flex" justifyContent="flex-end" width={236}>
        <GitHubButton type="stargazers" namespace="segmentio" repo="evergreen" />
      </Pane>
    </Pane>
  )
}

export default TopNav
