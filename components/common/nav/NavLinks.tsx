import Link from 'next/link';

const NavLinks = ({ links, isMobile }) => (
  <div className='order-1 flex w-auto items-center justify-between md:hidden md:w-full' id='navbar-cta'>
    <ul className='border-gray-100 bg-gray-50 mt-0 flex flex-row space-x-8 rounded-lg border-0 bg-white p-0 font-medium rtl:space-x-reverse md:mt-4 md:flex-col md:border md:p-4'>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            key={index}
            // className='relative cursor-pointer font-medium text-[inherit] [text-decoration:none]'
            className='block cursor-pointer rounded p-0 hover:text-grey hover:underline md:bg-transparent md:px-3 md:py-2'
            aria-current={link.href} // TODO: add logic for current page
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// <ul className='m-0 mx-auto flex flex-row items-center justify-start gap-[2.5rem] sm:m-0 sm:gap-[1rem] tabletPortrait:ml-5' id='nav-links'>
//   {links.map((link, index) => (
//     <Link key={index} className='relative cursor-pointer font-medium text-[inherit] [text-decoration:none]' href={link.href}>
//       {link.label}
//     </Link>
//   ))}
// </ul>

export default NavLinks;
