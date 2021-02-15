import csk from '../../data/csk.json'

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
        <div>
            <p>{currentCSK.headerTitle}</p>
            <p>{currentCSK.headerSubtitle}</p>
            <p>{currentCSK.headerText}</p>
            <p>{currentCSK.img}</p>
            <p>{currentCSK.gitHubLink}</p>
            <p>{currentCSK.localLink}</p>
            <p>{currentCSK.updated}</p>
        </div>
    )
}

export default eachCSK
