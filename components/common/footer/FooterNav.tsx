import Link from 'next/link';

type FooterNavProps = {
  links: { href: string; text: string }[];
};

const FooterNav: React.FC<FooterNavProps> = ({ links }) => {
  return (
    <ul className='m-0 flex flex-col items-start justify-start gap-[2.19rem]'>
      {links.map((link, idx) => (
        <Link role='link' key={idx} className='relative cursor-pointer font-medium text-[inherit] [text-decoration:none]' href={link.href} aria-label={link.text}>
          {link.text}
        </Link>
      ))}
    </ul>
  );
};

export default FooterNav;
