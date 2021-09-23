import Link from 'next/link'
import { TitleHeading1, Paragraph } from '../../components/Type'
import { getSortedDapisData } from '../../lib/dandelions'

export async function getStaticProps() {
    const allDapisData = getSortedDapisData()
    return {
      props: {
        allDapisData
      }
    }
  }

export default function dandelionmd({ allDapisData }) {
    return (
        <div>
            <section className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-5">
                <TitleHeading1>Dandelion with Markdown</TitleHeading1>
                <Paragraph>By creating a very simple CMS, we have space to experiment with attaching incentives and ownership to tasks here.</Paragraph>
                <br />
                <Link href='/dandelion/apis'>Back to Dandelion APIs</Link>
            </section>
            <section className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-5">
                <ul>
                   {allDapisData.map(({ id, date, title }) => (
                       <li key={id}>
                           <Link href={`/dandelion/apis/${id}`}>
                               <a>
                                   {title} last edited {date}
                               </a>
                           </Link>
                       </li>
                   ))}   
                </ul>    
            </section>           
        </div>
    )
}
