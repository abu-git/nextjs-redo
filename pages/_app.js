import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

/*
The original code prior to adding Layout in above

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}*/

export default MyApp
