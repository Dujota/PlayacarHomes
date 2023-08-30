// Stat.tsx

interface StatProps {
  stat: string;
  description: string;
}

const Stat = ({ stat, description }: StatProps) => (
  <div className='flex flex-col items-center justify-start gap-[0.5rem]'>
    <div className='relative inline-block w-[18.75rem] font-semibold'>{stat}</div>
    <div className='relative inline-block w-[18.75rem] text-[0.94rem] text-grey'>{description}</div>
  </div>
);

export default Stat;
