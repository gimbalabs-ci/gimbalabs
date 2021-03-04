import Link from 'next/link'
import TinkerLayout from '../../components/Layouts/TinkerLayout'
import { CardHeading, Paragraph } from '../../components/Type'

export default function dandelionapis() {
    return (
        <>
            <TinkerLayout>
                <CardHeading>Dandelion: Cardano APIs as a Community Service</CardHeading>
                <Paragraph>Do you want to build the next PoolTool, a light wallet or any other dApp but can't spend resources and time on setting everything up just to make a PoC (Proof of Concept)? No worries, start by exploring our free APIs and think about hosting/scaling later, we might help with that also in the future by offering some paid plans!</Paragraph>
                <Paragraph>
Do you think your idea can help on growing Cardano's ecosystem? Then don't forget to participate on Project Catalyst by submiting your idea on <a href="https://cardano.ideascale.com/a/index" className="classic">IdeaScale</a>, get feedback, iterate on it and who knows, maybe, get DeCentra-funded!</Paragraph>
                <Paragraph>Check out the full set of <Link href="/dandelionapis"><a className="classic">Dandelion APIs</a></Link> and let us know if there's something we should add to the list.</Paragraph>
                <Paragraph>You can also take a look at the <Link href="/playground"><a className="classic">Playground</a></Link>, where you'll see Dandelion in action - we hope to inspire you to have even bigger ideas!</Paragraph> 
            </TinkerLayout>
        </>
        
    )
}