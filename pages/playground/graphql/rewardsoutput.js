import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphql-api.mainnet.dandelion.link/',
    cache: new InMemoryCache()
});

function RewardAggregated() {
    
    const { loading, error, data } = useQuery(gql`
        {
            rewards_aggregate {
                aggregate {
                    avg {
                        amount
                    }
                    count
                    max {
                        amount
                    }
                    min {
                        amount
                    }
                    sum {
                        amount
                    }
                }
            }
        }
        `
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>ERROR</p>
    return (
        <div>
            <p>{data.rewards_aggregate.aggregate.avg.amount}</p>
            <p>{data.rewards_aggregate.aggregate.count}</p>
            <p>{data.rewards_aggregate.aggregate.max.amount/1000000}</p>
            <p>{data.rewards_aggregate.aggregate.min.amount}</p>
            <p>{data.rewards_aggregate.aggregate.sum.amount/1000000}</p>
        </div>
    )
}   

export default function rewardsOutput(){

    return (
        <ApolloProvider client={client}>
            <div className="w-2/3 mx-auto mt-10">
                <h1>Graph QL Playground</h1>
                <RewardAggregated />
            </div>
        </ApolloProvider>
    )
}
