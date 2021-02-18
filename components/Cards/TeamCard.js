export default function TeamCard({children}) {


    return (
        <div className="grid grid-rows-3 grid-cols-3 md:grid-cols-2 h-auto w-11/12 bg-purple-100 mx-auto my-4 p-4 shadow-inner">
            {children}                
         </div>
            

    )
}
