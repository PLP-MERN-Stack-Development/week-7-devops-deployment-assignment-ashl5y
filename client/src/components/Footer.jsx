function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} MERN Stack Application</p>
        <div className="footer-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Terms</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Privacy</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;