import starWarsNames from 'starwars-names'

export default starWarsNames.all.map(name => ({
  label: name,
  value: name
}))
