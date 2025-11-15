import { siteData } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

// Функция для оптимизации изображений
const optimizeImage = (src, width = 800) => {
  // Для локальных изображений добавляем параметры оптимизации
  if (src.startsWith("/")) {
    // В продакшене можно использовать сервисы оптимизации
    // Пока просто возвращаем исходный путь
    return src;
  }
  return src;
};

const Home = () => {
  const { photographer, portfolio, hero } = siteData;

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img
          src={optimizeImage(hero.image)}
          alt={hero.title}
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {hero.title}
          </motion.h1>
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero.subtitle}
          </motion.h2>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/portfolio" className="hero-button">
              Просмотреть портфолио <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-text">
              <h2 className="section-title">Немного обо мне</h2>
              <p className="about-description">{photographer.bio}</p>
              <p className="about-description">
                Обладая многолетним опытом и тонким вниманием к деталям, я
                специализируюсь на том, чтобы запечатлеть красоту и эмоции самых
                драгоценных моментов жизни. Будь то свадьба, портретная съемка
                или съемка образа жизни, моя цель - создать неподвластные
                времени образы, которыми вы будете дорожить вечно.
              </p>
              <Link to="/contact" className="cta-button">
                Давайте работать вместе
              </Link>
            </div>
            <div className="about-image">
              <img
                src={optimizeImage(portfolio[0].image)}
                alt="About"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">📸</div>
              <h3 className="feature-title">Портретная съемка</h3>
              <p className="feature-text">
                Создаю выразительные портреты, раскрывающие характер и
                индивидуальность каждого клиента.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">💍</div>
              <h3 className="feature-title">Свадебная съемка</h3>
              <p className="feature-text">
                Запечатлеваю самые важные моменты вашего особенного дня с
                любовью и вниманием к деталям.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Ретушь</h3>
              <p className="feature-text">
                Профессиональная ретушь и постобработка для идеального
                результата.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="preview-section">
        <div className="container">
          <h2 className="section-title text-center">Недавняя работа</h2>
          <div className="preview-grid">
            {portfolio.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                className="preview-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={optimizeImage(item.image)}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="preview-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="preview-cta">
            <Link to="/portfolio" className="cta-button">
              Просмотреть полное портфолио <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
