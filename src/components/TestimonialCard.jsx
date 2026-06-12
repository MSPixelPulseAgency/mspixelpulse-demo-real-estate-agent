import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <Quote size={30} />
      <p>“{testimonial.quote}”</p>
      <strong>{testimonial.name}</strong>
      <span>{testimonial.category}</span>
    </motion.article>
  );
}
