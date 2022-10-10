import fs from 'fs' // from node.js
import path from 'path' // from node.js
import matter from 'gray-matter' // handles metadata
import { remark } from 'remark'

const projectsDirectory = path.join(process.cwd(), 'data/project-pages')

export function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory)
  const projectsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
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
  return projectsData.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllProjectData(id) {
    const fullPath = path.join(projectsDirectory, `${id}.md`)
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

  export function getAllProjectIds() {
    const fileNames = fs.readdirSync(projectsDirectory)

    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export async function getProjectData(id) {
    const fullPath = path.join(projectsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the dapi metadata section
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