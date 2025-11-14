import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaTelegram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { siteData } from "../data";
import "./Contact.css";

const Contact = () => {
  const { photographer, social } = siteData;

  const handleTelegramClick = () => {
    const message = encodeURIComponent(
      "Здравствуйте! Хочу узнать подробнее о фотосъемке."
    );
    window.open(`https://t.me/LastJoudas?text=${message}`, "_blank");
  };

  const socialLinks = [
    { icon: <FaInstagram />, url: social.instagram, name: "Instagram" },
    { icon: <FaTelegram />, url: social.telegram, name: "Telegram" },
    { icon: <FaFacebook />, url: social.facebook, name: "Facebook" },
    { icon: <FaWhatsapp />, url: social.whatsapp, name: "WhatsApp" },
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Связаться со мной</h1>
            <p className="page-subtitle">
              Давайте создадим что-то красивое вместе. Я буду рад узнать о вашем
              проекте.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="form-title">Забронировать фотосессию</h2>
              <p className="contact-description">
                Готовы запечатлеть ваши особенные моменты? Свяжитесь со мной
                напрямую через Telegram для быстрого ответа и бронирования.
              </p>

              <button onClick={handleTelegramClick} className="telegram-button">
                <FaTelegram className="telegram-icon" />
                <div className="telegram-button-text">
                  <span className="telegram-button-title">
                    Написать в Telegram
                  </span>
                  <span className="telegram-button-subtitle">@LastJoudas</span>
                </div>
              </button>

              <div className="booking-benefits">
                <h3>Почему стоит выбрать меня?</h3>
                <ul>
                  <li>✓ Профессиональное оборудование</li>
                  <li>✓ Быстрая отдача (3-7 дней)</li>
                  <li>✓ Гибкие пакеты</li>
                  <li>✓ Профессиональная обработка включена</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="info-card">
                <h2 className="info-title">Контактная информация</h2>

                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-text">
                    <h3>Эл. почта</h3>
                    <a href={`mailto:${photographer.email}`}>
                      {photographer.email}
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-text">
                    <h3>Телефон</h3>
                    <a href={`tel:${photographer.phone.replace(/\s/g, "")}`}>
                      {photographer.phone}
                    </a>
                  </div>
                </div>

                <div className="social-section">
                  <h3>Подписывайтесь</h3>
                  <div className="social-links">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        title={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="availability">
                  <h3>Доступность</h3>
                  <p>Понедельник - Суббота: 9:00 - 20:00</p>
                  <p>Воскресенье: По договоренности</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
