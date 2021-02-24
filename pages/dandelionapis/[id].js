import Link from 'next/link'
import { TitleHeading1, Paragraph, TitleHeading2 } from '../../components/Type'
import { getAllDapiIds, getDapiData } from '../../lib/dandelions'
import DandelionLayout from '../../components/Layouts/DandelionLayout'

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
            <TitleHeading2>Id: {dapiData.id} | Updated on: {dapiData.date}</TitleHeading2>
            <Paragraph>text</Paragraph>
            <br />
            <Link href='/dandelionapis/dandelionmd'>Back to markdown experiment</Link>
            <br />
        </section>
        <DandelionLayout>
            <div dangerouslySetInnerHTML={{ __html: dapiData.contentHtml }} />
        </DandelionLayout>
        </>
    )
}