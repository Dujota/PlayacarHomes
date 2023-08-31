/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
// import { PortableText } from '@portabletext/react';
// import { urlForImage } from 'lib/sanity.image';
// import Image from 'next/image';

// import styles from './ListingBody.module.css';

// export default function ListingBody({ listing }) {
//   // Use agent if available, otherwise use author
//   const representative = listing.agent || listing.author;

//   // Format price as currency
//   const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

//   return (
//     <div className='mx-auto max-w-2xl'>
//       <div className={`border-b pb-4 ${styles.section}`}>
//         <h2 className='mb-2 text-xl font-semibold'>Title</h2>
//         <p>{listing.title}</p>
//       </div>
//       <div className={`mt-4 border-b pb-4 ${styles.section}`}>
//         <h2 className='mb-2 text-xl font-semibold'>Description</h2>
//         <div className={styles.portableText}>
//           <PortableText value={listing.description} />
//         </div>
//       </div>
//       <div className={`mt-4 border-b pb-4 ${styles.section}`}>
//         <h2 className='mb-2 text-xl font-semibold'>Price</h2>
//         <p>{`${formattedPrice}`}</p>
//       </div>
//       <div className={`mt-4 border-b pb-4 ${styles.section}`}>
//         <h2 className='mb-2 text-xl font-semibold'>Location</h2>
//         <p>{listing.location}</p>
//       </div>

//       <div className={`mt-4 border-b pb-4 ${styles.section}`}>
//         <h2 className='mb-2 text-xl font-semibold'>Property Images</h2>
//         {listing.gallery.images.map((image, index) => (
//           // <img key={index} src={image.asset.url} alt={listing.title} className='my-2 h-auto w-full' />
//           <Image
//             key={index}
//             className='h-auto w-full'
//             width={2000}
//             height={1000}
//             alt={`Cover Image for ${listing.title}`}
//             src={urlForImage(image).height(1000).width(2000).url()}
//             sizes='100vw'
//             // priority={priority}
//           />
//         ))}
//       </div>
//       <div className={`mt-4 border-b pb-4 ${styles.section}`}>
//         <h2 className='mb-2 text-xl font-semibold'>Property Type</h2>
//         <p>{listing.typeOfProperty}</p>
//       </div>
//       <div className={`mt-4 border-b pb-4 ${styles.section}`}>
//         <h2 className='mb-2 text-xl font-semibold'>Amenities</h2>
//         <ul>
//           {listing.amenities.map((amenity, index) => (
//             <li key={index}>{amenity}</li>
//           ))}
//         </ul>
//       </div>

//       <div className={`mt-4 border-b pb-4 ${styles.section}`}>
//         <h2 className='mb-2 text-xl font-semibold'>Beds</h2>
//         <p>{listing.beds}</p>
//       </div>
//       <div className={`mt-4 border-b pb-4 ${styles.section}`}>
//         <h2 className='mb-2 text-xl font-semibold'>Bedrooms</h2>
//         <p>{listing.bedrooms}</p>
//       </div>
//       <div className={`mt-4 border-b pb-4 ${styles.section}`}>
//         <h2 className='mb-2 text-xl font-semibold'>Bathrooms</h2>
//         <p>{listing.bathrooms}</p>
//       </div>
//     </div>
//   );
// }

// import 'swiper/swiper.min.css';

// import { PortableText } from '@portabletext/react';
// import { urlForImage } from 'lib/sanity.image';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export default function ListingBody({ listing }) {
//   // Use agent if available, otherwise use author
//   const representative = listing.agent || listing.author;

//   // Format price as currency
//   const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

//   return (
//     <div className='mx-auto max-w-2xl'>
//       <div className='border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Title</h2>
//         <p>{listing.title}</p>
//       </div>
//       <div className='mt-4 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Description</h2>
//         <div>
//           <PortableText value={listing.description} />
//         </div>
//       </div>
//       <div className='mt-4 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Price</h2>
//         <p>{`${formattedPrice}`}</p>
//       </div>
//       {listing.location && (
//         <div className='mt-4 border-b pb-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Location</h2>
//           <p>{listing.location}</p>
//         </div>
//       )}
//       <div className='mt-4 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Property Images</h2>
//         <Swiper
//           spaceBetween={50}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           scrollbar={{ draggable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           onSlideChange={() => console.log('slide change')}
//         >
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
//       <div className='mt-4 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Property Type</h2>
//         <p>{listing.typeOfProperty}</p>
//       </div>
//       <div className='mt-4 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Amenities</h2>
//         <ul>
//           {listing.amenities.map((amenity, index) => (
//             <li key={index}>{amenity}</li>
//           ))}
//         </ul>
//       </div>
//       <div className='mt-4 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Beds</h2>
//         <p>{listing.beds}</p>
//       </div>
//       <div className='mt-4 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Bedrooms</h2>
//         <p>{listing.bedrooms}</p>
//       </div>
//       <div className='mt-4 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Bathrooms</h2>
//         <p>{listing.bathrooms}</p>
//       </div>
//     </div>
//   );
// }

