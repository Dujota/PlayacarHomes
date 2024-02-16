export default function FeatureItem({ title, value, resource }: { title: string; value: string; resource?: string }) {
  return (
    <div className='flex w-[20rem] flex-row items-center justify-between'>
      <div className='relative'>
        {title} {resource === 'vacation-rentals' && <span className='relative text-[0.88rem] font-medium text-grey'>/ week</span>}
        {resource === 'rentals' && <span className='relative text-[0.88rem] font-medium text-grey'>/ month</span>}
      </div>
      <div className='relative text-right font-medium text-black'>{value}</div>
    </div>
  );
}
