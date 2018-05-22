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
} from '../../typography'

const TextSizes = [300, 400, 500]
const HeadingSizes = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const dummyText = 'A red flair silhouetted the jagged edge of a wing.'

function previewTextComponent(Comp, sizes = TextSizes, props) {
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
        <Link href="#" appearance="neutral">
          Neutral Link
        </Link>
      </Box>
      <Box marginBottom={24}>
        <Link href="#" appearance="green">
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
      <Paragraph>
        A paragraph before a list. You have to manually set the margins on a
        list.
      </Paragraph>
      <UnorderedList marginY={16}>
        <ListItem>Lorem ipsum dolar set amet</ListItem>
        <ListItem>Lorem ipsum dolar set amet</ListItem>
        <ListItem>Lorem ipsum dolar set amet</ListItem>
        <ListItem>Lorem ipsum dolar set amet</ListItem>
        <ListItem>Lorem ipsum dolar set amet</ListItem>
      </UnorderedList>
      <Paragraph>A paragraph after a list.</Paragraph>
    </Box>
  ))
  .add('OrderedList', () => (
    <Box padding={40}>
      <Paragraph>
        A paragraph before a list. You have to manually set the margins on a
        list.
      </Paragraph>
      <OrderedList marginY={16}>
        <ListItem>Lorem ipsum dolar set amet</ListItem>
        <ListItem>Lorem ipsum dolar set amet</ListItem>
        <ListItem>Lorem ipsum dolar set amet</ListItem>
        <ListItem>Lorem ipsum dolar set amet</ListItem>
        <ListItem>Lorem ipsum dolar set amet</ListItem>
      </OrderedList>
      <Paragraph>A paragraph after a list.</Paragraph>
    </Box>
  ))
