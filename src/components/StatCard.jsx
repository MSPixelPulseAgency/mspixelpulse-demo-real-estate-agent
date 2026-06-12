import { motion } from 'framer-motion';

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
    >
      <strong>{value}</strong>
      <span>{label}</span>
    </motion.div>
  );
}
