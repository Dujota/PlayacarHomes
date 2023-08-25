import { infoCardsMock } from 'lib/demo.data';

import WhyUsInfoCards from './cards/WhyUsInfoCards';

const WhyUsSection = () => {
  return (
    <section
      className='font-poppins flex flex-col items-center justify-center self-stretch overflow-hidden bg-whitesmoke-100 text-left text-[2.25rem] text-black sm:box-border sm:w-auto sm:flex-row sm:self-stretch sm:p-[0rem] md:w-auto md:self-stretch lg:box-border lg:px-[0rem] lg:pb-[0rem] lg:pt-[0rem]'
      id='why-us'
    >
      <div className='flex flex-col items-center justify-start gap-[5rem] overflow-hidden sm:flex-1 md:box-border md:w-auto md:items-center md:justify-center md:gap-[2.5rem] md:pl-[0rem] md:[align-self:unset]'>
        <div className='flex flex-col items-center justify-end gap-[2.5rem] overflow-hidden sm:box-border sm:w-[25rem] sm:pl-[0rem] md:box-border md:w-auto md:flex-col md:items-start md:justify-center md:gap-[2.5rem] md:pl-[25rem] md:[align-self:unset] lg:w-auto lg:[align-self:unset]'>
          {/* HEADER */}
          <div className='flex flex-row flex-wrap items-center justify-center gap-[1.5rem] self-stretch sm:box-border sm:w-auto sm:flex-col sm:gap-[2.5rem] sm:self-stretch sm:pl-[0rem] sm:pr-[0rem] md:box-border md:flex-col md:items-center md:justify-center md:gap-[0.63rem] md:pl-[0rem] lg:w-auto lg:[align-self:unset]'>
            {/* header text */}
            <h2 className='font-inherit relative m-0 w-[20rem] flex-1 font-medium text-inherit sm:w-[25rem] sm:flex-[unset] sm:self-stretch sm:text-center md:w-auto md:flex-[unset] md:self-stretch'>
              We make it easy for <span className='text-blue'>tenants</span> and <span className='text-blue'>landlords</span>.
            </h2>
            {/* description */}
            <p className='relative m-0 inline-block h-[6.75rem] w-[39.19rem] shrink-0 text-[1rem] font-light leading-[190%] text-grey sm:w-[25rem] sm:flex-1 sm:text-left md:w-[39.19rem]'>
              {
                "At Playacar Homes, we understand that finding the perfect property in the Cancun Mexico area is more than just a transaction; it's about creating a life you love. Here's why we stand out from the rest:"
              }
            </p>
          </div>

          {/* Info Cards */}
          <WhyUsInfoCards cards={infoCardsMock} />
        </div>

        {/* Stats Container */}
        <div className='flex flex-row flex-wrap items-center justify-center gap-[3rem] text-center text-blue sm:gap-[2.5rem] md:w-auto md:items-start md:justify-center md:gap-[0.63rem] md:[align-self:unset] lg:box-border lg:items-center lg:justify-center lg:pb-[2rem] lg:pt-[2rem]'>
          {/* Stat */}
          <div className='flex flex-col items-center justify-start gap-[0.5rem] lg:w-auto lg:[align-self:unset]'>
            <div className='relative inline-block w-[18.75rem] font-semibold'>7.4%</div>
            <div className='relative inline-block w-[18.75rem] text-[0.94rem] text-grey'>Property Return Rate</div>
          </div>

          {/* Vertical Line */}
          <div className='relative box-border h-[4.13rem] w-[0.06rem] border-r-[1px] border-solid border-lightslategray sm:hidden' />

          {/* Stat */}
          <div className='flex flex-col items-center justify-start gap-[0.5rem]'>
            <div className='relative inline-block w-[18.75rem] font-semibold'>3,856</div>
            <div className='relative inline-block w-[18.75rem] text-[0.94rem] text-grey'>{`Property in Sell & Rent`}</div>
          </div>

          {/* Vertical Line */}
          <div className='relative box-border h-[4.13rem] w-[0.06rem] border-r-[1px] border-solid border-lightslategray sm:hidden' />

          {/* Stat */}
          <div className='flex flex-col items-center justify-start gap-[0.5rem]'>
            <div className='relative inline-block w-[18.75rem] font-semibold'>2,540</div>
            <div className='relative inline-block w-[18.75rem] text-[0.94rem] text-grey'>Daily Completed Transactions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

//  {/* InfoCardContainer */}
//  <div
//  className='flex flex-row flex-wrap items-end justify-center self-stretch overflow-x-auto text-[1.5rem] sm:flex-col md:box-border md:w-auto md:gap-[2.5rem] md:pl-[0rem] md:[align-self:unset] lg:w-auto lg:[align-self:unset]'
//  id='why-us'
//  >
//  <div className='flex w-[76.63rem] flex-row items-start justify-start gap-[2rem] sm:flex-col md:box-border md:flex-1 md:gap-[2.5rem] md:pl-[0rem] md:pr-[0rem] lg:box-border lg:flex-1 lg:gap-[2rem] lg:py-[0rem] lg:pl-[2rem] lg:pr-[0rem]'>
//    {/* infoCard */}
//    <div className='box-border flex h-[13.38rem] w-[31.63rem] flex-col items-center justify-start bg-whitesmoke-200 px-[0rem] py-[2.06rem] sm:box-border sm:h-auto sm:w-auto sm:px-[1rem] sm:py-[2rem] sm:[align-self:unset] lg:box-border lg:items-center lg:justify-center lg:px-[2rem] lg:pb-[0.38rem] lg:pt-[0rem]'>
//      <div className='flex flex-row items-start justify-start gap-[1.5rem] sm:flex-row'>
//        <Image width={100} height={100} className='relative h-[4rem] w-[4rem]' alt='' src='/personal.svg' />
//        <div className='flex flex-col items-start justify-start gap-[0.5rem] sm:flex-1'>
//          <h5 className='font-inherit relative m-0 inline-block w-[22.5rem] font-medium leading-[140%] text-inherit sm:w-auto sm:self-stretch'>Personalized Approach</h5>
//          <p className='relative m-0 inline-block w-[22.5rem] text-[0.88rem] font-light leading-[170%] text-grey sm:w-[18.75rem]'>
//            We prioritize building meaningful relationships with our clients. We take the time to listen and understand your needs, ensuring a personalized experience.
//          </p>
//        </div>
//      </div>
//    </div>
//    {/* InfoCard */}
//    <div className='box-border flex h-[13.38rem] flex-col items-center justify-start bg-white px-[0rem] py-[2.06rem] sm:box-border sm:h-auto sm:w-[25rem] sm:px-[1rem] sm:py-[2rem] md:box-border md:items-center md:justify-center md:pl-[1.25rem] md:pr-[1.25rem] lg:box-border lg:items-center lg:justify-center lg:py-[0rem] lg:pl-[2rem] lg:pr-[0.13rem]'>
//      <div className='flex flex-row items-start justify-start gap-[1.5rem]'>
//        <Image width={100} height={100} className='relative h-[4rem] w-[4rem]' alt='' src='/property.svg' />
//        <div className='flex flex-col items-start justify-start gap-[0.5rem] sm:flex-1'>
//          <h5 className='font-inherit relative m-0 inline-block w-[22.5rem] font-medium leading-[140%] text-inherit sm:w-auto sm:flex-1 sm:self-stretch'>
//            Diverse Property Portfolio
//          </h5>
//          <p className='relative m-0 inline-block w-[22.5rem] text-[0.88rem] font-light leading-[170%] text-grey sm:w-[18.75rem]'>
//            Our extensive portfolio of properties in the Cancun Mexico area caters to a range of preferences and budgets, from stunning beachfront villas to charming
//            condos.
//          </p>
//        </div>
//      </div>
//    </div>

//    {/* InfoCard */}
//    <div className='box-border flex h-[13.38rem] w-[31.63rem] flex-col items-center justify-start bg-whitesmoke-200 px-[0rem] py-[1.81rem] sm:box-border sm:h-auto sm:w-auto sm:px-[1rem] sm:py-[2rem] sm:[align-self:unset] lg:box-border lg:items-center lg:justify-center lg:px-[2rem] lg:py-[0rem]'>
//      <div className='flex flex-row items-start justify-start gap-[1.5rem] sm:h-auto'>
//        <Image width={100} height={100} className='relative h-[4rem] w-[4rem]' alt='' src='/hand.svg' />
//        <div className='flex flex-col items-start justify-start gap-[1rem] sm:h-auto sm:flex-1 sm:gap-[0.5rem]'>
//          <h5 className='font-inherit relative m-0 inline-block w-[22.5rem] font-medium leading-[140%] text-inherit sm:w-auto sm:flex-1 sm:self-stretch'>{`Transparent & Trustworthy`}</h5>
//          <p className='relative m-0 inline-block w-[22.5rem] text-[0.88rem] font-light leading-[170%] text-grey sm:w-[18.75rem]'>
//            We believe in transparency and maintain the highest ethical standards. You can trust us to provide accurate information, honest advice, and guide you through
//            every step.
//          </p>
//        </div>
//      </div>
//    </div>
//  </div>
// </div>
