import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import {
  Text,
  Paragraph,
  Heading,
  SubHeading,
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
      {TextSizes.map(size =>
        <Box>
          <Comp size={size}>
            {dummyText}
          </Comp>
        </Box>,
      )}
    </Box>
  )
}

storiesOf('typography', module)
  .add('Text', () =>
    <div>
      {previewTextComponent(Text)}
    </div>,
  )
  .add('Paragraph', () =>
    <div>
      {previewTextComponent(Paragraph)}
    </div>,
  )
  .add('Heading', () =>
    <div>
      {previewTextComponent(Heading)}
    </div>,
  )
  .add('SubHeading', () =>
    <div>
      {previewTextComponent(SubHeading)}
    </div>,
  )
  .add('Code', () =>
    <div>
      {previewTextComponent(Code)}
    </div>,
  )
  .add('Pre', () =>
    <div>
      {previewTextComponent(Pre)}
    </div>,
  )
  .add('Label', () =>
    <div>
      {previewTextComponent(Label)}
    </div>,
  )
  .add('Small', () =>
    <div>
      {previewTextComponent(Small)}
    </div>,
  )
  .add('Strong', () =>
    <div>
      {previewTextComponent(Strong)}
    </div>,
  )
