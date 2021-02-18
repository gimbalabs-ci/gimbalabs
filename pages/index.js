import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import CoverCard from '../components/Cards/CoverCard'
import { CardHeading, CardText, TitleHeading1, HighlightText, CallOutText, Paragraph } from '../components/Type'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Gimbalabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <div className="grid md:grid-cols-2 w-5/6 mx-auto">
            <div className="w-full h-full justify-self-center content-center bg-white bg-opacity-40 md:p-6">
              <TitleHeading1>Welcome to Gimbalabs</TitleHeading1>
              <Paragraph>Cardano is here. Ready to get started?</Paragraph>
              
              <Paragraph>Our mission is to mobilize everyone in the Cardano community by creating tools and real-world use cases that ignite the public imagination and facilitate adoption.</Paragraph>
              
              <Paragraph>We envision a world where as many people as possible are empowered to solve problems using the Cardano platform.</Paragraph>

              <Paragraph>Please take a look around our new site</Paragraph>
              <Paragraph>At right: our Discord + email sign up</Paragraph>
            </div>
            <div className="flex w-full content-center bg-white bg-opacity-40">
              <Image src={'/keepbees.jpeg'}  width="1000" height="800" objectFit="contain" className="rounded shadow-xl" />
            </div>
          </div>

          <div className="flex w-2/3 justify-center mx-auto bg-purple-700 bg-opacity-70 text-white md:my-6 py-10">
            <CallOutText>How do you want to start?</CallOutText>
          </div>


          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:my-6 gap-6 w-5/6 mx-auto">
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

          <div className="flex w-2/3 justify-center mx-auto bg-purple-700 bg-opacity-70 text-white md:my-6 py-10">
            <HighlightText>Can't decide where to start? Don't worry - the truth is you'll end up doing a bit of each, no matter where you start!</HighlightText>
            <HighlightText>How can we best highlight the developer's perspective?</HighlightText>
            <HighlightText>Spectrum of users</HighlightText>
          </div>

    </div>
  )
}
