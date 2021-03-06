import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiHeart } from 'react-icons/bi';

export default function NFTCard({ nftItem, title, listings }: any) {
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const listing = listings.find(
      (listing: any) => listing.asset.id === nftItem.id
    );
    if (Boolean(listing)) {
      setIsListed(true);
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
    }
  }, [listings, nftItem]);

  return (
    <div
      className='bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer'
      onClick={() => {
        router.push({
          pathname: `/nfts/${nftItem.id}`,
          query: { isListed: isListed },
        });
      }}
    >
      <div className='h-2/3 w-full overflow-hidden flex justify-center items-center'>
        <img className='w-full object-cover' src={nftItem.image} alt='NFT' />;
      </div>
      <div className='p-3'>
        <div className='flex justify-between text-[#e4e8eb] drop-shadow-xl'>
          <div className='flex-0.6 flex-wrap'>
            <div className='font-semibold text-sm text-[#8a939b]'>{title}</div>
            <div className='font-bold text-lg mt-2'>{nftItem.name}</div>
          </div>
          {isListed && (
            <div className='flex-0.4 text-right'>
              <div className='font-semibold text-sm text-[#8a939b]'>Price</div>
              <div className='flex items-center text-xl font-bold mt-2'>
                <img
                  className='h-5 mr-2'
                  src='https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg'
                  alt='eth'
                />
                {price}
              </div>
            </div>
          )}
        </div>
        <div className='text-[#8a939b] font-bold flex items-center w-full justify-end mt-3'>
          <span className='text-xl mr-2'>
            <BiHeart />
          </span>{' '}
          {nftItem.likes}
        </div>
      </div>
    </div>
  );
}
