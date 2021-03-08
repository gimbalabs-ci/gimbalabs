import Link from 'next/link'
import { TitleHeading1, Paragraph, TitleHeading3 } from '../../components/Type'
import { getSortedProjectsData } from '../../lib/projects'
import CskCard from '../../components/Cards/CskCard'

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
      props: {
        allProjectsData
      }
    }
  }

export default function projectmd({ allProjectsData }) {
    return (
        <div>
            <section className="w-full md:w-5/6 lg:w-3/4 mx-auto">
                <TitleHeading1>What's Going on at Gimbalabs?</TitleHeading1>
                <Paragraph>Here is a list of current projects at Gimbalabs.</Paragraph>
                <br />
            </section>
            <section className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
            
                {allProjectsData.map(({ id, title, tags }) => (
            
                    <Link href={`/projects/${id}`}><a>
                        <CskCard>
                            <TitleHeading3>{title}</TitleHeading3>
                            <ul className="ml-5">
                                {tags.map((i) => <li key={i} className="inline-flex bg-purple-700 text-white text-xs m-2 p-2">{i}</li>)}
                            </ul>
                        </CskCard>
                    </a></Link>
                    
                ))}   
                  
            </section>           
        </div>
    )
}