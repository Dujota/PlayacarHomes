import { subscribeUser } from 'lib/api/email';
import { validateEmail } from 'lib/helpers/string-helpers';
import React, { useCallback, useState } from 'react';

import Honeypot from './fields/Honeypot';

const SubscriptionForm = ({ heading }) => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({ email: '' });

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Here you would call your API to handle the subscription using the email state.
      // For now, I'll just set a success message.

      const validate = () => {
        if (confirmEmail) return true;
        let hasError = false;
        let newErrors = { email: '' };

        if (!email.trim() || !validateEmail(email)) {
          newErrors.email = 'Valid email is required.';
          hasError = true;
        }

        setErrors(newErrors);
        return !hasError;
      };

      const isValid = validate();

      if (isValid) {
        await subscribeUser(email, setLoading, setMessage, setSuccess);

        setSuccess(true);
        setEmail('');
        setMessage('You have subscribed successfully!');
      }
    },
    [confirmEmail, email]
  );

  return (
    <section className='flex h-[400px] w-full flex-col items-center justify-center gap-14 bg-whitesmoke-200 p-4'>
      <div className='flex items-baseline gap-6 space-x-2 sm:!gap-0 md:gap-2'>
        {heading?.map((item: string, index: number) => (
          <>
            <h3 key={item} className='text-[1rem] font-semibold text-black'>
              {item}
            </h3>
            {index !== heading.length - 1 && (
              <p key={index} className='text-[2rem]'>
                .
              </p>
            )}
          </>
        ))}
      </div>
      <form className='mt-4 flex w-full max-w-lg items-center gap-6' onSubmit={handleSubmit}>
        <input
          className='text-gray-700 flex-grow border-0 border-b-2 border-black bg-whitesmoke-200 p-2 focus:outline-none'
          type='email'
          placeholder='Enter your email here'
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <div className='text-red-500'>{errors.email}</div>}
        <Honeypot onHoneypotChange={setConfirmEmail} />

        <button className='flex cursor-pointer flex-row items-center justify-center bg-grey px-[2rem] pb-[0.69rem] pt-[0.75rem] [border:none]' type='submit'>
          <div className='font-poppins relative text-left text-[0.88rem] font-medium text-white'>Sign up</div>
        </button>
      </form>
      {message && <div className={`mt-2 text-sm ${success ? 'text-green-500' : 'text-red-500'}`}>{message}</div>}
    </section>
  );
};

export default SubscriptionForm;
