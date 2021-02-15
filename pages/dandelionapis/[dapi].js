import dandelion from '../../data/dandelion.json'

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
        <div>
            <p>{currentAPI.headerTitle}</p>
            <p>{currentAPI.headerSubtitle}</p>
            <p>{currentAPI.headerText}</p>
            <p>{currentAPI.img}</p>
            <p>{currentAPI.gitHubLink}</p>
            <p>{currentAPI.docLink}</p>
            <p>{currentAPI.updated}</p>
        </div>
    )
}

export default eachAPI