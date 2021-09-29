import "../styles/main.css";
import "../styles/components.css";
import Layout from "../components/Layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
