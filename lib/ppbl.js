import fs from 'fs' // from node.js
import path from 'path' // from node.js
import matter from 'gray-matter' // handles metadata
import remark from 'remark'
import remark2react from 'remark-react' // is this line necessary? follow up from 2021-02-25

const ppblDirectory = path.join(process.cwd(), 'data/ppbl-pages')

export function getSortedPpblData() {
  const fileNames = fs.readdirSync(ppblDirectory)
  const ppblData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(ppblDirectory, fileName)
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
  return ppblData.sort((a, b) => {
    if (a.number < b.number) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllPpblData(id) {
    const fullPath = path.join(ppblDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(remark2react)  // is this line necessary? follow up from 2021-02-25
      .process(matterResult.content)
    const contentReact = processedContent.toString()
  
    // Combine the data with the id and contentReact
    return {
      id,
      contentReact,
      ...matterResult.data
    }
  }

  export function getAllPpblIds() {
    const fileNames = fs.readdirSync(ppblDirectory)

    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export async function getPpblData(id) {
    const fullPath = path.join(ppblDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into React string
    const processedContent = await remark()
        .use(remark2react) // is this line necessary? follow up from 2021-02-25
        .process(matterResult.content)
    const contentReact = processedContent.toString()
  
    // Combine the data with the id
    return {
      id,
      contentReact,
      ...matterResult.data
    }
  }