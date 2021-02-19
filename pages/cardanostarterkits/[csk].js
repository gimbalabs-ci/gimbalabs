import Image from 'next/Image'
import csk from '../../data/csk.json'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardSubHeading, CardText } from '../../components/Type'


export const getServerSideProps = async pageContext => {
    const cskID = pageContext.query.csk

    return {
        props : {
            cskID
        }
    }
}

function eachCSK({cskID}) {

    let currentCSK = null

    for(var i = 0; i < csk.csks.length; i++){
        if(csk.csks[i].id === cskID){
            currentCSK = csk.csks[i]
        }
    }

    return (
        <div className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-5">
            <TitleHeading1>{currentCSK.headerTitle}</TitleHeading1>
            <TitleHeading3>{currentCSK.headerSubtitle}</TitleHeading3>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
                <div className="col-span-1 px-5">
                    <Paragraph>{currentCSK.headerText}</Paragraph>
                    { currentCSK.gitHubLink ? <Paragraph><a href={currentCSK.gitHubLink}>View on GitHub</a></Paragraph> : <></> }
                    { currentCSK.youtubeLink ? <Paragraph><a href={currentCSK.youtubeLink}>View on YouTube</a></Paragraph> : <></> }
                    { currentCSK.localLink ? <Paragraph><a href={currentCSK.localLink}>Documentation</a></Paragraph> : <></> }
                    <Paragraph>{currentCSK.updated}</Paragraph>
                </div>
                <div className="col-span-1">
                    <Image src={currentCSK.img} width={600} height={400} />
                </div>
            </div>
        </div>
    )
}

export default eachCSK
