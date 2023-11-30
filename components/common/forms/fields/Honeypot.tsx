import React, { useCallback } from 'react';

interface HoneypotProps {
  onHoneypotChange: (isFilled: boolean) => void;
  wrapperStyle?: React.CSSProperties;
  labelContent?: string;
  inputName?: string;
  inputStyle?: React.CSSProperties;
}

interface LabelProps {
  content: string;
  htmlFor: string;
}

const HoneypotLabel: React.FC<LabelProps> = ({ content, htmlFor }) => (
  <label htmlFor={htmlFor} style={{ display: 'none' }}>
    {content}
  </label>
);
const baseInputStyle =
  'font-poppins m-[0.65rem] box-border flex h-[2.75rem] w-[30.63rem] flex-row items-center justify-start bg-[transparent] px-[1rem] py-[0rem] text-[0.88rem] font-light [border:none] md:max-w-[15.5rem]';

const Honeypot: React.FC<HoneypotProps> = ({ onHoneypotChange, wrapperStyle = {}, labelContent = 'Confirm Email', inputName = 'confirmEmail', inputStyle = {} }) => {
  const handleChange = useCallback(
    (e) => {
      const isFilled = e.target.value.length > 0;
      onHoneypotChange(isFilled);
    },
    [onHoneypotChange]
  );

  return (
    <div className='field-hp' style={wrapperStyle || {}} aria-hidden='true'>
      <HoneypotLabel content={labelContent} htmlFor={inputName} />
      <input type='text' name={inputName} onChange={handleChange} style={inputStyle || {}} className='form-hp' />
    </div>
  );
};

export default Honeypot;
