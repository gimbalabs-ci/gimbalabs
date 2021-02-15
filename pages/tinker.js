import Image from 'next/image'
import { CardHeading, Paragraph } from '../components/Type'

function tinker() {
    return (
    
        <div className="bg-blue-100 h-auto w-3/4">
            <CardHeading>What do we mean by "Tinkering"?</CardHeading>
            <Paragraph>We provide entry points for developers who want to understand technical details, as well as a playground to help anyone who is curious get a feel for what Cardano will be able to do. For example - our calculator that helps you think about the IMPLICATIONs of staking...</Paragraph>
            <Paragraph>all the tinkering partners: coding on chain, apis, LIFT, and more and more to tinker with is coming your way!!!!</Paragraph>
            <Paragraph>link to playground. in playground, a list of "toys". first two toys: ada to time; metadata via dandelion</Paragraph>
        </div>
        
    )
}

export default tinker