import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FlowerSvg = ({ size = 56 }) => (
  <svg
    viewBox="0 0 60 90"
    width={size}
    height={size * 1.5}
    aria-hidden="true"
  >
    <path
      d="M30 44 C30 58 30 72 30 86"
      stroke="#5E8F5A"
      strokeWidth="3.4"
      fill="none"
      strokeLinecap="round"
    />

    <path
      d="M30 66 q-12 -2 -15 -14 q12 0 15 14 Z"
      fill="#6FA06A"
    />

    <path
      d="M30 58 q12 -2 15 -14 q-12 0 -15 14 Z"
      fill="#6FA06A"
    />

    <g transform="translate(30 26)">
      <path
        d="M0 -22 C-16 -12 -17 6 0 14 C17 6 16 -12 0 -22 Z"
        fill="#F8B4C8"
        stroke="#D78AA4"
        strokeWidth="2.2"
      />

      <path
        d="M0 -22 C-5 -8 -5 4 0 14 M0 -22 C5 -8 5 4 0 14"
        stroke="#D78AA4"
        strokeWidth="1.5"
        fill="none"
      />

      <path
        d="M-9 -14 C-12 -4 -10 4 -4 9 M9 -14 C12 -4 10 4 4 9"
        stroke="#E49AB2"
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
      />
    </g>
  </svg>
);

export default function Kuromi({ visible }) {
  const [given, setGiven] = useState(false);
  const [hop, setHop] = useState(false);
  const [flight, setFlight] = useState(null);

  const selfRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const handleTap = () => {
    if (given) return;

    setGiven(true);
    setHop(true);

    const r = selfRef.current.getBoundingClientRect();

    setFlight({
      fromX: r.left + r.width * 0.68,
      fromY: r.top + r.height * 0.3,
      toX: window.innerWidth / 2 - 28,
      toY: window.innerHeight * 0.42 - 40,
      done: false,
    });

    timers.current.push(
      setTimeout(() => setHop(false), 1100)
    );

    timers.current.push(
      setTimeout(
        () =>
          setFlight((f) =>
            f ? { ...f, done: true } : f
          ),
        4200
      )
    );

    timers.current.push(
      setTimeout(() => setFlight(null), 5100)
    );
  };

  return (
    <>
      <button
        type="button"
        ref={selfRef}
        className={`kuromi ${hop ? "hop" : ""} ${
          given ? "given" : ""
        } ${visible && !given ? "near" : ""}`}
        data-testid="kuromi-flower-trigger"
        onClick={handleTap}
        aria-label="Tap Kuromi to receive a flower"
      >
        <span
          className="kuromi-prompt"
          data-testid="kuromi-tap-prompt"
          aria-hidden="true"
        >
          tap me ♡
        </span>

        <svg
          viewBox="0 0 140 165"
          className="kuromi-svg"
          role="img"
          aria-label="Kuromi holding a flower"
        >
          <path
            d="M100 140 C118 142 126 130 121 118"
            stroke="#2B2733"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M121 118 l10 -4 -6 9 Z"
            fill="#2B2733"
          />

          <ellipse
            cx="54"
            cy="150"
            rx="14"
            ry="8"
            className="u-fill"
          />

          <ellipse
            cx="88"
            cy="150"
            rx="14"
            ry="8"
            className="u-fill"
          />

          <path
            d="M48 106 h44 a12 12 0 0 1 12 12 v12 a12 12 0 0 1 -12 12 H48 a12 12 0 0 1 -12 -12 v-12 a12 12 0 0 1 12 -12 Z"
            className="u-fill"
          />

          <path
            d="M42 34 C26 24 14 20 6 6 C22 8 38 16 52 26 Z"
            className="u-fill"
          />

          <path
            d="M98 34 C114 24 126 20 134 6 C118 8 102 16 88 26 Z"
            className="u-fill"
          />

          <path
            d="M70 14 C42 14 24 36 24 60 C24 86 44 102 70 102 C96 102 116 86 116 60 C116 36 98 14 70 14 Z"
            className="u-fill"
          />

          <path
            d="M70 38 C50 38 37 51 37 67 C37 85 51 96 70 96 C89 96 103 85 103 67 C103 51 90 38 70 38 Z"
            fill="#FFF6F8"
          />

          <g transform="translate(70 27)">
            <circle r="8.5" fill="#F4A7C3" />

            <rect
              x="-5.5"
              y="4"
              width="11"
              height="7"
              rx="3"
              fill="#F4A7C3"
            />

            <circle
              cx="-3.2"
              cy="-1"
              r="1.6"
              fill="#2B2733"
            />

            <circle
              cx="3.2"
              cy="-1"
              r="1.6"
              fill="#2B2733"
            />

            <path
              d="M0 2 l-1.5 2.6 h3 Z"
              fill="#2B2733"
            />
          </g>

          <g className="eyes-normal">
            <ellipse
              cx="56"
              cy="66"
              rx="4.4"
              ry="6.2"
              fill="#26232E"
            />

            <ellipse
              cx="84"
              cy="66"
              rx="4.4"
              ry="6.2"
              fill="#26232E"
            />

            <circle
              cx="54.6"
              cy="63.6"
              r="1.4"
              fill="#fff"
            />

            <circle
              cx="82.6"
              cy="63.6"
              r="1.4"
              fill="#fff"
            />
          </g>

          <g className="eyes-happy">
            <path
              d="M50 67 Q56 59 62 67"
              stroke="#26232E"
              strokeWidth="2.8"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M78 67 Q84 59 90 67"
              stroke="#26232E"
              strokeWidth="2.8"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          <ellipse
            cx="46"
            cy="76"
            rx="5"
            ry="3"
            fill="#F4A7C3"
            opacity="0.55"
          />

          <ellipse
            cx="94"
            cy="76"
            rx="5"
            ry="3"
            fill="#F4A7C3"
            opacity="0.55"
          />

          <path
            d="M64 79 Q70 84 76 79"
            stroke="#26232E"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />

          <g className="ku-flower">
            <path
              d="M98 130 C106 118 110 106 112 94"
              stroke="#5E8F5A"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M106 114 q-9 -2 -11 -11"
              stroke="#5E8F5A"
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
            />

            <g transform="translate(112 86)">
              <path
                d="M0 -13 C-10 -6 -11 5 0 10 C11 5 10 -6 0 -13 Z"
                fill="#F8B4C8"
                stroke="#D78AA4"
                strokeWidth="2"
              />

              <path
                d="M0 -13 C-3 -4 -3 3 0 10 M0 -13 C3 -4 3 3 0 10"
                stroke="#D78AA4"
                strokeWidth="1.3"
                fill="none"
              />
            </g>
          </g>
        </svg>
      </button>

      <AnimatePresence>
        {flight && (
          <motion.div
            className="flower-flight"
            data-testid="flower-flight"
            initial={{
              x: flight.fromX,
              y: flight.fromY,
              scale: 0.4,
              opacity: 0,
            }}
            animate={
              flight.done
                ? {
                    opacity: 0,
                    scale: 1.1,
                    y: flight.toY - 16,
                  }
                : {
                    x: flight.toX,
                    y: flight.toY,
                    scale: 1.2,
                    opacity: 1,
                  }
            }
            transition={{
              duration: flight.done ? 0.9 : 1.7,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <FlowerSvg />

            <motion.span
              className="flower-msg"
              data-testid="flower-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: flight.done ? 0 : 1,
                y: 0,
              }}
              transition={{
                delay: flight.done ? 0 : 1.5,
                duration: 0.6,
              }}
            >
              a little flower for you 🌷
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}