import Image from 'next/image'
import TinkerLayout from '../../components/Layouts/TinkerLayout'
import { CardHeading, Paragraph } from '../../components/Type'

export default function liftwallet() {
    return (
        <>
            <TinkerLayout>
                <CardHeading>Coding On Chain</CardHeading>
                <a href="https://www.youtube.com/channel/UChp9R55VgwkjMzGP9qMa66g">Link to YouTube</a>
                <a href="https://www.twitch.tv/codingonchain">Link to Twitch</a>    
            </TinkerLayout>
        </>
        
    )
}