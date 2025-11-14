import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import "./Lightbox.css";

const Lightbox = ({ images, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragThreshold] = useState(50);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      handleNext();
    } else if (e.deltaY < 0) {
      handlePrev();
    }
  };

  const handleMouseDown = (e) => {
    if (e.target.closest(".lightbox-content")) return;
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;

    const endX = e.clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > dragThreshold) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalWheel = (e) => {
      e.preventDefault();
    };

    document.addEventListener("wheel", handleGlobalWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleGlobalWheel);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
        tabIndex={0}
        style={{ cursor: isDragging ? "grabbing" : "default" }}
      >
        <button className="lightbox-close" onClick={onClose}>
          <FaTimes />
        </button>

        <button
          className="lightbox-prev"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
        >
          ‹
        </button>

        <button
          className="lightbox-next"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
        >
          ›
        </button>

        <motion.div
          className="lightbox-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={images[index].image}
            alt={images[index].title}
            className="lightbox-image"
            loading="lazy"
          />
          <div className="lightbox-info">
            <h3>{images[index].title}</h3>
            <p>{images[index].description}</p>
            <span className="lightbox-counter">
              {index + 1} / {images.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
