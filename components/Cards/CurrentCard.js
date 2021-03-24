function CurrentCard({ children }) {
    return (       
        <div className='w-11/12 h-auto mx-auto my-4 p-2 rounded-md shadow-xl bg-purple-700 hover:bg-purple-100 bg-opacity-90 text-white hover:text-purple-900 transform scale-100 hover:scale-105 z-20'>
            {children}
        </div>    
    )
}

export default CurrentCard