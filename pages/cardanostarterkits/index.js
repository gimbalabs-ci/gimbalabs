import Link from 'next/link'
import CskCard from '../../components/Cards/CskCard'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardSubHeading, CardText } from '../../components/Type'
import { getSortedCsksData } from '../../lib/csk'

export async function getStaticProps() {
    const allCSKData = getSortedCsksData()

    return {
        props: {
            allCSKData
        }
    }
}

function cardanostarterkits({allCSKData}) {
    return (
        
            <>
                <section className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-5">
                    <TitleHeading1>Cardano Starter Kits</TitleHeading1>
                </section>
                <section className="w-full md:w-5/6 lg:w-3/4 mx-auto">
                    <ul>
                    {allCSKData.map(({ id, number, title, date }) => (
                        <li key={id}>
                            <CskCard>
                                <div>
                                    <Link href={`/cardanostarterkits/${id}`}>
                                        <a className="text-lg">
                                            CSK {number}: {title} <br />
                                        (last edited {date})
                                        </a>
                                    </Link>
                                </div>
                            </CskCard>
                        </li>
                    ))}   
                    </ul>  
                </section>
            </>
    )
}

export default cardanostarterkits