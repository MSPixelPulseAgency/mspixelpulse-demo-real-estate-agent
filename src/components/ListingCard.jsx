import { Link } from 'react-router-dom';
import { Bath, BedDouble, Home, MapPin, MoveUpRight, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ListingCard({ listing }) {
  return (
    <motion.article
      className="listing-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <Link className="listing-image" to={`/listings/${listing.id}`} aria-label={`View ${listing.title}`}>
        <img src={listing.image} alt={listing.alt} />
        <span>{listing.status}</span>
      </Link>
      <div className="listing-body">
        <p className="listing-price">{listing.price}</p>
        <h3>{listing.title}</h3>
        <p className="muted"><MapPin size={16} /> {listing.address}, {listing.city}</p>
        <div className="listing-facts" aria-label="Property details">
          <span><BedDouble size={17} /> {listing.beds} beds</span>
          <span><Bath size={17} /> {listing.baths} baths</span>
          <span><Ruler size={17} /> {listing.size}</span>
          <span><Home size={17} /> {listing.type}</span>
        </div>
        <div className="card-actions">
          <Link className="text-link" to={`/listings/${listing.id}`}>View Property <MoveUpRight size={16} /></Link>
          <Link className="btn small" to="/contact">Ask About This Home</Link>
        </div>
      </div>
    </motion.article>
  );
}
