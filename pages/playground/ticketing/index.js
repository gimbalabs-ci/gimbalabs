import Link from 'next/link'
import { TitleHeading1, Paragraph } from '../../../components/Type'

export default function ticketing() {
    return (
        <div className="p-12">
            <TitleHeading1>
                Playground
            </TitleHeading1>
            <Paragraph>
                We just launched our first development sprint, and will be posting what we create soon.
            </Paragraph>
            <Paragraph>
                If you're interested in joining, we invite you to get involved.
            </Paragraph>
        </div>
    )
}