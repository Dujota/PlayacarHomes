import { ReactNode } from 'react';

type CardGridProps = {
  children: ReactNode;
};

export default function CardGrid({ children }: CardGridProps) {
  return (
    <section className='font-poppins flex flex-col items-center justify-center gap-[3.75rem] self-stretch text-left text-[1.5rem] text-black'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-[7.0rem] self-stretch'>{children}</div>
      {/* <GridPagination /> */}
    </section>
  );
}
