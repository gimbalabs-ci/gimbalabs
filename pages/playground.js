import Link from 'next/link'
import { TitleHeading1, TitleHeading2 } from '../components/Type'
import Search from '../components/Search'
import { DiscordButton } from '../components/Buttons'

function playground() {
    return (
        <div className="md:w-5/6 lg:w-3/4 mx-auto py-20">
            <TitleHeading2>Gimbalabs Playground</TitleHeading2>
            <p className="">
                Every Tuesday at 1600 UTC we meet to discuss big ideas, meet fellow builders, and to define action steps for delivering on our plans.
            </p>
            <p className="text-xl text-purple-500 my-10">
                <a href="https://miro.com/app/board/o9J_lHtn9BM=/">
                    Here is a link to our public Playground Miro Board
                </a>
            </p>
            <DiscordButton />

        </div>
    )
}

export default playground