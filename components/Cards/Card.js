function Card({ children }) {
    return (       
        <div className='rounded-lg shadow-xl h-auto w-2/3 m-4 p-4 bg-blue-200 hover:bg-blue-300 transform scale-100 hover:scale-105 hover:-rotate-1 z-20'>
            {children}
        </div>    
    )
}

export default Card