import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';

export default function GetCozy() {
  return (
    <section className='relative z-50 w-full -mt-10 overflow-hidden get__cozy bg-white-orange'>
      <div className='bg-dot w-[186px;] bg-51 h-[186px;] right-[-12%] -top-20 absolute opacity-[.16] rounded-[50%]'></div>
      <div className='max-w-[991px]'>
        <div className='w-[320px] mx-auto'>
          <div className='pt-20 text-3xl font-primary text-secondary'>
            <strong>🌴🐻🇺🇸</strong>
          </div>
          <h2 className='pt-10 text-7xl font-primary text-secondary pb-2.5'>
            Get Cozy
          </h2>
          <h3 className='pb-8 text-4xl font-primary text-get'>
            Design & digital marketing <br />
            in San Diego, California
          </h3>
          <p className='text-[22px] font-paragraph-text bg-secondary bg-clip-text text-transparent pb-6'>
            We’re an award-winning design shop based in South Park, San Diego.
            We efficiently combine the best parts of user experience (UX) with
            creative design and execution to create effective collateral that
            connects with the human beings who interact with them.{' '}
            <span className='text-secondary'>🤯</span>
          </p>
          <p className='text-[22px] font-paragraph-text text-secondary pb-10 bg-secondary bg-clip-text text-transparent'>
            No epic quests for inspiration. Just pragmatic collaboration and
            efficient results from big-agency graduates with decades of
            experience.
          </p>
          <Button styles='text-xl px-16'>Why we do what we do</Button>
        </div>
        <div className='max-w-[479px]'>
          <Image
            width='140'
            height='140'
            src='/images/log-1.webp'
            className='mx-auto mt-10 mb-10'
          />
          <Image
            width='140'
            height='140'
            src='/images/log-2.webp'
            className='mx-auto mb-10'
          />
          <Image
            width='140'
            height='140'
            src='/images/log-3.webp'
            className='mx-auto mb-10'
          />
          <Image
            width='140'
            height='140'
            src='/images/log-4.webp'
            className='mx-auto mb-10'
          />
          <div className='flex flex-col mb-10'>
            <Image
              width='140'
              height='140'
              src='/images/log-5.svg'
              className='mx-auto mb-5'
            />
            <div className='mx-auto text-sm font-semibold bg-clip-text text-transparent bg-[#2d4850] font-log'>
              <strong>BBB&nbsp;rating:&nbsp;A+</strong>
            </div>
          </div>
          <Image
            width='140'
            height='140'
            src='/images/log-6.webp'
            className='mx-auto mb-10'
          />
          <Image
            width='140'
            height='140'
            src='/images/log-8.webp'
            className='mx-auto mb-10'
          />
          <Image
            width='140'
            height='140'
            src='/images/log-7.webp'
            className='mx-auto mb-10'
          />
          <Image
            width='140'
            height='140'
            src='/images/log-9.webp'
            className='mx-auto mb-10'
          />
        </div>
      </div>
    </section>
  );
}
