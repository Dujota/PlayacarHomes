import { useEffect, useState } from 'react';

export const useImageLoader = (imageUrls: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrls.length) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    const images = imageUrls.map((url) => {
      const img = new Image();
      img.src = url;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count errors as loaded to prevent hanging
      return img;
    });

    return () => {
      // Cleanup
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return imagesLoaded;
};
