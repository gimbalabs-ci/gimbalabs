import Link from 'next/link'
import csk from '../../data/csk.json'
import CskCard from '../../components/CskCard'
import CardHeading from '../../components/type/CardHeading'
import CardSubHeading from '../../components/type/CardSubHeading'
import CardText from '../../components/type/CardText'

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
        <div>
            <h1>{starterkits.title}</h1>
            <h3>{starterkits.about}</h3>
            <div className="md:grid md:grid-cols-2 gap-4">
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
            </div>
        </div>
    )
}

export default cardanostarterkits