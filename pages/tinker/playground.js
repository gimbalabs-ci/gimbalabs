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
                    The Gimbalabs Playground is where we keep our "toy projects" - little experiments that show how some part of Cardano works.    
                </Paragraph>
                <Paragraph>
                    Here, you'll find proofs of concept for how <Link href="/dandelionapis"><a className="text-blue-700 hover:text-blue-600">Dandelion endpoints</a></Link> can be used. When we build something in a <Link href="/cardanostarterkits"><a className="text-blue-700 hover:text-blue-400">Cardano Starter Kit</a></Link>, we'll link to it here.    
                </Paragraph>
                <Paragraph>
                    We hope that you'll find these explorations useful! Let us know what works, what new questions you have, and what else you hope to see. We also welcome you to contribute to playground! If you've created a little something you want to share with the world, head over to the GitHub repository for this site and hack away!
                </Paragraph>    
            </TinkerLayout>
        </>
        
    )
}