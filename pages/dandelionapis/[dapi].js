import Link from 'next/link'
import Image from 'next/image'
import dandelion from '../../data/dandelion.json'
import { TitleHeading1, TitleHeading2, TitleHeading3, HighlightText, CallOutText, Paragraph, CardHeading, CardSubHeading, CardText } from '../../components/Type'

export const getServerSideProps = async pageContext => {
    const apiID = pageContext.query.dapi

    return {
        props : {
            apiID
        }
    }
}

function eachAPI({apiID}) {

    let currentAPI = null

    for(var i = 0; i < dandelion.apiInfo.length; i++){
        if(dandelion.apiInfo[i].id === apiID){
            currentAPI = dandelion.apiInfo[i]
        }
    }

    return (
        <div className="w-full md:w-5/6 lg:w-3/4 mx-auto pb-5">
            <TitleHeading1>{currentAPI.headerTitle}</TitleHeading1>
            <TitleHeading3>{currentAPI.headerSubtitle}</TitleHeading3>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
                <div className="col-span-1 px-5">
                    <Paragraph>{currentAPI.headerText}</Paragraph>
                    <Paragraph><a href={currentAPI.gitHubLink}>View on GitHub</a></Paragraph>
                    <Paragraph><a href={currentAPI.docLink}>Documentation</a></Paragraph>
                    <Paragraph>{currentAPI.updated}</Paragraph>
                </div>
                <div className="col-span-1">
                    <Image src={currentAPI.img} width={600} height={400} />
                </div>
            </div>
        </div>
    )
}

export default eachAPI