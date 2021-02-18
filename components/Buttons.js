export function SideBarButton({children}) {
    return (
        <div className='text-xs md:text-base lg:w-auto w-full mx-auto px-3 md:py-3 my-1 md:my-3 rounded text-white font-bold items-center justify-center hover:bg-purple-300 hover:text-black cursor-pointer'>{children}</div>
    )
}

export function VideoLinkButton({children}) {
    return (
        <div className='p-3 mx-auto my-3 w-full md:w-4/5 font-bold items-center justify-center bg-purple-100 hover:bg-purple-300 hover:text-black cursor-pointer'>{children}</div>
    )
}