import Nav from "../Nav";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout(props) {
  const { children, navbarBg, footerBg } = props;
  return (
    <div className="relative bg-offWhite flex flex-col w-screen  overflow-x-hidden">
      <Navbar navbarBg={navbarBg} />

      <main className=" relative">{children}</main>
      <Footer footerBg={footerBg} />
    </div>
  );
}

export default Layout;

// <img src='/polygon.png' className='fixed min-h-screen w-screen z-0' />
