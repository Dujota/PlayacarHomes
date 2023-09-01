import 'swiper/swiper.min.css';

import { PortableText } from '@portabletext/react';
import ListingDetails from 'components/listings/ListingDetails';
import { urlForImage } from 'lib/sanity.image';
import { formatPrice } from 'lib/utils';
import Image from 'next/image';
import { FaBath, FaBed, FaBook, FaDollarSign, FaHome, FaPhone, FaPrint, FaRulerCombined } from 'react-icons/fa';
// import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ListingBody({ listing }) {
  const representative = listing.agent || listing.author;
  const formattedPrice = formatPrice(listing.price || 0);

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* IMAGE CAROUSEL REPLACE WITH SWIPER*/}
      <section className='flex flex-row items-start justify-center gap-[1rem] self-stretch'>
        <img className='relative h-[32.75rem] w-[51.31rem] object-cover' alt='' src='/mask-group@2x.png' />
        <div className='flex flex-col items-center justify-start gap-[1rem]'>
          <img className='relative h-[15.88rem] w-[25.19rem] object-cover' alt='' src='/image@2x.png' />
          <img className='relative h-[15.88rem] w-[25.19rem] object-cover' alt='' src='/thumbnail-2@2x.png' />
        </div>
      </section>
      <ListingDetails listing={listing} />
    </div>
  );
}

// export default function ListingBody({ listing }) {
//   const representative = listing.agent || listing.author;
//   const formattedPrice = formatPrice(listing.price || 0);

//   return (
//     <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
//       <div className='mt-10'>
//         <Swiper spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }}>
//           {listing.gallery.images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <Image
//                 className='h-auto w-full'
//                 width={2000}
//                 height={1000}
//                 alt={`Cover Image for ${listing.title}`}
//                 src={urlForImage(image).height(1000).width(2000).url()}
//                 sizes='100vw'
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className='mt-10 text-3xl font-bold'>{`${formattedPrice}`}</div>

//       <div className='text-gray-600 mt-4 flex justify-around text-lg'>
//         <div className='flex items-center'>
//           <FaBed className='mr-2' />
//           <p>{listing.bedrooms} Bedrooms</p>
//         </div>
//         <div className='flex items-center'>
//           <FaBath className='mr-2' />
//           <p>{listing.bathrooms} Bathrooms</p>
//         </div>
//         <div className='flex items-center'>
//           <FaRulerCombined className='mr-2' />
//           <p>{listing.area} sqft</p>
//         </div>
//         <div className='flex items-center'>
//           <FaHome className='mr-2' />
//           <p>{listing.typeOfProperty}</p>
//         </div>
//       </div>

//       <div className='mt-4 flex justify-between'>
//         <button className='flex w-1/3 items-center bg-blue-500 p-2 text-white'>
//           <FaPrint className='mr-2' />
//           Print
//         </button>
//         <button className='flex w-1/3 items-center bg-blue-500 p-2 text-white'>
//           <FaBook className='mr-2' />
//           Listing Brochure
//         </button>
//         <button className='flex w-1/3 items-center bg-blue-500 p-2 text-white'>
//           <FaPhone className='mr-2' />
//           Book a Showing
//         </button>
//       </div>

//       <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2'>
//         <div className='border-b pb-4'>
//           <div className='flex items-center'>
//             <Image className='rounded-full' width={50} height={50} alt={`Image for ${representative.name}`} src={urlForImage(representative.picture).height(50).width(50).url()} />
//             <div className='ml-4'>
//               <p>{representative.name}</p>
//               <p>{representative?.contact?.phone || listing?.contact?.phone}</p>
//               <p>{representative?.contact?.email || listing?.contact?.email}</p>
//             </div>
//           </div>
//         </div>
//         <div className='border-b pb-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Request Details</h2>
//           <form className='space-y-4'>
//             <input className='w-full border p-2' type='text' placeholder='Your Name' />
//             <input className='w-full border p-2' type='email' placeholder='Your Email' />
//             <textarea className='w-full border p-2' placeholder='Your Message'></textarea>
//             <button className='w-full bg-blue-500 p-2 text-white'>Send Request</button>
//           </form>
//         </div>
//       </div>

//       <div className='mt-10 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Property Summary</h2>
//         <div className='flex justify-around text-lg'>
//           <p>Type: {listing.typeOfProperty}</p>
//           <p>Style: {listing.style}</p>
//           <p>Neighborhood: {listing.neighbourhood}</p>
//           <p>Postal Code: {listing.postalCode}</p>
//           <p>Association Fee: {listing.associationFee}</p>
//         </div>
//         <div className='prose prose-sm sm:prose lg:prose-lg xl:prose-xl mt-4'>
//           <PortableText value={listing.description} />
//         </div>
//         <div className='mt-4'>
//           <button className='w-full bg-blue-500 p-2 text-white'>Find out more, send an email now</button>
//         </div>
//       </div>

//       {listing.location && (
//         <div className='mt-10'>
//           <h2 className='mb-2 text-xl font-semibold'>Location</h2>
//           {/* <MapContainer center={[listing.location.lat, listing.location.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
//             <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
//             <Marker position={[listing.location.lat, listing.location.lng]} />
//           </MapContainer> */}
//         </div>
//       )}
//     </div>
//   );
// }
