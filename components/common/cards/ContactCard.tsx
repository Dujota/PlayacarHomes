import Image from 'next/image';

export type ContactCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description }) => {
  return (
    <article className='mx-8 flex w-1/4 flex-col items-center justify-start gap-4 p-2 md:w-2/3'>
      <figure className='flex-shrink-0'>
        <Image width={200} height={200} className='relative w-16 md:w-20' alt={title} src={icon} />
        <figcaption className='sr-only'>{title}</figcaption>
      </figure>
      <div className='flex w-full flex-col items-center justify-start gap-2 '>
        <p className='m-0 h-6 w-full text-center font-medium  '>{title}</p>
        <p className='m-0 h-12 w-full text-center text-grey  '>{description}</p>
      </div>
    </article>
  );
};

export default ContactCard;
