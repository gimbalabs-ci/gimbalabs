import Link from 'next/link'
import { TitleHeading1, TitleHeading3 } from '../../components/Type'

function playground() {
    return (
        <div className="p-12">
            <TitleHeading1>
                Plutus Project-Based Learning (PPBL)
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
            <TitleHeading3>
                Metadata Workshop with IOHK on 30 March 2021
            </TitleHeading3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bkPIUBN_o3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default playground