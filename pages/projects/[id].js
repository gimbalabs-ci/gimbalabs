import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'



import { TitleHeading1 } from '../../components/Type'
import { getAllProjectIds, getProjectData } from '../../lib/projects'


const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter language={language} children={value} />
  }
}

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id)
    return {
      props: {
        projectData
      }
    }
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export default function projectMd({projectData}) {
    return (
        <>
        <section className="w-full md:w-11/12 mx-auto pb-5">
            <TitleHeading1>{projectData.title}</TitleHeading1>
            <br />
            <Link href='/projects'>Back to Project List</Link>
            <br />
        </section>
        <div className='projectcard box-border shadow-xl h-auto w-full md:w-3/4 mx-auto mt-4 mb-12 p-4 border-4 bg-purple-200 bg-opacity-50'>
          <ReactMarkdown renderers={renderers} children={projectData.contentReact} />
        </div>
        </>
    )
}