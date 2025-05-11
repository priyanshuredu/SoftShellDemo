import React, { useState } from "react";
import footerData from "../data/FooterData.json";
import "../styles/Footer.css";

const Footer = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Company Info */}
        <div className="footer-brand">
          <img
            src={footerData.company.logo}
            alt={footerData.company.name}
            className="footer-logo"
          />
          <div className="footer-address">
            {footerData.company.locations.map((location, index) => (
              <div key={index} className="address">
                <img src={location.flag} alt="flag" className="flag" />
                <p>{location.address}</p>
              </div>
            ))}
          </div>
          <div className="contact">
            <p>📞 {footerData.company.contact.phone}</p>
            <p>✉️ {footerData.company.contact.email}</p>
          </div>
        </div>

        {/* Middle Section - Dynamic Links */}
        <div className="footer-links">
          {Object.entries(footerData.links).map(([category, items]) => (
            <div key={category} className="link-category">
              <h4 onClick={() => toggleCategory(category)}>
                {category}
                <span className="dropdown-icon">
                  {expandedCategory === category ? '−' : '+'}
                </span>
              </h4>
              <ul className={expandedCategory === category ? 'expanded' : ''}>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="divider"></div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>{footerData.company.copyright}</p>
        <div className="social-icons">
          {footerData.socialIcons.map((social, index) => (
            <a key={index} href={social.link}>
              <img src={social.icon} alt={`${social.icon.split('.')[0]} icon`} className="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;