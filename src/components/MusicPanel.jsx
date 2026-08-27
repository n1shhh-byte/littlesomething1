import { motion, AnimatePresence } from "framer-motion";

function formatTime(seconds) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function MusicPanel({ visible, currentTime, duration }) {
  const progress =
    duration > 0 ? Math.min(currentTime / duration, 1) * 100 : 0;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="music-panel"
          data-testid="music-panel"
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={{
            duration: 0.28,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <div className="mp-cat" aria-hidden="true">
            <svg viewBox="0 0 60 44" className="mp-cat-svg">
              <path
                d="M18 13 L14 4 L24 10 Z"
                className="mp-cat-body"
              />
              <path
                d="M42 13 L46 4 L36 10 Z"
                className="mp-cat-body"
              />
              <path
                d="M4 40 C4 26 10 16 20 12 C22 8 26 5 30 5 C34 5 38 8 40 12 C50 16 56 26 56 40 Z"
                className="mp-cat-body"
              />
              <circle cx="24" cy="26" r="2.1" className="mp-cat-eye" />
              <circle cx="36" cy="26" r="2.1" className="mp-cat-eye" />
              <path
                d="M28 31 Q30 33 32 31"
                className="mp-cat-mouth"
              />
            </svg>
          </div>

          <div className="mp-info">
            <span className="mp-title">a little tune ♪</span>

            <div className="mp-bar">
              <div
                className="mp-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="mp-time">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}