import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Heading } from '../../typography'
import { InlineAlert, Alert } from '..'

storiesOf('alert', module)
  .add('Alert', () => (
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
              title="간단한 일반 메세지"
            />
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="success"
              title="당신은 현재 원본페이지에서 데이터를 전송 중입니다"
            />
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="warning"
              title="모든 변경사항은 프로그램에 영향을 미칠것입니다."
            />
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="danger"
              title="변경사항을 저장할수없습니다."
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
              title="간단한 일반 메시지"
            >
              간단한 일반 메시지를 통해 문자를 보낼수있습니다.
            </Alert>
            <Alert
              appearance={appearance}
              y
              marginBottom={32}
              intent="success"
              title="원본에서 데이터 전송 성공 !"
            >
              현재 원본에서 데이터 전송을 성공했습니다.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="warning"
              title="모든 변경사항은 프로그램에 영향을 미칠것입니다"
            >
              모든 변경사항을 프로그램에 영향을 미칠것입니다.
            </Alert>
            <Alert
              appearance={appearance}
              marginBottom={32}
              intent="danger"
              title="변경사항을 저장할수없습니다."
            >
              현재 변경사항을 저장할수 없습니다
            </Alert>
          </Box>
        ))}
      </Box>
    </div>
  ))
  .add('InlineAlert', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}

      <Box float="left" marginRight={40}>
        <Heading size={600} marginBottom={16}>
          InlineAlert component
        </Heading>
        <InlineAlert intent="success" marginBottom={16}>
          Hooray! You did it. Your Source is now sending data.
        </InlineAlert>
        <InlineAlert intent="warning" marginBottom={16}>
          Changes will affect all Warehouses.
        </InlineAlert>
        <InlineAlert intent="danger" marginBottom={16}>
          We weren’t able to save your changes.
        </InlineAlert>
        <InlineAlert intent="none" marginBottom={16}>
          There are over 200 integrations available.
        </InlineAlert>
      </Box>
    </Box>
  ))
