import Link from 'next/link'
import { CardHeading } from '../../components/Type'

function playground() {
    return (
        <div className="p-12">
            <CardHeading>
                Playground
            </CardHeading>
            <ul>
                <li className="text-2xl m-12 hover:text-purple-700">
                    <Link href="playground/metadata">
                        <a className="">Metadata Results via PostgREST</a>
                    </Link>
                </li>
                <li className="text-2xl m-12 hover:text-purple-700">
                    <Link href="playground/graphql/rewardsoutput">
                        <a className="">GraphQL: Rewards Output</a>
                    </Link>
                </li>
                <li className="text-2xl m-12 hover:text-purple-700">
                    <Link href="playground/graphql/">
                        <a className="">Metadata Results via GraphQL</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default playground
