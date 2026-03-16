import { motion } from 'framer-motion';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 className="hero-name">Sreemannarayana Chamarti</h1>
        <p className="hero-role">Backend Engineer · M2P Fintech</p>
        <p className="hero-tagline">&ldquo;The Always Curious Programmer&rdquo;</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
