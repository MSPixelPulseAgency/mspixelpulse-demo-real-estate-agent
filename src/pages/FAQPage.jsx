import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import { faqs } from '../data/faqData.js';

export default function FAQPage() {
  return (
    <>
      <Hero
        eyebrow="Frequently asked questions"
        title="Clear answers for real estate website demo buyers."
        text="FAQ content helps explain demo safety, MLS/IDX possibilities, CRM integrations, mortgage use cases, and Vercel deployment."
        primaryLabel="Ask a Question"
        primaryTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Luxury interior used for real estate FAQ page"
      />
      <section className="section-pad">
        <SectionHeading eyebrow="FAQ" title="Demo-safe answers for future clients and AI agents." />
        <FAQAccordion items={faqs} />
      </section>
      <ContactCTA title="Have a real estate website question?" text="This demo can be adapted into a licensed realtor website, mortgage agent website, or property consultant website." />
    </>
  );
}
