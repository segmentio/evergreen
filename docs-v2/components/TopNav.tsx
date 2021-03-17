import React from 'react'
import { Pane, majorScale, Link as EvergreenLink } from 'evergreen-ui'
import Link from 'next/Link'
import { useRouter } from 'next/router'
// eslint-disable-next-line import/no-unassigned-import
import GitHubButton from 'react-github-button'

import 'react-github-button/assets/style.css'

interface Props {}

const TopNav: React.FC<Props> = () => {
  const router = useRouter()
  const { pathname } = router
  const parentPath = pathname.split('/')[1]

  return (
    <Pane
      is="nav"
      width="100%"
      height={majorScale(8)}
      display="flex"
      alignItems="center"
      borderBottom="muted"
      paddingX={majorScale(5)}
    >
      <Pane display="flex" alignItems="center" flex={1}>
        <Pane
          is="img"
          width={100}
          height={24}
          src="/evergreen-logo.svg"
          marginRight={majorScale(2)}
        />
      </Pane>
      <Pane flex={5}>
        <Link href="/get-started" passHref>
          <EvergreenLink
            color={parentPath !== 'get-started' ? 'neutral' : undefined}
            marginRight={majorScale(2)}
          >
            Get Started
          </EvergreenLink>
        </Link>
        <Link href="/foundations" passHref>
          <EvergreenLink
            color={parentPath !== 'foundations' ? 'neutral' : undefined}
            marginRight={majorScale(2)}
          >
            Foundations
          </EvergreenLink>
        </Link>
        <Link href="/components" passHref>
          <EvergreenLink
            color={parentPath !== 'components' ? 'neutral' : undefined}
            marginRight={majorScale(2)}
          >
            Components
          </EvergreenLink>
        </Link>
        <Link href="/patterns" passHref>
          <EvergreenLink
            color={parentPath !== 'patterns' ? 'neutral' : undefined}
            marginRight={majorScale(2)}
          >
            Patterns
          </EvergreenLink>
        </Link>
        <Link href="/resources" passHref>
          <EvergreenLink
            color={parentPath !== 'resources' ? 'neutral' : undefined}
            marginRight={majorScale(2)}
          >
            Resources
          </EvergreenLink>
        </Link>
      </Pane>
      <Pane display="flex" justifyContent="flex-end" flex={1}>
        <GitHubButton
          type="stargazers"
          namespace="segmentio"
          repo="evergreen"
        />
      </Pane>
    </Pane>
  )
}

export default TopNav
