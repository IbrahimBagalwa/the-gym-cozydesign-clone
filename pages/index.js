import Client from '../components/client/Client';
import GetCozy from '../components/getcoz/GetCozy';
import Hero from '../components/hero/Hero';
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
    </div>
  );
}
