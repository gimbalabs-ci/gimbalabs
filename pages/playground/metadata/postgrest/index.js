import Link from 'next/link'
import { TitleHeading1 } from '../../../../components/Type'

// direct from https://nextjs.org/docs/basic-features/data-fetching

export async function getStaticProps() {
    const res = await fetch(`https://postgrest-api.mainnet.dandelion.link/rpc/get_metadatum`)
    const data = await res.json()

    if (!data) {
        data = []
        return {
            data
        }
    }

    return {
        props: {
            data
        }
    }
}

function metadata({data}) {

    console.log(data)

    return (
        <div className="p-12">
            <TitleHeading1>
                Playground: Metadata
            </TitleHeading1>
            
        </div>
    )
}

export default metadata
