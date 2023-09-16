import Image from 'next/image';

export type ContactCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description }) => {
  return (
    <article className='flex h-[11rem] flex-col items-center justify-start gap-[2rem]'>
      <figure>
        <Image width={200} height={200} className='relative max-h-full w-[4.5rem] flex-1' alt={title} src={icon} />
        <figcaption className='sr-only'>{title}</figcaption>
      </figure>
      <div className='flex flex-col items-start justify-start gap-[1rem]'>
        <p className='relative m-0 inline-block w-[25.19rem] font-medium'>{title}</p>
        <p className='relative m-0 inline-block w-[25.19rem] text-[1rem] text-grey'>{description}</p>
      </div>
    </article>
  );
};

export default ContactCard;
