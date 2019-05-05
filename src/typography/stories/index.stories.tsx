import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
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

function previewTextComponent(Comp, sizes = TextSizes, props?: any) {
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

storiesOf('typography', module)
  .add('Text', () => <div>{previewTextComponent(Text)}</div>)
  .add('Link', () => (
    <Box padding={40}>
      <Box marginBottom={24}>
        <Link href="#">Default Link</Link>
      </Box>
      <Box marginBottom={24}>
        <Link href="#" color="neutral">
          Neutral Link
        </Link>
      </Box>
      <Box marginBottom={24}>
        <Link href="#" color="green">
          Green Link
        </Link>
      </Box>
    </Box>
  ))
  .add('Paragraph', () => (
    <div>
      {previewTextComponent(Paragraph, TextSizes, { marginTop: 'default' })}
    </div>
  ))
  .add('Heading', () => (
    <div>
      {previewTextComponent(Heading, HeadingSizes, { marginTop: 'default' })}
    </div>
  ))
  .add('Code', () => <div>{previewTextComponent(Code)}</div>)
  .add('Pre', () => <div>{previewTextComponent(Pre)}</div>)
  .add('Label', () => <div>{previewTextComponent(Label)}</div>)
  .add('Small', () => (
    <div>
      <Paragraph>
        Small can only be used inside of a paragraph or other text component{' '}
        <Small>like this</Small>
      </Paragraph>
    </div>
  ))
  .add('Strong', () => <div>{previewTextComponent(Strong)}</div>)
  .add('UnorderedList', () => (
    <Box padding={40}>
      {[300, 400, 500].map(size => (
        <Box key={size}>
          <Heading size={700} marginTop="default">
            Size {size}
          </Heading>
          <Paragraph size={size} marginTop="default">
            A paragraph before a list. You have to manually set the margins on a
            list.
          </Paragraph>
          <OrderedList size={size} marginY={16}>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
          </OrderedList>
          <Paragraph size={size} marginTop="default">
            A paragraph after a list.
          </Paragraph>
        </Box>
      ))}
    </Box>
  ))
  .add('UnorderedList with icons', () => (
    <Box padding={40}>
      {[300, 400, 500].map(size => (
        <Box key={size}>
          <Heading size={700} marginTop="default">
            Size {size}
          </Heading>
          <Paragraph size={size} marginTop="default">
            You can add icons to list items individually.
          </Paragraph>
          <UnorderedList size={size} marginY={16}>
            <ListItem icon="tick-circle" iconColor="success">
              Lorem ipsum dolar set amet
            </ListItem>
            <ListItem icon="tick-circle" iconColor="success">
              Lorem ipsum dolar set amet
            </ListItem>
            <ListItem icon="ban-circle" iconColor="danger">
              Lorem ipsum dolar set amet
            </ListItem>
            <ListItem icon="ban-circle" iconColor="danger">
              Lorem ipsum dolar set amet
            </ListItem>
          </UnorderedList>
          <Paragraph size={size}>
            Or you can set the icon on the list.
          </Paragraph>
          <UnorderedList
            size={size}
            marginY={16}
            icon="tick"
            iconColor="success"
          >
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
          </UnorderedList>
        </Box>
      ))}
    </Box>
  ))
  .add('OrderedList', () => (
    <Box padding={40}>
      {[300, 400, 500].map(size => (
        <Box key={size}>
          <Heading size={700} marginTop="default">
            Size {size}
          </Heading>
          <Paragraph size={size} marginTop="default">
            A paragraph before a list. You have to manually set the margins on a
            list.
          </Paragraph>
          <UnorderedList size={size} marginY={16}>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
            <ListItem>Lorem ipsum dolar set amet</ListItem>
          </UnorderedList>
          <Paragraph size={size} marginTop="default">
            A paragraph after a list.
          </Paragraph>
        </Box>
      ))}
    </Box>
  ))
