import Nav from "../Nav";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="font-body flex flex-col min-h-screen w-screen ">
      <Nav />
      <main className=" flex-grow  mx-auto w-full">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

// <img src='/polygon.png' className='fixed min-h-screen w-screen z-0' />
