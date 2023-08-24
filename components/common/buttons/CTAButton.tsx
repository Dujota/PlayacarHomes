import Link from 'next/link';

interface CTAButtonProps {
  label: string;
  href?: string;
}

const CTAButton = ({ label, href }: CTAButtonProps) => (
  <Link href={href}>
    <button className='flex cursor-pointer flex-row items-center justify-center bg-blue px-[2rem] pb-[0.69rem] pt-[0.75rem] [border:none]'>
      <div className='font-poppins relative text-left text-[0.88rem] font-medium text-white'>{label}</div>
    </button>
  </Link>
);

export default CTAButton;
