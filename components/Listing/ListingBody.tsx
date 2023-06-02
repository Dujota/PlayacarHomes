/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';

import styles from './ListingBody.module.css';

export default function ListingBody({ listing }) {
  // Use agent if available, otherwise use author
  const representative = listing.agent || listing.author;

  // Format price as currency
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price || 0);

  return (
    <div className='mx-auto max-w-2xl'>
      <div className={`border-b pb-4 ${styles.section}`}>
        <h2 className='mb-2 text-xl font-semibold'>Title</h2>
        <p>{listing.title}</p>
      </div>
      <div className={`mt-4 border-b pb-4 ${styles.section}`}>
        <h2 className='mb-2 text-xl font-semibold'>Description</h2>
        <div className={styles.portableText}>
          <PortableText value={listing.description} />
        </div>
      </div>
      <div className={`mt-4 border-b pb-4 ${styles.section}`}>
        <h2 className='mb-2 text-xl font-semibold'>Price</h2>
        <p>{`${formattedPrice}`}</p>
      </div>
      <div className={`mt-4 border-b pb-4 ${styles.section}`}>
        <h2 className='mb-2 text-xl font-semibold'>Location</h2>
        <p>{listing.location}</p>
      </div>

      <div className={`mt-4 border-b pb-4 ${styles.section}`}>
        <h2 className='mb-2 text-xl font-semibold'>Property Images</h2>
        {listing.gallery.images.map((image, index) => (
          // <img key={index} src={image.asset.url} alt={listing.title} className='my-2 h-auto w-full' />
          <Image
            key={index}
            className='h-auto w-full'
            width={2000}
            height={1000}
            alt={`Cover Image for ${listing.title}`}
            src={urlForImage(image).height(1000).width(2000).url()}
            sizes='100vw'
            // priority={priority}
          />
        ))}
      </div>
      <div className={`mt-4 border-b pb-4 ${styles.section}`}>
        <h2 className='mb-2 text-xl font-semibold'>Property Type</h2>
        <p>{listing.typeOfProperty}</p>
      </div>
      <div className={`mt-4 border-b pb-4 ${styles.section}`}>
        <h2 className='mb-2 text-xl font-semibold'>Amenities</h2>
        <ul>
          {listing.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      <div className={`mt-4 border-b pb-4 ${styles.section}`}>
        <h2 className='mb-2 text-xl font-semibold'>Beds</h2>
        <p>{listing.beds}</p>
      </div>
      <div className={`mt-4 border-b pb-4 ${styles.section}`}>
        <h2 className='mb-2 text-xl font-semibold'>Bedrooms</h2>
        <p>{listing.bedrooms}</p>
      </div>
      <div className={`mt-4 border-b pb-4 ${styles.section}`}>
        <h2 className='mb-2 text-xl font-semibold'>Bathrooms</h2>
        <p>{listing.bathrooms}</p>
      </div>
    </div>
  );
}
