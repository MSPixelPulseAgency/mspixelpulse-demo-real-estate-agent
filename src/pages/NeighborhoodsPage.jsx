import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import NeighborhoodCard from '../components/NeighborhoodCard.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import { neighborhoods } from '../data/neighborhoodsData.js';

export default function NeighborhoodsPage() {
  return (
    <>
      <Hero
        eyebrow="Neighborhood pages"
        title="Explore Canadian communities with search-ready local landing pages."
        text="Browse city cards that can connect directly into filtered listing searches, relocation inquiries, and area-specific lead capture."
        primaryLabel="Explore With Us"
        primaryTo="/contact"
        secondaryLabel="View Listings"
        secondaryTo="/listings"
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Tree-lined neighborhood street for Canadian community landing pages"
      />
      <section className="section-pad">
        <SectionHeading eyebrow="Community highlights" title="Visual city cards for Toronto and surrounding markets." text="Average-style text is placeholder content only and does not use real market statistics." />
        <div className="neighborhood-grid">{neighborhoods.map((city) => <NeighborhoodCard city={city} key={city.city} />)}</div>
      </section>
      <ContactCTA title="Need local SEO pages for more communities?" text="This structure can expand into city, neighborhood, building, and service landing pages for Canadian real estate professionals." />
    </>
  );
}
