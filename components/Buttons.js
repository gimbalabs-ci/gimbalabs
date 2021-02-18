export function SideBarButton({children}) {
    return (
        <div className='text-xs md:text-base lg:w-auto w-full mx-auto px-3 md:py-3 my-1 md:my-3 rounded text-white font-bold items-center justify-center hover:bg-purple-300 hover:text-black cursor-pointer'>{children}</div>
    )
}