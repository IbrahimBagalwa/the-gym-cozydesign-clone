import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';

export default function Hero() {
  return (
    <section className='-top-1 bg-gradient-to-r from-gradient to-secondary'>
      <div className='mx-6 '>
        <h1 className='bg-clip-text text-transparent bg-noise  font-secondary text-[90px--] md:text-[80px] text-[64px] bg-header-text mb-[20px] pt-3 pb-5 leading-none'>
          Your design team for the cost of a salary.
        </h1>
        <h4 className='bg-clip-text text-transparent bg-noise bg-[#e4ded5] text-[30px] leading-10 font-primary opacity-80 pt-[10px] pb-[50px]'>
          Full-service design support that growing B2B and non-profit
          organizations need. Are you strained because you should have a design
          team but you don't?
        </h4>
        <Button>See how we work & what we can do</Button>
      </div>
      <div className=''>
        <Image
          src='/images/getcozydesign.webp'
          alt='getcozydesign'
          height='259'
          width='255'
          className='mx-auto mt-10'
        />
      </div>
    </section>
  );
}
