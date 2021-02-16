import { CardHeading, Paragraph } from '../../../components/Type'

export const getServerSideProps = async pageContext => {
    const id = pageContext.query.metadatum
    const res = await fetch(`https://postgrest-api.mainnet.dandelion.link/rpc/get_metadata?metadatum=${id}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data, id
        }
    }

}


function metadatum({data, id}) {

    const num = data.length-1

    return (
        <div className="p-12">
            <CardHeading>
                Metadata Key #{id}
            </CardHeading>
            <Paragraph>There are {data.length} transactions with key #{id} on the Cardano mainnet.</Paragraph>
            <Paragraph>The most recent one looks like this:</Paragraph>
            <div className="font-mono mx-12 p-4 border-2 border-indigo-700">
                <p>{JSON.stringify(data[num])}</p>
            </div>
            <Paragraph>Want to learn more? Check out these links:</Paragraph>
        </div>
    )
}

export default metadatum
