import { IoMdSnow } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';

export default function NFTImage({ selectedNft }: any) {
  return (
    <>
      <div className='bg-[#303339] p-2 rounded-t-lg border-[#151c22] border'>
        <div className='flex items-center'>
          <IoMdSnow />
          <div className='flex-1 flex items-center justify-end'>
            <AiOutlineHeart />
            2.3k
          </div>
        </div>
        <div>
          <img src={selectedNft?.image} alt='Nft' />
        </div>
      </div>
    </>
  );
}
