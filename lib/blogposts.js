import fs from 'fs' // from node.js
import path from 'path' // from node.js
import matter from 'gray-matter' // handles metadata
import { remark } from 'remark'

const blogpostsDirectory = path.join(process.cwd(), 'data/blog-posts')

export function getSortedBlogPostsData() {
  const fileNames = fs.readdirSync(blogpostsDirectory)
  const blogData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(blogpostsDirectory, fileName)
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
  return blogData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllBlogPostData(id) {
    const fullPath = path.join(blogpostsDirectory, `${id}.md`)
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

  export function getAllBlogPostIds() {
    const fileNames = fs.readdirSync(blogpostsDirectory)

    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export function getBlogPostData(id) {
    const fullPath = path.join(blogpostsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the dapi metadata section
    const matterResult = matter(fileContents)

    // // Use remark to convert markdown into React string
    // const processedContent = await remark()
    //     .process(matterResult.content)
    // const contentReact = processedContent.toString()

    // Combine the data with the id
    return {
      id,
    //   contentReact,
      ...matterResult.data
    }
  }