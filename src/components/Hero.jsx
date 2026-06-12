import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero({
  eyebrow,
  title,
  text,
  primaryLabel,
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo = '/listings',
  image,
  imageAlt,
  children,
}) {
  return (
    <section className="hero section-pad">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="hero-actions">
          {primaryLabel && <Link className="btn primary" to={primaryTo}>{primaryLabel}</Link>}
          {secondaryLabel && <Link className="btn secondary" to={secondaryTo}>{secondaryLabel}</Link>}
        </div>
      </motion.div>
      {image && (
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <img src={image} alt={imageAlt} />
          {children}
        </motion.div>
      )}
    </section>
  );
}
