export function deriveLocation(location?: string, neighbourhood?: string, postalCode?: string) {
  if (location) {
    return location;
  } else {
    return `${neighbourhood}, ${postalCode}`;
  }
}
