import Image from 'next/image';
import Link from 'next/link';

import Logo from '../icons/Logo';
import NavLinks from './NavLinks';

interface NavBarProps {
  links: { label: string; href: string }[];
  logo: string;
}
// OLD
// const NavBar = ({ links, logo }: NavBarProps) => {
//   return (
//     <header
//       className='font-poppins box-border flex h-[5.63rem] flex-row items-center justify-start self-stretch border-[1px] border-solid border-gray px-[6.25rem] py-[1.44rem] text-left text-[0.88rem] text-black shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]'
//       id='header'
//     >
//       <div className='flex w-[77.42rem] flex-row items-center justify-between'>
//         <Logo logo={logo} />
//         <NavLinks links={links} />
//         {/* <ActionButtons/> */}
//       </div>
//     </header>
//   );
// };

// CURRENT

// const NavBar = ({ links, logo }: NavBarProps) => {
//   return (
//     <header
//       className='font-poppins justify-betweenbackdrop-blur-md flex flex-row items-center justify-start border border-gray
//       bg-gradient-to-r from-white to-transparent px-4 py-2 text-left text-black
//       shadow-lg backdrop-filter md:justify-between md:px-3 md:py-3'
//       id='header'
//     >
//       <div className='flex w-full flex-row items-center'>
//         <Logo logo={logo} />
//         <NavLinks links={links} />
//       </div>
//     </header>
//   );
// };

function NavBar({ links, logo }: NavBarProps) {
  return (
    <nav className='border-gray-200 bg-white'>
      <div className='max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4'>
        <Logo logo={logo} />

        {/* CTA LINKS */}
        <div className='order-2 flex space-x-0 rtl:space-x-reverse md:space-x-3'>
          <button
            type='button'
            className='hover:bg-blue-700 dark:focus:ring-gray-600 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue px-4 py-3 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1'
          >
            Get started
          </button>
          <button
            data-collapse-toggle='navbar-cta'
            type='button'
            className='text-gray-500 hover:bg-gray-100 focus:ring-gray-200 hidden h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:inline-flex'
            aria-controls='navbar-cta'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg className='h-5 w-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
              <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 1h15M1 7h15M1 13h15' />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className='order-1 flex w-auto items-center justify-between md:hidden md:w-full' id='navbar-cta'>
          <ul className='border-gray-100 bg-gray-50 mt-0 flex flex-row space-x-8 rounded-lg border-0 bg-white p-0 font-medium rtl:space-x-reverse md:mt-4 md:flex-col md:border md:p-4'>
            <li>
              <Link href='#' className='block rounded p-0 hover:text-grey hover:underline md:bg-transparent md:px-3 md:py-2' aria-current='page'>
                Home
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:bg-gray-100 block rounded p-0 hover:text-grey hover:underline  md:px-3 md:py-2 md:hover:bg-transparent'>
                About
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:bg-gray-100 block rounded p-0 hover:text-grey hover:underline  md:px-3 md:py-2 md:hover:bg-transparent'>
                Services
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:bg-gray-100 block rounded p-0 hover:text-grey hover:underline  md:px-3 md:py-2 md:hover:bg-transparent'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
