import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function Design() {
  return (
    <div className='relative'>
      <div className='absolute'>
        <video loop autoPlay muted>
          <source
            src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black And White Video Of Man Infront Of The Computer-transcode.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <div className='relative w-72 mx-auto'>
        <Image
          height='50'
          width='60'
          alt='video-img'
          src='/images/ockup_reverse.svg'
          className='mx-auto'
        />
        <h3 className='text-white-orange font-primary text-5xl leading-[1.1em]'>
          <em>Psst…&nbsp;</em>
          <br />
          are you a designer?
        </h3>
        <p className='text-white-orange font-primary text-lg'>
          Consider joining our
          <Link href='#' className='text-color-pink '>
            San Diego Design Designers
          </Link>
          group. More than 700 people, we meet online via Slack and in person at
          social events around the city. It’s a great opportunity to share
          ideas, get inspired, find support, and celebrate great design.
        </p>
      </div>
    </div>
  );
}
