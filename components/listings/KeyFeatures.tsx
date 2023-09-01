import FeatureItem from './FeatureItem';

export default function KeyFeatures() {
  return (
    <div className='gap-[2rem]} mb-10 flex flex-col items-start justify-start'>
      <h2 className='font-inherit relative m-0 mb-[2rem] font-medium text-inherit'>Key Features</h2>
      <div id='feature-container' className='flex flex-wrap items-baseline justify-center gap-[3rem] text-[0.88rem] text-grey'>
        <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
          {/* Left Column */}
          <FeatureItem title='Listed on' value='June 23, 2023' />
          <FeatureItem title='Available' value='Yes' />
          <FeatureItem title='Property Type' value='Home' />
          <FeatureItem title='Laundry' value='Yes' />
          <FeatureItem title='Air Conditioner' value='Yes' />
          <FeatureItem title='Insulation' value='Yes' />
        </div>

        <div className='flex flex-col items-start justify-center gap-[1.5rem]'>
          {/* Right Column */}
          <FeatureItem title='City' value='Mexico' />
          <FeatureItem title='Built In' value='2018' />
          <FeatureItem title='Size' value='2,124 sqft' />
          <FeatureItem title='Parking Area' value='Yes' />
          <FeatureItem title='Price' value='$2,400' />
        </div>
      </div>
    </div>
  );
}
