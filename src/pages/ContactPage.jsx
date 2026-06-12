import { Mail, MapPin, Phone } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import LeadForm from '../components/LeadForm.jsx';

const options = {
  inquiryType: ['Buying', 'Selling', 'Mortgage', 'Investment Property', 'Pre-Construction', 'Rental Search', 'Website Demo Inquiry', 'Other'],
  city: ['Toronto', 'Brampton', 'Mississauga', 'Vaughan', 'Oakville', 'Milton', 'Hamilton', 'Markham', 'Other'],
  propertyType: ['Condo', 'Detached', 'Semi-Detached', 'Townhome', 'Duplex', 'Investment Property', 'Pre-Construction', 'Rental', 'Other'],
  budget: ['Under $500K', '$500K - $750K', '$750K - $1M', '$1M - $1.5M', '$1.5M+', 'Not sure yet'],
  timeline: ['Immediately', '1-3 months', '3-6 months', '6-12 months', 'Just researching'],
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Start a search, listing, mortgage, or website demo inquiry."
        text="Use this contact page as a marketplace-style lead capture flow for realtors, mortgage agents, and property consultants. Real businesses can connect this form to email, CRM, calendar booking, or automation tools."
        primaryLabel="Send Inquiry Below"
        primaryTo="/contact"
        secondaryLabel="View Listings"
        secondaryTo="/listings"
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Real estate consultation meeting for a demo contact page"
      />
      <section className="section-pad contact-layout">
        <div>
          <SectionHeading align="left" eyebrow="Demo business details" title="MS PixelPulse Realty Group" />
          <div className="contact-card"><MapPin /> <span>Toronto, Ontario, Canada</span></div>
          <div className="contact-card"><Phone /> <span>+1 (000) 000-0000</span></div>
          <div className="contact-card"><Mail /> <span>hello@mspixelpulse.com</span></div>
          <p className="disclaimer-box">This demo form is for presentation only. Connect it to EmailJS, Formspree, a backend API, CRM, Google Sheets, or a booking system for production use.</p>
        </div>
        <LeadForm
          buttonLabel="Send Real Estate Inquiry"
          note="This demo form is for presentation only and does not submit data."
          fields={[
            { name: 'name', label: 'Name', placeholder: 'Your name' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
            { name: 'phone', label: 'Phone', placeholder: '+1 (000) 000-0000' },
            { name: 'inquiryType', label: 'Inquiry Type', type: 'select', options: options.inquiryType },
            { name: 'city', label: 'Preferred City', type: 'select', options: options.city },
            { name: 'propertyType', label: 'Property Type', type: 'select', options: options.propertyType },
            { name: 'budget', label: 'Budget Range', type: 'select', options: options.budget },
            { name: 'timeline', label: 'Timeline', type: 'select', options: options.timeline },
            { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your goals.' },
          ]}
        />
      </section>
    </>
  );
}
