function CskCard({ children }) {
    return (       
        <div className='box-border rounded-lg ring-4 shadow-xl h-auto w-11/12 m-4 p-4 border-4 bg-blue-200 hover:bg-green-200 transform scale-100 hover:scale-105 hover:-rotate-3 z-20'>
            {children}
        </div>    
    )
}

export default CskCard