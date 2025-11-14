import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { siteData } from "../data";
import VideoPlayer from "../components/VideoPlayer";
import "./Videos.css";

const Videos = () => {
  const { videos } = siteData;
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filter, setFilter] = useState("Все");

  const categories = ["Все", ...new Set(videos.map((item) => item.category))];

  const filteredVideos =
    filter === "Все"
      ? videos
      : videos.filter((item) => item.category === filter);

  return (
    <div className="videos-page">
      <section className="videos-hero">
        <div className="container">
          <motion.div
            className="videos-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Видео</h1>
            <p className="page-subtitle">
              Подборка видеороликов с моих работ и съемочных процессов
            </p>
          </motion.div>
        </div>
      </section>

      <section className="videos-gallery">
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

          <motion.div className="videos-grid" layout>
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="video-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
                onClick={() => setSelectedVideo(video)}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <div className="play-button">
                      <FaPlay />
                    </div>
                  </div>
                </div>
                <div className="video-card-info">
                  <h3>{video.title}</h3>
                  <p className="video-category">{video.category}</p>
                  <p className="video-description">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default Videos;
