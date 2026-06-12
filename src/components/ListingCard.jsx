import { Link } from 'react-router-dom';
import { Bath, BedDouble, Camera, Heart, Home, MapPin, MoveUpRight, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ListingCard({ listing }) {
  const cityLine = `${listing.city}, ${listing.province}`;

  return (
    <motion.article
      className="listing-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45 }}
    >
      <Link className="listing-image" to={`/listings/${listing.id}`} aria-label={`View ${listing.title}`}>
        <img src={listing.image} alt={listing.alt} />
        <span className="status-badge">{listing.status}</span>
        {listing.isNew && <span className="new-badge">New</span>}
        {listing.openHouse && <span className="open-badge">Open House</span>}
        <span className="image-count"><Camera size={14} /> {listing.images?.length || 1}</span>
      </Link>
      <button className="save-button" type="button" aria-label={`Save ${listing.title}`}>
        <Heart size={18} />
      </button>
      <div className="listing-body">
        <div className="price-row">
          <p className="listing-price">{listing.priceLabel}</p>
          <small>{listing.propertyType}</small>
        </div>
        <h3>{listing.title}</h3>
        <p className="muted"><MapPin size={16} /> {listing.address}, {cityLine}</p>
        <div className="listing-facts" aria-label="Property details">
          <span><BedDouble size={17} /> {listing.beds} beds</span>
          <span><Bath size={17} /> {listing.baths} baths</span>
          <span><Ruler size={17} /> {listing.sqft.toLocaleString()} sq ft</span>
          <span><Home size={17} /> {listing.propertyType}</span>
        </div>
        <div className="tag-row compact-tags">
          {listing.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="card-actions">
          <Link className="text-link" to={`/listings/${listing.id}`}>View Details <MoveUpRight size={16} /></Link>
          <Link className="btn small" to="/contact">Ask About This Home</Link>
        </div>
      </div>
    </motion.article>
  );
}
