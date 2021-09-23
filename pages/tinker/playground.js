import Image from 'next/image'
import Link from 'next/link'
import TinkerLayout from '../../components/Layouts/TinkerLayout'
import { CardHeading, Paragraph } from '../../components/Type'

export default function playground() {
    return (
        <>
            <TinkerLayout>
                <CardHeading>Gimbalabs Playground</CardHeading>
                <Paragraph>
                    Maybe you can relate. We find that there are so many new opportunities in Cardano that it's hard to know where to start.    
                </Paragraph>
                <Paragraph>
                    The <Link href="/playground"><a className="classic">Gimbalabs Playground</a></Link> is where we keep our "toy projects" - little experiments that show how some part of Cardano works.    
                </Paragraph>
                <Paragraph>
                    You'll find proofs of concept for how <Link href="/dandelion/apis"><a className="text-blue-700 hover:text-blue-600">Dandelion endpoints</a></Link> can be used. When we build something in a <Link href="/cardanostarterkits"><a className="text-blue-700 hover:text-blue-400">Cardano Starter Kit</a></Link>, we'll link to it in the playground.    
                </Paragraph>
                <Paragraph>
                Over time, the playground will grow into a library of essential resources for tinkerers and developers. Do you want to contribute? 
                </Paragraph>    
            </TinkerLayout>
        </>
        
    )
}
