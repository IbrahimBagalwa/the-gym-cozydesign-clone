import Image from 'next/image';
import React from 'react';

export default function Client({}) {
  return (
    <section className='w-full bg-white-orange md:pb-20'>
      <div className='mx-auto'>
        <h2 className='pt-10 text-2xl text-center font-primary text-secondary pb-2.5'>
          ❤️ from our clients
        </h2>
        <div className='w-10 h-10 m-auto mb-8 border-b-4 border-bt-or'></div>
        <div className='py-10 md:py-20 flex flex-col items-center md:items-stretch md:flex-row md:flex-wrap md:py-4 md:gap-8  justify-center md:relative lg:grid lg:grid-cols-2 lg:justify-center  lg:h-[100vh]- lg:gap-10 lg:px-44'>
          <div className='bg-noise bg-secondary rounded-tl-[80%] rounded-tr-[80%] rounded-br-[0%] rounded-bl-[100%] show__radius w-fit py-20 px-3  mb-10 md:mb-0'>
            <div className='md:w-64 lg:w-auto'>
              <Image
                height='80'
                width='80'
                alt='user'
                src='/images/user-1.webp'
                className=' mx-auto rounded-[32%] mix-blend-luminosity ring-4 ring-[#fff] mb-2'
              />
              <h5 className='mt-6 mb-3 text-xl font-fraunce-semibold text-bt-or text-end'>
                “One of the top design professionals…”
              </h5>
              <p className='text-lg font-paragraph-text text-white-orange text-end'>
                I connect with hundreds of talented folks on a regular basis,
                and I can say with complete confidence that Lee is one of the
                best UX designers in Aquent/Vitamin T's global network.
              </p>
              <div className='mt-2 text-xs uppercase text-white-orange font-geonist-primary tracking-[4px] text-end'>
                <strong>Susie Pollasky</strong>
              </div>
              <div className='mt-1 text-xs text-white-orange font-geonist-secondary opacity-[.7] text-end tracking-tighter'>
                Now: Leadership Recruiting @ Product Design <br />
                at Facebook
              </div>
            </div>
          </div>
          <div className='bg-noise bg-[#2d4850] rounded-tl-[100%] rounded-tr-[100%] rounded-br-[50%] rounded-bl-[0%] show__radius w-fit py-20 mb-10 md:mb-0 px-6'>
            <div className='md:w-64 lg:w-auto'>
              <Image
                height='80'
                width='80'
                alt='user'
                src='/images/user-2.webp'
                className=' mx-auto rounded-[32%] mix-blend-luminosity ring-4 ring-[#fff] mb-2'
              />
              <h5 className='w-56 mt-8 mb-3 text-xl font-fraunce-semibold text-bt-or'>
                “They’re a very well-rounded organization…”
              </h5>
              <p className='mt-1 text-lg font-paragraph-text text-white-orange'>
                Cost per conversion and all of those metrics have dropped
                significantly. We used to pay an average of $100 per lead that
                converts… now we have that down to about $20. Sessions and
                contacts have also gone up astronomically, at least threefold.
                Organic search and social media referrals have all continued to
                skyrocket. We’re really pleased.
              </p>
              <div className='text-xs uppercase text-white-orange font-geonist-primary tracking-[4px] mt-3'>
                <strong>Martin Spritzer</strong>
              </div>
              <div className='mt-1 text-xs text-white-orange font-geonist-secondary opacity-[.7]'>
                General Manager @ iQuoteXpress
              </div>
            </div>
          </div>

          <div className='absolute bottom-[42%] lg:right-[45%] z-50 bg-white-orange rounded-full p-8 md:block hidden'>
            <Image height='32' width='32' src='/images/ms.svg' className='' />
            <div className='absolute  border-2 border-white-orange opacity-[.3] rounded-full -left-4 lg:-left-8 -bottom-4 lg:-bottom-8 -right-4 lg:-right-8 -top-4 lg:-top-8'></div>
            <div className='absolute  border-2 border-white-orange opacity-[.7] rounded-full -left-2 lg:-left-4 -bottom-2 lg:-bottom-4 -right-2 lg:-right-4 -top-2 lg:-top-4'></div>
          </div>

          <div className='bg-noise bg-get rounded-tl-[100%] rounded-tr-[0%] bg-50 rounded-br-[60%] rounded-bl-[60%] show__radius-orange w-fit py-20 mb-10 text-end md:mb-0 px-6'>
            <div className='md:w-64 lg:w-auto'>
              <Image
                height='80'
                width='80'
                alt='user'
                src='/images/user-3.webp'
                className=' ml-44 rounded-[32%] mix-blend-luminosity ring-4 ring-[#fff] mb-2'
              />
              <h5 className='mt-8 mb-3 text-xl font-fraunce-semibold text-white-orange'>
                “They're just good people.”
              </h5>
              <p className='mt-1 text-lg font-paragraph-text text-white-orange'>
                They were a pleasure to work with and I'm really happy with the
                results. They pretty much nailed it.
              </p>
              <div className='text-xs uppercase text-white-orange font-geonist-primary tracking-[4px] mt-3'>
                <strong>Eric weiss</strong>
              </div>
              <div className='mt-1 text-xs text-white-orange font-geonist-secondary opacity-[.7]'>
                Founder @ Full Cycle Product Development
              </div>
            </div>
          </div>
          <div className='bg-noise bg-[#b55730] rounded-tl-[0%] rounded-tr-[100%] bg-50 rounded-br-[60%] rounded-bl-[60%] show__radius-orange w-fit py-20 px-6 mb-10 text-start md:mb-0'>
            <div className='md:w-64 lg:w-auto'>
              <Image
                height='80'
                width='80'
                alt='user'
                src='/images/user-4.webp'
                className=' ml-10 rounded-[32%] mix-blend-luminosity ring-4 ring-[#fff] mb-2'
              />
              <h5 className='mt-8 mb-3 ml-10 text-xl font-fraunce-semibold text-white-orange'>
                “The project was successful”
              </h5>
              <p className='mt-1 ml-10 text-lg font-paragraph-text text-white-orange'>
                They strive to come up with good design, and they focus on all
                the right things. The quality of their work is high, and all the
                deliverables are very well-organized and professional.
              </p>
              <div className='text-xs uppercase ml-10 text-white-orange font-geonist-primary tracking-[4px] mt-3'>
                <strong>Michael Weisfeld</strong>
              </div>
              <div className='mt-1 ml-10 text-xs text-white-orange font-geonist-secondary opacity-[.7]'>
                Director of Digital Marketing @ National Funding
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
