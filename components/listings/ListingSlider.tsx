import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { urlForImage } from 'lib/sanity.image';
import { Listing } from 'lib/sanity.queries/listings';
import Image from 'next/image';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type ListingSliderProps = {
  listing: Listing;
};

export default function ListingSlider({ listing }: ListingSliderProps) {
  return (
    <section id='listing-slider' className='flex flex-row items-start justify-center gap-[1rem] self-stretch'>
      <Swiper
        style={{
          // @ts-ignore
          '--swiper-navigation-color': '#fff',
          // '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Pagination, Navigation]}
      >
        {listing.gallery.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className='h-auto w-full'
              width={2000}
              height={1000}
              alt={`Cover Image for ${listing.title}`}
              src={urlForImage(image).height(1000).width(2000).url()}
              sizes='100vw'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
