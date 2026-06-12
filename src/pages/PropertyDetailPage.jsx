import { Link, useParams } from 'react-router-dom';
import PropertyDetails from '../components/PropertyDetails.jsx';
import { listings } from '../data/listingsData.js';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === id);

  if (!listing) {
    return (
      <section className="not-found-page section-pad">
        <span className="eyebrow">Listing not found</span>
        <h1>This demo home is no longer in the showcase.</h1>
        <p>
          The listing ID does not match a fictional property in this MSPixelPulseAgency demo.
          Browse the active placeholder listings or contact the demo team for a custom search flow.
        </p>
        <div className="hero-actions">
          <Link className="btn primary" to="/listings">Browse Listings</Link>
          <Link className="btn secondary" to="/contact">Contact Demo Team</Link>
        </div>
      </section>
    );
  }

  return <PropertyDetails listing={listing} />;
}
