import warning from './warning'

export default (propType, explanation) => {
  return (props, propName, componentName, ...rest) => {
    if (process.env.NODE_ENV !== 'production') {
      warning(
        propName in props,
        `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`
      )
    }

    return propType(props, propName, componentName, ...rest)
  }
}
