import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <section className='max-w-full bg-gradient-to-l from-gradient to-secondary h-28'>
      <div className='flex justify-center items-center lg:justify-between lg:px-8 py-[20px] px-[15px] gap-4 w-full'>
        <Image
          src='/vectors/cozy-logo.svg'
          height='69'
          width='100'
          alt='cozy-logo'
        />
        <div className='border-l border-pr h-17 block lg:hidden'></div>
        <Image
          src='/vectors/menu.svg'
          height='40'
          width='35'
          alt='menu'
          className='block lg:hidden'
        />
        <div>
          <ul className='text-white-orange font-primary lg:flex justify-between gap-10 text-2xl hidden'>
            <li>Get Cozy</li>
            <li>What we do</li>
            <li>Our work</li>
            <li>The blog</li>
            <li>Say hi</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
