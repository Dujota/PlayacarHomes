import ContactCard, { ContactCardProps } from '../cards/ContactCard';

interface ContactDetailsProps {
  contactInfo: ContactCardProps[];
}

// export default function ContactDetails({ contactInfo }: ContactDetailsProps) {
//   return (
//     <div className='flex flex-row flex-wrap items-center justify-center gap-[1rem] self-stretch text-center text-black'>
//       {contactInfo.map((info, idx) => (
//         <ContactCard key={idx} {...info} />
//       ))}
//     </div>
//   );
// }

// Best so far

export default function ContactDetails({ contactInfo }: ContactDetailsProps) {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center gap-1 self-stretch text-center text-black md:flex-col'>
      {contactInfo.map((info, idx) => (
        <ContactCard key={idx} {...info} />
      ))}
    </div>
  );
}

// export default function ContactDetails({ contactInfo }: ContactDetailsProps) {
//   return (
//     <div className='flex flex-row flex-wrap items-center justify-center gap-1 self-stretch px-4 text-center text-black md:flex-col'>
//       {contactInfo.map((info, idx) => (
//         <ContactCard key={idx} {...info} />
//       ))}
//     </div>
//   );
// }
