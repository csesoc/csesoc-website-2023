import Landing from '@/components/Landing';
import Sponsors from '@/components/Sponsors/index';
import About from '@/components/About';
import Event from '@/components/Event';
import ResourcesAndContacts from '@/components/ResourcesAndContacts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <section>
      <Landing />
      <About />
      <Event />
      <ResourcesAndContacts />
      <Sponsors />
    </section>
  );
}
