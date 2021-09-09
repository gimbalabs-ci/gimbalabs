import Link from 'next/link'
import Image from 'next/image'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardText } from '../components/Type'
import { DiscordButton } from '../components/Buttons'
import { PopupButton } from '@typeform/embed-react'

function contact() {
    return (
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto md:py-20">
            
            <TitleHeading2>Get in Touch</TitleHeading2>
            <Paragraph>
                The best way to get in touch is by dropping by the Gimbalabs Discord server and saying hi. You can also fill out our Contact Form by clicking the link below.
            </Paragraph>
            <DiscordButton />
            
            <PopupButton id="Wy8sEWLe" style={{ fontSize: 20 }} className="mx-auto w-full bg-purple-500">
                 Contact Form
            </PopupButton>
        </div>
    )
}

export default contact
