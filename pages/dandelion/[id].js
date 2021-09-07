import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'



import { TitleHeading1 } from '../../components/Type'
import { getAllDapiIds, getDapiData } from '../../lib/dandelions'


const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter language={language} children={value} />
  }
}

export async function getStaticProps({ params }) {
    const dapiData = await getDapiData(params.id)
    return {
      props: {
        dapiData
      }
    }
}

export async function getStaticPaths() {
  const paths = getAllDapiIds()
  return {
    paths,
    fallback: false
  }
}

export default function dapiMd({dapiData}) {
    return (
        <>
        <section className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-5">
            <TitleHeading1>{dapiData.title}</TitleHeading1>
            <br />
            <Link href='/dandelionapis'>Back</Link> | <Link href='/dandelionapis/dandelionmd'>.md</Link>
            <br />
        </section>
        <div className='dandelioncard box-border shadow-xl h-auto w-full md:w-2/3 lg:w-1/2 mx-auto my-4 p-4 border-4 bg-purple-200 bg-opacity-50'>
          <ReactMarkdown renderers={renderers} children={dapiData.contentReact} />
        </div>
        </>
    )
}