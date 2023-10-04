import { useState } from 'react';

import Newsletter from '../NewsLetter';

export default function LargeModal() {
  const [showModal, setShowModal] = useState(true);

  if (showModal) {
    return (
      <>
        <div className='fixed inset-0 z-[50000] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
          <div className='relative mx-auto my-6 w-auto max-w-6xl md:w-full'>
            <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
              {/* Close Modal */}
              <button
                className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none'
                onClick={() => setShowModal(false)}
              >
                <span className='block h-6 w-6 bg-transparent text-2xl text-black outline-none focus:outline-none'>×</span>
              </button>

              {/*body*/}
              <div className='relative mb-[1.5rem] flex-auto p-1'>
                <Newsletter
                  isModal={showModal}
                  toggle={() => {
                    setShowModal(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Background Overlay */}
        <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
      </>
    );
  }

  return null;
}
