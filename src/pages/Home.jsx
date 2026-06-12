import { Link } from 'react-router-dom';
import { Bot, CheckCircle2, Compass, Home as HomeIcon, MapPinned, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import PropertySearch from '../components/PropertySearch.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import NeighborhoodCard from '../components/NeighborhoodCard.jsx';
import MortgageCalculator from '../components/MortgageCalculator.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';
import { neighborhoods } from '../data/neighborhoodsData.js';
import { testimonials } from '../data/testimonialsData.js';

const popularSearches = [
  { label: 'Homes in Toronto', to: '/listings?city=Toronto&q=Toronto' },
  { label: 'Condos in Mississauga', to: '/listings?city=Mississauga&type=Condo&q=Mississauga' },
  { label: 'Detached homes in Brampton', to: '/listings?city=Brampton&type=Detached&q=Brampton' },
  { label: 'Townhomes in Vaughan', to: '/listings?city=Vaughan&type=Townhome&q=Vaughan' },
  { label: 'Investment properties in Hamilton', to: '/listings?city=Hamilton&q=Investment' },
  { label: 'Pre-construction in Toronto', to: '/listings?city=Toronto&type=Pre-Construction&q=Pre-construction' },
];

const aiFeatures = [
  'Match me with homes',
  'Compare neighborhoods',
  'Estimate monthly payment',
  'Prepare buyer questions',
  'Create seller checklist',
  'Find nearby communities',
];

const stats = [
  ['12', 'demo communities'],
  ['500+', 'demo inquiries'],
  ['100%', 'placeholder listings'],
  ['Mobile', 'first lead flow'],
];

export default function Home() {
  return (
    <>
      <section className="search-hero">
        <div className="hero-backdrop" />
        <div className="search-hero-content">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="eyebrow">Canadian property search demo</span>
            <h1>Find homes, condos, and investment properties across Canada.</h1>
            <p>
              Search demo listings by city, property type, budget, and lifestyle. Built for realtors,
              mortgage agents, and property consultants who need a premium lead-generation website.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}>
            <PropertySearch mode="bar" />
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-pad popular-section">
        <div className="section-heading">
          <span className="eyebrow">Popular nearby searches</span>
          <h2>Start with the searches real buyers actually tap.</h2>
        </div>
        <div className="popular-search-grid">
          {popularSearches.map((search) => (
            <Link to={search.to} key={search.label}>
              <MapPinned size={20} />
              <span>{search.label}</span>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad search-preview-section">
        <SectionHeading
          eyebrow="Featured listings"
          title="Search, filter, save, and compare fictional demo homes."
          text="All listings, prices, stats, and property details are placeholders only."
        />
        <PropertySearch mode="preview" />
      </AnimatedSection>

      <AnimatedSection className="section-pad ai-feature-section">
        <div className="ai-feature-copy">
          <span className="eyebrow">AI-powered discovery demo</span>
          <h2>Meet your AI Home Match assistant.</h2>
          <p>
            A demo AI-powered experience that helps visitors narrow down cities, budgets, property types,
            and buyer goals before speaking with an agent.
          </p>
          <div className="feature-list">
            {aiFeatures.map((feature) => <span key={feature}><Sparkles size={16} /> {feature}</span>)}
          </div>
          <Link className="btn primary" to="/contact">Start AI Match</Link>
        </div>
        <div className="chat-demo-card">
          <div className="chat-demo-head"><Bot size={20} /> AI Home Match</div>
          <p className="user">I want a 3-bedroom home near Toronto under $900K.</p>
          <p className="bot">I can help you explore nearby cities like Brampton, Mississauga, Milton, and Hamilton based on your budget and lifestyle.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad buyer-seller-panels">
        <article>
          <img src="https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1000&q=82" alt="Bright living room for buyer search panel" />
          <div>
            <span className="eyebrow">I’m buying</span>
            <h2>Search with clarity before the first showing.</h2>
            {['Compare nearby cities', 'Save lifestyle filters', 'Ask smarter buyer questions'].map((item) => <p key={item}><CheckCircle2 size={18} /> {item}</p>)}
            <Link className="btn secondary" to="/buyers">Buyer resources</Link>
          </div>
        </article>
        <article>
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=82" alt="Premium home exterior for seller strategy panel" />
          <div>
            <span className="eyebrow">I’m selling</span>
            <h2>Turn property interest into valuation leads.</h2>
            {['Home valuation flow', 'Premium listing presentation', 'Digital seller follow-up'].map((item) => <p key={item}><CheckCircle2 size={18} /> {item}</p>)}
            <Link className="btn secondary" to="/sellers">Seller strategy</Link>
          </div>
        </article>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <SectionHeading eyebrow="Neighborhood explorer" title="Browse Canadian communities visually." />
        <div className="neighborhood-grid">
          {neighborhoods.slice(0, 8).map((city) => <NeighborhoodCard city={city} key={city.city} />)}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad mortgage-snapshot-section">
        <MortgageCalculator />
      </AnimatedSection>

      <AnimatedSection className="section-pad stat-market-section">
        {stats.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </AnimatedSection>

      <AnimatedSection className="section-pad testimonials-market-section">
        <SectionHeading eyebrow="Demo testimonials" title="Premium trust cards for buyer and seller leads." />
        <div className="testimonial-grid">
          {testimonials.slice(0, 3).map((testimonial) => <TestimonialCard testimonial={testimonial} key={testimonial.name} />)}
        </div>
      </AnimatedSection>

      <ContactCTA
        title="Find the right home search experience for your real estate brand."
        text="This redesigned demo is built for Canadian realtors, mortgage agents, property consultants, and real estate teams that want stronger property discovery and lead capture."
        button="Book Consultation"
      />
    </>
  );
}
