import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import tw from 'twin.macro'
import EarlyAccessModal from '../components/EarlyAccessModal'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Container = tw.div`flex flex-col min-h-screen w-screen text-white`
const Title = tw.div`text-6xl`
const SubTitle = tw.div`text-2xl`
const Button = tw.a`w-1/2 text-xl text-center rounded-md py-2 px-4 bg-gray-500 text-yellow-50 hover:(cursor-pointer shadow-2xl bg-gray-700)`
const DisableButton = tw.a`w-1/2 text-xl text-center rounded-md py-2 px-4 bg-gray-500 text-yellow-50 cursor-not-allowed`
const Section = tw.div`flex flex-col min-h-screen w-screen relative pb-16`
export const SectionHeaderContainer = tw.div`relative z-10 w-full max-w-5xl mx-auto`

export function ThreeDTitle({ text }) {
  return (
    <div tw="font-bold flex justify-center">
      {/* <div tw="relative"> */}
      <span className="hover:[text-shadow:1px_5px_3px_#ffffff77]">{text}</span>
      {/* <span className="absolute top-1 left-2 text-fill-transparent text-stroke-white text-stroke-2">{text}</span> */}
      {/* </div> */}
    </div>
  )
}

export function ThreeDSubtitle({ text }) {
  return (
    <div tw="relative">
      <span className="hover:[text-shadow:1px_2px_2px_#ffffff77]">{text}</span>
      {/* <span className="absolute text-fill-transparent text-stroke-white" style={{ "top": "1px", "left": "1px", "WebkitTextStrokeWidth": "1px" }}>{text}</span> */}
    </div>
  )
}

const Home: NextPage = () => {
  const [showAll, setShowAll] = useState(false)
  const [tabId, setTabId] = useState(0)

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url("/background.png")`,
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Head>
        <title>Web3Shop</title>
        <meta name="description" content="Web3Shop" />
      </Head>
      {/* page container */}

      <Container>
        <div tw="fixed w-full top-0 z-30 backdrop-filter backdrop-blur-lg bg-opacity-100">
          <Header handleClickOpen={handleClickOpen}/>
        </div>
   
        <div tw="flex-grow text-white">
          <Section
            id="home"
            style={{ minHeight: '100vh' }}
            tw="flex flex-col items-center relative"
          >
            <div tw="mt-48 font-bold relative z-10 max-w-[100rem] mx-auto flex flex-col justify-center items-start gap-8 ">
              <div tw="text-2xl tracking-wider">Welcome to the</div>
              <span className="sr-only">Web3Shop</span>
              <Image
                src="/bg-logo.png"
                alt="web3shop-logo"
                layout="intrinsic"
                width={815}
                height={100}
                className="pointer-events-none"
              />
              <div tw="text-3xl tracking-wider font-bold">
                The next generation of Social E-commerce for Web3
              </div>

              <div tw="flex gap-8 text-black mt-20">
                <button tw="px-8 py-2 text-lg bg-3red rounded-full shadow-red hover:shadow-red1" onClick={handleClickOpen}>
                  SHOP IT
                </button>
                <button tw="px-8 py-2 text-lg bg-3blue rounded-full shadow-blue hover:shadow-blue1" onClick={handleClickOpen}>
                  SHOW IT
                </button>
                <button tw="px-8 py-2 text-lg bg-3green rounded-full shadow-green hover:shadow-green1" onClick={handleClickOpen}>
                  WEB3 IT
                </button>
              </div>
            </div>
          </Section>
        </div>

        <EarlyAccessModal open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
        
        <div tw="flex justify-center">
          <Footer />
        </div>
      </Container>
    </div>
  )
}
export default Home
