import Link from 'next/link';

const NavLinks = ({ links }) => (
  <ul className='m-0 mx-auto flex flex-row items-center justify-start gap-[2.5rem] sm:m-0 sm:gap-[1rem] tabletPrtrait:ml-5' id='nav-links'>
    {links.map((link, index) => (
      <Link key={index} className='relative cursor-pointer font-medium text-[inherit] [text-decoration:none]' href={link.href}>
        {link.label}
      </Link>
    ))}
  </ul>
);

export default NavLinks;
