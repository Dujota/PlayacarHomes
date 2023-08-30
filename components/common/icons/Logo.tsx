import Image from 'next/image';

interface LogoProps {
  logo: string;
}

const Logo = ({ logo }: LogoProps) => <Image width={200} height={200} className='relative h-[2.13rem] w-[15.36rem] object-contain' alt='' src={logo} />;

export default Logo;
