import React from 'react'
import { useRouter } from 'next/router'
import { Pane, Button, Heading, Link, majorScale, Tablist, Tab, Paragraph } from 'evergreen-ui'

interface TabProps {
  label: string
  to: string
}

interface Props {
  title: string
  description?: string
  githubLink?: string
  tabs?: TabProps[]
}

const PageHeader: React.FC<Props> = ({ description, githubLink, tabs, title }) => {
  const router = useRouter()
  return (
    <Pane
      display="flex"
      width="100%"
      justifyContent="space-between"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Pane display="flex" width="100%" justifyContent="space-between">
        <Pane>
          <Heading size={900}>{title}</Heading>
          {description && <Paragraph marginTop={majorScale(2)}>{description}</Paragraph>}
        </Pane>
        <Pane>
          {githubLink && (
            <Button is={Link} href={githubLink} appearance="default" target="_blank">
              Open in GitHub
            </Button>
          )}
        </Pane>
      </Pane>
      {tabs && (
        <Tablist width="100%" borderBottom="1px solid #efefef" marginTop={majorScale(5)} paddingTop={majorScale(1)}>
          {tabs.map(({ label, to }, i) => (
            <Tab appearance="primary" isSelected={router.asPath === to} key={i} onSelect={() => router.push(to)}>
              {label}
            </Tab>
          ))}
        </Tablist>
      )}
    </Pane>
  )
}

export default PageHeader
