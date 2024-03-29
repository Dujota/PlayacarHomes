import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import Newsletter from '../forms/NewsLetter';

export default function NewsLetterModal() {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const closedNewsLetterModal = Cookies.get('closedNewsLetterModal');
    const registeredNewsLetter = Cookies.get('registeredNewsLetter');

    if (registeredNewsLetter || closedNewsLetterModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, []);

  const sleepNewsLetter = () => {
    const oneWeekFromNow = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    Cookies.set('closedNewsLetterModal', new Date().toISOString(), { expires: oneWeekFromNow, path: '/' });
  };

  const registeredForNewsLetter = () => {
    Cookies.set('registeredNewsLetter', 'true', { path: '/' });
  };

  const closeModal = () => {
    if (formSubmitted) {
      registeredForNewsLetter();
    } else {
      sleepNewsLetter();
    }
    setShowModal(false);
  };

  const handleNewsLetterModalSubmit = () => {
    registeredForNewsLetter();
    setShowModal(false);
  };

  if (showModal) {
    return (
      <>
        <div className='fixed inset-0 z-[50000] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
          <div className='relative mx-auto mb-6 w-full max-w-4xl'>
            <div className='relative flex w-full flex-col rounded-lg border-0 bg-bg shadow-lg outline-none focus:outline-none'>
              {/* Close Modal */}
              <button
                className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none'
                onClick={closeModal}
              >
                <span className='mr-4 block h-auto w-6 bg-transparent text-4xl text-black outline-none focus:outline-none'>×</span>
              </button>

              {/*body*/}
              <div className='relative mb-[1.5rem] flex-auto p-1'>
                <Newsletter isModal={showModal} toggle={handleNewsLetterModalSubmit} setFormSubmitted={setFormSubmitted} />
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
