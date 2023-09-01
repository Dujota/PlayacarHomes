import { currentYear } from 'lib/constants';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type ContactCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description }) => {
  return (
    <div className='flex h-[11rem] flex-col items-center justify-start gap-[2rem]'>
      <Image width={200} height={200} className='relative max-h-full w-[4.5rem] flex-1' alt={title} src={icon} />
      <div className='flex flex-col items-start justify-start gap-[1rem]'>
        <p className='relative m-0 inline-block w-[25.19rem] font-medium'>{title}</p>
        <p className='relative m-0 inline-block w-[25.19rem] text-[1rem] text-grey'>{description}</p>
      </div>
    </div>
  );
};

type SocialIconsProps = {
  icons: string[];
};

const SocialIcons: React.FC<SocialIconsProps> = ({ icons }) => {
  return (
    <div className='flex flex-row items-start justify-start gap-[2rem]'>
      {icons.map((icon, idx) => (
        <Image height={200} width={200} key={idx} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt='' src={icon} />
      ))}
    </div>
  );
};

type FooterNavProps = {
  links: { href: string; text: string }[];
};

const FooterNav: React.FC<FooterNavProps> = ({ links }) => {
  return (
    <ul className='m-0 flex flex-col items-start justify-start gap-[2.19rem]'>
      {links.map((link, idx) => (
        <Link key={idx} className='relative cursor-pointer font-medium text-[inherit] [text-decoration:none]' href={link.href}>
          {link.text}
        </Link>
      ))}
    </ul>
  );
};

type FooterType = {
  contactInfo: ContactCardProps[];
  logo: string;
  socialIcons: string[];
  footerNavLinks: { href: string; text: string }[];
  footerNavAltLinks: { href: string; text: string }[];
};

const Footer: NextPage<FooterType> = ({ contactInfo, logo, socialIcons, footerNavLinks, footerNavAltLinks }) => {
  return (
    <footer className='font-poppins flex flex-col items-center justify-start gap-[4.69rem] self-stretch border-[1px] border-solid border-gray px-[0rem] pb-[0.63rem] pt-[5.63rem] text-left text-[1.31rem] text-grey shadow-[0px_-20px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-[1rem] self-stretch text-center text-black'>
        {contactInfo.map((info, idx) => (
          <ContactCard key={idx} {...info} />
        ))}
      </div>

      <div className='flex flex-row flex-wrap items-center justify-center gap-[11.31rem] self-stretch overflow-hidden text-[0.94rem] md:w-auto md:gap-[5rem] md:self-stretch'>
        <div className='flex flex-col items-start justify-center gap-[1.88rem] overflow-hidden sm:box-border sm:pl-[1rem] sm:pr-[1rem]'>
          <Link href='/'>
            <Image height={500} width={200} className='relative h-[2.75rem] w-[19.88rem] object-cover' alt='Logo' src={logo} />
          </Link>
          <SocialIcons icons={socialIcons} />
        </div>
        <FooterNav links={footerNavLinks} />
        <FooterNav links={footerNavAltLinks} />
      </div>

      <div className='flex flex-row items-center justify-center self-stretch text-[0.88rem]'>
        <p className='relative m-0 font-light'>
          © Copyright Playacar Homes {currentYear}, All rights reserved. Developed by <Link href='https://www.denisdujota.dev/'>Dujota Studios</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
