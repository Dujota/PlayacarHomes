// Stats.tsx
import React from 'react';

import Stat from '../cards/Stat';
import VerticalLine from '../dividers/VerticalLineBreak';

interface StatsProps {
  stats: {
    stat: string;
    description: string;
  }[];
}

const StatsBanner = ({ stats }: StatsProps) => {
  return (
    <div
      className='flex flex-row flex-wrap items-center justify-center gap-[3rem] text-center text-blue
                sm:gap-[2.5rem] md:w-auto md:items-start md:justify-center md:gap-[0.63rem] md:[align-self:unset]
                lg:box-border lg:items-center lg:justify-center lg:pb-[2rem] lg:pt-[2rem] tablet:flex-col'
    >
      {stats.map((item, index) => (
        <React.Fragment key={index}>
          {index === 1 && <VerticalLine />}
          <Stat stat={item.stat} description={item.description} />
          {index === 1 && <VerticalLine />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatsBanner;
