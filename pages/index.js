import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import CoverCard from '../components/Cards/CoverCard'
import { CardHeading, CardText, TitleHeading1, HighlightText, CallOutText, Paragraph } from '../components/Type'
import { DiscordButton, CurrentButton, GitlabButton } from '../components/Buttons'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Gimbalabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <div className="flex grid grid-cols-1 lg:grid-cols-2 mx-auto w-full xl:w-5/6 m-2">
            <div className="flex grid grid-cols-1 w-full content-center md:px-6 mx-2">
              <TitleHeading1>Welcome to Gimbalabs</TitleHeading1>
              <CallOutText>Are you ready to get started?</CallOutText>
              
              <Paragraph>Our mission is to mobilize everyone in the Cardano community by creating tools and real-world use cases that ignite the public imagination and facilitate adoption.</Paragraph>
              
              <Paragraph>We envision a world where as many people as possible are empowered to solve problems using the Cardano protocol.</Paragraph>
            </div>
            
            <div className="flex w-full content-center">
              <Image src={'/keepbees.jpeg'}  width="1000" height="800" objectFit="contain" className="shadow-xl" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 w-5/6 mx-auto mb-10 gap-2">
            <Link href="/about"><a>
              <div className="flex bg-purple-400 hover:bg-opacity-80 text-white font-bold text-xl h-48 justify-center"><p className="self-center">About Gimbalabs</p></div>
            </a></Link>
            <Link href="/dandelionapis"><a>
              <div className="flex bg-purple-400 hover:bg-opacity-80 text-white font-bold text-xl h-48 justify-center"><p className="self-center">Dandelion APIs</p></div>
            </a></Link>
            <Link href="/playground"><a>
              <div className="flex bg-purple-400 hover:bg-opacity-80 text-white font-bold text-xl h-48 justify-center"><p className="self-center">Gimbalabs Playground</p></div>
            </a></Link>
            <div className="bg-purple-400"><CurrentButton /></div>
            <div className="bg-purple-400"><GitlabButton /></div>
            <div className="bg-purple-400"><DiscordButton /></div>
          </div>

          <div className="flex w-5/6 mx-auto bg-purple-100 bg-opacity-70 py-10 md:mt-5 md:pb-15">
            <p className="text-5xl font-title font-bold text-center mx-auto">How do you want to start?</p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-6 md:w-5/6 mx-auto">
            <Link href="/learn">
              <a>
                <CoverCard>
                  <div className=""> 
                      <Image src={'/learn.jpeg'} width="1000" height="500" objectFit="cover" />
                  </div>
                  <div className="">
                    <CardHeading>By Learning</CardHeading>
                  </div>
                  <div className="">
                    <CardText>If you're just getting started with Cardano and blockchain, click here to check out our learning resources.</CardText>
                  </div>
                </CoverCard>
              </a>
            </Link>
            
            <Link href="/tinker">
              <a>
                <CoverCard>
                  <div className=""> 
                      <Image src={'/tinker.jpeg'} width="1000" height="500" objectFit="cover" />
                  </div>
                  <div className="">
                    <CardHeading>By Tinkering</CardHeading>
                  </div>
                  <div className="">
                    <CardText>Are you a developer who wants to learn more about what Cardano can do? Want to get hands on with what Cardano is all about? We're building tools so you can tinker.</CardText>
                  </div>
                </CoverCard>
              </a>
            </Link>

            <Link href="/participate">
              <a>
                <CoverCard>
                  <div className=""> 
                      <Image src={'/collab.jpeg'} width="1000" height="500" objectFit="cover" />
                  </div>
                  <div className="">
                    <CardHeading>By Participating</CardHeading>
                  </div>
                  <div className="">
                    <CardText>Got talent you want to share? Need collaborators to help with an idea? No matter what questions you have and what you can offer, click here to learn how to get involved.</CardText>
                  </div>
                </CoverCard>
              </a>
            </Link>
          </div>


           
          

    </div>
  )
}