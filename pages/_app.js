import '../styles/main.css'
import '../styles/components.css'
import Layout from '../components/Layouts/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
