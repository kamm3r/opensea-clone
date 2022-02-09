import { AiFillHeart } from 'react-icons/ai';
import { MdRefresh } from 'react-icons/md';
import { RiShareBoxLine } from 'react-icons/ri';
import { FiMoreVertical } from 'react-icons/fi';
import { GiShare } from 'react-icons/gi';

export default function GeneralDetails({ selectedNft }: any) {
  return (
    <div className='flex'>
      <div className='h-36 flex flex-col flex-1 justify-between mb-6'>
        <div className='text-[#2081e2]'>Bootleg Ape Yacht Club</div>
        <div className='text-3xl font-extrabold'>{selectedNft?.name}</div>
        <div className='flex'>
          <div className='text-[#8a939b] mr-4'>
            Owned by <span className='text-[#2081e2]'>e88vault</span>
          </div>
          <div className='flex items-center text-[#8a939b]'>
            <AiFillHeart className='mr-1' />
            2.3k favorites
          </div>
        </div>
      </div>
      <div className='w-44'>
        <div className='flex container justify-between text-[1.4rem] border-2 rounded-lg'>
          <div className='my-2 ml-2'>
            <MdRefresh />
          </div>
          <div className='border-r-2' />
          <div className='my-2'>
            <RiShareBoxLine />
          </div>
          <div className='border-r-2' />
          <div className='my-2'>
            <GiShare />
          </div>
          <div className='border-r-2' />
          <div className='my-2 mr-2'>
            <FiMoreVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
