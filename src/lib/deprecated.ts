import warning from './warning'

export default (propType: any, explanation: any) => {
  return (props: any, propName: any, componentName: any, ...rest: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      warning(propName in props, `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`)
    }

    return propType(props, propName, componentName, ...rest)
  }
}
