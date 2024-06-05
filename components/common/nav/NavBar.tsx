import { useIsVisible } from 'lib/hooks/useIsVisible';
import Link from 'next/link';
import { useRef, useState } from 'react';

import Logo from '../icons/Logo';
import NavLinks from './NavLinks';

interface NavBarProps {
  links: { label: string; href: string }[];
  logo: string;
}

function NavBar({ links, logo }: NavBarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const closeRef = useRef();
  const openRef = useRef();
  const isCloseVisible = useIsVisible(closeRef);
  const isOpenVisible = useIsVisible(openRef);

  return (
    <nav className='border-gray-200 bg-white'>
      <div className='max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4'>
        <Logo logo={logo} />

        {/* CTA LINKS */}
        <div className='order-2 flex space-x-0 rtl:space-x-reverse nav:order-1 nav:space-x-3'>
          <Link
            type='button'
            className='hover:bg-blue-700 dark:focus:ring-gray-600 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue px-4 py-3 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1'
            href='/#suggested-listings'
            shallow={true}
          >
            Get started
          </Link>
          {!showMobileMenu ? (
            <button
              data-collapse-toggle='navbar-cta'
              type='button'
              className='text-gray-500 hover:bg-gray-100 focus:ring-gray-200 hidden h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 nav:inline-flex'
              aria-controls='navbar-cta'
              aria-expanded='false'
              onClick={() => setShowMobileMenu(true)}
              ref={openRef}
            >
              <span className='sr-only'>Open main menu</span>
              <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
              </svg>
            </button>
          ) : (
            <button
              data-collapse-toggle='navbar-cta'
              type='button'
              className='text-gray-500 hover:bg-gray-100 focus:ring-gray-200 hidden h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 nav:inline-flex'
              aria-controls='navbar-cta'
              aria-expanded='true'
              onClick={() => setShowMobileMenu(false)}
              ref={closeRef}
            >
              <span className='sr-only'>Close main menu</span>
              <svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M27 9L9 27M9 9L27 27' stroke='#101828' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </button>
          )}
        </div>

        {/* Links */}
        <NavLinks isMobile={showMobileMenu && (isCloseVisible || isOpenVisible)} links={links} />
      </div>
    </nav>
  );
}

export default NavBar;
