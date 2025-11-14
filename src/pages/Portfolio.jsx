import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteData } from "../data";
import Lightbox from "../components/Lightbox";
import "./Portfolio.css";

// Функция для оптимизации изображений
const optimizeImage = (src, width = 800) => {
  // Для локальных изображений добавляем параметры оптимизации
  if (src.startsWith("/")) {
    // В продакшене можно использовать сервисы оптимизации
    // Пока просто возвращаем исходный путь, но с оптимизацией
    return src;
  }
  return src;
};

const Portfolio = () => {
  const { portfolio } = siteData;
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("Все");
  const [imageOrientations, setImageOrientations] = useState({});

  useEffect(() => {
    const loadImageOrientations = () => {
      portfolio.forEach((item) => {
        const img = new Image();
        img.src = item.image;
        img.onload = () => {
          setImageOrientations((prev) => ({
            ...prev,
            [item.id]: img.width > img.height ? "landscape" : "portrait",
          }));
        };
      });
    };

    loadImageOrientations();
  }, [portfolio]);

  const categories = [
    "Все",
    ...new Set(portfolio.map((item) => item.category)),
  ];

  const filteredPortfolio =
    filter === "Все"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <motion.div
            className="portfolio-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Портфолио</h1>
            <p className="page-subtitle">
              Коллекция моих лучших работ, запечатлевших моменты, которые
              рассказывают уникальные истории
            </p>
          </motion.div>
        </div>
      </section>

      <section className="portfolio-gallery">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${
                  filter === category ? "active" : ""
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div className="gallery-grid" layout>
            {filteredPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                className={`gallery-item ${imageOrientations[item.id] || ""}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={optimizeImage(item.image)}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedImage !== null && (
        <Lightbox
          images={filteredPortfolio}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
