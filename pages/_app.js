import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg'>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFT WARRANTY Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              BUY NFT
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500">
              CREATE NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">
              MY NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">
              DASHBOARD
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp