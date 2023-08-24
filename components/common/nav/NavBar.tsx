import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  logo: string;
}

const Logo = ({ logo }: LogoProps) => <Image width={200} height={200} className='relative h-[2.13rem] w-[15.36rem] object-cover' alt='' src={logo} />;

const NavLinks = ({ links }) => (
  <ul className='m-0 flex flex-row items-center justify-start gap-[2.5rem]' id='nav-links'>
    {links.map((link, index) => (
      <Link key={index} className='relative cursor-pointer font-medium text-[inherit] [text-decoration:none]' href={link.href}>
        {link.label}
      </Link>
    ))}
  </ul>
);

interface NavBarProps {
  links: { label: string; href: string }[];
  logo: string;
}

const NavBar = ({ links, logo }: NavBarProps) => {
  return (
    <header
      className='font-poppins border-gray box-border flex h-[5.63rem] flex-row items-center justify-start self-stretch border-[1px] border-solid px-[6.25rem] py-[1.44rem] text-left text-[0.88rem] text-black shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]'
      id='header'
    >
      <div className='flex w-[77.42rem] flex-row items-center justify-between'>
        <Link href='/'>
          <Logo logo={logo} />
        </Link>
        <NavLinks links={links} />
        {/* <ActionButtons/> */}
      </div>
    </header>
  );
};

export default NavBar;
