import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <span className="icon-badge"><Icon size={22} /></span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <small>Best for: {service.bestFor}</small>
      <Link className="text-link" to="/contact">Discuss this service</Link>
    </motion.article>
  );
}
