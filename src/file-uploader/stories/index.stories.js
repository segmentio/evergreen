import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { MimeType } from '../../constants'
import { FileUploader, FileCard } from '../../file-uploader'
import { toaster } from '../../toaster'
import { Label, Code } from '../../typography'

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
      <Label>Basic</Label>
      <FileCard name="Sample-Image.png" sizeInBytes={0.75 * 1024 * 1024} type={MimeType.png} />
      <Label>Invalid</Label>
      <FileCard
        isInvalid={true}
        name="Sample-Image.gif"
        sizeInBytes={3 * 1024 * 1024}
        type={MimeType.gif}
        validationMessage="This file is not an accepted format. You can upload .png and .pdf file formats."
      />
      <Label>
        With <Code>src</Code> and <Code>onRemove</Code> props
      </Label>
      <FileCard
        name="favicon.ico"
        onRemove={handleRemove}
        sizeInBytes={128 * 1024}
        src="https://segment.com/favicon.ico"
        type={MimeType.ico}
      />
      <Label>
        With <Code>isLoading</Code> and <Code>description</Code> props
      </Label>
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
