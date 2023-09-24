import { useState } from 'react';

type ContactFormType = {
  buttonText?: string;
  toggle?: () => void;
};

// const bg =
//   'box-border h-[571px] w-[403px] rounded-2xl border-[1px] border-solid border-gray shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]';
// const bg =
//   'box-border w-[403px] rounded-2xl border-[1px] border-solid border-gray shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#fcfcfd,_rgba(252,_252,_253,_0.83))]';
const bg =
  'box-border w-[403px] rounded-2xl border-[1px] border-solid border-gray shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#F9F9F9,_rgba(249,_249,_249,_0.83))]';

const sticky = 'sticky top-0';

const inputStyles = 'p-2 border-1 border-solid bg-[rgba(119,126,144,0.05)] border-[rgba(114,151,175,0.25)] rounded';

const ContactForm = ({ buttonText = 'Send Message', toggle }: ContactFormType) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ email: '', phoneNumber: '', message: '' });

  const validateEmail = (inputEmail) => {
    // Regular expression to check common email format
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(inputEmail);
  };

  const validate = () => {
    let hasError = false;
    let newErrors = { email: '', phoneNumber: '', message: '' };

    if (!phoneNumber.trim() || !/^\+?[\d\s-]{10,15}$/.test(phoneNumber.replace(/[-\s]+/g, '').trim())) {
      newErrors.phoneNumber = 'Valid phone number is required.';
      hasError = true;
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required.';
      hasError = true;
    }
    if (!email.trim() || !validateEmail(email)) {
      newErrors.email = 'Valid email is required.';
      hasError = true;
    }

    setErrors(newErrors);
    return !hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(`Email: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`);
      setPhoneNumber('');
      setMessage('');
      setEmail('');
      toggle();
    }
  };

  return (
    <div id='contact-form' className={`font-poppins relative w-[403px] rounded-2xl p-[32px] text-left text-5xl text-black ${bg} ${sticky} ${toggle ? 'sm:!w-full' : ''}`}>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center justify-start gap-[32px]'>
          <div className='flex flex-col items-start justify-start gap-[16px]'>
            <h2 className='font-inherit relative m-0 inline-block w-[350px] font-medium text-inherit'>Ask More Details</h2>
            <div className='relative inline-block w-[350px] text-sm leading-[170%] text-grey'>
              Interested in this property? Get in touch with the owner directly using the form below. Submit your inquiry, and the owner will contact you.
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-[32px] text-sm text-grey'>
            <div className='flex flex-col items-start justify-start gap-[12px]'>
              <input
                className={`font-poppins relative h-[60px] w-[350px] bg-[transparent] text-sm font-light [border:none] ${inputStyles}`}
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className='text-red-500'>{errors.email}</div>}

              <input
                className={`font-poppins relative h-[60px] w-[350px] bg-[transparent] text-sm font-light [border:none] ${inputStyles}`}
                type='tel'
                placeholder='Phone Number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && <div className='text-red-500'>{errors.phoneNumber}</div>}

              <textarea
                className={`font-poppins relative h-40 w-[350px] bg-[transparent] text-sm font-light [border:none] ${inputStyles}`}
                placeholder='Your Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <div className='text-red-500'>{errors.message}</div>}
            </div>
            <button className='flex cursor-pointer flex-row items-center justify-center bg-blue pb-[11px] pl-[124px] pr-[123px] pt-3 [border:none]' type='submit'>
              <div className='font-poppins relative text-left text-sm font-medium text-white'>{buttonText}</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
