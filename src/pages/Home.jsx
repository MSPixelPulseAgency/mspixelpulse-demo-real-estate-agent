import { Link } from 'react-router-dom';
import { Building2, ClipboardCheck, Home as HomeIcon, Landmark, Search, Sparkles } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import StatCard from '../components/StatCard.jsx';
import ListingCard from '../components/ListingCard.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CityCard from '../components/CityCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import { listings } from '../data/listingsData.js';
import { services, whyChoose } from '../data/servicesData.js';
import { neighborhoods } from '../data/neighborhoodsData.js';
import { testimonials } from '../data/testimonialsData.js';
import { faqs } from '../data/faqData.js';
import { buyerSteps, mortgageCards } from '../data/processData.js';

const trustItems = [
  ['Buyer consultation flow', Search],
  ['Seller lead capture', ClipboardCheck],
  ['Listing showcase pages', Building2],
  ['Mortgage-ready sections', Landmark],
];

const sellerCards = ['Home valuation', 'Listing preparation', 'Premium photography', 'Digital marketing', 'Offer negotiation', 'Closing support'];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Luxury Canadian real estate website demo"
        title="Find your next home with confidence, clarity, and a premium real estate experience."
        text="MS PixelPulse Realty Group is a modern Canadian real estate demo website built for realtors, mortgage agents, property consultants, and real estate teams who want to attract serious buyers and sellers online."
        primaryLabel="View Featured Listings"
        primaryTo="/listings"
        secondaryLabel="Book Consultation"
        secondaryTo="/contact"
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Luxury modern living room with large windows for a premium real estate website demo"
      >
        <div className="floating-stats">
          <StatCard value="$125M+" label="Demo Metric Sales Volume" delay={0.25} />
          <StatCard value="500+" label="Demo Client Inquiries" delay={0.35} />
          <StatCard value="Toronto" label="Real Estate Demo" delay={0.45} />
          <StatCard value="Ready" label="Buyer & Seller Flow" delay={0.55} />
        </div>
      </Hero>

      <section className="trust-strip">
        {trustItems.map(([item, Icon]) => (
          <div key={item}>
            <Icon size={22} />
            <span>{item}</span>
          </div>
        ))}
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Featured demo listings"
          title="Premium property cards built for real estate lead generation."
          text="All properties, prices, and availability are fictional demo placeholders only."
        />
        <div className="listing-grid">
          {listings.slice(0, 6).map((listing) => <ListingCard listing={listing} key={listing.id} />)}
        </div>
      </section>

      <section className="section-pad split-section ivory">
        <SectionHeading
          align="left"
          eyebrow="Buyer journey"
          title="A clear buying journey from search to closing."
          text="Guide buyers through the moments that matter while keeping consultation requests easy to find."
        />
        <ProcessSteps steps={buyerSteps} />
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Seller strategy"
          title="A smarter way to prepare, price, market, and sell your property."
          text="Seller-focused sections help property owners understand the value of a clear marketing plan."
        />
        <div className="feature-grid">
          {sellerCards.map((card) => (
            <article className="feature-card" key={card}>
              <Sparkles size={22} />
              <h3>{card}</h3>
              <p>Demo-safe content that can be customized for licensed real estate professionals.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad mortgage-band">
        <div>
          <span className="eyebrow">Mortgage-ready structure</span>
          <h2>Mortgage guidance built into the real estate experience.</h2>
          <p>
            This demo can also support mortgage agents and property consultants with sections for affordability,
            pre-approval, refinance, renewal, and buyer education. It is general demo content only.
          </p>
        </div>
        <div className="mini-card-grid">
          {mortgageCards.map((card) => <span key={card}>{card}</span>)}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Neighborhood highlights"
          title="Local landing pages for Canadian communities."
          text="City cards help support SEO-ready content for a real estate agent website Toronto and surrounding markets."
        />
        <div className="city-grid compact">
          {neighborhoods.slice(0, 8).map((city) => <CityCard city={city} key={city.city} />)}
        </div>
      </section>

      <section className="section-pad ivory">
        <SectionHeading eyebrow="Services preview" title="Built for buyers, sellers, mortgage inquiries, and property leads." />
        <div className="service-grid">
          {services.slice(0, 8).map((service) => <ServiceCard service={service} key={service.title} />)}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="Why choose this demo" title="A real estate website structure designed to convert." />
        <div className="why-grid">
          {whyChoose.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad dark-section">
        <SectionHeading eyebrow="Demo reviews" title="Fictional testimonials for presentation only." />
        <div className="testimonial-grid">
          {testimonials.slice(0, 3).map((testimonial) => <TestimonialCard testimonial={testimonial} key={testimonial.name} />)}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="FAQ preview" title="Questions real estate prospects ask before they inquire." />
        <FAQAccordion items={faqs.slice(0, 4)} />
        <div className="center-action"><Link className="btn secondary" to="/faq">View All FAQs</Link></div>
      </section>

      <ContactCTA
        title="Ready to launch a real estate website that attracts buyers, sellers, and property leads?"
        text="This demo can be customized for Canadian realtors, mortgage agents, property consultants, investment advisors, and real estate teams."
      />
    </>
  );
}
