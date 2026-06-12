import { motion } from 'framer-motion';

export default function ProcessSteps({ steps }) {
  return (
    <div className="process-grid">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.article
            className="process-card"
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
          >
            <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
            <Icon size={24} aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
