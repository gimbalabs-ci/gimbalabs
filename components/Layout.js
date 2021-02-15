import Nav from './Nav'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-polygon bg-cover">
            <Nav />
            <div className='flex-grow py-20'>
                {children}
            </div>
            <Footer />    
        </div>
    )
}

export default Layout

// <img src='/polygon.png' className='fixed min-h-screen w-screen z-0' />