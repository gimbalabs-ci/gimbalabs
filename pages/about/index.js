import { useRouter } from 'next/router'

function about({ children, href }) {
    
    const router = useRouter()
    
    
      return (
        <div className="grid grid-cols-8 grid-rows-4 grid-flow-col h-screen">
            <div className="bg-blue-700 row-span-4">sidebar</div>
            <div className="bg-blue-400 row-span-3 col-span-6 m-12">1</div>
        </div>
    )

    

}

export default about


/* 

            <p>Our about page shares our first principals -- AND is ever evolving - catch up</p>
            <p>split page into background and what's the latest</p>
            <p>First Principles</p>
            <p>Our experiments and data</p>
            <p>Our treasury</p>
            <p>Weekly updates - link and present our videos / most recent + link to list</p>
            <p>Github - a collective, link to everyone: WSM, Dandelion, NothingAlike, etc</p>
            <p>Grab notes from Evernote</p>
            <p>Grab notes from Figma</p>

*/

/*

    

*/