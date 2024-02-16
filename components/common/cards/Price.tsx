import { formatMXN, formatPrice } from 'lib/helpers/price-helpers';

export default function Price({ resource = 'listings', price, isMxn }) {
  const cost = isMxn ? formatMXN(price) : `${formatPrice(price)} USD`;

  return (
    <>
      <span className='relative font-medium'>{cost}</span>
      {resource === 'vacation-rentals' && <span className='relative text-[0.88rem] font-medium text-grey'>/ week</span>}
      {resource === 'rentals' && <span className='relative text-[0.88rem] font-medium text-grey'>/ month</span>}
    </>
  );
}
