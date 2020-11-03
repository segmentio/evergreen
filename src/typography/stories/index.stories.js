import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { TickCircleIcon, BanCircleIcon, TickIcon } from '../../icons'
import {
  Text,
  Paragraph,
  Heading,
  Link,
  Code,
  Pre,
  Label,
  Small,
  Strong,
  UnorderedList,
  OrderedList,
  ListItem
} from '..'

const TextSizes = [300, 400, 500]
const HeadingSizes = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const dummyText = 'A red flair silhouetted the jagged edge of a wing.'

function previewTextComponent(Comp, sizes = TextSizes, props = {}) {
  return (
    <Box>
      {sizes.map(size => (
        <Box key={size}>
          <Comp size={size} {...props}>
            {size}: {dummyText}
          </Comp>
        </Box>
      ))}
    </Box>
  )
}

storiesOf('타이포그라피', module)
  .add('글자', () => <div>{previewTextComponent(Text)}</div>)
  .add('주소', () => (
    <Box padding={100}>
      <Box marginBottom={34}>
        <Link href="https://www.youtube.com/user/MrFish235">
          John Fish Studying youtuber
        </Link>
      </Box>
      <Box marginBottom={24}>
        <Link href="https://www.naver.com">Naver Link korea No.1 web site</Link>
      </Box>
      <Box marginBottom={24}>
        <Link href="https://www.google.com/?gl=us&hl=en&pws=0&gws_rd=cr">
          Google Link
        </Link>
      </Box>
    </Box>
  ))
  .add('단락', () => (
    <div>
      {previewTextComponent(Paragraph, TextSizes, { marginTop: 'default' })}
    </div>
  ))
  .add('표제', () => (
    <div>
      {previewTextComponent(Heading, HeadingSizes, { marginTop: 'default' })}
    </div>
  ))
  .add('코드', () => <div>{previewTextComponent(Code)}</div>)
  .add('미리', () => <div>{previewTextComponent(Pre)}</div>)
  .add('라벨', () => <div>{previewTextComponent(Label)}</div>)
  .add('작게', () => (
    <div>
      <Paragraph>
        단락이나 기타 텍스트 에서 작은 글자를 사용할수있음{' '}
        <Small>미리보기</Small>
      </Paragraph>
    </div>
  ))
  .add('굵게', () => <div>{previewTextComponent(Strong)}</div>)
  .add('적용되지 않은 목록', () => (
    <Box padding={40}>
      {[300, 400, 500].map(size => (
        <Box key={size}>
          <Heading size={700} marginTop="default">
            크기 {size}
          </Heading>
          <Paragraph size={size} marginTop="default">
            목록 앞에 단락 수동으로 margin을 설정해야합니다.
          </Paragraph>
          <OrderedList size={size} marginY={16}>
            <ListItem>미리보기</ListItem>
            <ListItem>미리보기</ListItem>
            <ListItem>미리보기</ListItem>
            <ListItem>미리보기</ListItem>
            <ListItem>미리보기</ListItem>
          </OrderedList>
          <Paragraph size={size} marginTop="default">
            목록 뒤에 단락.
          </Paragraph>
        </Box>
      ))}
    </Box>
  ))
  .add('정렬되지 않은 아이콘 목록', () => (
    <Box padding={40}>
      {[300, 400, 500].map(size => (
        <Box key={size}>
          <Heading size={700} marginTop="default">
            Size {size}
          </Heading>
          <Paragraph size={size} marginTop="default">
            아이콘을 추가해여 개별적으로 항목을 나열할 수 있다.
          </Paragraph>
          <UnorderedList size={size} marginY={16}>
            <ListItem icon={TickCircleIcon} iconColor="success">
              미리보기
            </ListItem>
            <ListItem icon={TickCircleIcon} iconColor="success">
              미리보기
            </ListItem>
            <ListItem icon={BanCircleIcon} iconColor="danger">
              미리보기
            </ListItem>
            <ListItem icon={BanCircleIcon} iconColor="danger">
              미리보기
            </ListItem>
          </UnorderedList>
          <Paragraph size={size}>
            또는 목록에서 아이콘을 직접 설정할 수 있다.
          </Paragraph>
          <UnorderedList
            size={size}
            marginY={16}
            icon={TickIcon}
            iconColor="success"
          >
            <ListItem>미리보기</ListItem>
            <ListItem>미리보기</ListItem>
            <ListItem>미리보기</ListItem>
            <ListItem>미리보기</ListItem>
          </UnorderedList>
        </Box>
      ))}
    </Box>
  ))
  .add('주문 목록', () => (
    <Box padding={40}>
      {[300, 400, 500].map(size => (
        <Box key={size}>
          <Heading size={700} marginTop="default">
            Size {size}
          </Heading>
          <Paragraph size={size} marginTop="default">
            목록 앞에 있는 단락.마진을 수동으로 설정할경우 리스트를 작성함.
          </Paragraph>
          <UnorderedList size={size} marginY={16}>
            <ListItem>1</ListItem>
            <ListItem>2</ListItem>
            <ListItem>3</ListItem>
            <ListItem>4</ListItem>
            <ListItem>5</ListItem>
          </UnorderedList>
          <Paragraph size={size} marginTop="default" font="bold">
            적용후 리스트
          </Paragraph>
        </Box>
      ))}
    </Box>
  ))
