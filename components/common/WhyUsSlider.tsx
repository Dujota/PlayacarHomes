// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { infoCardsMock, statsMock } from 'lib/demo.data';
import Image from 'next/image';
// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { InfoCard } from './cards/WhyUsInfoCards';

const slideStyle = {
  textAlign: 'center',
  minWidth: '30rem',
  maxWidth: '30rem',
  height: '200px',
  fontSize: '18px',
  // background: 'red',

  /* Center slide text vertically */
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function WhyUsSlider() {
  return (
    <section className='mx-0 bg-whitesmoke-100 md:w-[50%] xxl:w-[80%] tablet:w-[100vw] xlSlider:w-[75%] lgSlider:w-[60%]'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={50}
        pagination={{
          // clickable: true,
          type: 'progressbar',
        }}
        modules={[Pagination]}
        className='mySwiper'
        style={{
          width: '100%',
          height: '100%',
        }}
        breakpoints={
          {
            // 500: {
            //   slidesPerView: 1,
            //   spaceBetween: 5,
            // },
            // 768: {
            //   slidesPerView: 2.5,
            //   spaceBetween: 40,
            // },
            // 1024: {
            //   slidesPerView: 3,
            //   spaceBetween: 50,
            // },
          }
        }
      >
        {infoCardsMock.map((card, index) => {
          const bgColor = index === 1 ? 'bg-white' : 'bg-whitesmoke-200';
          return (
            <SwiperSlide key={index} style={slideStyle} id='info-card' className={`flex flex-row items-start justify-start gap-[1.5rem] text-center sm:w-[10px] ${bgColor}`}>
              <InfoCard title={card.title} description={card.description} position={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

// function deriveImageSrc(position) {
//   let imgSrc;

//   switch (position) {
//     case 0:
//       imgSrc = '/hand.svg';
//       break;
//     case 1:
//       imgSrc = '/property.svg';
//       break;
//     case 2:
//       imgSrc = '/personal.svg';
//       break;
//     default:
//       console.error('Invalid image type provided to InfoCard');
//       imgSrc = '/property.svg';
//   }

//   return imgSrc;
// }

// export function InfoSlide({ title, description, position }) {
//   const bgColor = position === 1 ? 'bg-white' : 'bg-whitesmoke-200';
//   return (
//     // <div className='flex flex-row items-start justify-start gap-[1.5rem] bg-blue'>
//     <>
//       <Image width={200} height={200} className='relative h-[4rem] w-[4rem]' alt={title} src={deriveImageSrc(position)} />
//       <div className='flex flex-col items-start justify-start gap-[0.5rem] sm:flex-1 '>
//         <h5 className='font-inherit relative m-0 inline-block w-[22.5rem] font-medium leading-[140%] text-inherit sm:w-auto sm:self-stretch md:w-[18.75rem]'>{title}</h5>
//         <p className='relative m-0 inline-block w-[22.5rem] text-[0.88rem] font-light leading-[170%] text-grey md:w-[18.75rem]'>{description}</p>
//       </div>
//     </>
//     // </div>
//   );
// }

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import { infoCardsMock, statsMock } from 'lib/demo.data';
// // import required modules
// import { Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import { InfoCard } from './cards/WhyUsInfoCards';

// export default function WhyUsSlider() {
//   return (
//     <Swiper
//       slidesPerView={1}
//       spaceBetween={10}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Pagination]}
//       style={{ width: '100vw', height: '150px' }}
//       className='mySwiper'
//     >
//       {infoCardsMock.map((card, index) => (
//         <SwiperSlide key={index} style={{ width: '200px' }}>
//           <div style={{ width: '200px', height: '100px', backgroundColor: 'red' }}> {card.description}</div>
//           {/* <InfoCard key={index} position={index} {...card} /> */}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
