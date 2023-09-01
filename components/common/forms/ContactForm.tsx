type ContactFormType = {
  fullNameInput?: string;
  buttonText?: string;
};

const bg =
  'box-border h-[571px] w-[403px] rounded-2xl border-[1px] border-solid border-gray shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]';

const ContactForm = ({ fullNameInput, buttonText }: ContactFormType) => {
  return (
    <div className={'font-poppins relative h-[571px] w-[403px] text-left text-5xl text-black' + ' ' + bg}>
      <div className='absolute left-[27px] top-[32px] flex flex-col items-center justify-start gap-[32px]'>
        <div className='flex flex-col items-start justify-start gap-[16px]'>
          <h2 className='font-inherit relative m-0 inline-block w-[350px] font-medium text-inherit'>Ask More Details</h2>
          <div className='relative inline-block w-[350px] text-sm leading-[170%] text-grey'>
            Interested in this property? Get in touch with the owner directly using the form below. Submit your inquiry, and the owner will contact you.
          </div>
        </div>
        <div className='flex flex-col items-start justify-start gap-[32px] text-sm text-grey'>
          <div className='flex flex-col items-start justify-start gap-[12px]'>
            <input className='font-poppins relative h-[60px] w-[350px] bg-[transparent] text-sm font-light [border:none]' type='text' placeholder='Phone Number' />
            <textarea className='font-poppins relative h-40 w-[350px] bg-[transparent] text-sm font-light [border:none]' placeholder='Your Message' />
          </div>
          <button className='flex cursor-pointer flex-row items-center justify-center bg-blue pb-[11px] pl-[124px] pr-[123px] pt-3 [border:none]'>
            <div className='font-poppins relative text-left text-sm font-medium text-white'>Send Message</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

// {/* <div className='absolute left-[calc(50%_-_201.5px)] top-[0px] ' /> */}

//{
/* <div className='relative h-[60px] w-[350px]'>
              <div className='absolute left-[0px] top-[0px] box-border h-[60px] w-[350px] border-[1px] border-solid border-lightslategray bg-slategray-200' />
              <div className='absolute left-[12px] top-[20px] font-light'>{fullNameInput}</div>
            </div>
            <div className='relative h-[60px] w-[350px]'>
              <div className='absolute left-[0px] top-[0px] box-border h-[60px] w-[350px] border-[1px] border-solid border-lightslategray bg-slategray-200' />
              <div className='absolute left-[12px] top-[20px] font-light'>{buttonText}</div>
            </div> */
//}
