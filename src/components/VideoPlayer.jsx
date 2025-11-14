import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPlay } from "react-icons/fa";
import "./VideoPlayer.css";

const VideoPlayer = ({ video, onClose }) => {
  const getEmbedUrl = (url) => {
    // YouTube
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      // Handle different YouTube URL formats
      let videoId = "";
      if (url.includes("youtube.com/watch?v=")) {
        videoId = url.split("v=")[1]?.split("&")[0];
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1]?.split("?")[0];
      }
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    // Vimeo
    if (url.includes("vimeo.com")) {
      const videoId = url.split("vimeo.com/")[1];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    // Direct video URL
    return url;
  };

  // Check if it's a direct video file (local or external)
  const isDirectVideo =
    !video.url.includes("youtube.com") &&
    !video.url.includes("youtu.be") &&
    !video.url.includes("vimeo.com");

  return (
    <AnimatePresence>
      <motion.div
        className="video-player-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          className="video-close"
          onClick={onClose}
          aria-label="Закрыть видео"
        >
          <FaTimes />
        </button>

        <motion.div
          className="video-player-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="video-wrapper">
            {isDirectVideo ? (
              <video controls autoPlay className="video-element">
                <source src={video.url} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            ) : (
              <iframe
                src={getEmbedUrl(video.url)}
                className="video-iframe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            )}
          </div>

          <div className="video-info">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoPlayer;
