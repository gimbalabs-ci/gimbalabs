import Link from 'next/link'
import dandelion from '../../data/dandelion.json'
import CskCard from '../../components/Cards/CskCard'
import DandelionCard from '../../components/Cards/DandelionCard'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardSubHeading, CardText } from '../../components/Type'

export async function getStaticProps() {
    const dapis = dandelion

    return {
        props: {
            dapis
        }
    }
}

function dandelionapis({dapis}) {
    return (
        <>
            <section className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-5">
                <TitleHeading1>{dapis.title}</TitleHeading1>
                <Paragraph>{dapis.about}</Paragraph>
                <br />
                <section className="w-11/12 xl:w-3/4 mx-auto md:grid md:grid-cols-3 gap-5 lg:gap-8">
                    <DandelionCard><Link href='/dandelion/apis'>Show me the Dandelion APIs</Link></DandelionCard>
                    <DandelionCard><Link href='/dandelion/builtondandelion'>Show me what has built with Dandelion</Link></DandelionCard>
                    <DandelionCard><a href="https://gitlab.com/gimbalabs/dandelion/kustomize-dandelion">Show me how to deploy my own Dandelion</a></DandelionCard>
                </section>
            </section>
        </>
    )
}

export default dandelionapis