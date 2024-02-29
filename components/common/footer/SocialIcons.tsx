import Image from 'next/image';
import Link from 'next/link';

type SocialIconsProps = {
  icons: { iconSrc: string; label: string; href: string }[];
};

const SocialIcons: React.FC<SocialIconsProps> = ({ icons }) => {
  return (
    <div className='flex flex-row items-start justify-start gap-[2rem]' role='list'>
      {icons.map((icon, idx) => (
        <div key={idx} role='listitem'>
          <Link target='_blank' href={icon.href}>
            <Image height={200} width={200} className='relative h-[1.5rem] w-[1.5rem] shrink-0 overflow-hidden' alt={icon.label} src={icon.iconSrc} aria-label={icon.label} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
