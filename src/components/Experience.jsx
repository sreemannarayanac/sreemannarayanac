import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="timeline">
          {experience.map((entry, index) => (
            <motion.div
              key={entry.id}
              className="timeline-entry"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-header">
                <h3 className="timeline-role">{entry.role}</h3>
                {entry.organization && (
                  <p className="timeline-org">{entry.organization}</p>
                )}
              </div>
              <span className="timeline-period">{entry.period}</span>
              <ul className="timeline-responsibilities">
                {entry.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
