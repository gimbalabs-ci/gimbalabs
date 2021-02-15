function CoverCard({ children }) {
    return (       
        <div className='w-11/12 my-4 mx-auto bg-white bg-opacity-60 hover:bg-opacity-90 shadow-xl rounded-lg'>
            <div className='flex w-full'>
                <div className='pb-3'>
                    {children}
                </div>
            </div>
        </div>    
    )
}

export default CoverCard