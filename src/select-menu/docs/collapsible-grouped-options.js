import React from 'react'
import { Button } from '../../buttons'
import options from './starwars-options'

const groupedOptions = [
  {
    heading: {
      label: 'User Properties',
      isCollapsible: true
    },
    options
  },
  {
    heading: {
      label: 'Context Properties',
      elemRight: (
        <Button appearance="ghostBlue" height={20} paddingX={4}>
          Learn More
        </Button>
      ),
      isCollapsible: true
    },
    options: options.map(option => {
      return {
        ...option,
        value: `context-${option.value}`
      }
    })
  }
]
export default groupedOptions