// import 'swiper/swiper.min.css';

// import { PortableText } from '@portabletext/react';
// import { urlForImage } from 'lib/sanity.image';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export default function ListingBody({ listing }) {
//   // Format price as currency
//   const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

//   return (
//     <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
//       <div className='mt-10'>
//         <h2 className='text-3xl font-semibold'>{listing.title}</h2>
//       </div>
//       <div className='mt-4'>
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
//       <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
//         <div className='border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Description</h2>
//           <div>
//             <PortableText value={listing.description} />
//           </div>
//         </div>
//         <div className='border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Details</h2>
//           <p>
//             <strong>Price:</strong> {`${formattedPrice}`}
//           </p>
//           <p>
//             <strong>Property Type:</strong> {listing.typeOfProperty}
//           </p>
//           <p>
//             <strong>Beds:</strong> {listing.beds}
//           </p>
//           <p>
//             <strong>Bedrooms:</strong> {listing.bedrooms}
//           </p>
//           <p>
//             <strong>Bathrooms:</strong> {listing.bathrooms}
//           </p>
//         </div>
//       </div>
//       {listing.location && (
//         <div className='mt-4 border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Location</h2>
//           <p>{listing.location}</p>
//           {/* Replace this with your map component */}
//           <div className='h-64 bg-gray-200'>Map goes here</div>
//         </div>
//       )}
//       <div className='mt-4 border p-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Amenities</h2>
//         <ul className='list-disc pl-5'>
//           {listing.amenities.map((amenity, index) => (
//             <li key={index}>{amenity}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import 'swiper/swiper.min.css';

// import { PortableText } from '@portabletext/react';
// import { urlForImage } from 'lib/sanity.image';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export default function ListingBody({ listing }) {
//   // Format price as currency
//   const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

//   return (
//     <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
//       <div className='mt-10'>
//         <h2 className='text-3xl font-semibold'>{listing.title}</h2>
//         <p className='text-lg text-gray-500'>{formattedPrice}</p>
//       </div>
//       <div className='mt-4'>
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
//       <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
//         <div className='border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Description</h2>
//           <div>
//             <PortableText value={listing.description} />
//           </div>
//         </div>
//         <div className='border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Details</h2>
//           <p>
//             <strong>Property Type:</strong> {listing.typeOfProperty}
//           </p>
//           <p>
//             <strong>Style:</strong> {listing.style}
//           </p>
//           <p>
//             <strong>Area:</strong> {listing.area} Sqft
//           </p>
//           <p>
//             <strong>Bedrooms:</strong> {listing.bedrooms}
//           </p>
//           <p>
//             <strong>Bathrooms:</strong> {listing.bathrooms}
//           </p>
//           <p>
//             <strong>Postal Code:</strong> {listing.postalCode}
//           </p>
//           <p>
//             <strong>Neighbourhood:</strong> {listing.neighbourhood}
//           </p>
//           <p>
//             <strong>Association Fee:</strong> {listing.associationFee}
//           </p>
//         </div>
//       </div>
//       {listing.location && (
//         <div className='mt-4 border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Location</h2>
//           <p>{listing.location}</p>
//           {/* Replace this with your map component */}
//           <div className='h-64 bg-gray-200'>Map goes here</div>
//         </div>
//       )}
//       <div className='mt-4 border p-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Amenities</h2>
//         <ul className='list-disc pl-5'>
//           {listing.amenities.map((amenity, index) => (
//             <li key={index}>{amenity}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import 'swiper/swiper.min.css';

// import { PortableText } from '@portabletext/react';
// import { urlForImage } from 'lib/sanity.image';
// import Image from 'next/image';
// import { FaBath, FaBed, FaMapMarkerAlt, FaRulerCombined } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export default function ListingBody({ listing }) {
//   // Format price as currency
//   const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

