import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';

export default function Hero() {
  return (
    <section className='-top-1 bg-gradient-to-r from-gradient to-secondary md:flex flex-col lg:flex-row justify-center items-center lg:overflow-hidden'>
      <div className='mx-6 md:mx-28 lg:mx-10 lg:pb-14'>
        <h1 className='bg-clip-text text-transparent bg-noise  font-secondary md:text-[80px] text-[64px] bg-header-text mb-[20px] pt-3 pb-5 leading-none md:pr-10 md:mt-16'>
          Your design team for the cost of a salary.
        </h1>
        <h4 className='bg-clip-text text-transparent bg-noise bg-[#e4ded5] text-[30px] leading-10 font-primary opacity-80 pt-[10px] pb-[50px]'>
          Full-service design support that growing B2B and non-profit
          organizations need. Are you strained because you should have a design
          team but you don't?
        </h4>
        <Button styles='md:py-8 lg:text-xl lg:py-4'>
          See how we work & what we can do
        </Button>
      </div>
      <Image
        width='641'
        height='804'
        src='/images/lg-im.png'
        className='max-w-[60%] min-w-[70%] -mb-96 -mr-60 lg:block hidden'
      />
      <div className='block lg:hidden'>
        <Image
          src='/images/getcozydesign.webp'
          alt='getcozydesign'
          height='259'
          width='255'
          className='mx-auto mt-10 md:w-[594px] md:-mb-20'
        />
      </div>
    </section>
  );
}
