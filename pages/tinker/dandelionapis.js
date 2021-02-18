import Image from 'next/image'
import TinkerLayout from '../../components/Layouts/TinkerLayout'
import { CardHeading, Paragraph } from '../../components/Type'

export default function dandelionapis() {
    return (
        <>
            <TinkerLayout>
                <CardHeading>Dandelion APIs</CardHeading>
                <Paragraph>What they are</Paragraph>
                <Paragraph>How to use - full docs here</Paragraph> 
                <Paragraph>Role of Gimbalabs Playground</Paragraph>     
            </TinkerLayout>
        </>
        
    )
}