import warning from './warning'

export default (propType: any, explanation: any) => {
  return (props: any, propName: any, componentName: any, ...rest: any[]) => {
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
    if (process.env.NODE_ENV !== 'production') {
      warning(propName in props, `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`)
    }

    return propType(props, propName, componentName, ...rest)
  };
}
