import { useEffect, useState, useMemo } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import NFTImage from '../../components/NFTImage';
import GeneralDetails from '../../components/GeneralDetails';
import ItemActivity from '../../components/ItemActivity';
import Purchase from '../../components/Purchase';

export default function Nft() {
  const { provider } = useWeb3();
  const [selectedNft, setSelectedNft] = useState();
  const [listings, setListings] = useState([]);
  const router = useRouter();

  const nftModule: any = useMemo(() => {
    if (!provider) return;
    const sdk = new ThirdwebSDK(provider.getSigner());
    return sdk.getNFTModule('0x9869147ed223883710F57Fa6f72cc3f8449ac874');
  }, [provider]);

  useEffect(() => {
    if (!nftModule) return;
    (async () => {
      const nfts = await nftModule.getAll();
      const selectedNftItem = nfts.find(
        (nft: any) => nft.id === router.query.nftId
      );
      setSelectedNft(selectedNftItem);
    })();
  }, [nftModule, router.query.nftId]);

  const marketPlaceModule: any = useMemo(() => {
    if (!provider) return;
    const sdk = new ThirdwebSDK(provider.getSigner());
    return sdk.getMarketplaceModule(
      '0x1e314bad52F49F19c274ec4A5fe33ee8822e81C4'
    );
  }, [provider]);

  useEffect(() => {
    if (!marketPlaceModule) return;
    (async () => {
      setListings(await marketPlaceModule.getAllListings());
    })();
  }, [marketPlaceModule]);

  return (
    <>
      <Header />
      <div className='flex flex-col items-center container-lg text-[#e5e8eb]'>
        <div className='container p-6'>
          <div className='flex'>
            <div className='flex-1 mr-4'>
              <NFTImage selectedNft={selectedNft} />
            </div>
            <div className='flex-[2] ml-4'>
              <GeneralDetails selectedNft={selectedNft} />
              <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
                marketPlaceModule={marketPlaceModule}
              />
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </>
  );
}
