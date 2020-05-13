import starWarsNames from 'starwars-names'

export default starWarsNames.all.map(name => ({
  label: name,
  value: name
}))

export const optionsWithIcons = starWarsNames.all.map(name => ({
  label: name,
  value: name,
  icon:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/2560px-Bananas_white_background_DS.jpg'
}))
