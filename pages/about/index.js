import Link from 'next/link'
import Image from 'next/image'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardText } from '../../components/Type'
import { VideoLinkButton } from '../../components/Buttons'
import CoverCard from '../../components/Cards/CoverCard'
import TeamCards from '../../components/Cards/TeamCard'
import videoupdates from '../../data/videoupdates.json'
import team from '../../data/team.json'
import TeamCard from '../../components/Cards/TeamCard'


export async function getStaticProps() {
    const videoList = videoupdates
    const teamList = team

    return {
        props: {
            videoList,
            teamList 
        }
    }
}

function about({videoList, teamList}) {
    return (
        <div className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-20">
            
                <TitleHeading1>About Gimbalabs</TitleHeading1>
                <Paragraph>GimbaLabs is a collaborative platform for people who want to show the world what Cardano can do. We are creating free and open source tools, lessons, and resources that people can learn from.</Paragraph>

                <Paragraph>We believe that people learn best by doing things. If you've been looking for an entry point into how you can participate in Cardano, we think you might find it here.</Paragraph>

                <TitleHeading2>Weekly Updates</TitleHeading2>
                <Paragraph>
                   We are committed to transparency, but please don't take our word for that. Check out our weekly updates to hear what we're up to, and when there's something more we should share, let us know. 
                </Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto content-center justify-center">
                    <div className="col-span-1 w-11/12 mx-auto">
                        <ul>
                            {videoList.weekly.map(i => <li>
                                <VideoLinkButton>
                                    Number {i.number}: <a href={i.youtubeLink}>{i.date}</a>
                                </VideoLinkButton>
                            </li>)}
                        </ul>
                    </div>
                    <div className="col-span-1 w-full hidden md:contents">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5sNPFW48htI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <TitleHeading2>Principals</TitleHeading2>
                <Paragraph></Paragraph>
                <TitleHeading3>Learn by Doing</TitleHeading3>
                <Paragraph>Education makes the greatest impact when intrinsically motivating tasks are combined with a supportive environment. Workshop Maybe’s starter kits are compelling opportunities for people to try do new things, and we will provide the scaffolding to help learners become self-sufficient. </Paragraph>
                
                <TitleHeading3>Seek Collaboration</TitleHeading3>
                <Paragraph>We recognize new opportunities for citywide and worldwide collaboration. Partnerships take root when contributors have tools for building trust and can share ideas constructively. </Paragraph>
                <Paragraph>There haven’t really been tools like these before. Should we go build something?</Paragraph>

                <TitleHeading3>Lead by Example</TitleHeading3>
                <Paragraph>In order for Cardano to be successful in living up to its first principles, our community must consistently show what open source, decentralized movements look like. This not a static goal that can be achieved, but a moving target. We’ll seek to be held accountable for putting in the work and will celebrate shared success.</Paragraph>

                <TitleHeading3>Stay Flexible</TitleHeading3>
                <Paragraph>We don’t yet know where this work is headed. The principles laid out here are broad. Questions about grassroots adoption and education may lead to brand new technical or political ones. By recognizing good ideas, contributing where we can, and staying open to new questions, each of us is responsible for the growth of Cardano.</Paragraph>

                <TitleHeading3>What would you add?</TitleHeading3>
                <Paragraph>We think that elucidating principles is a great exercise in defining your work. Be in touch, and share the principles that guide you.</Paragraph>
                
                <TitleHeading2>What We're Builiding</TitleHeading2>
                <Paragraph>Cardano APIs as Community Service will serve as an entrypoint for developers by offering open, free interfaces for new adopters to explore ideas and launch proofs of concept for new projects. These public, free services will ease adoption of Cardano by providing infrastructure for initial setup and testing of ideas, therefore encouraging developers to start building by reducing the time invested from days to minutes.</Paragraph>
                <Paragraph>Cardano Starter Kits (CSKs) are open source, Project Based Learning (PBL) opportunities for people to engage with Cardano in the real world, and to learn through experience what the Cardano platform can do􏰉 CSKs consist of smart contract code, voting apparatus, guided learning materials, and implementation tips. CSKs will support users to learn about Cardano while also producing real-world outcomes, and will vary in complexity, for everyone from beginners to experts. CSKs will not be "grab and go", but are grounded in the understanding that we learn best by doing experiential learning. Anyone who is interested will be able to build upon open source CSKs to start local businesses and to host local events that drive hands-on understanding of Cardano.</Paragraph>
                <Paragraph>GimbaLabs is building a platform for sharing APIs and CSKs that allow users to share experiences about what works, what they've learned, and how to improve our open source resources. Community members will also be able to contribute their own APIs and CSKs, supporting our intention to make GimbaLabs a valuable resource for the Cardano commons.</Paragraph>
                <Paragraph><Link href="/fund2.pdf">Our Catalyst Fund 2 Proposal</Link></Paragraph>

                <TitleHeading2>Founding Team</TitleHeading2>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center">
                    {teamList.founders.map(i => 
                        <TeamCard>
                            <div className="row-span-3 mx-auto my-auto">
                                <Image src={i.image} width={150} height={150} />
                            </div>
                            <div className="ml-2 my-auto col-span-2 md:col-span-1 xl:text-xl font-title">
                                {i.name}
                            </div>
                            <div className="my-auto col-span-2 md:col-span-1 text-xs ml-2">
                                {i.bio}
                            </div>
                            <div className="my-auto col-span-2 md:col-span-1 text-xs ml-2">
                                <a href={i.twitter} target="blank" className="mx-5"><Image src="/social/twitter.png" width={25} height={25} /></a>
                                <a href={i.linkedIn} target="blank" className="mx-5"><Image src="/social/linkedin.png" width={25} height={25} /></a>
                            </div>
                        </TeamCard>          
                    )}  
                </div>              
                

                <TitleHeading2>More</TitleHeading2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto md:pb-6 w-11/12 md:w-5/6">
                    <Link href="/experiments">
                    <a>
                        <CoverCard>
                        <CardHeading>Experiments + Data</CardHeading>
                        <CardText>Exerything we do is an experiment. From the web site you're looking at here to our organizational structure. We don't fully know what it means to be a DAO, and we take seriously the work of finding out. Check out our notes on ongoing experiements, and let us know if there's additional transparency you'd like to see.</CardText>
                        </CoverCard>
                    </a>
                    </Link>

                    <Link href="/participate">
                    <a>
                        <CoverCard>
                        <CardHeading>Work with us</CardHeading>
                        <CardText>Thinking about adopting the Cardano blockchain or launching your own project? We can help! Get in touch to let us know what technical questions you have, or if you'd like to create educational marketing materials.</CardText>
                        </CoverCard>
                    </a>
                    </Link>
                </div>

        </div>
    )
}

export default about



/* 

            <p>Our about page shares our first principals -- AND is ever evolving - catch up</p>
            <p>split page into background and what's the latest</p>
            <p>First Principles</p>
            <p>Our experiments and data</p>
            <p>Our treasury</p>
            <p>Weekly updates - link and present our videos / most recent + link to list</p>
            <p>Github - a collective, link to everyone: WSM, Dandelion, NothingAlike, etc</p>
            <p>Grab notes from Evernote</p>
            <p>Grab notes from Figma</p>

*/

/*

    

*/