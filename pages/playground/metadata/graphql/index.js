import { useState } from 'react'
import Link from 'next/link'
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client';
import { Paragraph, TitleHeading1 } from '../../../../components/Type'
import { Key100Index1, Key20210302Index0 } from '../../../../components/MetadatumResponses/KeyAndIndex'
import Card from '../../../../components/Cards/Card'

const client = new ApolloClient({
    uri: 'https://graphql-api.mainnet.dandelion.link/',
    cache: new InMemoryCache()
});

const GET_METADATA_BY_KEY = gql`
    query MetaTX($metadatakey: String!) {
        transactions(
            where: { metadata: { key: {_eq: $metadatakey} } }
        ) {
            metadata {
                key
                value
            }
        }
    }
`

function MetadataTX({ metadatakey}) {
    
    const { loading, error, data } = useQuery(GET_METADATA_BY_KEY, {
        variables: { metadatakey }
    })

    if (loading) return <Paragraph>Loading...</Paragraph>
    if ( metadatakey === null ) return <Paragraph>Enter a key</Paragraph>
    if (data.transactions.length === 0) return <Paragraph>There is no data at that key.</Paragraph>
    if (error) return <Paragraph>Error</Paragraph>
    // What's cool is that if we know that there's certain data at a certain key, our page can respond accordingly
    // Note that by looking at transactions[1], we can count on the blockchain to deliver us what we expect
    // There's plenty more we could do for security here!
    if (metadatakey === "100") return (
        <Key100Index1>
            {data.transactions[1].metadata[0].value.additionalInformation[0].winners.map((i) => <Card>{i.information.projectName}</Card>)}
        </Key100Index1>
    )
    if (metadatakey === "20210302") return (
        <Key20210302Index0>
           <ul>
                {data.transactions[0].metadata[0].value.marks.map((i) => 
                    <li>
                        <Card>
                            {i.mark} on {i.date}
                        </Card>
                    </li>
                )}
           </ul>
        </Key20210302Index0>
    )
    // For every other key:
    return (
        <div>
            {data.transactions.map((i) => <p>{JSON.stringify(i.metadata)}</p>)}
        </div>
    )
}   

export default function metadatawithgraphql(){

    const [txMeta, setTxMeta] = useState(null)

    return (
        <ApolloProvider client={client}>
            <div className="w-2/3 mx-auto mt-10">
                <TitleHeading1>This page renders metadata via GraphQL</TitleHeading1>
                <Paragraph>
                    You can see the source file for this page <Link href="https://github.com/GimbaLabs/gimbalabs/blob/main/pages/playground/metadata/graphql/index.js"><a className="classic">on GitHub</a></Link>, and we invite you to hack at it. If you make something you like, send a pull request our way, and we'll be happy to add it.
                </Paragraph>
                
                <Paragraph>
                    Enter a key into the field below. If there's data there, you'll see it. Try "100" and "20210302" to see conditionally rendered data.
                </Paragraph>

                <form>
                    <input id="keyNumber" name="keyNumber" type="text" onChange={e => setTxMeta(e.target.value)} className="m-5" />
                </form>
                <MetadataTX metadatakey={txMeta} />
            </div>
        </ApolloProvider>
    )
}
