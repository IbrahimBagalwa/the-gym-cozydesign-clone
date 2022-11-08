import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <section className='max-w-full bg-gradient-to-l from-gradient to-secondary h-28'>
      <div className='flex justify-center items-center py-[20px] px-[15px] gap-4 w-full'>
        <Image
          src='/vectors/cozy-logo.svg'
          height='69'
          width='100'
          alt='cozy-logo'
        />
        <div className='border-l border-pr h-17'></div>
        <Image src='/vectors/menu.svg' height='40' width='35' alt='menu' />
      </div>
    </section>
  );
}