//   return (
//     <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
//       <div className='mt-10'>
//         <h2 className='text-3xl font-semibold'>{listing.title}</h2>
//         <p className='text-lg text-gray-500'>{formattedPrice}</p>
//       </div>
//       <div className='mt-4'>
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
//       <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
//         <div className='border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Description</h2>
//           <div>
//             <PortableText value={listing.description} />
//           </div>
//         </div>
//         <div className='border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Details</h2>
//           <div className='flex items-center'>
//             <FaBed className='mr-2' />
//             <p>
//               <strong>Bedrooms:</strong> {listing.bedrooms}
//             </p>
//           </div>
//           <div className='flex items-center'>
//             <FaBath className='mr-2' />
//             <p>
//               <strong>Bathrooms:</strong> {listing.bathrooms}
//             </p>
//           </div>
//           <div className='flex items-center'>
//             <FaRulerCombined className='mr-2' />
//             <p>
//               <strong>Area:</strong> {listing.area} Sqft
//             </p>
//           </div>
//           <div className='flex items-center'>
//             <FaMapMarkerAlt className='mr-2' />
//             <p>
//               <strong>Location:</strong> {listing.location ? listing.location : 'Lorem ipsum'}
//             </p>
//           </div>
//           <p>
//             <strong>Postal Code:</strong> {listing.postalCode ? listing.postalCode : 'Lorem ipsum'}
//           </p>
//           <p>
//             <strong>Neighbourhood:</strong> {listing.neighbourhood ? listing.neighbourhood : 'Lorem ipsum'}
//           </p>
//           <p>
//             <strong>Association Fee:</strong> {listing.associationFee ? listing.associationFee : 'Lorem ipsum'}
//           </p>
//         </div>
//       </div>
//       {listing.location && (
//         <div className='mt-4 border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Location</h2>
//           {/* TODO: Add map component */}
//           <div className='h-64 bg-gray-200'>Map goes here</div>
//         </div>
//       )}
//       <div className='mt-4 border p-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Amenities</h2>
//         <ul className='list-disc pl-5'>
//           {listing.amenities.map((amenity, index) => (
//             <li key={index}>{amenity}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import 'swiper/swiper.min.css';

// import { PortableText } from '@portabletext/react';
// import { urlForImage } from 'lib/sanity.image';
// import Image from 'next/image';
// import { FaBath, FaBed, FaMapMarkerAlt, FaRulerCombined } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export default function ListingBody({ listing }) {
//   // Format price as currency
//   const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

//   // Use agent if available, otherwise use author
//   const representative = listing.agent || listing.author;

//   return (
//     <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
//       <div className='mt-10'>
//         <h2 className='text-3xl font-semibold'>{listing.title}</h2>
//         <p className='text-lg text-gray-500'>{formattedPrice}</p>
//       </div>
//       <div className='mt-4'>
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
//       <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
//         <div className='border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Property Summary</h2>
//           <div className='flex items-center'>
//             <FaBed className='mr-2' />
//             <p>
//               <strong>Bedrooms:</strong> {listing.bedrooms}
//             </p>
//           </div>
//           <div className='flex items-center'>
//             <FaBath className='mr-2' />
//             <p>
//               <strong>Bathrooms:</strong> {listing.bathrooms}
//             </p>
//           </div>
//           <div className='flex items-center'>
//             <FaRulerCombined className='mr-2' />
//             <p>
//               <strong>Area:</strong> {listing.area} Sqft
//             </p>
//           </div>
//           <div className='flex items-center'>
//             <FaMapMarkerAlt className='mr-2' />
//             <p>
//               <strong>Location:</strong> {listing.location ? listing.location : 'Lorem ipsum'}
//             </p>
//           </div>
//           <p>
//             <strong>Postal Code:</strong> {listing.postalCode ? listing.postalCode : 'Lorem ipsum'}
//           </p>
//           <p>
//             <strong>Neighbourhood:</strong> {listing.neighbourhood ? listing.neighbourhood : 'Lorem ipsum'}
//           </p>
//           <p>
//             <strong>Association Fee:</strong> {listing.associationFee ? listing.associationFee : 'Lorem ipsum'}
//           </p>
//         </div>
//         <div className='border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Agent Information</h2>
//           <div className='flex items-center'>
//             <Image
//               className='rounded-full'
//               width={50}
//               height={50}
//               src={representative.picture ? urlForImage(representative.picture).height(50).width(50).url() : 'https://via.placeholder.com/50'}
//             />
//             <div className='ml-4'>
//               <p>
//                 <strong>{representative.name}</strong>
//               </p>
//               <p>{representative.contact ? representative.contact.phone : 'Phone number not available'}</p>
//               <p>{representative.contact ? representative.contact.email : 'Email not available'}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='mt-4 border p-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Description</h2>
//         <div>
//           <PortableText value={listing.description} />
//         </div>
//       </div>
//       {listing.location && (
//         <div className='mt-4 border p-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Location</h2>
//           {/* Replace this with your map component */}
//           <div className='h-64 bg-gray-200'>Map goes here</div>
//         </div>
//       )}
//       <div className='mt-4 border p-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Amenities</h2>
//         <ul className='list-disc pl-5'>
//           {listing.amenities.map((amenity, index) => (
//             <li key={index}>{amenity}</li>
//           ))}
//         </ul>
//       </div>
//       <div className='mt-4 border p-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Request Details</h2>
//         {/* Replace this with your form component */}
//         <div className='h-64 bg-gray-200'>Form goes here</div>
//       </div>
//     </div>
//   );
// }

