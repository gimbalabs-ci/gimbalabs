import Link from 'next/link'
import { TitleHeading1 } from '../../components/Type'

function playground() {
    return (
        <div className="p-12">
            <TitleHeading1>
                Playground
            </TitleHeading1>
            <ul>
                <li className="text-2xl m-12 hover:text-purple-700">
                    <Link href="playground/metadata">
                        <a className="">Tinkering with Metadata via Dandelion</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default playground
