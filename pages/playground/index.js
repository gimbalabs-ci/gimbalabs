import Link from 'next/link'
import { TitleHeading1 } from '../../components/Type'

function playground() {
    return (
        <div className="p-12">
            <TitleHeading1>
                Playground
            </TitleHeading1>
            <ul>
                <li className="text-2xl m-12">
                    <Link href="playground/metadata">
                        <a className="classic">Tinkering with Metadata via Dandelion</a>
                    </Link>
                </li>
                <li className="text-2xl m-12">
                    <Link href="playground/ticketing">
                        <a className="classic">Event ticketing with metadata and native assets</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default playground
