import { BsFillCartFill } from 'react-icons/bs';

export default function EventItem({ e }: any) {
  return (
    <div className='flex px-4 py-5 font-medium'>
      <div className='flex items-center flex-[2]'>
        <div className='mr-2 text-xl'>
          <BsFillCartFill />
        </div>
        <div className='text-lg font-semibold'>Sale</div>
      </div>
      <div className='flex items-center flex-[2]'>
        <img
          className='h-5 mr-2'
          src='https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg'
          alt='eth'
        />
        <div className='text-lg'>{e.price}</div>
      </div>
      <div className='text-[#2081e2] flex-[3]'>{e.from}</div>
      <div className='text-[#2081e2] flex-[3]'>{e.to}</div>
      <div className='text-[#2081e2] flex-[2]'>{e.date}</div>
    </div>
  );
}
