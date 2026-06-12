import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import LeadForm from '../components/LeadForm.jsx';
import { buyerSteps } from '../data/processData.js';

const resources = ['Mortgage pre-approval', 'Down payment planning', 'Closing costs', 'Home inspection', 'Offer strategy', 'Neighborhood research'];

export default function BuyersPage() {
  return (
    <>
      <Hero
        eyebrow="Buyer resources"
        title="Buy your next home with a clear plan and confident guidance."
        text="A buyer lead generation website page for Canadian real estate professionals who want a calm, helpful path from first inquiry to closing support."
        primaryLabel="Start Buyer Inquiry"
        primaryTo="/contact"
        secondaryLabel="View Listings"
        secondaryTo="/listings"
        image="https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Bright living room interior for buyer resources page"
      />
      <section className="section-pad">
        <SectionHeading eyebrow="Buyer process" title="From consultation to closing, every step has a purpose." />
        <ProcessSteps steps={buyerSteps} />
      </section>
      <section className="section-pad two-column ivory">
        <div>
          <SectionHeading align="left" eyebrow="First-time buyers" title="Simple educational content for early-stage buyers." />
          <p>This demo can guide first-time buyers with plain-language sections for planning, questions, and next steps. It does not provide financial, legal, mortgage, or real estate advice.</p>
        </div>
        <div className="feature-grid compact-cards">{resources.map((item) => <article className="feature-card" key={item}><h3>{item}</h3><p>General demo wording that can be customized for licensed professionals.</p></article>)}</div>
      </section>
      <section className="section-pad form-section">
        <SectionHeading eyebrow="Buyer lead form" title="Request a buyer consultation." />
        <LeadForm
          buttonLabel="Send Buyer Inquiry"
          fields={[
            { name: 'name', label: 'Name', placeholder: 'Your name' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
            { name: 'phone', label: 'Phone', placeholder: '+1 (000) 000-0000' },
            { name: 'city', label: 'Preferred City', placeholder: 'Toronto, Brampton, Mississauga...' },
            { name: 'budget', label: 'Budget Range', placeholder: '$750K - $1M' },
            { name: 'propertyType', label: 'Property Type', placeholder: 'Condo, detached, townhome...' },
            { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us what you are looking for.' },
          ]}
        />
      </section>
    </>
  );
}
