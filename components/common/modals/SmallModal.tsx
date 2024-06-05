import { useState } from 'react';

import Newsletter from '../forms/NewsLetter';

export default function SmallModal() {
  const [showModal, setShowModal] = useState(true);

  if (showModal) {
    return (
      <>
        <button>Hello</button>
        <div id='small-modal' className='fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
          <div className='relative mx-auto my-6 w-auto max-w-sm'>
            {/*content*/}
            <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
              {/*header*/}
              <div className='flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5'>
                <h3 className='text-3xl font-semibold'>Modal Title</h3>
                <button
                  className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none'
                  onClick={() => setShowModal(false)}
                >
                  <span className='block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none'>×</span>
                </button>
              </div>
              {/*body*/}
              <div className='relative flex-auto p-6'>
                <Newsletter />
              </div>

              {/*footer*/}
              <div className='flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6'>
                <button
                  className='background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none'
                  type='button'
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className='mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600'
                  type='button'
                  onClick={() => setShowModal(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
      </>
    );
  }

  return null;
}
