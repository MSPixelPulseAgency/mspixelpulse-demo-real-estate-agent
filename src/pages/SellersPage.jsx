import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import LeadForm from '../components/LeadForm.jsx';
import { sellerSteps } from '../data/processData.js';

const marketing = ['Professional photos', 'Listing copy', 'Social media promotion', 'Search visibility', 'Email marketing', 'Lead follow-up'];
const benefits = ['Clear pricing strategy', 'Premium listing presentation', 'Better online visibility', 'Stronger buyer interest', 'Guided offer process'];

export default function SellersPage() {
  return (
    <>
      <Hero
        eyebrow="Seller strategy"
        title="Sell with a strategy built around pricing, presentation, and digital marketing."
        text="A seller lead generation website page with valuation CTAs, premium listing marketing copy, and clear owner-focused next steps."
        primaryLabel="Request Home Valuation"
        primaryTo="/contact"
        secondaryLabel="See Marketing Plan"
        secondaryTo="/services"
        image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Premium staged living room for seller strategy page"
      />
      <section className="section-pad">
        <SectionHeading eyebrow="Seller process" title="A guided path from home value review to closing." />
        <ProcessSteps steps={sellerSteps} />
      </section>
      <section className="section-pad form-section ivory">
        <SectionHeading eyebrow="Home valuation CTA" title="Start with a demo seller consultation request." />
        <LeadForm
          buttonLabel="Request Demo Home Valuation"
          fields={[
            { name: 'name', label: 'Name', placeholder: 'Your name' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
            { name: 'phone', label: 'Phone', placeholder: '+1 (000) 000-0000' },
            { name: 'address', label: 'Property Address', placeholder: 'Demo address or city area' },
            { name: 'propertyType', label: 'Property Type', placeholder: 'Detached, condo, townhome...' },
            { name: 'timeline', label: 'Timeline to Sell', placeholder: '1-3 months, 6-12 months...' },
            { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your selling goals.' },
          ]}
        />
      </section>
      <section className="section-pad two-column">
        <div>
          <SectionHeading align="left" eyebrow="Marketing plan" title="Premium presentation creates a stronger first impression." />
          <div className="pill-grid">{marketing.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="Seller benefits" title="Content that helps owners feel prepared." />
          <div className="pill-grid">{benefits.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>
    </>
  );
}
