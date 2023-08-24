const ActionButton = ({ label, bgColor = 'transparent', textColor = 'black' }) => (
  <button className={`cursor-pointer px-[2rem] pb-[0.69rem] pt-[0.75rem] [border:none] bg-${bgColor} flex flex-row items-center justify-center`}>
    <span className={`font-poppins relative cursor-pointer bg-[transparent] p-0 text-[0.88rem] font-medium [border:none] text-${textColor} inline-block text-left`}>{label}</span>
  </button>
);

export default function ActionButtons() {
  return (
    <div className='flex flex-row items-center justify-end gap-[0.5rem]'>
      <ActionButton label='Login' />
      <ActionButton label='Sign Up' bgColor='blue' textColor='white' />
    </div>
  );
}