// import 'swiper/swiper.min.css';

// import { PortableText } from '@portabletext/react';
// import { urlForImage } from 'lib/sanity.image';
// import Image from 'next/image';
// import { FaBath, FaBed, FaDollarSign, FaHome, FaRulerCombined } from 'react-icons/fa';
// // import { MapContainer, Marker, TileLayer } from 'react-leaflet';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export default function ListingBody({ listing }) {
//   const representative = listing.agent || listing.author;
//   const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

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

//       <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2'>
//         <div className='border-b pb-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Property Summary</h2>
//           <div className='flex items-center'>
//             <FaDollarSign className='mr-2' />
//             <p>{`${formattedPrice}`}</p>
//           </div>
//           <div className='flex items-center'>
//             <FaBed className='mr-2' />
//             <p>{listing.bedrooms} Bedrooms</p>
//           </div>
//           <div className='flex items-center'>
//             <FaBath className='mr-2' />
//             <p>{listing.bathrooms} Bathrooms</p>
//           </div>
//           <div className='flex items-center'>
//             <FaRulerCombined className='mr-2' />
//             <p>{listing.area} sqft</p>
//           </div>
//           <div className='flex items-center'>
//             <FaHome className='mr-2' />
//             <p>{listing.typeOfProperty}</p>
//           </div>
//         </div>

//         <div className='border-b pb-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Description</h2>
//           <div className='prose prose-sm sm:prose lg:prose-lg xl:prose-xl'>
//             <PortableText value={listing.description} />
//           </div>
//         </div>
//       </div>

//       <div className='mt-10 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Property Details</h2>
//         <p>Type: {listing.typeOfProperty}</p>
//         <p>Style: {listing.style}</p>
//         <p>Neighborhood: {listing.neighbourhood}</p>
//         <p>Postal Code: {listing.postalCode}</p>
//         <p>Association Fee: {listing.associationFee}</p>
//       </div>

//       <div className='mt-10 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Agent Information</h2>
//         <div className='flex items-center'>
//           <Image className='rounded-full' width={50} height={50} alt={`Picture of ${representative.name}`} src={urlForImage(representative.picture).height(50).width(50).url()} />
//           <div className='ml-4'>
//             <p>{representative.name}</p>
//             <p>{representative?.contact?.phone}</p>
//             <p>{representative?.contact?.email}</p>
//           </div>
//         </div>
//       </div>

//       <div className='mt-10'>
//         <h2 className='mb-2 text-xl font-semibold'>Request Details</h2>
//         <form className='space-y-4'>
//           <input className='w-full border p-2' type='text' placeholder='Your Name' />
//           <input className='w-full border p-2' type='email' placeholder='Your Email' />
//           <textarea className='w-full border p-2' placeholder='Your Message'></textarea>
//           <button className='w-full bg-blue-500 p-2 text-white'>Send Request</button>
//         </form>
//       </div>

//       {listing.location && (
//         <div className='mt-10'>
//           <h2 className='mb-2 text-xl font-semibold'>Location</h2>
//           {/* TODO: ADD MAP  */}
//           {/* <MapContainer center={[listing.location.lat, listing.location.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
//             <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
//             <Marker position={[listing.location.lat, listing.location.lng]} />
//           </MapContainer> */}
//         </div>
//       )}
//     </div>
//   );
// }

