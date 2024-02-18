import Link from 'next/link';

const NavLinks = ({ links, isMobile }) => {
  const navLinks = links?.map((link, index) => (
    <li className={`${isMobile ? '!ml-0 self-center' : ''}`} key={index}>
      <Link
        key={index}
        className='block cursor-pointer rounded bg-transparent px-3 py-2 hover:text-grey hover:underline'
        aria-current={link.href} // TODO: add logic for current page
        href={link.href}
      >
        {link.label}
      </Link>
    </li>
  ));

  if (isMobile) {
    return (
      <div className='order-1 w-full items-center justify-between' id='navbar-cta'>
        <ul className='border-gray-100 bg-gray-50 mt-4 flex  flex-col space-x-8 rounded-lg border-0 bg-white p-4 font-medium rtl:space-x-reverse'>{navLinks}</ul>
      </div>
    );
  }

  return (
    <div className='order-1 flex w-auto items-center justify-between nav:hidden nav:w-full' id='navbar-cta'>
      <ul className='border-gray-100 bg-gray-50 mt-0 flex flex-row space-x-8 rounded-lg border-0 bg-white p-0 font-medium rtl:space-x-reverse'>{navLinks}</ul>
    </div>
  );
};
export default NavLinks;
