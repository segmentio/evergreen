import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Heading } from '../../typography'
import { InlineAlert, Alert } from '..'

storiesOf('사용자', module)
  .add('프로필', () => (
    <div>
      <Box padding={40}>
        {(() => {
          document.body.style.margin = '0'
          document.body.style.height = '100vh'
        })()}
        {['default', 'card'].map(appearance => (
          <Box key={appearance} float="left" marginRight={40}>
            <Heading marginBottom={16}>{appearance}</Heading>
            <Alert
              appearance={appearance}
              marginBottom={32}
              title="A simple general message"
            />
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="success"
              title="Hooray! You did it. Your Source is now sending data."
            />
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="warning"
              title="Changes will affect all Warehouses."
            />
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="danger"
              title="We weren’t able to save your changes."
            />
          </Box>
        ))}
      </Box>
      <Box padding={40}>
        {['default', 'card'].map(appearance => (
          <Box key={appearance} float="left" marginRight={40}>
            <Heading marginBottom={16}>{appearance}</Heading>
            <Alert
              appearance={appearance}
              marginBottom={32}
              title="A simple general message"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="success"
              title="Hooray! You did it. Your Source is now sending data."
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="warning"
              title="Changes will affect all Warehouses."
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="danger"
              title="We weren’t able to save your changes."
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Alert>
          </Box>
        ))}
      </Box>
    </div>
  ))
  .add('내부 경고', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}

      <Box float="left" marginRight={40}>
        <Heading size={600} marginBottom={16}>
          내부 구성요소
        </Heading>
        <InlineAlert intent="success" marginBottom={16}>
          성공! 이제 원본에서 데이터를 전송할수있습니다.
        </InlineAlert>
        <InlineAlert intent="warning" marginBottom={16}>
          변경사항은 모든 저장소에 영향을 끼칠 것 입니다.
        </InlineAlert>
        <InlineAlert intent="danger" marginBottom={16}>
          현재 변경사항을 저장할수 없습니다(err:0012)
        </InlineAlert>
        <InlineAlert intent="none" marginBottom={16}>
          200개이상 데이터 통합이 가능합니다.
        </InlineAlert>
      </Box>
    </Box>
  ))
