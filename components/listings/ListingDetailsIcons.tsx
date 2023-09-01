// export default function ListingDetailsIcons() {
//   return (
//     <div
//       id='listing-details-icons'
//       className='box-border flex h-[7.19rem] flex-col items-center justify-end rounded-lg border-[1px] border-solid border-gray px-[0rem] py-[1.69rem] text-[0.81rem] text-grey shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]'
//     >
//       <div className='flex flex-row flex-wrap items-center justify-between'>
//         <div className='flex flex-col items-start justify-start gap-[1rem]'>
//           <div className='relative font-medium'>Bedrooms</div>
//           <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-black'>
//             <img className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src='/icon3.svg' />
//             <div className='relative'>4</div>
//           </div>
//         </div>
//         <div className='relative h-[3.13rem] w-[0.06rem] bg-lightslategray' />
//         <div className='flex flex-col items-start justify-start gap-[1rem]'>
//           <div className='relative font-medium'>Bathrooms</div>
//           <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-black'>
//             <img className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src='/icon4.svg' />
//             <div className='relative'>2</div>
//           </div>
//         </div>
//         <div className='relative h-[3.13rem] w-[0.06rem] bg-lightslategray' />
//         <div className='flex flex-col items-start justify-start gap-[1rem]'>
//           <div className='relative font-medium'>Square Area</div>
//           <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-black'>
//             <img className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src='/icon5.svg' />
//             <div className='relative'>6x8 m²</div>
//           </div>
//         </div>
//         <div className='relative h-[3.13rem] w-[0.06rem] bg-lightslategray' />
//         <div className='flex flex-col items-start justify-start gap-[1rem]'>
//           <div className='relative font-medium'>Repair Quality</div>
//           <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-black'>
//             <img className='relative h-[1.5rem] w-[1.5rem]' alt='' src='/icon6.svg' />
//             <div className='relative'>Modern Loft</div>
//           </div>
//         </div>
//         <div className='relative h-[3.13rem] w-[0.06rem] bg-lightslategray' />
//         <div className='flex flex-col items-start justify-start gap-[1rem]'>
//           <div className='relative font-medium'>Status</div>
//           <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-black'>
//             <img className='relative h-[1.5rem] w-[1.5rem]' alt='' src='/icon7.svg' />
//             <div className='relative'>Not Sold</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Divider } from 'components/common/dividers/IconDivider';
import Image from 'next/image';

function IconDetail({ title, iconSrc, description }) {
  return (
    <div className='detail-icon mx-8 flex h-[6rem] w-[6rem] flex-col items-start justify-start gap-[1rem]'>
      <div className='relative font-medium'>{title}</div>
      <div className='flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-black'>
        <Image width={200} height={200} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src={iconSrc} />
        <div className='relative'>{description}</div>
      </div>
    </div>
  );
}

export default function ListingDetailsIcons() {
  return (
    <div
      id='listing-details-icons'
      className='box-border flex flex-col items-center justify-end rounded-lg border-[1px] border-solid border-gray px-[0rem] py-[1.69rem] text-[0.81rem] text-grey shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]'
    >
      <div className='flex flex-row flex-wrap items-center justify-center'>
        <IconDetail title='Bedrooms' iconSrc='/bed.svg' description='4' />
        {/* <Divider /> */}
        <IconDetail title='Bathrooms' iconSrc='/bath.svg' description='2' />
        {/* <Divider /> */}
        <IconDetail title='Square Area' iconSrc='/area.svg' description='6x8 m²' />
        {/* <Divider /> */}
        <IconDetail title='Repair Quality' iconSrc='/paint.svg' description='Modern Loft' />
        {/* <Divider /> */}
        <IconDetail title='Status' iconSrc='/status.svg' description='Not Sold' />
      </div>
    </div>
  );
}
