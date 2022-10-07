import { appendFile } from 'node:fs'

export function append(file, content) {
  const item = `${content} ` + '\n'
  appendFile(file, item, (err) => {
    if (err) throw err
    console.log(`${content} was appended to ${file}`)
  })
}
