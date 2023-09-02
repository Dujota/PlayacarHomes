import Logo from '../icons/Logo';
import NavLinks from './NavLinks';

interface NavBarProps {
  links: { label: string; href: string }[];
  logo: string;
}

const NavBar = ({ links, logo }: NavBarProps) => {
  return (
    <header
      className='font-poppins box-border flex h-[5.63rem] flex-row items-center justify-start self-stretch border-[1px] border-solid border-gray px-[6.25rem] py-[1.44rem] text-left text-[0.88rem] text-black shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]'
      id='header'
    >
      <div className='flex w-[77.42rem] flex-row items-center justify-between'>
        <Logo logo={logo} />
        <NavLinks links={links} />
        {/* <ActionButtons/> */}
      </div>
    </header>
  );
};

export default NavBar;
