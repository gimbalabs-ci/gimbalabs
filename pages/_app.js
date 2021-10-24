import "../styles/main.css";
import "../styles/components.css";
import Layout from "../components/Layouts/Layout";
// Youtube Embedd Styles
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
