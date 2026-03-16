import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import '../styles/Skills.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-tag"
              variants={itemVariants}
            >
              <span className={`skill-dot ${skill.category}`} />
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
