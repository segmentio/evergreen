import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import {
  Text,
  Paragraph,
  Heading,
  SubHeading,
  Link,
  Code,
  Pre,
  Label,
  Small,
  Strong,
  TextStyles,
} from '../src/'

const TextSizes = Object.keys(TextStyles).map(Number)
const dummyText = 'A red flair silhouetted the jagged edge of a wing.'

function previewTextComponent(Comp) {
  return (
    <Box>
      {TextSizes.map(size => (
        <Box>
          <Comp size={size}>{dummyText}</Comp>
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
  .add('Paragraph', () => <div>{previewTextComponent(Paragraph)}</div>)
  .add('Heading', () => <div>{previewTextComponent(Heading)}</div>)
  .add('SubHeading', () => <div>{previewTextComponent(SubHeading)}</div>)
  .add('Code', () => <div>{previewTextComponent(Code)}</div>)
  .add('Pre', () => <div>{previewTextComponent(Pre)}</div>)
  .add('Label', () => <div>{previewTextComponent(Label)}</div>)
  .add('Small', () => <div>{previewTextComponent(Small)}</div>)
  .add('Strong', () => <div>{previewTextComponent(Strong)}</div>)
