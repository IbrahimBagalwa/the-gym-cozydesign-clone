import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <section className='bg-white-orange text-btn-orange pb-4'>
      <section className='flex justify-center flex-col md:flex-row w-full md:justify-around'>
        <div className='flex items-center flex-col md:flex-row md:justify-center md:gap-10 '>
          <Image
            width='73'
            height='50'
            src='/images/cozy-f.svg'
            className='mt-10 mb-4'
          />
          <ul className='text-sm text-center font-paragraph-text pb-8 md:pb-0 md:flex gap-2 '>
            <li className=' py-1'>About</li>
            <li className='py-1'>Services</li>
            <li className='py-1'>Work</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Contact</li>
          </ul>
        </div>
        <div className='flex justify-center flex-col gap-4'>
          <div className='flex items-center justify-center gap-2'>
            <Image width='20' height='20' src='/images/f-coz.webp' alt='grid' />
            <div className='text-color-pink text-sm font-paragraph-text'>
              San Diego Digital Designers
            </div>
          </div>
          <div className='flex justify-center items-center pb-4 gap-1'>
            <div className='px-2 py-2 rounded-md bg-tw'>
              <Image
                width='12'
                height='12'
                src='/images/tw.svg'
                className='mx-auto'
              />
            </div>
            <div className='px-2 py-2 rounded-md bg-in'>
              <Image
                width='12'
                height='12'
                src='/images/in.svg'
                className='mx-auto'
              />
            </div>
            <div className='px-2 py-2 rounded-md bg-fb'>
              <Image
                width='12'
                height='12'
                src='/images/f.svg'
                className='mx-auto'
              />
            </div>
            <div className='px-2 py-2 rounded-md bg-inst'>
              <Image
                width='12'
                height='12'
                src='/images/inst.svg'
                className='mx-auto'
              />
            </div>
            <div className='px-2 py-2 rounded-md bg-yt'>
              <Image
                width='10'
                height='10'
                src='/images/y.svg'
                className='mx-auto'
              />
            </div>
            <div className='px-2 py-2 rounded-md bg-c'>
              <Image
                width='12'
                height='12'
                src='/images/c.svg'
                className='mx-auto'
              />
            </div>
            <div className='px-2 py-2 rounded-md bg-m'>
              <Image
                width='12'
                height='12'
                src='/images/m.svg'
                className='mx-auto'
              />
            </div>
          </div>
        </div>
      </section>
      <div className='border-b-2 border-bt-or w-72 mx-auto md:w-[90%] md:mt-10'></div>
      <section className='mb-8'>
        <div className='flex justify-center flex-col items-center gap-10 py-16 md:flex-row'>
          <div className='flex flex-col'>
            <Image
              width='140'
              height='140'
              src='/images/log-5.svg'
              className='mx-auto mb-10'
            />
            <div className='mx-auto text-sm font-semibold bg-clip-text text-transparent bg-[#2d4850] font-log'>
              <strong>BBB&nbsp;rating:&nbsp;A+</strong>
            </div>
          </div>
          <Image width='140' height='140' src='/images/dig.png' />
          <Image width='200' height='200' src='/images/cap.png' />
        </div>
        <div className='flex flex-col justify-center items-center gap-10'>
          <div className='text-secondary text-xs font-paragraph-text text-center'>
            Made❤️with in beautiful, sunny San Diego. <br /> ©2021
          </div>
          <div className='text-sm text-center font-paragraph-text flex gap-8'>
            <p>Privacy</p>
            <p>Photo credit</p>
          </div>
        </div>
      </section>
    </section>
  );
}
