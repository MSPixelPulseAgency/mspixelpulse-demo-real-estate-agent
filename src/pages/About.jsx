import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ContactCTA from '../components/ContactCTA.jsx';

const audiences = ['Realtors', 'Real estate agents', 'Mortgage agents', 'Property consultants', 'Real estate teams', 'Pre-construction consultants', 'Investment property advisors', 'Rental property specialists'];
const helps = ['Listing presentation', 'Buyer lead capture', 'Seller consultation requests', 'Mortgage inquiry flow', 'Local neighborhood SEO', 'Professional credibility', 'Contact form conversions'];
const values = ['Premium property marketing', 'Lead-focused UX', 'Local SEO-ready layout', 'Mobile-first real estate pages', 'Listing-ready structure', 'Buyer and seller content flow'];

export default function About() {
  return (
    <>
      <Hero
        eyebrow="About the demo brand"
        title="A real estate demo built for trust, lead generation, and premium property marketing."
        text="MS PixelPulse Realty Group is a fictional demo website created by MSPixelPulseAgency to show how Canadian real estate professionals can present listings, services, buyer resources, seller strategies, mortgage guidance, testimonials, FAQs, and contact forms online."
        primaryLabel="Explore Services"
        primaryTo="/services"
        secondaryLabel="Book Consultation"
        secondaryTo="/contact"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Elegant home exterior representing a premium real estate website demo"
      />
      <section className="section-pad editorial">
        <SectionHeading align="left" eyebrow="Demo brand story" title="A reusable real estate website template with a premium first impression." />
        <p>
          This site is structured as a demo-safe sales asset for MSPixelPulseAgency. It can be adapted into a
          realtor website template, mortgage agent website, property consultant website, or real estate landing page.
        </p>
      </section>
      <section className="section-pad two-column ivory">
        <div>
          <SectionHeading align="left" eyebrow="Who it serves" title="Built for Canadian property professionals." />
          <div className="pill-grid">{audiences.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="What it helps with" title="Designed around lead capture and credibility." />
          <div className="pill-grid">{helps.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>
      <section className="section-pad">
        <SectionHeading eyebrow="Core value" title="Every section has a sales purpose." />
        <div className="feature-grid">{values.map((item) => <article className="feature-card" key={item}><h3>{item}</h3><p>Demo-safe, SEO-ready, and ready for real client customization.</p></article>)}</div>
      </section>
      <ContactCTA title="Need a premium real estate website demo customized?" text="MSPixelPulseAgency can adapt this fictional structure for licensed professionals with approved content and integrations." />
    </>
  );
}
