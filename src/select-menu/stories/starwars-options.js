import starWarsNames from 'starwars-names'

export default starWarsNames.all.map(name => ({
  label: name,
  value: name
}))

export const optionsWithIcons = starWarsNames.all.map(name => ({
  label: name,
  value: name,
  icon: 'https://cdn.filepicker.io/api/file/nmizXMdSdqKQa9z1JOCC'
}))
