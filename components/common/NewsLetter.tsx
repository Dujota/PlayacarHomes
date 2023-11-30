import { subscribeUser } from 'lib/api/email';
import { validateEmail } from 'lib/helpers/string-helpers';
import React, { useCallback, useState } from 'react';

interface NewsletterProps {
  title?: string;
  description?: string;
  isModal?: boolean;
  toggle?: () => void;
  setFormSubmitted?: (val: boolean) => void;
}

function Message({ message, success }: { message: string; success: boolean }) {
  if (!message || !success) return null;
  return <div className='flex flex-row flex-wrap items-center justify-center gap-[0.31rem] text-lgi text-emerald-400'>{message}</div>;
}

const Newsletter = ({
  title = 'Stay in the Loop',
  description = 'Sign up for our newsletter to receive the latest updates, exclusive offers, and insider insights on the real estate market in Cancun.',
  isModal = false,
  toggle = () => {},
  setFormSubmitted = () => {},
}: NewsletterProps) => {
  // State to capture the email input value
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ email: '' });

  // Memoized event handler for input change
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []); // No dependencies, as setEmail function from useState doesn't change

  // Memoized event handler for form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validate = () => {
        let hasError = false;
        let newErrors = { email: '' };

        if (!email.trim() || !validateEmail(email)) {
          newErrors.email = 'Valid email is required.';
          hasError = true;
        }

        setErrors(newErrors);
        return !hasError;
      };
      // window.alert(`Submitted Email: ${email}`);
      if (validate()) {
        await subscribeUser(email, setLoading, setMessage, setSuccess);
        debugger;
        setEmail(''); // Optional: Clear the input after submission
        if (isModal) {
          setFormSubmitted(true);
          setTimeout(toggle, 3000);
        }
      }
    },
    [email, isModal, setFormSubmitted, toggle]
  ); // Dependency on the email state

  return (
    <section className='font-poppins flex flex-row flex-wrap items-center justify-center self-stretch bg-bg px-[0rem] py-[4.69rem] text-center text-[2.25rem] text-black'>
      <div className='flex flex-col items-center justify-center gap-[2.5rem] md:max-w-[25.63rem]'>
        <div className='flex flex-col items-center justify-center gap-[1rem] md:w-auto md:max-w-[25rem] md:gap-[1.88rem] md:[align-self:unset]'>
          <div className='flex flex-row flex-wrap items-start justify-center'>
            <h2 className='font-inherit relative m-0 font-medium text-inherit'>{title}</h2>
          </div>
          <div className='flex flex-row flex-wrap items-start justify-center text-[1rem] text-grey md:w-auto md:max-w-[25.63rem] md:[align-self:unset]'>
            <p className='relative m-0 inline-block w-[38.25rem] shrink-0 font-light leading-[190%] md:h-auto md:w-auto md:flex-1 md:self-stretch'>{description}</p>
          </div>
        </div>
        <form className='flex flex-row flex-wrap items-center justify-center gap-[0.31rem]' onSubmit={handleSubmit} id='news-letter-form'>
          {success ? (
            <Message success={success} message={message} />
          ) : (
            <>
              <input
                className='font-poppins m-[0.65rem] box-border flex h-[2.75rem] w-[30.63rem] flex-row items-center justify-start bg-[transparent] px-[1rem] py-[0rem] text-[0.88rem] font-light [border:none] md:max-w-[15.5rem]'
                type='email'
                placeholder='Email Address'
                id='newsletter-email'
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && <div className='text-red-500'>{errors.email}</div>}
              {!success && <div className='text-red-500'>{message}</div>}
              <button className='flex cursor-pointer flex-row items-center justify-center bg-blue px-[2rem] pb-[0.69rem] pt-[0.75rem] [border:none]' type='submit'>
                <div className='font-poppins relative text-left text-[0.88rem] font-medium text-white'>Sign up</div>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
