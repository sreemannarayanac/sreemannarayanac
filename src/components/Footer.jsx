import '../styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {year}{' '}
          <a
            href="https://github.com/sreemannarayanac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sreemannarayana Chamarti
          </a>
          . Built with React &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
