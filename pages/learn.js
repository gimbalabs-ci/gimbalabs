import Link from 'next/link'
import { TitleHeading1, TitleHeading2, HighlightText, CallOutText, Paragraph, CardHeading, CardText } from '../components/Type'

function learn() {
    return (
        <div className="md:w-5/6 lg:w-3/4 mx-auto pb-20">
            <TitleHeading1>Gimbalabs: Learn</TitleHeading1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 md:gap-10">
                <div>
                    <TitleHeading2>Cardano Starter Kits</TitleHeading2>
                    <p className="md:pr-20">Cardano Starter Kits (CSKs) are open source, Project Based Learning (PBL) opportunities for people to engage with Cardano in the real world, and to learn through experience what the Cardano platform can do􏰉 CSKs consist of smart contract code, voting apparatus, guided learning materials, and implementation tips. CSKs will support users to learn about Cardano while also producing real-world outcomes, and will vary in complexity, for everyone from beginners to experts. CSKs will not be "grab and go", but are grounded in the understanding that we learn best by doing experiential learning. Anyone who is interested will be able to build upon open source CSKs to start local businesses and to host local events that drive hands-on understanding of Cardano.</p>

                </div>
                <div>
                    <TitleHeading2>Intro to Development Courses</TitleHeading2>
                    <p className="md:pr-20">With our partners at ADOPT Pool and at Proof of Africa, we are piloting introductory development courses for anyone who wants to learn more about how code works and what it's like to interact with the Cardano blockchain. You can check out work in progress on YouTube and on GitHub, and we'll be adding resources soon.</p>
                    
                </div>
                <div>
                    <TitleHeading2>Coding on Chain</TitleHeading2>
                    <p className="md:pr-20"></p>

                </div>
                <div>
                    <TitleHeading2>Educational Marketing Workshops</TitleHeading2>
                    <p className="md:pr-20">A key part of building new products and tools in the blockchain are is being able to help a broad audience understand what you've made and the problems it solves. Our Educational Marketing Workshops help start-ups and existing businesses create plans for connecting with end-users. We currently offer private sessions, so if you're interested, please get in touch. To learn more, here's a short essay.</p>
                    
                </div>
                <div>
                <TitleHeading2>More to Come</TitleHeading2>
                <p className="md:pr-20"></p>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default learn