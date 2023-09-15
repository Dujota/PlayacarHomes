import Image from 'next/image';

// margin: 1rem;
//     height: 4rem;
//     align-items: center;
export default function IconDetail({ title, iconSrc, description }) {
  return (
    <div className='detail-icon mx-8 flex h-[6rem] w-[6rem] flex-col items-start justify-start gap-[1rem] sm:mx-[1rem] sm:my-[1rem] sm:h-[4rem] sm:items-center'>
      <div className='relative font-medium'>{title}</div>
      <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-black'>
        <Image width={200} height={200} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src={iconSrc} />
        <div className='relative'>{description}</div>
      </div>
    </div>
  );
}
