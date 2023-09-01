import IconDetail from 'components/common/icons/IconDetail';

interface ListingDetailsIconsProps {
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  typeOfProperty?: string;
  status?: string;
}

export default function ListingDetailsIcons({ bedrooms, bathrooms, area, typeOfProperty, status }: ListingDetailsIconsProps) {
  return (
    <div
      id='listing-details-icons'
      className='box-border flex flex-col items-center justify-end rounded-lg border-[1px] border-solid border-gray px-[0rem] py-[1.69rem] text-[0.81rem] text-grey shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]'
    >
      <div className='flex flex-row flex-wrap items-center justify-center'>
        {bedrooms && <IconDetail title='Bedrooms' iconSrc='/bed-blue.svg' description={`${bedrooms}`} />}
        {/* <Divider /> */}
        {bathrooms && <IconDetail title='Bathrooms' iconSrc='/bath-blue.svg' description={`${bathrooms}`} />}
        {/* <Divider /> */}
        {area && <IconDetail title='Square Area' iconSrc='/area-blue.svg' description={`${area} m²`} />}
        {/* <Divider /> */}
        {typeOfProperty && <IconDetail title='Type' iconSrc='/paint.svg' description={typeOfProperty} />}
        {/* <Divider /> */}
        {status && <IconDetail title='Status' iconSrc='/status.svg' description={status} />}
      </div>
    </div>
  );
}

// import IconDetail from 'components/common/icons/IconDetail';

// export default function ListingDetailsIcons() {
//   return (
//     <div
//       id='listing-details-icons'
//       className='box-border flex flex-col items-center justify-end rounded-lg border-[1px] border-solid border-gray px-[0rem] py-[1.69rem] text-[0.81rem] text-grey shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]'
//     >
//       <div className='flex flex-row flex-wrap items-center justify-center'>
//         <IconDetail title='Bedrooms' iconSrc='/bed-blue.svg' description='4' />
//         {/* <Divider /> */}
//         <IconDetail title='Bathrooms' iconSrc='/bath-blue.svg' description='2' />
//         {/* <Divider /> */}
//         <IconDetail title='Square Area' iconSrc='/area-blue.svg' description='6x8 m²' />
//         {/* <Divider /> */}
//         <IconDetail title='Type' iconSrc='/paint.svg' description='Loft' />
//         {/* <Divider /> */}
//         <IconDetail title='Status' iconSrc='/status.svg' description='Not Sold' />
//       </div>
//     </div>
//   );
// }
