type CardLineBreakProps = {
  small?: boolean;
};

const CardLineBreak = ({ small }: CardLineBreakProps) => {
  if (small) {
    return <div className='relative box-border h-[0.1rem] w-[21.54rem] border-t-[1.6px] border-solid border-shades-of-purple-purple-96' />;
  }

  return <div className='relative box-border h-[0.1rem] w-[28.6rem] border-t-[2px] border-solid border-shades-of-purple-purple-96 sm:w-auto sm:self-stretch' />;
};

export default CardLineBreak;

// Alt
/* <div className='relative box-border h-[0.1rem] w-[21.54rem] border-t-[1.6px] border-solid border-shades-of-purple-purple-96' /> */
