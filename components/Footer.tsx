import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'


const Container = tw.div`flex flex-col mx-auto pt-10 pb-16`
const LogoContainer = tw.div`flex justify-center gap-4`
const socialMedias = [
    // { name: 'twitter', href: "#", icon: <FaTwitter tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'youtube', href: "#", icon: <AiOutlineYoutube tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'discord', href: "#", icon: <FaDiscord tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'instagram', href: "#", icon: <GrInstagram tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'twitter', href: "https://twitter.com/ZOOONFTs", icon: <FaTwitter tw="h-4 w-4 lg:(h-6 w-6)" /> },
    // { name: 'discord', href: "https://discord.gg/zoooclub", icon: <FaDiscord tw="h-4 w-4 lg:(h-6 w-6)" /> },
]

function Footer() {
    return (
        <Container>
            <div tw="max-w-7xl flex flex-col w-screen gap-6 tracking-widest justify-center items-center">
                <Link href="/">
                    <a tw="flex gap-4 justify-center items-center">
                        <Image src="/logo.png" alt="web3shop-logo" layout="intrinsic" width={125} height={23} objectFit="contain" className="pointer-events-none" />
                    </a>
                </Link>
                <div>©2022 Web3Shop with ❤️</div>
            </div>

        </Container>
    )
}

export default Footer