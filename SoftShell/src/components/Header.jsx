import 'react';
import { useEffect,useState } from 'react';
import '../styles/Header.css'; // Import custom CSS for styling

function Header ()  {
    const [isScrolled, setIsScrolled] = useState(false);

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
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} `}>
      <div className="header-container">
        <img src={isScrolled ? "/logo-1.png" : "/logo.png"}
         alt="SoftShell" className="logo" />
        <nav className="nav-menu">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#platforms">Platforms</a></li>
            <li><a href="#industry">Industry</a></li>
            <li><a href="#work">Our Work</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <button className="connect-btn">Let's Connect</button>
      </div>

    </header>

  );
};

export default Header;