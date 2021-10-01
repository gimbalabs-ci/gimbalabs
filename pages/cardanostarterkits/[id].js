import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import { TitleHeading1 } from '../../components/Type'
import { getAllCskIds, getCskData } from '../../lib/csk'

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter language={language} children={value} />
  }
}

export async function getStaticProps({ params }) {
    const cskData = await getCskData(params.id)
    return {
      props: {
        cskData
      }
    }
}

export async function getStaticPaths() {
  const paths = getAllCskIds()
  return {
    paths,
    fallback: false
  }
}

export default function cskMd({cskData}) {
    return (
        <>
        <section className="w-full md:w-11/12 mx-auto pb-5">
            <TitleHeading1>CSK {cskData.number}</TitleHeading1>
            <br />
            <Link href='/cardanostarterkits'>Back to CSK List</Link>
            <br />
        </section>
        <div className='cskcard box-border shadow-xl h-auto w-full md:w-3/4 mx-auto mt-4 mb-12 p-4 border-4 bg-purple-200 bg-opacity-50'>
          <ReactMarkdown renderers={renderers} children={cskData.contentReact} />
        </div>
        </>
    )
}