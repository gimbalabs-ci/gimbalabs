import Nav from './Nav'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-polygon bg-cover w-full">
            <Nav />
            <div className='flex-grow min-h-1/2 pt-16 mx-auto w-full'>
                {children}
            </div>
            <Footer />    
        </div>
    )
}

export default Layout

// <img src='/polygon.png' className='fixed min-h-screen w-screen z-0' />