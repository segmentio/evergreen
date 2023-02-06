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
    componentFiles.map((name) => {
      const filename = path.join(stem, name)
      const data = fs.readFileSync(filename).toString()
      try {
        const propsData = docgen.parse(data, undefined, undefined, { filename })
        return propsData
      } catch (error) {
        console.error(`Error parsing component documentation for ${filename}\n`, error)
        return []
      }
    })
  )

  return props
}

export default getComponentDocs
