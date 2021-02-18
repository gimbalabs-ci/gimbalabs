import Image from 'next/image'
import TinkerLayout from '../../components/Layouts/TinkerLayout'
import { CardHeading, Paragraph } from '../../components/Type'

function tinker() {
    return (
        <>
            <TinkerLayout>
                <CardHeading>Tinkering?</CardHeading>
                <Paragraph>Tinkering is open-ended, exploratory, and doesn't always assume any particular outcome. When children tinker, they are learning deeply: following their curiosity into uncharted places because everything in the world is so new.</Paragraph>
                <Paragraph>At Gimbalabs we believe that all of us have so much to learn about new technology. Not just how it works, but what it means for our relationships, for our communities, for the ways we work and collaborate. We're pretty certain that we don't yet know exactly what the most important use cases for blockchains will be.</Paragraph>
                <Paragraph>That's why we tinker. It gives us a chance to test ideas, combine tools in new ways, to have new conversations, and every once in a while, to have a breakthrough. Along the way, we become more confident in what's possible and how we should focus our efforts. We invite you to explore the resources here and to see where they take you.</Paragraph>
            </TinkerLayout>
        </>
        
    )
}

export default tinker