import Link from 'next/link'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardText } from '../components/Type'

function participate() {
    return (
        <div className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-20">
            <TitleHeading1>Participate</TitleHeading1>
            <TitleHeading3>Ready to get involved?</TitleHeading3>
            <Paragraph>GimbaLabs is a collaborative platform for people who want to show the world what Cardano can do. We are creating free and open source tools, lessons, and resources that people can learn from.</Paragraph>
            <Paragraph>This week we launched the first Gimbalabs Initiatives. These experiments are helping to create models for how Gimbalabs operates. <Link href="/gli20210211.pdf">Here's a document</Link> outlining the first two experiments. The next round launches on March 8. Look for details about how to get involved on Discord, in Weekly Updates, or on our mailing list.</Paragraph>
            <br />
            <a href="https://discord.gg/xS3YmaruJu" className="m-3 text-xl text-purple-500">Join Gimbalabs on Discord</a>
            

            <TitleHeading3>Technical Planning and Educational Marketing</TitleHeading3>
            <Paragraph>Not sure exactly what tools you'll need for your project? Just ask. We're a network of builders who can help you get started.</Paragraph> 
            <Paragraph>When your product is ready, we'll help you create an educational marketing plan to share what you've learned with end users.</Paragraph>
        </div>
    )
}

export default participate