export function deriveLocation(location?: string, neighbourhood?: string, postalCode?: string) {
  let locationString = '';

  if (location) {
    locationString = location;
  } else if (neighbourhood && postalCode) {
    locationString = `${neighbourhood}, ${postalCode}`;
  } else if (neighbourhood) {
    locationString = `${neighbourhood}`;
  } else if (postalCode) {
    locationString = `${postalCode}`;
  } else {
    locationString = 'Quintana Roo, Mexico';
  }

  return capitalizeEveryWord(locationString);
}

export function capitalizeEveryWord(str: string) {
  if (typeof str !== 'string') return '';

  return str.replace(/\b[a-z]/g, function (match) {
    return match.toUpperCase();
  });
}

export function formatPrice(price: number | undefined) {
  if (typeof price !== 'number') return '';

  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price || 0);
}

export function deriveCtaHref(type) {
  if (type === 'posts') {
    return '/blog';
  }

  if (type === 'listings') {
    return '/listings';
  }
}
