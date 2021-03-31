import Link from 'next/link'
import { TitleHeading1, TitleHeading2, Paragraph, TitleHeading3 } from '../../components/Type'
import { CalendarButton, DiscordButton, GitlabButton } from '../../components/Buttons'

export default function participate() {
    return (
        <div className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-20">
            <TitleHeading1>Participate</TitleHeading1>
            <section>
                <TitleHeading2>Ready to get involved?</TitleHeading2>
                <Paragraph>GimbaLabs is a collaborative platform for people who want to show the world what Cardano can do. We are creating free and open source tools, lessons, and resources that people can learn from.</Paragraph>
                <div className="flex flex-col md:flex-row justify-around w-full md:w-2/3 mx-auto">
                    <CalendarButton />
                    <GitlabButton />
                    <DiscordButton />
                </div>
            </section>
            
            
            <section>
                <TitleHeading2>Gimbalabs Initiatives</TitleHeading2>
                <Paragraph>
                    With Gimbalabs Initiatives, we are learning how to build a decentralized, autonomous organization (DAO) by running a series of experiments in collaboration and co-creation. The first two initiatives launched on February 15, and <Link href="/gli20210211.pdf"><a className="classic">you can read our initial description of the experiments here</a></Link>.
                </Paragraph>
                <TitleHeading3>Experiment #1: Short Video Content</TitleHeading3>
                <Paragraph>
                    We get it that so much of the online world runs on short video content. We also know that short videos are not really enough to facilitate deep understanding of complicated ideas. So with this experiment, we're asking: "How can we best leverage short video content to encourage a problem solving mindset?" <a href="https://youtu.be/XGl7YKVnqN0" className="classic">Check out this call to action from Matthew</a>, one of the leaders of this initiative:
                </Paragraph>
                <div className="w-1/2 mx-auto hidden md:contents">
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/XGl7YKVnqN0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <Paragraph>
                    As you can see, in addition to creating real outcomes, these experiments are helping to create models for how Gimbalabs operates. We've been thrilled to see how new leaders are emerging within our community and will continue to post outcomes and opportunities here.
                </Paragraph>
                <TitleHeading3>Experiment #2: Token-based incentive structures</TitleHeading3>
               <Paragraph>
                   <a href="https://pooltool.io/pool/dddce8834df02109524aeb5afa0fd820fc29920eca91a63551ecc26a/epochs" className="classic">GimbalPool</a> is now registered on Cardano Mainnet - this is our first step in rolling out the gimbal token!
               </Paragraph>
               <Paragraph>
                    Already, this experiment generated a lot of great conversations, and we're ready to test some ideas. Token-based incentive schemes should be taken seriously, and we hope that our research and experimentation supports other organizations to get some good ideas. Like Experiment #1, this one has an initial budget of 5000 ADA, which is currently set aside to fund our community with the first version of the "gimbal" token. You can <a href="https://gitlab.com/gimbalabs/initiatives/ex2-tokenomics-research" className="classic">see our latest thinking on GitLab</a>, and we'll be rolling out the first version of Gimbals over the next few weeks.
                </Paragraph>
                <TitleHeading3>Experiement #3: Translating Gimbalabs Content (launching March 8!)</TitleHeading3>
                <Paragraph>
                    The next Gimbalabs Initiative launches on March 8, and our goal is to create systems for translating content so that word of Cardano reaches the widest possible audience. In the first two experiments we were reminded that even in this new, decentralized, autonomous world, it's as important as ever to have clear, actionable goals and that identifying project-leaders early helps. If you'd like to participate, be sure to look us up on Discord - and starting next week, check back here for further updates about all Gimbalabs Initiatives.
                </Paragraph>
            </section>
            
            <section>
                <TitleHeading2>Gimbalabs Playground</TitleHeading2>
                <Paragraph>
                    The <Link href="/playground"><a className="classic">Gimbalabs Playground</a></Link> is a public collection of examples of what developers can do with Cardano. We are currently launching our first "playground development sprint," where developers are coming together to learn how to build with Cardano. For now, that means figuring out how much we can do with metadata and native assets: we hope to take these tools to their limit in order to get a clear understanding of what smart contracts will add. Stay tuned as we post free tools and microservices that emerge from this collaborative work, and if you'd like to join in, be sure to check out Discord to get started.
                </Paragraph>
            </section>


            <TitleHeading2>Technical Planning and Educational Marketing</TitleHeading2>
            <Paragraph>Not sure exactly what tools you'll need for your project? Just ask. We're a network of builders who can help you get started.</Paragraph> 
            <Paragraph>When your product is ready, we'll help you create an educational marketing plan to share what you've learned with end users.</Paragraph>
        </div>
    )
}