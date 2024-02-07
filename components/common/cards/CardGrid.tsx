import { ReactNode } from 'react';

type CardGridProps = {
  children: ReactNode;
  isFeatured?: boolean;
};

export default function CardGrid({ children, isFeatured }: CardGridProps) {
  const baseStyles = `flex flex-row flex-wrap items-center justify-center ${isFeatured ? 'gap-[1rem]' : 'gap-[7.0rem]'} self-stretch`;
  return (
    <section className='font-poppins flex flex-col items-center justify-center gap-[3.75rem] self-stretch text-left text-[1.5rem] text-black'>
      <div className={baseStyles}>{children}</div>
      {/* <GridPagination /> */}
    </section>
  );
}
