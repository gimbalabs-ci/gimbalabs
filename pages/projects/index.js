import Link from 'next/link'
import { TitleHeading1, Paragraph, TitleHeading3, TitleHeading2 } from '../../components/Type'
import { getSortedProjectsData } from '../../lib/projects'
import CurrentCard from '../../components/Cards/CurrentCard'
import { TagButton } from '../../components/Buttons'

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
      props: {
        allProjectsData
      }
    }
  }

export default function projectmd({ allProjectsData }) {
    
    const projectList = allProjectsData

    return (
        <div className="w-full md:w-3/4 mx-auto">
            <div className="hidden md:contents">
                <TitleHeading2>Gimbalabs Calendar</TitleHeading2>
                <iframe src="https://teamup.com/ks359aocim5rmjch1o?title=Gimbalabs%20Calendar&showLogo=0&showSearch=0&showProfileAndInfo=0&showSidepanel=1&disableSidepanel=1&showTitle=0&showViewSelector=1&showMenu=0&showAgendaHeader=1&showAgendaDetails=0&showYearViewHeader=1" width="100%" height="800px" frameborder="0"></iframe>
            </div>
           
            <section className="w-full mx-auto">
                <TitleHeading2>
                    Current Projects
                </TitleHeading2>
            </section>

            <section className="w-full pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projectList.map(({ id, title, tags }) => (

                    <Link href={`/projects/${id}`}>
                        <a>
                            <CurrentCard>
                                <Paragraph>{title}</Paragraph>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                    {tags.map((i) => <TagButton>{i}</TagButton>)}
                                </div>
                            </CurrentCard>
                        </a>
                    </Link>

                
                    
                ))}   
                  
            </section>           
        </div>
    )
}