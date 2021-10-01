import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import { TitleHeading1 } from '../../components/Type'
import { getAllPpblIds, getPpblData } from '../../lib/ppbl'

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter language={language} children={value} />
  }
}

export async function getStaticProps({ params }) {
    const ppblData = await getPpblData(params.id)
    return {
      props: {
        ppblData
      }
    }
}

export async function getStaticPaths() {
  const paths = getAllPpblIds()
  return {
    paths,
    fallback: false
  }
}

export default function ppblMd({ppblData}) {
    return (
        <>
        <section className="w-full md:w-3/4 mx-auto my-5">
            <TitleHeading1>Plutus PBL: {ppblData.month}</TitleHeading1>
            <div className='cskcard box-border shadow-xl h-auto w-full md:w-3/4 mx-auto mt-4 mb-12 p-4 border-4 bg-purple-200 bg-opacity-50'>
                <ReactMarkdown renderers={renderers} children={ppblData.contentReact} />
            </div>
            <br />
            <Link href='/ppbl'>Back to PPBL Home</Link>
            <br />
        </section>


        </>
    )
}