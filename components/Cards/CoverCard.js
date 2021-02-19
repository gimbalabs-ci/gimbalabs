function CoverCard({ children }) {
    return (       
        <div className='my-2 w-full mx-auto bg-purple-300 bg-opacity-60 hover:bg-opacity-100 shadow-xl'>
            <div className='flex w-full'>
                <div className='pb-3 text-justify md:text-left'>
                    {children}
                </div>
            </div>
        </div>    
    )
}

export default CoverCard