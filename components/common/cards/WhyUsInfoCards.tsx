import Image from 'next/image';

function deriveImageSrc(position) {
  let imgSrc;

  switch (position) {
    case 0:
      imgSrc = '/hand.svg';
      break;
    case 1:
      imgSrc = '/property.svg';
      break;
    case 2:
      imgSrc = '/personal.svg';
      break;
    default:
      console.error('Invalid image type provided to InfoCard');
      imgSrc = '/property.svg';
  }

  return imgSrc;
}

export function InfoCard({ title, description, position }) {
  return (
    <>
      <Image width={200} height={200} className='relative h-[4rem] w-[4rem]' alt={title} src={deriveImageSrc(position)} />
      <div className='flex flex-col items-start justify-start gap-[0.5rem] sm:flex-1 '>
        <h5 className='font-inherit relative m-0 inline-block w-[22.5rem] font-medium leading-[140%] text-inherit sm:w-auto sm:self-stretch md:w-[18.75rem]'>{title}</h5>
        <p className='relative m-0 inline-block w-[22.5rem] text-[0.88rem] font-light leading-[170%] text-grey md:w-[18.75rem]'>{description}</p>
      </div>
    </>
  );
}
