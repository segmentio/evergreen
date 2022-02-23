import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { FileUploader, FileCard } from '../../file-uploader'

storiesOf('file-uploader', module)
  .add('FileUploader', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FileUploader>FileUploader</FileUploader>
    </Box>
  ))
  .add('FileCard', () => (
    <Box padding={40} maxWidth={600}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FileCard name="Sample-Image.png" type="image/png" sizeInBytes={0.75 * 1024 * 1024} />
      <FileCard
        name="Sample-Image.gif"
        type="image/gif"
        sizeInBytes={3 * 1024 * 1024}
        isInvalid={true}
        validationMessage="This file is not an accepted format. You can upload .png and .pdf file formats."
      />
    </Box>
  ))
