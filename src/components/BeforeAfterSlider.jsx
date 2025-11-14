import { useState, useRef } from "react";
import "./BeforeAfterSlider.css";

const BeforeAfterSlider = ({
  before,
  after,
  title,
  description,
  orientation = "horizontal",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="before-after-item">
      <div
        ref={containerRef}
        className={`before-after-container ${orientation}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        <div className={`image-container ${orientation}`}>
          <img src={after} alt="After" className="after-image" loading="lazy" />
          <div
            className="before-image-wrapper"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={before}
              alt="Before"
              className="before-image"
              loading="lazy"
            />
          </div>
        </div>

        <div className="slider-line" style={{ left: `${sliderPosition}%` }}>
          <div className="slider-button">
            <div className="slider-arrow left">‹</div>
            <div className="slider-arrow right">›</div>
          </div>
        </div>

        <div className="labels">
          <span className="label before-label">До</span>
          <span className="label after-label">После</span>
        </div>
      </div>

      <div className="before-after-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
