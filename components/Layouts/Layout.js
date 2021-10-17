import Nav from "../Nav";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="bg-offWhite font-body flex flex-col min-h-screen w-screen ">
      <Nav />
      <main className="w-full overflow-x-hidden">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;

// <img src='/polygon.png' className='fixed min-h-screen w-screen z-0' />
