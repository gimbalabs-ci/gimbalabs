import Image from 'next/image'
import TinkerLayout from '../../components/Layouts/TinkerLayout'
import { CardHeading, Paragraph } from '../../components/Type'

function tinker() {
    return (
        <>
            <TinkerLayout>
                <CardHeading>Tinkering?</CardHeading>
                <Paragraph>What do we mean by "Tinkering"?</Paragraph>
                <Paragraph>all the tinkering partners: coding on chain, apis, LIFT, and more and more to tinker with is coming your way!!!!</Paragraph>
                <Paragraph>link to playground. in playground, a list of "toys". first two toys: ada to time; metadata via dandelion</Paragraph>
            </TinkerLayout>
        </>
        
    )
}

export default tinker