import Image from 'next/image';
import Link from 'next/link';

export type ContactCardProps = {
  icon: string;
  title: string;
  description: string;
  type: string;
  href?: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ href, type, icon, title, description }) => {
  return (
    <article className='mx-8 flex w-1/4 flex-col items-center justify-start gap-4 p-2 md:w-2/3'>
      <figure className='flex-shrink-0'>
        <Image width={200} height={200} className='relative w-16 md:w-20' alt={title} src={icon} />
        <figcaption className='sr-only'>{title}</figcaption>
      </figure>
      <div className='flex w-full flex-col items-center justify-start gap-2 '>
        <p className='m-0 h-6 w-full text-center font-medium  '>{title}</p>
        {type === 'phone' && <p className='m-0 h-12 w-full text-center text-grey '>{description}</p>}

        {type === 'email' && (
          <Link href={`mailto:${description}`} className='m-0 block h-12 w-full text-center text-grey '>
            {description}
          </Link>
        )}

        {type === 'whatsapp' && (
          <Link href={href} target='_blank' className='m-0 block h-12 w-full text-center text-grey '>
            {description}
          </Link>
        )}
      </div>
    </article>
  );
};

export default ContactCard;
