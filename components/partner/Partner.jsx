import Image from 'next/image';
import React from 'react';

export default function Partner() {
  return (
    <section className='w-full bg-secondary'>
      <div className='-mt-10 pb-10 md:flex justify-center items-center- flex-col'>
        <h4 className='text-xl text-bt-or text-[30px] font-fraunces-italic opacity-[.8] text-center px-20 pt-20'>
          More than 150 happy clients
        </h4>
        <div className='md:flex justify-between md:w-full md:h-full items-center md:py-10'>
          <Image
            width='94'
            height='32'
            src='/images/cl-1.svg'
            className='mx-auto mt-10 md:mt-0 mb-10 md:mb-0 md:w-16 md:h-6'
          />
          <Image
            width='105'
            height='32'
            src='/images/cl-2.svg'
            className='mx-auto md:mb-0 mb-10 md:w-16 md:h-6'
          />
          <Image
            width='150'
            height='32'
            src='/images/cl-3.svg'
            className='mx-auto md:mb-0 mb-10 md:w-16 md:h-6'
          />
          <Image
            width='87'
            height='32'
            src='/images/cl-4.svg'
            className='mx-auto mb-10 md:mb-0 md:w-16 md:h-6'
          />
          <Image
            width='120'
            height='32'
            src='/images/cl-5.svg'
            className='mx-auto mb-10 md:mb-0 md:w-16 md:h-6'
          />
          <Image
            width='100'
            height='32'
            src='/images/cl-6.svg'
            className='mx-auto mb-10 md:mb-0 md:w-16 md:h-6'
          />
          <Image
            width='54'
            height='32'
            src='/images/cl-7.svg'
            className='mx-auto mb-10 md:mb-0 md:w-16 md:h-6'
          />
        </div>
      </div>
    </section>
  );
}
