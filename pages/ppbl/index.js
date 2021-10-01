import Link from 'next/link'
import PPBLCard from '../../components/Cards/PPBLCard'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardSubHeading, CardText } from '../../components/Type'
import { getSortedPpblData } from '../../lib/ppbl'

export async function getStaticProps() {
    const allPPBLData = getSortedPpblData()

    return {
        props: {
            allPPBLData
        }
    }
}

export default function ppbl({allPPBLData}) {
    return (
        <div className="p-12">
            <TitleHeading1>
                Plutus Project-Based Learning (PPBL)
            </TitleHeading1>

            <section className="w-full md:w-5/6 lg:w-3/4 mx-auto">
                <ul>
                {allPPBLData.map(({ id, month, tasks, link }) => (
                    <li key={id}>
                        <Link href={`/ppbl/${id}`}><a>
                            <PPBLCard>
                                <div> 
                                    <TitleHeading2>
                                        {month}
                                    </TitleHeading2>
                                    <p className="pb-10">{tasks.join(' + ')}</p>
                                    
                                    <p>Click this card for full details.</p>
                                </div>
                            </PPBLCard>
                        </a></Link>
                    </li>
                ))}   
                </ul>  
            </section>
        </div>
    )
}