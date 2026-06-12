import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <motion.div
      className={`section-heading ${align === 'left' ? 'left' : ''}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}
