import { contactUser } from 'lib/api/email';
import { validateEmail } from 'lib/helpers/string-helpers';
import { useState } from 'react';

import Honeypot from './fields/Honeypot';

const defaultMessage = `Thanks for reaching out to us. Whether you're curious about listings, have a question, or need support on something else, we're here for you. Fill out this quick form, and we'll get back to you promptly. Your journey matters to us, every step of the way.`;

type ContactFormType = {
  headingMessage?: string;
  buttonText?: string;
  toggle?: () => void;
};

const bg =
  'box-border w-[403px] rounded-2xl border-[1px] border-solid border-gray shadow-[0px_40px_64px_-32px_rgba(15,_15,_15,_0.1)] [backdrop-filter:blur(32px)] [background:linear-gradient(83.59deg,_#F9F9F9,_rgba(249,_249,_249,_0.83))]';

const sticky = 'sticky top-0';

const inputStyles = 'p-2 border-1 border-solid bg-[rgba(119,126,144,0.05)] border-[rgba(114,151,175,0.25)] rounded';

function ContactFormMessage({ message }: { message: string }) {
  return (
    <div className='flex flex-col items-center justify-start gap-[32px] text-lgi text-emerald-400'>
      <p>{message}</p>
    </div>
  );
}

const ContactForm = ({ buttonText = 'Send Message', headingMessage = defaultMessage, toggle }: ContactFormType) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ email: '', phoneNumber: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (confirmEmail) return;

    e.preventDefault();
    setErrors({ email: '', phoneNumber: '', message: '' });
    setSuccess(false);

    if (validate()) {
      await contactUser({ email, phoneNumber, message }, setLoading, setSubmitMessage, setSuccess);

      if (success) {
        setPhoneNumber('');
        setMessage('');
        setEmail('');
        setTimeout(() => {
          toggle();
        }, 3000);
      }
    }
  };

  return (
    <div id='contact-form' className={`font-poppins relative w-[403px] rounded-2xl p-[32px] text-left text-5xl text-black ${bg} ${sticky} ${toggle ? 'sm:!w-full' : ''}`}>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center justify-start gap-[32px]'>
          {success && <ContactFormMessage message={submitMessage} />}
          {!success && (
            <>
              <div className='flex flex-col items-start justify-start gap-[16px]'>
                <h2 className='font-inherit relative m-0 inline-block w-[350px] font-medium text-inherit'>Ask For More Details</h2>
                <div className='relative inline-block w-[350px] text-sm leading-[170%] text-grey'>{headingMessage}</div>
              </div>
              <div className='flex flex-col items-start justify-start gap-[32px] text-sm text-grey'>
                <div className='flex flex-col items-start justify-start gap-[12px]'>
                  <input
                    className={`font-poppins relative h-[60px] w-[350px] border border-slategray-100 bg-[transparent] text-sm font-light ${inputStyles}`}
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div className='text-red-500'>{errors.email}</div>}

                  <input
                    className={`font-poppins relative h-[60px] w-[350px] border border-slategray-100 bg-[transparent] text-sm font-light ${inputStyles}`}
                    type='tel'
                    placeholder='Phone Number'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {errors.phoneNumber && <div className='text-red-500'>{errors.phoneNumber}</div>}

                  <Honeypot onHoneypotChange={setConfirmEmail} />

                  <textarea
                    className={`font-poppins relative h-40 w-[350px] border border-slategray-100 bg-[transparent] text-sm font-light ${inputStyles}`}
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
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
