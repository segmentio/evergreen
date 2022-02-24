const getAcceptedFiles = (files, options) => {
  if (options == null) {
    return files
  }

  const fileRejections = getFileRejections(files, options)

  return differenceWith(files, fileRejections, (file, fileRejection) => file === fileRejection.file)
}
