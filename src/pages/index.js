import Head from 'next/head'
import Header from '~/components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Multi Step Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  )
}
