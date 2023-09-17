import React, { useCallback, useState } from 'react';

interface NewsletterProps {
  title?: string;
  description?: string;
}
const Newsletter = ({
  title = 'Stay in the Loop',
  description = 'Sign up for our newsletter to receive the latest updates, exclusive offers, and insider insights on the real estate market in Cancun.',
}: NewsletterProps) => {
  // State to capture the email input value
  const [email, setEmail] = useState('');

  // Memoized event handler for input change
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []); // No dependencies, as setEmail function from useState doesn't change

  // Memoized event handler for form submission
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      window.alert(`Submitted Email: ${email}`);
      setEmail(''); // Optional: Clear the input after submission
    },
    [email]
  ); // Dependency on the email state

  return (
    <section className='font-poppins flex flex-row flex-wrap items-center justify-center self-stretch bg-bg px-[0rem] py-[4.69rem] text-center text-[2.25rem] text-black'>
      <div className='flex flex-col items-center justify-center gap-[2.5rem] sm:max-w-[25.63rem]'>
        <div className='flex flex-col items-center justify-center gap-[1rem] sm:w-auto sm:max-w-[25rem] sm:gap-[1.88rem] sm:[align-self:unset]'>
          <div className='flex flex-row flex-wrap items-start justify-center'>
            <h2 className='font-inherit relative m-0 font-medium text-inherit'>{title}</h2>
          </div>
          <div className='flex flex-row flex-wrap items-start justify-center text-[1rem] text-grey sm:w-auto sm:max-w-[25.63rem] sm:[align-self:unset]'>
            <p className='relative m-0 inline-block w-[38.25rem] shrink-0 font-light leading-[190%] sm:h-auto sm:w-auto sm:flex-1 sm:self-stretch'>{description}</p>
          </div>
        </div>
        <form className='flex flex-row flex-wrap items-center justify-center gap-[0.31rem]' onSubmit={handleSubmit} id='news-letter-form'>
          <input
            className='font-poppins box-border flex h-[2.75rem] w-[30.63rem] flex-row items-center justify-start bg-[transparent] px-[1rem] py-[0rem] text-[0.88rem] font-light [border:none] sm:max-w-[17.5rem]'
            type='email'
            placeholder='Email Address'
            id='newsletter-email'
            value={email}
            onChange={handleEmailChange}
          />
          <button className='flex cursor-pointer flex-row items-center justify-center bg-blue px-[2rem] pb-[0.69rem] pt-[0.75rem] [border:none]' type='submit'>
            <div className='font-poppins relative text-left text-[0.88rem] font-medium text-white'>Sign up</div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
