import type { AppProps } from 'next/app'
import Head from 'next/head'
import WalletContextProvider from '../hook/WalletContext'
import '../styles/globals.css'
// import WalletContextProvider from '../hook/WalletContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </div>
  )
}

export default MyApp
