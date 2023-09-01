// import ContactForm from './contact-form';

import ContactForm from 'components/common/forms/ContactForm';

import AboutListing from './AboutListing';
import KeyFeatures from './KeyFeatures';
import ListingDetailsIcons from './ListingDetailsIcons';
import ListingLineBreak from './ListingLineBreak';

const ListingDetails = () => {
  return (
    <section className='font-poppins mt-8 flex flex-row flex-wrap items-start justify-center self-stretch text-left text-[1.5rem] text-black'>
      <div id='listing-details' className='flex w-auto flex-col flex-wrap items-center justify-center gap-[3rem] md:w-full'>
        <ListingDetailsIcons />
        <AboutListing />
        <ListingLineBreak />
        <KeyFeatures />
        {/* <ListingLineBreak /> */}
      </div>
      <ContactForm buttonText='Send Message' />
    </section>
  );
};

export default ListingDetails;
