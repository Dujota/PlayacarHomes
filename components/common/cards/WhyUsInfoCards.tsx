import Image from 'next/image';

function deriveImageSrc(position) {
  let imgSrc;

  switch (position) {
    case 0:
      imgSrc = '/hand.svg';
      break;
    case 1:
      imgSrc = '/property.svg';
      break;
    case 2:
      imgSrc = '/personal.svg';
      break;
    default:
      console.error('Invalid image type provided to InfoCard');
      imgSrc = '/property.svg';
  }

  return imgSrc;
}

export function InfoCard({ title, description, position }) {
  // const bgColor = position === 1 ? 'bg-white' : 'bg-whitesmoke-200';
  return (
    // <div className='flex flex-row items-start justify-start gap-[1.5rem] bg-blue'>
    <>
      <Image width={200} height={200} className='relative h-[4rem] w-[4rem]' alt={title} src={deriveImageSrc(position)} />
      <div className='flex flex-col items-start justify-start gap-[0.5rem] sm:flex-1 '>
        <h5 className='font-inherit relative m-0 inline-block w-[22.5rem] font-medium leading-[140%] text-inherit sm:w-auto sm:self-stretch md:w-[18.75rem]'>{title}</h5>
        <p className='relative m-0 inline-block w-[22.5rem] text-[0.88rem] font-light leading-[170%] text-grey md:w-[18.75rem]'>{description}</p>
      </div>
    </>
    // </div>
  );
}

// export function InfoCard({ title, description, position }) {
//   const baseCardStyle =
//     'info-card box-border flex w-[50.63rem] h-[13.38rem] flex-col items-center justify-start px-[0rem] sm:box-border sm:h-auto sm:w-auto sm:px-[1rem] sm:py-[2rem] lg:box-border lg:items-center lg:justify-center lg:px-[2rem]';
//   const bgColor = position === 1 ? 'bg-white' : 'bg-whitesmoke-200';
//   // const baseCardStyle =
//   //   'box-border flex w-[31.63rem] min-h-[13.38rem] flex-col items-center justify-start px-[0rem] sm:box-border sm:min-h-auto sm:w-auto sm:px-[1rem] sm:py-[2rem] lg:box-border lg:items-center lg:justify-center lg:px-[2rem] my-4';
//   // const baseCardStyle = `box-border flex w-full min-h-[13.38rem] flex-col items-center justify-start px-[0rem] py-[2rem] ${bgColor} mb-4 sm:box-border sm:min-h-auto sm:w-auto sm:px-[1rem] lg:box-border lg:items-center lg:justify-center lg:px-[2rem]`;

//   return (
//     <div className={`info-card box-border flex h-[13.38rem] flex-col items-center justify-center ${bgColor} px-20`}>
//       {/* <div className={`${baseCardStyle} ${bgColor}`}> */}
//       <div className='flex flex-row items-start justify-start gap-[1.5rem]'>
//         <Image width={200} height={200} className='relative h-[4rem] w-[4rem]' alt={title} src={deriveImageSrc(position)} />
//         <div className='flex flex-col items-start justify-start gap-[0.5rem] sm:flex-1'>
//           <h5 className='font-inherit relative m-0 inline-block w-[22.5rem] font-medium leading-[140%] text-inherit sm:w-auto sm:self-stretch'>{title}</h5>
//           <p className='relative m-0 inline-block w-[22.5rem] text-[0.88rem] font-light leading-[170%] text-grey sm:w-[18.75rem]'>{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface WhyUsInfoCardsProps {
//   cards: {
//     title: string;
//     description: string;
//   }[];
// }

// export default function WhyUsInfoCards({ cards }: WhyUsInfoCardsProps) {
//   return (
//     <div
//       className='flex flex-row flex-wrap items-end justify-center self-stretch overflow-x-auto text-[1.5rem] sm:flex-col md:box-border md:w-auto md:gap-[2.5rem] md:pl-[0rem] md:[align-self:unset] lg:w-auto lg:[align-self:unset]'
//       id='why-us'
//     >
//       <div className='flex w-[76.63rem] flex-row items-start justify-start gap-[2rem] sm:flex-col md:box-border md:flex-1 md:gap-[2.5rem] md:pl-[0rem] md:pr-[0rem] lg:box-border lg:flex-1 lg:gap-[2rem] lg:py-[0rem] lg:pl-[2rem] lg:pr-[0rem]'>
//         {cards.map((card, index) => (
//           <InfoCard key={index} position={index} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// }
