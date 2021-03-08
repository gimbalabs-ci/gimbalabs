import Link from 'next/link'
import { Paragraph, TitleHeading1, TitleHeading3 } from '../../../components/Type'

export default function metadataTinker() {
    return (
        <div className="p-12">
            <TitleHeading1>
                Playground
            </TitleHeading1>
            <ul>
                <li className="m-12 hover:text-purple-700">
                    <Link href="/playground/metadata/aboutjson">
                        <a className="">What is JSON in the first place?</a>
                    </Link>
                </li>
                <li className="m-12 hover:text-purple-700">
                    <Link href="/playground/metadata/postgrest">
                        <a className="">View transaction metadata via PosgREST API</a>
                    </Link>
                </li>
                <li className="m-12 hover:text-purple-700">
                    <Link href="/playground/metadata/graphql">
                        <a className="">Metadata served up via GraphQL</a>
                    </Link>
                </li>
                <li className="m-12 hover:text-purple-700">
                    <Link href="/cardanostarterkits/csk006">
                        <a className="">To learn more, check out Cardano Starter Kit #006</a>
                    </Link>
                </li>
                <li className="m-12 hover:text-purple-700">
                    <Link href="/cardanostarterkits/csk006">
                        <a className="">To learn more, check out Cardano Starter Kit #006</a>
                    </Link>
                </li>
            </ul>
            <TitleHeading3>
                Additional Contributors
            </TitleHeading3>
            <Paragraph>
                Check out this <a href="https://icaro-capobianco.github.io/cardano-metadata-viewer/" className="classic">Cardano Epoch Listing</a> project from <a href="https://github.com/icaro-capobianco" className="classic">Ícaro Capobianco</a>. This project extends Roberto's <a href="https://github.com/repsistance/cardano-meta-handler" className="classic">Cardano Meta-Handler</a>.
            </Paragraph>
        </div>
    )
}