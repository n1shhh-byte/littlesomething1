import { motion } from "framer-motion";

export default function Envelope({ phase, onOpen }) {
  const opening = phase === "opening";

  return (
    <motion.div
      className="envelope-scene"
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: "blur(3px)",
      }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="env-float"
        initial={{
          opacity: 0,
          y: 26,
          scale: 0.96,
        }}
        animate={
          opening
            ? {
                opacity: 1,
                y: -18,
                scale: 0.985,
              }
            : {
                opacity: 1,
                y: 0,
                scale: 1,
              }
        }
        transition={{
          duration: 1.1,
          ease: [0.22, 0.61, 0.36, 1],
        }}
      >
        <button
          type="button"
          className="envelope"
          data-testid="envelope-open-button"
          onClick={onOpen}
          disabled={opening}
          aria-label="Tap to open the letter"
        >
          <span className="env-glow" aria-hidden="true" />
          <span className="env-back" aria-hidden="true" />

          <motion.span
            className="env-letter"
            aria-hidden="true"
            animate={
              opening
                ? {
                    y: -195,
                    opacity: [1, 1, 0],
                  }
                : {}
            }
            transition={
              opening
                ? {
                    delay: 0.55,
                    duration: 1.05,
                    ease: [0.22, 0.61, 0.36, 1],
                    times: [0, 0.72, 1],
                  }
                : {}
            }
          />

          <span className="env-pocket" aria-hidden="true" />

          <motion.span
            className="env-flap"
            aria-hidden="true"
            animate={
              opening
                ? {
                    rotateX: 172,
                    opacity: [1, 1, 0],
                  }
                : {}
            }
            transition={
              opening
                ? {
                    duration: 0.95,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.78, 1],
                  }
                : {}
            }
          />

          <motion.span
            className="env-seal"
            aria-hidden="true"
            animate={
              opening
                ? {
                    opacity: 0,
                    scale: 0.5,
                  }
                : {}
            }
            transition={{
              duration: 0.35,
            }}
          >
            A
          </motion.span>
        </button>

        <motion.p
          className="tap-hint"
          data-testid="tap-to-open-text"
          animate={opening ? { opacity: 0 } : {}}
          transition={{
            duration: 0.4,
          }}
        >
          tap to open ♡
        </motion.p>
      </motion.div>
    </motion.div>
  );
}