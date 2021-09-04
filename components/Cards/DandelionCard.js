function CskCard({ children }) {
    return (       
        <div className='box-border shadow-xl h-auto w-full mx-auto my-4 p-4 bg-yellow-400 hover:bg-yellow-100 bg-opacity-70 transform scale-100 hover:scale-105 z-20'>
            {children}
        </div>    
    )
}

export default CskCard