// import 'swiper/swiper.min.css';

// import { PortableText } from '@portabletext/react';
// import { urlForImage } from 'lib/sanity.image';
// import Image from 'next/image';
// import { FaBath, FaBed, FaDollarSign, FaHome, FaRulerCombined } from 'react-icons/fa';
// // import { MapContainer, Marker, TileLayer } from 'react-leaflet';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export default function ListingBody({ listing }) {
//   const representative = listing.agent || listing.author;
//   const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

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

//       <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2'>
//         <div className='border-b pb-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Property Summary</h2>
//           <div className='flex items-center'>
//             <FaDollarSign className='mr-2' />
//             <p>{`${formattedPrice}`}</p>
//           </div>
//           <div className='flex items-center'>
//             <FaBed className='mr-2' />
//             <p>{listing.bedrooms} Bedrooms</p>
//           </div>
//           <div className='flex items-center'>
//             <FaBath className='mr-2' />
//             <p>{listing.bathrooms} Bathrooms</p>
//           </div>
//           <div className='flex items-center'>
//             <FaRulerCombined className='mr-2' />
//             <p>{listing.area} sqft</p>
//           </div>
//           <div className='flex items-center'>
//             <FaHome className='mr-2' />
//             <p>{listing.typeOfProperty}</p>
//           </div>
//         </div>

//         <div className='border-b pb-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Agent Information</h2>
//           <div className='flex items-center'>
//             <Image className='rounded-full' width={50} height={50} alt={`Picture of ${representative.name}`} src={urlForImage(representative.picture).height(50).width(50).url()} />

//             <div className='ml-4'>
//               <p>{representative.name}</p>
//               <p>{representative?.contact?.phone || listing?.contact?.phone}</p>
//               <p>{representative?.contact?.email || listing?.contact?.email}</p>
//             </div>
//           </div>
//           <div className='mt-4'>
//             <h2 className='mb-2 text-xl font-semibold'>Request Details</h2>
//             <form className='space-y-4'>
//               <input className='w-full border p-2' type='text' placeholder='Your Name' />
//               <input className='w-full border p-2' type='email' placeholder='Your Email' />
//               <textarea className='w-full border p-2' placeholder='Your Message'></textarea>
//               <button className='w-full bg-blue-500 p-2 text-white'>Send Request</button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className='mt-10 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Description</h2>
//         <div className='prose prose-sm sm:prose lg:prose-lg xl:prose-xl'>
//           <PortableText value={listing.description} />
//         </div>
//       </div>

//       <div className='mt-10 border-b pb-4'>
//         <h2 className='mb-2 text-xl font-semibold'>Property Details</h2>
//         <p>Type: {listing.typeOfProperty}</p>
//         <p>Style: {listing.style}</p>
//         <p>Neighborhood: {listing.neighbourhood}</p>
//         <p>Postal Code: {listing.postalCode}</p>
//         <p>Association Fee: {listing.associationFee}</p>
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

// import 'swiper/swiper.min.css';

// import { PortableText } from '@portabletext/react';
// import { urlForImage } from 'lib/sanity.image';
// import Image from 'next/image';
// import { FaBath, FaBed, FaBook, FaDollarSign, FaHome, FaPhone, FaPrint, FaRulerCombined } from 'react-icons/fa';
// // import { MapContainer, Marker, TileLayer } from 'react-leaflet';
// import { Swiper, SwiperSlide } from 'swiper/react';

// export default function ListingBody({ listing }) {
//   const representative = listing.agent || listing.author;
//   const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

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

//       <div className='mt-4 flex justify-around text-lg text-gray-600'>
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
//           <div className='mt-4'>
//             <h2 className='mb-2 text-xl font-semibold'>Request Details</h2>
//             <form className='space-y-4'>
//               <input className='w-full border p-2' type='text' placeholder='Your Name' />
//               <input className='w-full border p-2' type='email' placeholder='Your Email' />
//               <textarea className='w-full border p-2' placeholder='Your Message'></textarea>
//               <button className='w-full bg-blue-500 p-2 text-white'>Send Request</button>
//             </form>
//           </div>
//         </div>

