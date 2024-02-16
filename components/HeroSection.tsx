import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({ heroSection }: { heroSection: any }) {
  return (
    <section className='w-[100vw] bg-slate-100'>
      <article className='mx-auto max-w-[85rem]  px-6 sm:px-4 lg:px-8'>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-1 md:items-center md:gap-8 xl:gap-20'>
          <div className='flex flex-col justify-center md:mt-5'>
            <h1 className='text-gray-800 block text-6xl font-bold dark:text-white sm:!text-3xl md:self-center md:text-4xl lg:leading-tight'>
              <span className='heading'>{heroSection.heading}</span>
            </h1>
            <p className='text-gray-800 dark:text-gray-400 mt-3 text-lg sm:text-center md:self-center'>{heroSection.tagline}</p>

            <div className='mt-7 inline-flex w-full gap-3 sm:grid md:justify-center'>
              <Link
                className='hover:bg-blue-700 dark:focus:ring-gray-600 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue px-4 py-3 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1'
                href='#'
              >
                Get started
                <Image alt='arrow' width={24} height={24} src='/right-arrow.svg' />
              </Link>
              <Link
                className='border-gray-200 text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-600 inline-flex items-center justify-center gap-x-2 rounded-lg border bg-white px-4 py-3 text-sm font-medium shadow-sm disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-900 dark:text-white dark:focus:outline-none dark:focus:ring-1'
                href='#'
              >
                Contact sales team
              </Link>
            </div>
          </div>

          <aside className='relative ms-4'>
            <Image
              width={800}
              height={600}
              alt='Main Cover Image'
              loading='eager'
              src={urlForImage(heroSection.image).height(600).width(800).url()}
              className='h-auto w-full rounded-md object-cover'
            />
          </aside>
        </div>
      </article>
    </section>
  );
}
