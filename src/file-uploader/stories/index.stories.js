import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { MimeType } from '../../constants'
import { FileUploader, FileCard } from '../../file-uploader'
import { toaster } from '../../toaster'

const handleRemove = () => toaster.notify('Removed file!')

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
      <FileCard name="Sample-Image.png" sizeInBytes={0.75 * 1024 * 1024} type={MimeType.png} />
      <FileCard
        isInvalid={true}
        name="Sample-Image.gif"
        sizeInBytes={3 * 1024 * 1024}
        type={MimeType.gif}
        validationMessage="This file is not an accepted format. You can upload .png and .pdf file formats."
      />
      <FileCard
        name="favicon.ico"
        onRemove={handleRemove}
        sizeInBytes={128 * 1024}
        src="https://segment.com/favicon.ico"
        type={MimeType.ico}
      />
      <FileCard
        description="Uploading..."
        isLoading={true}
        name="Sample-Image.png"
        onRemove={handleRemove}
        sizeInBytes={0.75 * 1024 * 1024}
        type={MimeType.png}
      />
    </Box>
  ))
