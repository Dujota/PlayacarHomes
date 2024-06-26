// import './WhyUs.module.css';

import { PortableText, PortableTextComponents } from '@portabletext/react';
import { statsMock } from 'lib/demo.data';
import { TypedObject } from 'sanity';

import StatsBanner from './banners/StatsBanner';
import WhyUsSlider from './WhyUsSlider';

// Why Us Section Types
interface WhyUsCard {
  heading: string;
  text: string;
}

interface WhyUsSection {
  heading: TypedObject[];
  subheading: string;
  whyUsCards: WhyUsCard[];
}

const components: PortableTextComponents = {
  marks: {
    color: ({ children }) => <span className='text-blue'>{children}</span>,
  },
};

const WhyUsSection = ({ heading, subheading, whyUsCards }: WhyUsSection) => {
  return (
    <section
      className='font-poppins flex flex-col items-center justify-center self-stretch overflow-hidden
      bg-whitesmoke-100 px-10 py-10 text-left text-[2.25rem] text-black sm:box-border sm:w-auto
      sm:flex-row sm:self-stretch sm:p-0 md:w-auto md:self-stretch lg:box-border'
      id='why-us'
    >
      <div
        className='flex flex-col items-center justify-start gap-[5rem] overflow-hidden sm:flex-1 md:box-border
                  md:w-auto md:items-center md:justify-center md:gap-[2.5rem] md:pl-[0rem] md:[align-self:unset]'
      >
        <div
          id='why-us-header'
          className='md:align-center flex flex-col items-center justify-end gap-[2.5rem]
                    overflow-hidden md:box-border md:w-[90%] md:flex-col
                    md:items-start md:justify-center md:gap-[2.5rem] lgSlider:w-auto'
        >
          {/* HEADER */}
          <div
            className='flex flex-row flex-wrap items-center justify-center gap-[1.5rem]
                      self-stretch sm:box-border sm:w-auto sm:flex-col sm:gap-[2.5rem]
                      sm:self-stretch sm:pl-[0rem] sm:pr-[0rem] md:box-border md:flex-col
                      md:items-center md:justify-center md:gap-[0.63rem] md:pl-[0rem]
                      lg:w-auto'
          >
            {/* header text */}
            <h2
              id='why-us-heading'
              className='font-inherit relative m-0 w-[20rem] flex-1 font-medium text-inherit
                        sm:!w-full sm:flex-[unset] sm:self-stretch md:w-auto
                        md:flex-[unset]'
            >
              <PortableText value={heading} components={components} />
            </h2>
            {/* description */}
            <p
              className='relative m-0 inline-block w-[31rem] shrink-0
                        text-[1rem] font-light leading-[190%] text-grey
                        sm:!w-full sm:flex-1 sm:text-left md:w-[25rem] '
            >
              {subheading}
            </p>
          </div>
        </div>
        <WhyUsSlider slides={whyUsCards} />

        {/* Stats Container */}
        <StatsBanner stats={statsMock} />
      </div>
    </section>
  );
};

export default WhyUsSection;
