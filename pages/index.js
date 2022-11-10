import Client from '../components/client/Client';
import Design from '../components/design/Design';
import GetCozy from '../components/getcoz/GetCozy';
import Hero from '../components/hero/Hero';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Partner from '../components/partner/Partner';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <GetCozy />
      <Client />
      <Partner />
      <Design />
      <section className='w-auto py-8 px-5 bg-btn-orange'>
        <h3 className='text-bt-or font-secondary text-5xl text-center md:text-start py-10 px-5 md:px-44 lg:text-white lg:px-0 lg:text-center'>
          🙋 How can we help?
        </h3>
      </section>
      <Footer />
    </div>
  );
}
