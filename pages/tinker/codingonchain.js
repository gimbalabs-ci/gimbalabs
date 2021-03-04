import Image from 'next/image'
import TinkerLayout from '../../components/Layouts/TinkerLayout'
import { CardHeading, Paragraph } from '../../components/Type'

export default function liftwallet() {
    return (
        <>
            <TinkerLayout>
                <CardHeading>Coding On Chain</CardHeading>
                <Paragraph>
                    We know you're excited to build on Plutus and Marlowe - so are we! With that in mind, we'd like to tell you a secret: there's a lot you can already build on Cardano right now. With Coding on Chain, we go live and tinker. Each week we start with some sort of "what if...?" or "how could we...?" scenario and then get to hacking. It's a blast.
                </Paragraph>
                <Paragraph>
                    Coding on Chain goes <a href="https://www.twitch.tv/codingonchain" className="classic">live on Twitch</a> every Thursday at 4pm GMT / 11am EST.                
                </Paragraph>
                <Paragraph>
                    You can also catch up with the archive <a href="https://www.youtube.com/channel/UChp9R55VgwkjMzGP9qMa66g" className="classic">on YouTube</a>                
                </Paragraph>
            </TinkerLayout>
        </>
        
    )
}