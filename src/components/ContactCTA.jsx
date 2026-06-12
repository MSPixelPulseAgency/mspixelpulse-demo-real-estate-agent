import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ContactCTA({ title, text, button = 'Book Consultation' }) {
  return (
    <motion.section
      className="contact-cta"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <div>
        <span className="eyebrow">Lead-generation ready</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="btn primary light" to="/contact">{button}</Link>
    </motion.section>
  );
}
