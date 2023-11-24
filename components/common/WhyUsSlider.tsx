// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { infoCardsMock, statsMock } from 'lib/demo.data';
// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { InfoCard } from './cards/WhyUsInfoCards';

const slideStyle = {
  textAlign: 'center' as 'center',
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

interface WhyUsCard {
  heading: string;
  text: string;
}

export default function WhyUsSlider({ slides }: { slides: WhyUsCard[] }) {
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
        {slides.map((card, index) => {
          const bgColor = index === 1 ? 'bg-white' : 'bg-whitesmoke-200';
          return (
            <SwiperSlide key={index} style={slideStyle} id='info-card' className={`flex flex-row items-start justify-start gap-[1.5rem] text-center sm:w-[10px] ${bgColor}`}>
              <InfoCard title={card.heading} description={card.text} position={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
