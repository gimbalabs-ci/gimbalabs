import Link from 'next/link'
import { TitleHeading1, TitleHeading2, Paragraph, TitleHeading3 } from '../../components/Type'
import { DiscordButton } from '../../components/Buttons'

export default function calendar() {
    return (
        <div className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-20">
            <TitleHeading1>Participate: Gimbalabs Calendar</TitleHeading1>
            <section>
            <iframe src="https://teamup.com/ks359aocim5rmjch1o?title=Gimbalabs%20Calendar&showLogo=0&showSearch=0&showProfileAndInfo=0&showSidepanel=1&disableSidepanel=1&showTitle=0&showViewSelector=1&showMenu=0&showAgendaHeader=1&showAgendaDetails=0&showYearViewHeader=1" width="100%" height="800px" frameborder="0"></iframe>
            </section>
        </div>
    )
}