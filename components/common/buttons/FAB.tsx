import Image from 'next/image';

export default function FAB({ toggle }) {
  return (
    <div id='fab-wrapper' className='fixed bottom-8 right-8 z-[9999] sm:!right-2 md:!bottom-4 md:!right-4'>
      <button
        id='fab'
        className='mouse h-16 w-16 rounded-full bg-blue p-0 shadow transition
                  duration-200 ease-in hover:bg-[#53788F] focus:outline-none active:shadow-lg
                  sm:!h-10 sm:!w-10 md:!h-12 md:!w-12'
      >
        {/* <svg viewBox='0 0 20 20' enable-background='new 0 0 20 20' className='inline-block h-6 w-6'>
          <path
            fill='#FFFFFF'
            d='M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z'
          />
        </svg> */}
        <Image
          width={50}
          height={50}
          className='inline-block h-10 w-10 md:!h-8 md:!w-8'
          alt='contact floating action button' // Use the title as alt text
          src='/msg.svg'
        />
      </button>
    </div>
  );
}
