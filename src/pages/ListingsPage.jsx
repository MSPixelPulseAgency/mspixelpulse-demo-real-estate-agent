import { useMemo, useState } from 'react';
import Hero from '../components/Hero.jsx';
import ListingCard from '../components/ListingCard.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import { listings } from '../data/listingsData.js';

export default function ListingsPage() {
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const filtered = useMemo(() => listings.filter((item) => (!city || item.city.includes(city)) && (!type || item.type === type)), [city, type]);

  return (
    <>
      <Hero
        eyebrow="Featured demo listings"
        title="Explore polished property listings built for buyer inquiry flow."
        text="These are fictional demo properties only. Filters are front-end examples for a property listing website experience."
        primaryLabel="Request Custom Search"
        primaryTo="/contact"
        secondaryLabel="Buyer Resources"
        secondaryTo="/buyers"
        image="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1300&q=82"
        imageAlt="Luxury kitchen interior used for demo property listings"
      />
      <section className="section-pad">
        <div className="filter-bar">
          <label>City<select value={city} onChange={(e) => setCity(e.target.value)}><option value="">Any City</option><option>Toronto</option><option>Brampton</option><option>Mississauga</option><option>Hamilton</option><option>Milton</option></select></label>
          <label>Property Type<select value={type} onChange={(e) => setType(e.target.value)}><option value="">Any Type</option><option>Condo</option><option>Detached</option><option>Townhome</option><option>Duplex</option><option>Pre-Construction</option><option>Semi-Detached</option></select></label>
          <label>Price Range<select><option>Any Price</option><option>Under $750K</option><option>$750K - $1M</option><option>$1M+</option></select></label>
          <label>Beds<select><option>Any Beds</option><option>1+</option><option>2+</option><option>3+</option><option>4+</option></select></label>
          <button className="btn primary" type="button">Search</button>
        </div>
        <div className="listing-grid">{filtered.map((listing) => <ListingCard listing={listing} key={listing.id} />)}</div>
      </section>
      <section className="section-pad featured-callout">
        <div>
          <span className="eyebrow">Featured property callout</span>
          <h2>Need a listing page that looks premium before a buyer ever books a showing?</h2>
          <p>Property listings shown are demo examples only and do not represent real available properties.</p>
        </div>
      </section>
      <ContactCTA title="Looking for a property like this? Request a custom search." text="Use this section as a buyer lead generation website flow for city, budget, and property type inquiries." />
    </>
  );
}
