import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import { services } from '../data/servicesData.js';

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Real estate services"
        title="A full service structure for buyers, sellers, mortgage inquiries, and property consultants."
        text="These service cards show how a real estate agent website, mortgage agent website, and property consultant website can share one premium experience."
        primaryLabel="Book Consultation"
        primaryTo="/contact"
        secondaryLabel="Read FAQs"
        secondaryTo="/faq"
        image="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Real estate consultation table with property paperwork"
      />
      <section className="section-pad">
        <SectionHeading eyebrow="Service menu" title="Reusable cards for a premium real estate website." />
        <div className="service-grid">{services.map((service) => <ServiceCard service={service} key={service.title} />)}</div>
      </section>
      <ContactCTA title="Build a service path around your strongest leads." text="Each service section can be customized with real credentials, approved details, and production form integrations." />
    </>
  );
}
