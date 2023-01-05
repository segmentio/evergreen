import React, { useCallback, useState } from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { Button } from '../../buttons'
import { MimeType } from '../../constants'
import { FileUploader, FileCard } from '../../file-uploader'
import { majorScale } from '../../scales'
import { TextInput } from '../../text-input'
import { toaster } from '../../toaster'
import { Label, Code, ListItem } from '../../typography'
import getIconFromType from '../src/utils/get-icon-from-type'
import { getAcceptedTypesMessage, getMaxFilesMessage, getFileSizeMessage } from '../src/utils/messages'

const acceptedMimeTypes = [MimeType.gif, MimeType.png, MimeType.jpeg]
const maxSizeInBytes = 5 * 1024 * 1024
const handleFileCardRemove = () => toaster.notify('Removed file!')
const handleAccepted = files => toaster.notify(`Accepted: ${files.map(file => file.name).join(', ')}`)
const handleRejected = fileRejections =>
  toaster.danger(
    `Rejected: ${fileRejections
      .map(fileRejection => `${fileRejection.file.name} (${fileRejection.reason})`)
      .join(', ')}`
  )

const noop = () => {}

const FileUploaderState = props => {
  const [files, setFiles] = useState([])
  const handleReset = useCallback(() => setFiles([]), [])
  const handleRemove = useCallback(file => setFiles(prev => prev.filter(existingFile => existingFile !== file)), [])

  return (
    <Box maxWidth={600} marginBottom={majorScale(2)}>
      <FileUploader onChange={setFiles} onRemove={handleRemove} values={files} {...props} />
      <Button onClick={handleReset}>Reset</Button>
    </Box>
  )
}

storiesOf('file-uploader', module)
  .add('FileUploader', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FileUploaderState description={getMaxFilesMessage(3)} label="Multiple file upload" maxFiles={3} />
      <FileUploaderState description={getMaxFilesMessage(1)} label="Single file upload" maxFiles={1} />
      <FileUploaderState disabled={true} label="Disabled" />
      <FileUploaderState
        acceptedMimeTypes={acceptedMimeTypes}
        description={`${getAcceptedTypesMessage(acceptedMimeTypes)} ${getFileSizeMessage(maxSizeInBytes)}`}
        label="File type and size restrictions"
        maxSizeInBytes={maxSizeInBytes}
        onAccepted={handleAccepted}
        onRejected={handleRejected}
        onChange={noop}
      />
      <FileUploaderState
        label="Custom renderFile"
        renderFile={file => (
          <ListItem icon={getIconFromType(file.type)}>
            <Code marginLeft={majorScale(3)}>{file.name}</Code>
          </ListItem>
        )}
      />
      <FileUploaderState
        label="Custom browseOrDragText"
        browseOrDragText={maxFiles => `Browse or drag ${maxFiles === 1 ? 'a file' : 'files'}`}
      />
      <FileUploaderState
        label="Custom dragMaxFilesMessage"
        dragMaxFilesMessage={maxFiles => `You can only upload ${maxFiles} files at a time.`}
        maxFiles={2}
      />
      <FileUploaderState
        label="Custom validation message"
        validationMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus elit, varius non euismod non, tempor sit amet sem. Praesent quis eros finibus, tempor diam quis, lacinia tortor."
      />

      {/* https://github.com/segmentio/evergreen/issues/1581 */}
      <FileUploaderState label="#1581 With TextInput rendered on same page" />
      <TextInput />
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
        onRemove={handleFileCardRemove}
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
        onRemove={handleFileCardRemove}
        sizeInBytes={0.75 * 1024 * 1024}
        type={MimeType.png}
      />
    </Box>
  ))
