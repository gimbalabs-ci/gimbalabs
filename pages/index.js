import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import CoverCard from '../components/CoverCard'
import { CardHeading, CardText } from '../components/Type'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Gimbalabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <div className="grid md:grid-cols-2">
            <div className="w-full justify-self-center bg-white bg-opacity-40 md:p-6">
              <CardHeading>What is Gimbalabs?</CardHeading>
              <CardText>GimbaLabs is a collaborative platform for people who want to show the world what Cardano can do. We are creating free and open source tools, lessons, and resources that people can learn from.</CardText>
              <CardText>We believe that people learn best by doing things. If you've been looking for an entry point into how you can participate in Cardano, we think you might find it here.</CardText>
              <CardHeading>Our Mission</CardHeading>
              <CardText>Mobilizing everyone in the Cardano community by creating tools and real-world use cases that ignite the public imagination and facilitate adoption.</CardText>
              <CardHeading>Our Vision</CardHeading>
              <CardText>A world where as many people as possible are empowered to solve problems using the Cardano platform.</CardText>
            </div>
            <div className="flex w-full content-center bg-white bg-opacity-40">
              <Image src={'/keepbees.jpeg'}  width="900" height="600" objectFit="contain" className="rounded shadow-xl" />
            </div>
          </div>

    

          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/learn">
              <a>
                <CoverCard>
                  <div className=""> 
                      <Image src={'/learn.jpeg'} width="1000" height="500" objectFit="cover" />
                  </div>
                  <div className="">
                    <CardHeading>Learn</CardHeading>
                  </div>
                  <div className="">
                    <CardText>If you're just getting started with Cardano and blockchain, come learn with us. Check out these resources:</CardText>
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
                    <CardHeading>Tinker</CardHeading>
                  </div>
                  <div className="">
                    <CardText>When you're ready to go deeper into new tools and learn about the tech, come tinker with us.</CardText>
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
                    <CardHeading>Participate</CardHeading>
                  </div>
                  <div className="">
                    <CardText>We hope that you'll contribute your talent to our growing ecosystem. Here is how to get involved.</CardText>
                  </div>
                </CoverCard>
              </a>
            </Link>
          </div>

          <div className="md:grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            <Link href="/experiments">
              <a>
                <CoverCard>
                  <CardHeading>Experiments + Data</CardHeading>
                  <CardText>We don't fully know what it means to be a DAO, and we take seriously the work of finding out. Check out our notes on ongoing experiements, and let us know if there's additional transparency you'd like to see.</CardText>
                </CoverCard>
              </a>
            </Link>

            <Link href="/consulting">
              <a>
                <CoverCard>
                  <CardHeading>How we can help</CardHeading>
                  <CardText>Thinking about adopting the Cardano blockchain or launching your own project? We can help! Get in touch to let us know what technical questions you have, or if you'd like to create educational marketing materials.</CardText>
                </CoverCard>
              </a>
            </Link>
          </div>

    </div>
  )
}
