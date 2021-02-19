import Link from 'next/link'
import csk from '../../data/csk.json'
import CskCard from '../../components/Cards/CskCard'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardSubHeading, CardText } from '../../components/Type'

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
                <section className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-5">
                    <TitleHeading1>{starterkits.title}</TitleHeading1>
                </section>
                <section className="w-11/12 xl:w-3/4 mx-auto md:grid md:grid-cols-2 gap-5 lg:gap-8">
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