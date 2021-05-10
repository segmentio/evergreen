import fs from 'fs'
import path from 'path'

// For some reason, react-docgen has to be imported synchronously
// eslint-disable-next-line @typescript-eslint/no-var-requires
const docgen = require('react-docgen')

const getComponentDocs = async (stem: string): Promise<any[]> => {
  const componentFiles = fs.readdirSync(stem).filter((name) => {
    const stats = fs.statSync(path.join(stem, name))
    return !stats.isDirectory()
  })

  const props = await Promise.all(
    componentFiles.map(async (name) => {
      const data = await fs.readFileSync(path.join(stem, name)).toString()
      try {
        const propsData = docgen.parse(data)
        return propsData
      } catch (e) {
        console.error('There was an error parsing component documentation', e)
        return []
      }
    })
  )

  return props
}

export default getComponentDocs
