import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import { Listing } from 'lib/sanity.queries/listings';
import { capitalizeEveryWord } from 'lib/utils';
import Image from 'next/image';

interface PDFListingViewProps {
  listing: Listing;
  resource: string;
}

// Define portable text components for PDF styling
const portableTextComponents = {
  block: {
    normal: ({ children }) => <p className='text-gray-700 mb-4'>{children}</p>,
    h2: ({ children }) => <h2 className='mb-4 mt-6 text-xl font-semibold text-black'>{children}</h2>,
    h3: ({ children }) => <h3 className='mb-3 mt-4 text-lg font-semibold text-black'>{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className='text-gray-700 mb-4 list-disc pl-5'>{children}</ul>,
  },
  marks: {
    strong: ({ children }) => <strong className='font-bold'>{children}</strong>,
    em: ({ children }) => <em className='italic'>{children}</em>,
  },
};

const PDFListingView = ({ listing, resource }: PDFListingViewProps) => {
  return (
    <>
      {/* Logo */}
      <div className='mb-8 flex justify-center'>
        <Image width={500} height={500} src='/logo.png' alt='Playacar Homes Logo' className='h-16 w-auto' crossOrigin='anonymous' />
      </div>

      {/* Title and Basic Info */}
      <div className='mb-8'>
        <h1 className='mb-4 text-xl font-bold text-black'>{listing.title}</h1>
        <div className='text-gray-700 mb-2 text-sm'>
          Location: {listing.neighbourhood && `${listing.neighbourhood}, `}
          {listing.postalCode}
        </div>
        <div className='text-lg font-semibold text-blue'>
          {listing.mxnPrice
            ? new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(listing.price)
            : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.price)}
          {resource === 'rentals' && <span className='text-gray-600 text-sm'> / month</span>}
          {resource === 'vacation-rentals' && <span className='text-gray-600 text-sm'> / week</span>}
        </div>
      </div>

      {/* Property Details */}
      <div className='mb-8 grid grid-cols-2 gap-4 text-sm'>
        <div className='text-gray-700 flex flex-col gap-2'>
          <div>Bedrooms: {listing.bedrooms}</div>
          <div>Bathrooms: {listing.bathrooms}</div>
          <div>Area: {listing.area} m²</div>
          {listing.landArea && <div>Land Area: {listing.landArea} m²</div>}
        </div>
        <div className='text-gray-700 flex flex-col gap-2'>
          <div>Type: {listing.typeOfProperty}</div>
          <div>Status: {listing.status}</div>
          {listing.associationFee && (
            <div>
              Association Fee:{' '}
              {listing.mxnPrice
                ? new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(listing.associationFee)
                : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.associationFee)}
            </div>
          )}
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='mb-4 text-lg font-semibold text-black'>Key Features</h2>
        <div className='grid grid-cols-2 gap-4'>
          <div className='text-gray-700 flex flex-col gap-2 text-sm'>
            <div>Location: {listing.neighbourhood || 'N/A'}</div>
            <div>Property Type: {capitalizeEveryWord(listing.typeOfProperty) || 'N/A'}</div>
            <div>Status: {capitalizeEveryWord(listing.status) || 'N/A'}</div>
            <div>Style: {capitalizeEveryWord(listing.style) || 'N/A'}</div>
          </div>
          <div className='text-gray-700 flex flex-col gap-2 text-sm'>
            {resource === 'listings' && (
              <>
                <div>Land Size: {listing.landArea ? `${listing.landArea} m²` : 'N/A'}</div>
                <div>Construction Size: {listing.area ? `${listing.area} m²` : 'N/A'}</div>
              </>
            )}
            {(resource === 'rentals' || resource === 'vacation-rentals') && <div>Total Area: {listing.area ? `${listing.area} m²` : 'N/A'}</div>}
            {listing.amenities && listing.amenities.length > 0 && <div>Amenities: {listing.amenities.join(', ')}</div>}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='mb-8'>
        <h2 className='mb-4 text-lg font-semibold text-black'>Property Description</h2>
        {/* <div className='text-gray-700 text-sm'>{listing.excerpt}</div> */}
        <div className='text-gray-700 text-sm'>
          {/* @ts-ignore */}
          <PortableText value={listing.description} components={portableTextComponents} />
        </div>
      </div>

      {/* Image Grid */}
      <div className='mb-8 grid grid-cols-2 gap-4'>
        {listing.gallery?.images?.map((image, index) => (
          <div key={index} className='relative aspect-video'>
            <Image
              width={400}
              height={300}
              src={urlForImage(image).width(400).height(300).url()}
              alt={`${listing.title} - Image ${index + 1}`}
              className='h-full w-full rounded-lg object-cover'
              crossOrigin='anonymous'
            />
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <div className='border-gray-200 mt-8 border-t pt-8'>
        <h2 className='mb-4 text-xl font-semibold text-black'>Contact Information</h2>
        <div className='text-gray-700 flex flex-col gap-2'>
          {listing.agent ? (
            <>
              <div>Agent: {listing.agent.name}</div>
              {listing.agent.contact?.phone && <div>Phone: {listing.agent.contact.phone}</div>}
              {listing.agent.contact?.email && <div>Email: {listing.agent.contact.email}</div>}
            </>
          ) : listing.contact ? (
            <>
              {listing.contact.phone && <div>Phone: {listing.contact.phone}</div>}
              {listing.contact.email && <div>Email: {listing.contact.email}</div>}
            </>
          ) : (
            <div>Contact Playacar Homes for more information</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PDFListingView;
