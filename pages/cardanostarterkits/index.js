import Link from 'next/link'
import csk from '../../data/csk.json'
import CskCard from '../../components/Cards/CskCard'
import { CardHeading, CardSubHeading, CardText } from '../../components/Type'

export async function getStaticProps() {
    const starterkits = csk

    return {
        props: {
            starterkits
        }
    }
}

function cardanostarterkits({starterkits}) {
    return (
        
            <>
                <section className="w-3/4 mx-auto content-center h-40 mt-12 pt-6 bg-blue-700">
                    <h1>{starterkits.title}</h1>
                    <h3>{starterkits.about}</h3>
                </section>
                <section className="w-3/4 mx-auto">
                    {starterkits.csks.map(({headerTitle, headerSubtitle, headerText, id}) => 
                        <Link href={`/cardanostarterkits/${id}`}>
                            <a>
                                <CskCard>
                                    <CardHeading>{headerTitle}</CardHeading>
                                    <CardSubHeading>{headerSubtitle}</CardSubHeading>
                                    <CardText>{headerText}</CardText>
                                </CskCard>
                            </a>
                        </Link>
                    )}   
                </section>
            </>
    )
}

export default cardanostarterkits