import { currentYear } from 'lib/constants';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import ContactCard, { ContactCardProps } from '../cards/ContactCard';
import ContactDetails from './ContactDetails';
import FooterNav from './FooterNav';
import SocialIcons from './SocialIcons';

type FooterType = {
  contactInfo: ContactCardProps[];
  logo: string;
  socialIcons: { label: string; iconSrc: string }[];
  footerNavLinks: { href: string; text: string }[];
  footerNavAltLinks: { href: string; text: string }[];
};

const Footer: NextPage<FooterType> = ({ contactInfo, logo, socialIcons, footerNavLinks, footerNavAltLinks }) => {
  return (
    <footer
      role='contentinfo'
      aria-label='footer'
      className='font-poppins flex flex-col items-center justify-start gap-[4.69rem] self-stretch border-[1px] border-solid border-gray px-[0rem] pb-[0.63rem] pt-[5.63rem] text-left text-[1.31rem] text-grey shadow-[0px_-20px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]'
    >
      <ContactDetails contactInfo={contactInfo} />

      <div className='flex flex-row flex-wrap items-center justify-center gap-[11.31rem] self-stretch overflow-hidden text-[0.94rem] md:w-auto md:gap-[5rem] md:self-stretch'>
        <div className='flex flex-col items-start justify-center gap-[1.88rem] overflow-hidden sm:box-border sm:pl-[1rem] sm:pr-[1rem] tablet:w-full tablet:grow-[2] tablet:items-center'>
          <Link href='/'>
            <Image height={500} width={200} className='relative h-[2.75rem] w-[19.88rem] object-cover' alt='Logo' src={logo} />
          </Link>
          <SocialIcons icons={socialIcons} />
        </div>
        <FooterNav links={footerNavLinks} />
        <FooterNav links={footerNavAltLinks} />
      </div>

      <div className='flex flex-row items-center justify-center self-stretch text-[0.88rem]'>
        <p className='relative m-2 font-light'>
          © Copyright Playacar Homes {currentYear}, All rights reserved. Developed by <Link href='https://www.denisdujota.dev/'>Dujota Studios</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
