import Nav from './Nav'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className='min-h-screen flex flex-wrap content-center justify-center bg-gradient-to-r from-purple-300 via-purple-100 to-pink-100 pt-24'>
                {children}
            </div>
            <Footer />    
        </>
    )
}

export default Layout

// <img src='/polygon.png' className='fixed min-h-screen w-screen z-0' />