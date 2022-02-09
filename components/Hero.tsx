const style = {
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
};
export default function Hero() {
  return (
    <div className='relative'>
      <div className="before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur">
        <div className='flex h-screen relative justify-center flex-wrap items-center'>
          <div className='w-1/2'>
            <div className='relative text-white text-[46px] font-semibold'>
              Discover, Collect, and Sell Extraordinary NFTs
            </div>
            <div className='text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]'>
              Opensea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className='flex'>
              <button className='relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer'>
                Explore
              </button>
              <button className='relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer'>
                Create
              </button>
            </div>
          </div>
          <div className='rounded-[3rem]'>
            <img
              className='rounded-t-lg'
              src='https://lh3.googleusercontent.com/ThLQ-hNZp-s0xTARAYc8B0a1IfnXUajZIW8SVyJ0fK8cOUxN5Gn4Wtpn5508hZfJ21QaV9tKP38FtarpiQ9e6N76bztmTIZXNixgHA=s550'
              alt='Latest NFT'
            />
            <div className='h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white'>
              <img
                className='h-[2.25rem] rounded-full'
                src='https://storage.googleapis.com/opensea-static/opensea-profile/23.png'
                alt='Profile image'
              />
              <div className='flex flex-col justify-center ml-4'>
                <div className=''>
                  <a
                    className='text-[#1868b7'
                    href='https://opensea.io/assets/0xb9330de75f36f2e4ac379484bc00208fd530cdc7/42'
                  >
                    #42 | The Matrix
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
