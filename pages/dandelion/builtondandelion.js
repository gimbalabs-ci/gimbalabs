import Link from 'next/link'
import {TitleHeading1, Paragraph} from '../../components/Type'

export default function builtondandelion() {
    return (
        <div>
            <section className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-5">
                <TitleHeading1>Built on Dandelion</TitleHeading1>
                <Paragraph>Here is a running list of projects built on Dandelion. If yours is missing, let us know!</Paragraph>
                <br />
            </section>

            
            
            <section className="w-11/12 xl:w-3/4 mx-auto md:grid md:grid-cols-2 gap-5 lg:gap-8">
                <ul>
                    <li>LIFT Wallet</li>
                    <li><a href="https://cardano-explorer-dandelion-mainnet.netlify.app/en">Cardano Blockchain Explorer mirror from Ikarus</a></li>
                </ul>
            </section>
        </div>
    )
}
