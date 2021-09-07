import Link from 'next/link'
import { TitleHeading1, TitleHeading2, Paragraph } from '../../../components/Type'
import example from '../../../data/example.json'

export function getStaticProps() {
    const data = example

    return {
        props: {
            data 
        }
    }
}

export default function aboutjson({data}) {
    return (
        <div className="p-12">
            <TitleHeading1>
                {data.title}
            </TitleHeading1>
            <TitleHeading2>
                Date: {data.date}
            </TitleHeading2>
            <Paragraph>
                {data.text}
            </Paragraph>
            <Paragraph>
                <Link href="/playground/metadata"><a className="classic">Back</a></Link>
            </Paragraph>
        </div>
    )
}
