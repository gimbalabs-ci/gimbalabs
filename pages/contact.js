import Link from 'next/link'
import Image from 'next/image'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardText } from '../components/Type'
import { DiscordButton } from '../components/Buttons'

function contact() {
    return (
        <div className="w-full md:w-5/6 lg:w-3/4 mx-auto md:py-20">
            
                <TitleHeading2>Get in Touch</TitleHeading2>
                <Paragraph>
                    The best way to get in touch is by dropping by the Gimbalabs Discord server and saying hi.
                </Paragraph>
                <DiscordButton />

                <Paragraph>
                    If you prefer email, feel free to drop us a line here.
                </Paragraph>

                <Paragraph>
                    Or if you'd like to inquire about our commercial services, we've got a form for that.
                </Paragraph>                

        </div>
    )
}

export default contact
