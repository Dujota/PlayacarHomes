import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  logo: string;
}

const Logo = ({ logo }: LogoProps) => (
  <Link href='/'>
    <Image width={200} height={200} className='relative h-[2.13rem] w-[15.36rem] object-contain' alt='' src={logo} />
  </Link>
);

export default Logo;
