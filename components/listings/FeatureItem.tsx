export default function FeatureItem({ title, value }) {
  return (
    <div className='flex w-[20rem] flex-row items-center justify-between'>
      <div className='relative'>{title}</div>
      <div className='relative text-right font-medium text-black'>{value}</div>
    </div>
  );
}
