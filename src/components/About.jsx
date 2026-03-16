import { motion } from 'framer-motion';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="about-text">
            I&apos;m a Backend Engineer at <strong>M2P Fintech</strong>, focused
            on building reliable, scalable systems. My day-to-day involves
            designing and shipping REST APIs with <strong>Spring Boot</strong>,
            connecting microservices via <strong>Feign Clients</strong>, and
            handling complex data workflows with <strong>Spring Batch</strong>.
            I care deeply about clean architecture, structured error handling,
            and writing code that&apos;s easy to operate in production.
          </p>
          <p className="about-text">
            I&apos;m always curious about how things work under the hood —
            whether that&apos;s tracing a request through a distributed system,
            understanding how batch jobs process large datasets, or exploring
            how NLP models approach language understanding.
          </p>
          <div className="about-highlight">
            📱 Also experienced in <strong>Flutter Web</strong> — led core
            architecture and a dynamic theming system for a multi-tenant app
          </div>
          <div className="about-highlight" style={{ marginTop: '0.5rem' }}>
            🎓 GITAM University — B.Tech Computer Science &amp; Engineering
            (2021–2025)
          </div>
        </motion.div>
      </div>
    </section>
  );
}
