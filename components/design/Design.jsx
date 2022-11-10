import Image from 'next/image';
import Link from 'next/link';

export default function Design() {
  return (
    <div className='relative'>
      <video
        loop
        autoPlay
        muted
        className='absolute h-full object-cover w-full'
      >
        <source
          src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black And White Video Of Man Infront Of The Computer-transcode.mp4'
          type='video/mp4'
        />
      </video>
      <div className='relative flex flex-col lg:flex-row  justify-center items-center md:px-8 px-10  bg-black bg-opacity-80 py-16'>
        <Image
          height='50'
          width='60'
          alt='video-img'
          src='/images/ockup_reverse.svg'
          className='mx-auto md:w-32 py-10 lg:self-start'
        />
        <div className='flex flex-col md:w-2/4 lg:w-3/4'>
          <h3 className='text-white-orange font-primary text-5xl leading-[1.1em] py-4'>
            <em>Psst…&nbsp;</em>
            <br />
            are you a designer?
          </h3>
          <p className='text-white-orange font-primary text-lg lg:pr-44'>
            Consider joining our
            <Link href='#' className='text-color-pink '>
              San Diego Design Designers
            </Link>
            group. More than 700 people, we meet online via Slack and in person
            at social events around the city. It’s a great opportunity to share
            ideas, get inspired, find support, and celebrate great design.
          </p>
        </div>
      </div>
    </div>
  );
}
