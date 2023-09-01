// export default function KeyFeatures() {
//   return (
//     <div className='flex flex-col items-start justify-start gap-[2rem]'>
//       <h2 className='font-inherit relative m-0 font-medium text-inherit'>Key Features</h2>
//       <div className='flex w-[45.88rem] flex-row flex-wrap items-start justify-between text-[0.88rem] text-grey'>
//         <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>Listed on</div>
//             <div className='relative text-right font-medium text-black'>June 23, 2023</div>
//           </div>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>Available</div>
//             <div className='relative text-right font-medium text-black'>Yes</div>
//           </div>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>Property Type</div>
//             <div className='relative text-right font-medium text-black'>Home</div>
//           </div>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>Laundry</div>
//             <div className='relative text-right font-medium text-black'>Yes</div>
//           </div>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>Air Conditioner</div>
//             <div className='relative text-right font-medium text-black'>Yes</div>
//           </div>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>Insulation</div>
//             <div className='relative text-right font-medium text-black'>Yes</div>
//           </div>
//         </div>
//         <div className='relative h-[15rem] w-[0.06rem] bg-lightslategray' />
//         <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>City</div>
//             <div className='relative text-right font-medium text-black'>Mexico</div>
//           </div>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>Built In</div>
//             <div className='relative text-right font-medium text-black'>2018</div>
//           </div>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>Size</div>
//             <div className='relative text-right font-medium text-black'>2,124 sqft</div>
//           </div>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>Parking Area</div>
//             <div className='relative text-right font-medium text-black'>Yes</div>
//           </div>
//           <div className='flex w-[20rem] flex-row items-center justify-between'>
//             <div className='relative'>Price</div>
//             <div className='relative text-right font-medium text-black'>$2,400</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function FeatureItem({ title, value }) {
  return (
    <div className='flex w-[20rem] flex-row items-center justify-between'>
      <div className='relative'>{title}</div>
      <div className='relative text-right font-medium text-black'>{value}</div>
    </div>
  );
}

export default function KeyFeatures() {
  return (
    <div className='flex flex-col items-start justify-start gap-[2rem]'>
      <h2 className='font-inherit relative m-0 font-medium text-inherit'>{`Key Features `}</h2>
      <div id='feature-container' className='flex flex-wrap items-baseline justify-center gap-[3rem] text-[0.88rem] text-grey'>
        <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
          {/* Left Column */}
          <FeatureItem title='Listed on' value='June 23, 2023' />
          <FeatureItem title='Available' value='Yes' />
          <FeatureItem title='Property Type' value='Home' />
          <FeatureItem title='Laundry' value='Yes' />
          <FeatureItem title='Air Conditioner' value='Yes' />
          <FeatureItem title='Insulation' value='Yes' />
        </div>
        {/* Vertical Divider */}
        {/* <div className='h-[15rem] w-[0.06rem] self-stretch bg-lightslategray'></div> */}
        <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
          {/* Right Column */}
          <FeatureItem title='City' value='Mexico' />
          <FeatureItem title='Built In' value='2018' />
          <FeatureItem title='Size' value='2,124 sqft' />
          <FeatureItem title='Parking Area' value='Yes' />
          <FeatureItem title='Price' value='$2,400' />
        </div>
      </div>
    </div>
  );
}

// export default function KeyFeatures() {
//   return (
//     <>
//       <h2 className='font-inherit relative m-0 font-medium text-inherit'>Key Features</h2>

//       <div className='grid w-full grid-cols-2 gap-4'>
//         <div>Left Content</div>
//         <div>Right Content</div>
//       </div>
//     </>
//   );
// }

// <div className='grid w-[45.88rem] grid-cols-2 gap-[2rem] text-[0.88rem] text-grey'>
//   <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
//     {/* Left Column */}
//     <FeatureItem title='Listed on' value='June 23, 2023' />
//     <FeatureItem title='Available' value='Yes' />
//     <FeatureItem title='Property Type' value='Home' />
//     <FeatureItem title='Laundry' value='Yes' />
//     <FeatureItem title='Air Conditioner' value='Yes' />
//     <FeatureItem title='Insulation' value='Yes' />
//   </div>
//   {/* Vertical Divider */}
//   <div className='h-[15rem] w-[0.06rem] self-stretch bg-lightslategray'></div>
//   <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
//     {/* Right Column */}
//     <FeatureItem title='City' value='Mexico' />
//     <FeatureItem title='Built In' value='2018' />
//     <FeatureItem title='Size' value='2,124 sqft' />
//     <FeatureItem title='Parking Area' value='Yes' />
//     <FeatureItem title='Price' value='$2,400' />
//   </div>
// </div>;
