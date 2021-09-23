import Link from 'next/link'
import dandelion from '../../data/dandelion.json'
import CskCard from '../../components/Cards/CskCard'
import DandelionCard from '../../components/Cards/DandelionCard'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardSubHeading, CardText } from '../../components/Type'

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
        <>    
            <section className="w-11/12 xl:w-3/4 mx-auto md:grid md:grid-cols-2 gap-5 lg:gap-8 mt-20">
                {dapis.apiInfo.map(({headerTitle, headerSubtitle, headerText, id}) => 
                    <Link href={`/dandelion/apis/${id}`}>
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
            </section>
        </>
    )
}

export default dandelionapis
