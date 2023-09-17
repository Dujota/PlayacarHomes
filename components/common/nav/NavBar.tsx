import Logo from '../icons/Logo';
import NavLinks from './NavLinks';

interface NavBarProps {
  links: { label: string; href: string }[];
  logo: string;
}

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

const NavBar = ({ links, logo }: NavBarProps) => {
  return (
    <header
      className='font-poppins flex flex-row items-center justify-start border border-gray bg-gradient-to-r from-white to-transparent px-4 py-2 text-left text-black shadow-lg backdrop-blur-md backdrop-filter md:px-8 md:py-3'
      id='header'
    >
      <div className='flex w-full flex-row items-center justify-between md:w-auto'>
        <Logo logo={logo} />
        <NavLinks links={links} />
      </div>
    </header>
  );
};

export default NavBar;
