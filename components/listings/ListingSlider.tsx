import 'react-image-gallery/styles/css/image-gallery.css';

import { urlForImage } from 'lib/sanity.image';
import { Listing } from 'lib/sanity.queries/listings';
import { useMemo, useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';

type ListingSliderProps = {
  listing: Listing;
};

export default function ListingSlider({ listing }: ListingSliderProps) {
  const imageGalleryRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const images = useMemo(
    () =>
      listing.gallery.images.map((image, idx) => ({
        fullscreen: urlForImage(image).height(1000).width(2000).url(),
        original: urlForImage(image).height(400).width(800).url(),
        thumbnail: urlForImage(image).height(100).width(200).url(),
        originalAlt: `${listing.title} image ${idx + 1} of ${listing.gallery.images.length}`,
        thumbnailAlt: `Thumbnail #${idx + 1} for ${listing.title}`,
        thumbnailTitle: `Thumbnail #${idx + 1} for ${listing.title}`,
        loading: idx === 0 ? 'eager' : 'lazy',
      })),
    [listing.gallery.images, listing.title]
  );

  const handleImageClick = () => {
    imageGalleryRef?.current?.toggleFullScreen();
  };

  const handleScreenChange = (bool) => {
    setIsFullScreen(bool);
  };

  return (
    <section id='listing-slider' className='flex flex-row items-start justify-center gap-[1rem] self-stretch'>
      <ImageGallery
        items={images}
        showIndex
        onClick={handleImageClick}
        ref={imageGalleryRef}
        thumbnailPosition={isFullScreen ? 'bottom' : 'right'}
        onScreenChange={handleScreenChange}
      />
    </section>
  );
}
