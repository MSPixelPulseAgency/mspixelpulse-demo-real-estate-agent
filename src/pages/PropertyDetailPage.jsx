import { Link, useParams } from 'react-router-dom';
import { Bath, BedDouble, Home, Ruler } from 'lucide-react';
import ContactCTA from '../components/ContactCTA.jsx';
import { listings } from '../data/listingsData.js';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === id) || listings[0];

  return (
    <>
      <section className="property-hero">
        <img src={listing.image} alt={listing.alt} />
        <div>
          <span className="eyebrow">{listing.status}</span>
          <h1>{listing.title}</h1>
          <p>{listing.address}, {listing.city}</p>
          <strong>{listing.price}</strong>
        </div>
      </section>
      <section className="section-pad two-column">
        <div>
          <h2>Demo property overview</h2>
          <p>{listing.summary}</p>
          <p className="disclaimer-box">Property listings shown are demo examples only and do not represent real available properties.</p>
        </div>
        <div className="detail-facts">
          <span><BedDouble /> {listing.beds} beds</span>
          <span><Bath /> {listing.baths} baths</span>
          <span><Ruler /> {listing.size}</span>
          <span><Home /> {listing.type}</span>
        </div>
      </section>
      <ContactCTA title="Ask about a property like this." text="This CTA can be connected to a CRM, email tool, or listing inquiry workflow for production websites." button="Ask About This Home" />
      <div className="center-action"><Link className="text-link" to="/listings">Back to Listings</Link></div>
    </>
  );
}
