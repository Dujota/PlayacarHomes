export default function Price({ resource = 'listings', price }) {
  return (
    <>
      <span className='relative font-medium'>{`$${new Intl.NumberFormat().format(price)}`}</span>
      {resource !== 'listings' && <span className='relative text-[0.88rem] font-medium text-grey'>/ month</span>}
    </>
  );
}
