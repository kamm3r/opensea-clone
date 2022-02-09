import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { client } from '../../lib/sanityClient';
import Header from '../../components/Header';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import NFTCard from '../../components/NFTCard';

export default function Collection() {
  const router = useRouter();
  const { provider } = useWeb3();
  const { collectionId }: any = router.query;
  const [collection, setCollections] = useState({});
  const [nfts, setNfts] = useState([]);
  const [listings, setListings] = useState([]);

  const nftModule: any = useMemo(() => {
    if (!provider) return;
    const sdk = new ThirdwebSDK(provider.getSigner());
    return sdk.getNFTModule(collectionId);
  }, [provider]);

  useEffect(() => {
    if (!nftModule) return;
    (async () => {
      const nfts: any = await nftModule.getAll();
      setNfts(nfts);
    })();
  }, [nftModule]);

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

  const fetchCollectionData = async (sanityClient: any = client) => {
    const query = `*[_type == "marketItems" && contractAddress == "${collectionId}"]{
        "imageUrl": profileImage.asset -> url,
         "bannerImageUrl": bannerImage.asset -> url,
         volumeTraded,
         createdBy,
         contractAddress,
         "creator": createdBy -> userName,
         title,
         floorPrice,
         "allowOwners": owners[]->,
         description
       }`;

    const collectionData = await sanityClient.fetch(query);

    await setCollections(collectionData[0]);
  };

  useEffect(() => {
    fetchCollectionData();
  }, [collectionId]);

  return (
    <div className='overflow-hidden'>
      <Header />
      <div className='h-[20vh] w-screen overflow-hidden flex justify-center items-center'>
        <img
          className='w-full object-cover'
          src={
            //@ts-ignore
            collection?.bannerImageUrl
              ? //@ts-ignore
                collection.bannerImageUrl
              : 'https://via.placeholder.com/200'
          }
          alt='Banner'
        />
      </div>
      <div className='w-screen px-4'>
        <div className='w-full flex justify-center text-white'>
          <img
            className='w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]'
            src={
              //@ts-ignore
              collection?.imageUrl
                ? //@ts-ignore
                  collection.imageUrl
                : 'https://via.placeholder.com/200'
            }
            alt='Profile image'
          />
        </div>
        <div className='w-full flex justify-end text-white'>
          <div className='flex text-3xl mb-[-2rem]'>
            <div className='w-44'>
              <div className='flex container justify-between text-[1.4rem] border-2 rounded-lg px-2'>
                <div className='my-2'>
                  <CgWebsite />
                </div>
                <div className='border-r-2' />
                <div className='my-2'>
                  <AiOutlineInstagram />
                </div>
                <div className='border-r-2' />
                <div className='my-2'>
                  <AiOutlineTwitter />
                </div>
                <div className='border-r-2' />
                <div className='my-2'>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center text-white'>
          {/* @ts-ignore */}
          <div className='text-5xl font-bold mb-4'>{collection?.title}</div>
        </div>
        <div className='w-full flex justify-center text-white'>
          <div className='text-lg mb-4'>
            Created By {/* @ts-ignore */}
            <span className='text-[#2081e2]'>{collection?.creator}</span>
          </div>
        </div>
        <div className='w-full flex justify-center text-white'>
          <div className='w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4'>
            <div className='w-1/4'>
              <div className='text-3xl font-bold w-full flex items-center justify-center'>
                {nfts.length}
              </div>
              <div className='text-lg w-full text-center mt-1'>items</div>
            </div>
            <div className='w-1/4'>
              <div className='text-3xl font-bold w-full flex items-center justify-center'>
                {/* @ts-ignore */}
                {collection?.allowOwners ? collection.allowOwners.length : ''}
              </div>
              <div className='text-lg w-full text-center mt-1'>owners</div>
            </div>
            <div className='w-1/4'>
              <div className='text-3xl font-bold w-full flex items-center justify-center'>
                <img
                  className='h-6 mr-2'
                  src='https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg'
                  alt=' eth'
                />
                {/* @ts-ignore */}
                {collection?.floorPrice}
              </div>
              <div className='text-lg w-full text-center mt-1'>floor price</div>
            </div>
            <div className='w-1/4'>
              <div className='text-3xl font-bold w-full flex items-center justify-center'>
                <img
                  className='h-6 mr-2'
                  src='https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg'
                  alt=' eth'
                />
                {/* @ts-ignore */}
                {collection?.volumeTraded}.5k
              </div>
              <div className='text-lg w-full text-center mt-1'>
                volume traded
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center text-white'>
          <div className='text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4'>
            {/* @ts-ignore */}
            {collection?.description}
          </div>
        </div>
        <div className='flex flex-wrap'>
          {nfts.map((nftItem: any, id: number) => (
            <NFTCard
              key={id}
              nftItem={nftItem}
              // @ts-ignore
              title={collection?.title}
              listings={listings}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
