import React from "react";
import footerData from "../data/FooterData.json";
import "../styles/Footer.css";


const Footer = () => {
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
            <div key={category}>
              <h4>{category}</h4>
              <ul>
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
