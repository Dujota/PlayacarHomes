import ContactForm from '../forms/ContactForm';

export default function ContactFormModal({ setShowModal, showModal }) {
  const closeModal = () => {
    setShowModal(false);
  };

  const handleNewsLetterModalSubmit = () => {
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
              <div className='relative mx-auto my-0 flex-auto p-1'>
                <ContactForm toggle={handleNewsLetterModalSubmit} />
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
