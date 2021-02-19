import Image from 'next/image'
import TinkerLayout from '../../components/Layouts/TinkerLayout'
import { CardHeading, Paragraph } from '../../components/Type'

export default function liftwallet() {
    return (
        <>
            <TinkerLayout>
                <CardHeading>Coding On Chain</CardHeading>
                <Paragraph>
                    <a href="https://www.youtube.com/channel/UChp9R55VgwkjMzGP9qMa66g">View on YouTube</a>                
                </Paragraph>
                <Paragraph>
                    <a href="https://www.twitch.tv/codingonchain">view on Twitch</a>                
                </Paragraph>
                <Paragraph>
                    Live-streaming calendar coming soon!
                </Paragraph>
            </TinkerLayout>
        </>
        
    )
}