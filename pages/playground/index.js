import Link from 'next/link'
import { CardHeading } from '../../components/Type'

function playground() {
    return (
        <div className="p-12">
            <CardHeading>
                Playground
            </CardHeading>
            <ul>
                <li className="text-6xl m-12 hover:text-purple-700">
                    <Link href="playground/metadata">
                        <a className="">Metadata</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default playground
