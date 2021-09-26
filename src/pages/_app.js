import Head from 'next/head'
import Header from '~/components/Header'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Multi Step Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default App
