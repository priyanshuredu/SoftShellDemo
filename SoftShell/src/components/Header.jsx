import { useEffect, useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('no-scroll', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="logo-container">
            <img 
              src={isScrolled ? "/logo-1.png" : "/logo.png"} 
              alt="SoftShell" 
              className="logo" 
            />
          </div>
          
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          
          <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#platforms" onClick={closeMenu}>Platforms</a></li>
              <li><a href="#industry" onClick={closeMenu}>Industry</a></li>
              <li><a href="#work" onClick={closeMenu}>Our Work</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
            </ul>
          </nav>
          
            <button className="connect-btn" onClick={closeMenu}>Let's Connect</button>
        </div>
      </header>
      
      {/* Overlay that appears when menu is open */}
      <div 
        className={`menu-overlay ${isMenuOpen ? "active" : ""}`} 
        onClick={closeMenu}
      />
    </>
  );
}

export default Header;