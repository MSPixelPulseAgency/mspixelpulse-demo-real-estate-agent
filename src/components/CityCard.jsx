import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CityCard({ city }) {
  return (
    <motion.article
      className="city-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <img src={city.image} alt={`${city.city} neighborhood demo visual`} />
      <div>
        <h3>{city.city}</h3>
        <p>{city.description}</p>
        <small>{city.average}</small>
        <div className="tag-row">
          {city.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <Link className="text-link" to="/contact">Explore Area</Link>
      </div>
    </motion.article>
  );
}
