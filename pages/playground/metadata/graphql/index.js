import { useState } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client';

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

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    // What's cool is that if we know that there's certain data at a certain key, our page can respond accordingly
    // Note that by looking at transactions[1], we can count on the blockchain to deliver us what we expect
    // There's plenty more we could do for security here!
    if (metadatakey === "100") return (
        <div>
            {data.transactions[1].metadata[0].value.additionalInformation[0].winners.map((i) => <p>{i.information.projectName}</p>)}
        </div>
    )
    if (metadatakey === "20210302") return (
       <div>
           <h1>{data.transactions[0].metadata[0].value.about}</h1>
           <ul>
                {data.transactions[0].metadata[0].value.marks.map((i) => 
                    <li>{i.mark} on {i.date}</li>
                )}
           </ul>
       </div>
    )
    if (data.transactions.length === 0) return <p>There is no data at that key.</p>
    // For every other key:
    return (
        <div>
            {data.transactions.map((i) => <p>{JSON.stringify(i.metadata)}</p>)}
        </div>
    )
}   

export default function rewardsOutput(){

    const [txMeta, setTxMeta] = useState(null)

    return (
        <ApolloProvider client={client}>
            <div className="w-2/3 mx-auto mt-10">
                <h1>Graph QL Playground</h1>
                
                <form>
                    <input id="keyNumber" name="keyNumber" type="text" onChange={e => setTxMeta(e.target.value)} className="m-5" />
                </form>
                <MetadataTX metadatakey={txMeta} />
            </div>
        </ApolloProvider>
    )
}
