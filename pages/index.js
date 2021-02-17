import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import CoverCard from '../components/CoverCard'
import { CardHeading, CardText, TitleHeading1, HighlightText, CallOutText, Paragraph } from '../components/Type'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Gimbalabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <div className="grid md:grid-cols-2 w-5/6 mx-auto">
            <div className="w-full justify-self-center bg-white bg-opacity-40 md:p-6">
              <TitleHeading1>Welcome to Gimbalabs</TitleHeading1>
              <Paragraph>Cardano is here. Ready to get started?</Paragraph>
              <TitleHeading1>Our Mission</TitleHeading1>
              <Paragraph>Mobilizing everyone in the Cardano community by creating tools and real-world use cases that ignite the public imagination and facilitate adoption.</Paragraph>
              <TitleHeading1>Our Vision</TitleHeading1>
              <Paragraph>A world where as many people as possible are empowered to solve problems using the Cardano platform.</Paragraph>
            </div>
            <div className="flex w-full content-center bg-white bg-opacity-40">
              <Image src={'/keepbees.jpeg'}  width="1000" height="800" objectFit="contain" className="rounded shadow-xl" />
            </div>
          </div>

          <div className="flex w-5/6 justify-center mx-auto bg-purple-700 bg-opacity-70 text-white md:my-6 py-10">
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
                    <CardText>Want to get hands on with what Cardano is all about? We're building tools so you can tinker.</CardText>
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
                    <CardText>Got talent you want to share? Need collaborators to help with an idea? Click here to learn how to get involved.</CardText>
                  </div>
                </CoverCard>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 mx-auto pb-6 w-5/6">
            <Link href="/experiments">
              <a>
                <CoverCard>
                  <CardHeading>Experiments + Data</CardHeading>
                  <CardText>Exerything we do is an experiment. From the web site you're looking at here to our organizational structure. We don't fully know what it means to be a DAO, and we take seriously the work of finding out. Check out our notes on ongoing experiements, and let us know if there's additional transparency you'd like to see.</CardText>
                </CoverCard>
              </a>
            </Link>

            <Link href="/workwithus">
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
