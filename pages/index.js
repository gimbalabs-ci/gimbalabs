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
              <CallOutText>People. Learning. Together.</CallOutText>
              
              <Paragraph>Our mission is to mobilize everyone to develop tools and applications through a unique experience of co-creation that facilitates adoption of the Cardano protocol, reveals new possibilities, and ignites the public imagination worldwide.</Paragraph>
              
              <Paragraph>We envision a world where as many people as possible are empowered to solve problems using the Cardano protocol.</Paragraph>
            </div>
            
            <div className="flex w-full content-center">
              <Image src={'/keepbees.jpeg'}  width="1000" height="800" objectFit="contain" className="shadow-xl" />
            </div>
          </div>
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-6 md:w-5/6 mx-auto">
            <Link href="/learn">
              <a>
                <CoverCard>
                  <div className=""> 
                      <Image src={'/learn.jpeg'} width="1000" height="500" objectFit="cover" />
                  </div>
                  <div className="flex bg-purple-400 hover:bg-opacity-80 text-white font-bold text-xl h-auto justify-center"><p className="self-center">Project-Based Learning</p></div>
                </CoverCard>
              </a>
            </Link>
            
            <Link href="/dandelion">
              <a>
                <CoverCard>
                  <div className=""> 
                      <Image src={'/tinker.jpeg'} width="1000" height="500" objectFit="cover" />
                  </div>
                  <div className="flex bg-purple-400 hover:bg-opacity-80 text-white font-bold text-xl h-auto justify-center"><p className="self-center">Dandelion APIs</p></div>

                </CoverCard>
              </a>
            </Link>

            <Link href="/participate">
              <a>
                <CoverCard>
                  <div className=""> 
                      <Image src={'/collab.jpeg'} width="1000" height="500" objectFit="cover" />
                  </div>
                  <div className="flex bg-purple-400 hover:bg-opacity-80 text-white font-bold text-xl h-auto justify-center"><p className="self-center">What We Offer</p></div>
                  
                </CoverCard>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-3 w-5/6 mx-auto mb-10 gap-6">
            <div className="bg-purple-400"><CurrentButton /></div>
            <div className="bg-purple-400"><GitlabButton /></div>
            <div className="bg-purple-400"><DiscordButton /></div>
          </div>

           
          

    </div>
  )
}
