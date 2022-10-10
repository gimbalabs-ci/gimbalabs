import fs from 'fs' // from node.js
import path from 'path' // from node.js
import matter from 'gray-matter' // handles metadata
import { remark } from 'remark'

const csksDirectory = path.join(process.cwd(), 'data/csk-pages')

export function getSortedCsksData() {
  // get file names from /data/csk-pages
  const fileNames = fs.readdirSync(csksDirectory)
  const csksData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(csksDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return csksData.sort((a, b) => {
    if (a.number < b.number) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllCskData(id) {
    const fullPath = path.join(csksDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .process(matterResult.content)
    const contentReact = processedContent.toString()

    // Combine the data with the id and contentReact
    return {
      id,
      contentReact,
      ...matterResult.data
    }
  }

  export function getAllCskIds() {
    const fileNames = fs.readdirSync(csksDirectory)

    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export async function getCskData(id) {
    const fullPath = path.join(csksDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the csk metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into React string
    const processedContent = await remark()
        .process(matterResult.content)
    const contentReact = processedContent.toString()

    // Combine the data with the id
    return {
      id,
      contentReact,
      ...matterResult.data
    }
  }