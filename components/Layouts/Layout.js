import Nav from "../Nav";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function Layout(props) {
  const { children, navbarBg, footerBg } = props;
  return (
    <div className="relative bg-offWhite flex flex-col w-screen  overflow-x-hidden">
      <Navbar navbarBg={navbarBg} />
      <div className="min-h-[90vh]">
        <main className=" relative">{children}</main>
      </div>
      <Footer footerBg={footerBg} />
    </div>
  );
}

// <img src='/polygon.png' className='fixed min-h-screen w-screen z-0' />
