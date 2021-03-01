import Link from 'next/link'
import { TitleHeading1 } from '../../../../components/Type'

// direct from https://nextjs.org/docs/basic-features/data-fetching

export async function getStaticProps() {
    const res = await fetch(`https://postgrest-api.mainnet.dandelion.link/rpc/get_metadatum`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
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
            <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-4 text-2xl pt-6">
                {data.map(x =>
                    <Link href={`/playground/metadata/postgrest/${x.metadatum}`}>
                        <div className="flex h-16 border bg-blue-400 hover:bg-blue-700 hover:text-blue-100 bg-opacity-70 cursor-pointer">
                            <a className="mx-auto my-auto">
                                {x.metadatum}
                            </a>
                        </div>    
                    </Link>
                )}
            </div>
        </div>
    )
}

export default metadata