//         <div className='border-b pb-4'>
//           <h2 className='mb-2 text-xl font-semibold'>Property Summary</h2>
//           <div className='flex justify-around text-lg'>
//             <p>Type: {listing.typeOfProperty}</p>
//             <p>Style: {listing.style}</p>
//             <p>Neighborhood: {listing.neighbourhood}</p>
//             <p>Postal Code: {listing.postalCode}</p>
//             <p>Association Fee: {listing.associationFee}</p>
//           </div>
//           <div className='prose prose-sm sm:prose lg:prose-lg xl:prose-xl mt-4'>
//             <PortableText value={listing.description} />
//           </div>
//           <div className='mt-4'>
//             <button className='w-full bg-blue-500 p-2 text-white'>Find out more, send an email now</button>
//           </div>
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

import 'swiper/swiper.min.css';

import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import { FaBath, FaBed, FaBook, FaDollarSign, FaHome, FaPhone, FaPrint, FaRulerCombined } from 'react-icons/fa';
// import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ListingBody({ listing }) {
  const representative = listing.agent || listing.author;
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mt-10'>
        <Swiper spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }}>
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
      </div>

      <div className='mt-10 text-3xl font-bold'>{`${formattedPrice}`}</div>

      <div className='text-gray-600 mt-4 flex justify-around text-lg'>
        <div className='flex items-center'>
          <FaBed className='mr-2' />
          <p>{listing.bedrooms} Bedrooms</p>
        </div>
        <div className='flex items-center'>
          <FaBath className='mr-2' />
          <p>{listing.bathrooms} Bathrooms</p>
        </div>
        <div className='flex items-center'>
          <FaRulerCombined className='mr-2' />
          <p>{listing.area} sqft</p>
        </div>
        <div className='flex items-center'>
          <FaHome className='mr-2' />
          <p>{listing.typeOfProperty}</p>
        </div>
      </div>

      <div className='mt-4 flex justify-between'>
        <button className='flex w-1/3 items-center bg-blue-500 p-2 text-white'>
          <FaPrint className='mr-2' />
          Print
        </button>
        <button className='flex w-1/3 items-center bg-blue-500 p-2 text-white'>
          <FaBook className='mr-2' />
          Listing Brochure
        </button>
        <button className='flex w-1/3 items-center bg-blue-500 p-2 text-white'>
          <FaPhone className='mr-2' />
          Book a Showing
        </button>
      </div>

      <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='border-b pb-4'>
          <div className='flex items-center'>
            <Image className='rounded-full' width={50} height={50} alt={`Image for ${representative.name}`} src={urlForImage(representative.picture).height(50).width(50).url()} />
            <div className='ml-4'>
              <p>{representative.name}</p>
              <p>{representative?.contact?.phone || listing?.contact?.phone}</p>
              <p>{representative?.contact?.email || listing?.contact?.email}</p>
            </div>
          </div>
        </div>
        <div className='border-b pb-4'>
          <h2 className='mb-2 text-xl font-semibold'>Request Details</h2>
          <form className='space-y-4'>
            <input className='w-full border p-2' type='text' placeholder='Your Name' />
            <input className='w-full border p-2' type='email' placeholder='Your Email' />
            <textarea className='w-full border p-2' placeholder='Your Message'></textarea>
            <button className='w-full bg-blue-500 p-2 text-white'>Send Request</button>
          </form>
        </div>
      </div>

      <div className='mt-10 border-b pb-4'>
        <h2 className='mb-2 text-xl font-semibold'>Property Summary</h2>
        <div className='flex justify-around text-lg'>
          <p>Type: {listing.typeOfProperty}</p>
          <p>Style: {listing.style}</p>
          <p>Neighborhood: {listing.neighbourhood}</p>
          <p>Postal Code: {listing.postalCode}</p>
          <p>Association Fee: {listing.associationFee}</p>
        </div>
        <div className='prose prose-sm sm:prose lg:prose-lg xl:prose-xl mt-4'>
          <PortableText value={listing.description} />
        </div>
        <div className='mt-4'>
          <button className='w-full bg-blue-500 p-2 text-white'>Find out more, send an email now</button>
        </div>
      </div>

      {listing.location && (
        <div className='mt-10'>
          <h2 className='mb-2 text-xl font-semibold'>Location</h2>
          {/* <MapContainer center={[listing.location.lat, listing.location.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[listing.location.lat, listing.location.lng]} />
          </MapContainer> */}
        </div>
      )}
    </div>
  );
}
