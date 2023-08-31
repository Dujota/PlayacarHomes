import Image from 'next/image';

// TODO: verify this works

export default function Ribbon({ text }: { text: string }) {
  return (
    <div className='absolute left-[0rem] top-[12.63rem] flex w-[7.75rem] flex-col items-start justify-start text-[0.81rem] text-white'>
      <div className='box-border flex h-[2.13rem] w-[7.75rem] flex-col items-center justify-start bg-blue px-[0rem] py-[0.44rem]'>
        <div className='flex flex-row items-center justify-start gap-[0.38rem]'>
          {/* <Image width={100} height={100} className='relative h-[1.13rem] w-[1.13rem] shrink-0 overflow-hidden' alt='' src={frame} /> */}
          <div className='relative font-semibold tracking-[0.06em]'>{text}</div>
        </div>
      </div>
      <Image width={100} height={100} className='relative h-[0.5rem] w-[0.5rem]' alt='' src='/ribbon-corner' />
    </div>
  );
}
