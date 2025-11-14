import { FaInstagram, FaTelegram, FaHeart } from "react-icons/fa";
import { siteData } from "../data";
import "./Footer.css";

const Footer = () => {
  const { social, photographer } = siteData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">MP Фотограф</h3>
            <p className="footer-text">{photographer.bio}</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Контакты</h4>
            <p className="footer-text">{photographer.email}</p>
            <p className="footer-text">{photographer.phone}</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Крч я тута епт</h4>
            <div className="social-links">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href={social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {photographer.name}. All rights
            reserved.
            <span className="footer-heart">
              {" "}
              Made with <FaHeart className="heart-icon" /> for photography
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
