import { motion } from 'framer-motion';
import '../styles/Interests.css';

const interests = [
  {
    icon: '🎮',
    title: 'Strategy & Educational Games',
    description:
      'I enjoy games that make you think — like Transport Fever 2, where you build logistics networks, and Dummynation, where you manage bizarre economies. These games sharpen my systems thinking.',
  },
  {
    icon: '🌍',
    title: 'How Trade Flows Work',
    description:
      'I have a deep curiosity about how trade works — both physically (supply chains, logistics, shipping routes) and virtually (financial systems, digital markets, payment rails). Understanding these systems is endlessly fascinating.',
  },
];

export default function Interests() {
  return (
    <section className="section" id="interests">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Other Interests
        </motion.h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className="interest-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="interest-icon">{interest.icon}</div>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-description">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
