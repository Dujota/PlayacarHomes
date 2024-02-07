import ContactForm from 'components/common/forms/ContactForm';
import { Listing } from 'lib/sanity.queries/listings';
import { capitalizeEveryWord } from 'lib/utils';

import AboutListing from './AboutListing';
import KeyFeatures from './KeyFeatures';
import ListingDetailsIcons from './ListingDetailsIcons';
import ListingLineBreak from './ListingLineBreak';

type DetailsProps = {
  listing: Listing;
};

const ListingDetails = ({ listing }: DetailsProps) => {
  return (
    <section className='font-poppins mb-[2rem] mt-8 flex flex-row flex-wrap items-start justify-center self-stretch text-left text-[1.5rem] text-black'>
      <div id='listing-details' className='flex w-auto flex-col flex-wrap items-center justify-center gap-[0.5rem]'>
        <ListingDetailsIcons
          bedrooms={listing.bedrooms}
          bathrooms={listing.bathrooms}
          area={listing.area}
          typeOfProperty={capitalizeEveryWord(listing.typeOfProperty)}
          status={capitalizeEveryWord(listing.status)}
        />
        <AboutListing description={listing.description} />
        <ListingLineBreak />
        <KeyFeatures listing={listing} />
      </div>
      <ContactForm buttonText='Send Message' />
    </section>
  );
};

export default ListingDetails;
