import Link from 'next/link'
import dandelion from '../../data/dandelion.json'
import CskCard from '../../components/CskCard'
import { CardHeading, CardSubHeading, CardText } from '../../components/Type'

export async function getStaticProps() {
    const dapis = dandelion

    return {
        props: {
            dapis
        }
    }
}

function dandelionapis({dapis}) {
    return (
        <div>
            <h1>{dapis.title}</h1>
            <h3>{dapis.about}</h3>
            <div className="md:grid md:grid-cols-2 gap-4">
                {dapis.apiInfo.map(({headerTitle, headerSubtitle, headerText, id}) => 
                    <Link href={`/dandelionapis/${id}`}>
                        <a>
                            <CskCard>
                                <CardHeading>{headerTitle}</CardHeading>
                                <CardSubHeading>{headerSubtitle}</CardSubHeading>
                                <CardText>{headerText}</CardText>
                                <br />
                            </CskCard>
                        </a>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default dandelionapis