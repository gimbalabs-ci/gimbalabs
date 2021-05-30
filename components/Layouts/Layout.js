import Nav from "../Nav";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Nav />
      <main className="flex-grow w-full h-full">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

// <img src='/polygon.png' className='fixed min-h-screen w-screen z-0' />
