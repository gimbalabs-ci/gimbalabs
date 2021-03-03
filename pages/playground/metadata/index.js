import Link from 'next/link'
import { TitleHeading1 } from '../../../components/Type'

export default function metadataTinker() {
    return (
        <div className="p-12">
            <TitleHeading1>
                Playground
            </TitleHeading1>
            <ul>
                <li className="text-2xl m-12 hover:text-purple-700">
                    <Link href="/playground/metadata/aboutjson">
                        <a className="">What is JSON in the first place?</a>
                    </Link>
                </li>
                <li className="text-2xl m-12 hover:text-purple-700">
                    <Link href="/playground/metadata/postgrest">
                        <a className="">View transaction metadata via PosgREST API</a>
                    </Link>
                </li>
                <li className="text-2xl m-12 hover:text-purple-700">
                    <Link href="/playground/metadata/graphql">
                        <a className="">Take a look at some GraphQL</a>
                    </Link>
                </li>
                <li className="text-2xl m-12 hover:text-purple-700">
                    <Link href="/cardanostarterkits/csk006">
                        <a className="">To learn more, check out Cardano Stater Kit #006</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}