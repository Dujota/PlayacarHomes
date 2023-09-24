import Image from 'next/image';
import React, { useState } from 'react';

import ContactForm from '../forms/ContactForm';
// Make sure to provide the correct import path

export default function FloatingActionButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div id='fab-wrapper' className={`fixed bottom-8 right-8 z-[9999] sm:!right-2 md:!bottom-4 md:!right-4 ${showForm ? 'sm:!left-0 sm:!w-full' : ''}`}>
      {showForm ? (
        <div className='animate-fadeIn transition-all duration-500'>
          <div className='absolute right-[1rem] top-[1rem] z-[99999]'>
            <button className='animate-fadeOut transition-all duration-500' onClick={() => setShowForm(false)}>
              <Image src='/close.svg' width={30} height={30} alt='close contact form icon' aria-label='close contact form icon' />
            </button>
          </div>
          <ContactForm toggle={() => setShowForm(false)} />
        </div>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          id='fab'
          className='mouse h-16 w-16 rounded-full bg-blue p-0 shadow transition
                    duration-200 ease-in hover:bg-[#53788F] focus:outline-none active:shadow-lg
                    sm:!h-10 sm:!w-10 md:!h-12 md:!w-12'
        >
          <Image width={50} height={50} className='inline-block h-10 w-10 md:!h-8 md:!w-8' alt='contact floating action button' src='/msg.svg' />
        </button>
      )}
    </div>
  );
}
