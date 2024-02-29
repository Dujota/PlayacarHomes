export const footerNavLinks = [
  { href: '/listings?q=buy', text: 'Buy' },
  { href: '/listings?q=rent', text: 'Rent' },
  // { href: '/listings?q=commercial', text: 'Commercial' },
  { href: '/blog', text: 'News' },
  { href: '#contact', text: 'Get An Estimate' },
];

export const footerNavAltLinks = [
  // { href: '#about', text: 'About Playacar Homes' },
  { href: '/blog', text: 'FAQ' },
  { href: '#contact', text: 'Contact' },
  { href: '#privacy-policy', text: 'Privacy Policy' },
  { href: '#toc', text: 'Terms & Conditions' },
];

export const contactInfo = [
  { type: 'phone', icon: '/phone.svg', title: 'Phone Number', description: '+52 984 113 0567' },
  { type: 'email', icon: '/email.svg', title: 'Email Address', description: 'playacarrealty@gmail.com' },
  { type: 'whatsapp', icon: '/whatsapp-white.svg', title: 'Our Location', description: 'WhatsApp', href: 'https://wa.me/529841130567' },
];
export const logo = '/logo.png';

export const socialIcons = [
  { label: 'Facebook', iconSrc: '/facebook.svg', href: 'https://www.facebook.com/homesplayacar' },
  { label: 'Instagram', iconSrc: '/instagram.svg', href: 'https://www.instagram.com/playacar_homes' },
  { label: 'WhatsApp', iconSrc: '/whatsapp.svg', href: 'https://wa.me/529841130567' },
];

export const currentYear = new Date().getFullYear();

export const navBarLinks = [
  { label: 'For Sale', href: '/listings?q=buy' },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Vacation Rentals', href: '/vacation-rentals' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

// Detail Icons
export const detailIcons = {
  beds: { icon: '/bed.svg', label: 'Beds' },
  baths: { icon: '/bath.svg', label: 'Bathrooms' },
  area: { icon: '/area.svg', label: 'm²' },
  type: { icon: '/paint-black.svg', label: 'Type' },
};
