import fs from 'fs' // from node.js
import path from 'path' // from node.js
import matter from 'gray-matter' // handles metadata
import remark from 'remark'
import remark2react from 'remark-react' // is this line necessary? follow up from 2021-02-25

const playgroundDirectory = path.join(process.cwd(), 'data/playground-pages')

export function getSortedPlaygroundData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(playgroundDirectory)
  const playgroundData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(playgroundDirectory, fileName)
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
  return playgroundData.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllPlaygroundData(id) {
    const fullPath = path.join(playgroundDirectory, `${id}.md`)
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

  export function getAllPlaygroundIds() {
    const fileNames = fs.readdirSync(playgroundDirectory)

    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export async function getPlaygroundData(id) {
    const fullPath = path.join(playgroundDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the dapi metadata section
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