import { Link } from 'react-router-dom';
import { Bath, BedDouble, CalendarDays, Heart, Home, MapPin, Ruler } from 'lucide-react';
import LeadForm from './LeadForm.jsx';
import ListingCard from './ListingCard.jsx';
import MortgageCalculator from './MortgageCalculator.jsx';
import { listings } from '../data/listingsData.js';

export default function PropertyDetails({ listing }) {
  const similar = listings.filter((item) => item.id !== listing.id && (item.city === listing.city || item.propertyType === listing.propertyType)).slice(0, 3);

  return (
    <>
      <section className="details-gallery">
        <div className="gallery-main"><img src={listing.images[0]} alt={listing.alt} /></div>
        {listing.images.slice(1, 3).map((image, index) => <img src={image} alt={`${listing.title} demo gallery ${index + 2}`} key={image} />)}
      </section>
      <section className="property-detail-layout section-pad">
        <div className="property-detail-main">
          <div className="detail-title-row">
            <div>
              <span className="eyebrow">{listing.status}</span>
              <h1>{listing.priceLabel}</h1>
              <p><MapPin size={17} /> {listing.address}, {listing.city}, {listing.province}</p>
            </div>
            <button className="save-detail" type="button"><Heart size={18} /> Save demo home</button>
          </div>
          <div className="detail-facts horizontal">
            <span><BedDouble /> {listing.beds} beds</span>
            <span><Bath /> {listing.baths} baths</span>
            <span><Ruler /> {listing.sqft.toLocaleString()} sq ft</span>
            <span><Home /> {listing.propertyType}</span>
          </div>
          {listing.openHouse && <p className="open-house-line"><CalendarDays size={18} /> Open house placeholder: {listing.openHouse}</p>}
          <article className="detail-section">
            <h2>Overview</h2>
            <p>{listing.description}</p>
            <p>This property detail page is part of a fictional demo website. Listings, prices, stats, and property details are placeholders only.</p>
          </article>
          <article className="detail-section">
            <h2>Features</h2>
            <div className="feature-list">{listing.features.map((feature) => <span key={feature}>{feature}</span>)}</div>
          </article>
          <article className="detail-section">
            <h2>Neighborhood highlights</h2>
            <p>{listing.neighborhood}</p>
            <div className="tag-row">{listing.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
          <MortgageCalculator />
        </div>
        <aside className="inquiry-sidebar">
          <h3>Ask about this demo home</h3>
          <LeadForm
            buttonLabel="Send Listing Inquiry"
            fields={[
              { name: 'name', label: 'Name', placeholder: 'Your name' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
              { name: 'phone', label: 'Phone', placeholder: '+1 (000) 000-0000' },
              { name: 'message', label: 'Message', type: 'textarea', placeholder: `I want to know more about ${listing.title}.` },
            ]}
            note="Demo form only. Connect to CRM, email, or booking tools for production."
          />
        </aside>
      </section>
      <section className="section-pad">
        <div className="section-heading">
          <span className="eyebrow">Similar demo homes</span>
          <h2>Keep browsing nearby matches.</h2>
        </div>
        <div className="listing-grid marketplace-grid">
          {similar.map((item) => <ListingCard listing={item} key={item.id} />)}
        </div>
        <div className="center-action"><Link className="btn secondary" to="/listings">Back to all listings</Link></div>
      </section>
    </>
  );
}
