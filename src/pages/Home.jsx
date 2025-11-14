import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCamera, FaAward, FaHeart } from "react-icons/fa";
import { siteData } from "../data";
import "./Home.css";

const Home = () => {
  const { hero, photographer, portfolio } = siteData;

  const features = [
    {
      icon: <FaCamera />,
      title: "Professional Equipment",
      text: "Using top-tier photography gear",
    },
    {
      icon: <FaAward />,
      title: "Award-Winning",
      text: "Recognized excellence in photography",
    },
    {
      icon: <FaHeart />,
      title: "Passion & Dedication",
      text: "Every shoot is a work of art",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src={hero.image} alt="Hero" className="hero-image" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">{hero.title}</h1>
          <h2 className="hero-subtitle">{hero.subtitle}</h2>
          <p className="hero-description">{hero.description}</p>
          <Link to="/portfolio" className="hero-button">
            Просмотр портфолио <FaArrowRight />
          </Link>
        </motion.div>
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
              <img src={portfolio[0].image} alt="About" />
            </div>
          </motion.div>
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
                <img src={item.image} alt={item.title} />
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
