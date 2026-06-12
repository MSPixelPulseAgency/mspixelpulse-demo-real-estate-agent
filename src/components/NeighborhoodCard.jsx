import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NeighborhoodCard({ city }) {
  return (
    <motion.article
      className="neighborhood-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <img src={city.image} alt={`${city.city} Canadian neighborhood demo visual`} />
      <div>
        <h3>{city.city}</h3>
        <p>{city.description}</p>
        <div className="tag-row compact-tags">{city.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <Link className="text-link" to={`/listings?city=${encodeURIComponent(city.city)}`}>View homes</Link>
      </div>
    </motion.article>
  );
}
