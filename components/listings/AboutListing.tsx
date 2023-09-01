import { PortableText } from '@portabletext/react';

import styles from './ListingBody.module.css';
export default function AboutListing({ description }: { description: any[] }) {
  return (
    <div id='about-listing' className='flex flex-col items-start justify-start gap-[1rem]'>
      <h2 id='about-title' className='font-inherit relative m-0 font-medium text-inherit'>
        About This Property
      </h2>
      <div id='about-content' className={`relative m-0 inline-block max-w-[45.88rem] text-[1rem] font-light leading-[190%] text-grey ${styles.portableText}`}>
        <PortableText value={description} />
      </div>
    </div>
  );
}
