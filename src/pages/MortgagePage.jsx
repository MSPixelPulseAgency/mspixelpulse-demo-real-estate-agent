import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import LeadForm from '../components/LeadForm.jsx';
import { mortgageCards } from '../data/processData.js';

export default function MortgagePage() {
  return (
    <>
      <Hero
        eyebrow="Mortgage support"
        title="Mortgage-ready content for buyers, renewals, and property planning."
        text="This page shows how a mortgage agent website or real estate website can include general inquiry paths while staying demo-safe."
        primaryLabel="Send Mortgage Inquiry"
        primaryTo="/contact"
        secondaryLabel="Buyer Resources"
        secondaryTo="/buyers"
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Mortgage planning desk with calculator and paperwork"
      />
      <section className="section-pad">
        <SectionHeading eyebrow="Support areas" title="General mortgage inquiry sections for property planning." />
        <div className="feature-grid">{mortgageCards.map((item) => <article className="feature-card" key={item}><h3>{item}</h3><p>Educational demo content only. Real clients should speak with licensed professionals.</p></article>)}</div>
      </section>
      <section className="section-pad two-column ivory">
        <div className="disclaimer-box">
          <h2>Mortgage Disclaimer</h2>
          <p>This demo website provides general informational content only. It does not provide financial, legal, mortgage, or real estate advice. Real clients should speak with licensed professionals.</p>
        </div>
        <LeadForm
          buttonLabel="Send Mortgage Inquiry"
          fields={[
            { name: 'name', label: 'Name', placeholder: 'Your name' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
            { name: 'phone', label: 'Phone', placeholder: '+1 (000) 000-0000' },
            { name: 'inquiryType', label: 'Inquiry Type', placeholder: 'Pre-approval, renewal, refinance...' },
            { name: 'propertyGoal', label: 'Property Goal', placeholder: 'Buy, renew, refinance, invest...' },
            { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Share general details about your inquiry.' },
          ]}
        />
      </section>
    </>
  );
}
