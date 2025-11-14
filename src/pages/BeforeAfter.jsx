import { motion } from "framer-motion";
import { siteData } from "../data";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import "./BeforeAfter.css";

const BeforeAfter = () => {
  const { beforeAfter } = siteData;

  return (
    <div className="before-after-page">
      <section className="before-after-hero">
        <div className="container">
          <motion.div
            className="before-after-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">До & После</h1>
            <p className="page-subtitle">
              Смотрите трансформацию через профессиональную обработку и ретушь
            </p>
            <p className="page-description">
              Перетащите слайдер, чтобы сравнить оригинал и отредактированную
              версию
            </p>
          </motion.div>
        </div>
      </section>

      <section className="before-after-gallery">
        <div className="container">
          {beforeAfter.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                title={item.title}
                description={item.description}
                orientation={item.orientation || "horizontal"}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BeforeAfter;
