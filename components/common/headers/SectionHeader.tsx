interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <div className='flex flex-col flex-wrap items-center justify-start px-[12.5rem] py-[0rem] sm:box-border sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-[2.5rem] sm:pl-[1.25rem] sm:pr-[1.25rem] sm:[align-self:unset] md:box-border md:w-auto md:items-center md:justify-center md:self-stretch md:pl-[6.25rem] md:pr-[6.25rem]'>
    <h2 className='font-inherit relative m-0 font-medium text-inherit sm:flex-1 sm:text-center md:text-center'>{title}</h2>
    {description && <p className='relative m-0 self-stretch text-[1rem] font-light leading-[190%] text-grey sm:flex-1'>{description}</p>}
  </div>
);

export default SectionHeader;
