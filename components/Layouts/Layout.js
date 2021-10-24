import Nav from "../Nav";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="relative bg-offWhite font-body flex flex-col  w-screen relative  overflow-x-hidden">
      <Nav />

      <main className=" relative">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;

// <img src='/polygon.png' className='fixed min-h-screen w-screen z-0' />
