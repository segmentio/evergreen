import options from './starwars-options'

const groupedOptions = [
  {
    heading: 'User Properties',
    options
  },
  {
    heading: 'Context Properties',
    options: options.map(option => {
      return {
        ...option,
        value: `context-${option.value}`
      }
    })
  }
]

export default groupedOptions
