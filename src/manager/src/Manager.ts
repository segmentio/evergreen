import React from 'react'

/**
 * This component is a utility component to manage state in stories and examples.
 */
export default class Manager extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      ...props
    }
  }

  _setState = (...args: any[]) => {
    // @ts-expect-error ts-migrate(2556) FIXME: Expected 1-2 arguments, but got 0 or more.
    this.setState(...args)
  }

  render() {
    // @ts-expect-error ts-migrate(2723) FIXME: Cannot invoke an object which is possibly 'null' o... Remove this comment to see the full error message
    return this.props.children({
      setState: this._setState,
      state: this.state
    })
  }
}
