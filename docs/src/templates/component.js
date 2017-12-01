import React from 'react'
import getComponent from '../utils/getComponent'

export default stuff => {
  const comp = getComponent('buttons')
  console.log('stuff', stuff)
  return (
    <div>
      <aside>sidebar</aside>
      <main>{React.createElement(comp)}</main>
    </div>
  )
}
