import { motion } from 'framer-motion';

export default function AnimatedSection({ as: Tag = 'section', className = '', children }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {Tag === 'section' ? children : <Tag>{children}</Tag>}
    </motion.div>
  );
}
