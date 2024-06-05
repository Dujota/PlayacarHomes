import Link from 'next/link';

type FooterNavProps = {
  links: { href: string; text: string }[];
  toggle?: () => void;
};

const FooterNav: React.FC<FooterNavProps> = ({ links, toggle }) => {
  return (
    <ul className='m-0 flex flex-col items-start justify-start gap-[2.19rem]'>
      {links.map((link, idx) => {
        if (link.href === '#contact') {
          return (
            <div role='link' key={idx} className='relative cursor-pointer font-medium text-[inherit] [text-decoration:none]' aria-label={link.text} onClick={toggle}>
              {link.text}
            </div>
          );
        }

        return (
          <Link role='link' key={idx} className='relative cursor-pointer font-medium text-[inherit] [text-decoration:none]' href={link.href} aria-label={link.text}>
            {link.text}
          </Link>
        );
      })}
    </ul>
  );
};

export default FooterNav;
