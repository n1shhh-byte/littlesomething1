import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Envelope from "./components/Envelope";
import HelloKitty from "./components/HelloKitty";
import Kuromi from "./components/Kuromi";
import Ending from "./components/Ending";
import { playRustle } from "./audio";

import "./App.css";

function Starfield() {
  const stars = useRef(
    Array.from({ length: 160 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2.6 + 0.7}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 3}s`,
      opacity: Math.random() * 0.65 + 0.25,
    })),
  ).current;

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            position: "absolute",
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}

const LETTER_LINES = [
  {
    type: "greeting",
    text: "Hey Anamika,",
  },
  {
    text: "I don't really know if these words will bring a smile to your face, but honestly, that's the only reason I wanted to make this.",
  },
  {
    text: "I could've just written a normal compliment and sent it to you, but that felt a little too ordinary. So instead, I thought I'd make something small — something you could scroll through,and maybe smile at for a moment.",
  },
  {
    text: "You're genuinely beautiful, and there's something about your smile that makes you look even happier and more lovely. So I hope you never stop smiling like that.",
  },
  {
    text: "I'm still a stranger to you for now, and I know that's probably a slightly unusual way to introduce myself. And I'm really sorry if being anonymous made things uncomfortable or confusing for you and maybe i got u scared too pardon me . It genuinely wasn't what I wanted and it really wasn't right tooo.",
  },
  {
    text: "Maybe someday I won't be a stranger anymore. Maybe we could simply become friends",
  },
  {
    text: "though, that's not really the point.",
  },
  {
    text: "I actually wanted to tell you that everything about you is awesome your pretty smile and your hair is kinda distracting tho ,suits u a lot tbh looks really soft like a cloud ,and your eyes are just mesmerising ngl you have the most prettiest eyes i have ever seen and honestly you really have a cute voice basically speaking everything about you is totally perfect , but theres a catch no word like perfect can ever fully describe you properly...",
  },
  {
    text: "this is it ig once again sorry for making things uncomfortable that day ...",
  },
  {
    text: "I just wanted to give you one little reason to smile today.",
  },
  {
    text: "So... keep that smile.",
  },
  {
    type: "sign",
    text: "— Nishant",
  },
];

export default function App() {
  const [phase, setPhase] = useState("envelope");
  const [kittyWaving, setKittyWaving] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [showMusicBubble, setShowMusicBubble] = useState(false);
  const [musicBubbleText, setMusicBubbleText] = useState("playing...");

  const endingRef = useRef(null);
  const audioRef = useRef(null);
  const bubbleTimer = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("locked", phase !== "letter");

    return () => {
      document.body.classList.remove("locked");
    };
  }, [phase]);

  useEffect(() => {
    return () => {
      if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    };
  }, []);

  const openLetter = () => {
    if (phase !== "envelope") return;

    playRustle();
    setPhase("opening");

    setTimeout(() => {
      setPhase("letter");
    }, 1450);
  };

  useEffect(() => {
    if (phase !== "letter") return;

    const elements = document.querySelectorAll(".lp");

    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("in-view");
      }, 400 + index * 450);
    });

    const kittyTimer = setTimeout(() => {
      setKittyWaving(true);
    }, 3000);

    return () => {
      clearTimeout(kittyTimer);
    };
  }, [phase]);

  const flashMusicBubble = (text) => {
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);

    setMusicBubbleText(text);
    setShowMusicBubble(true);

    bubbleTimer.current = setTimeout(() => {
      setShowMusicBubble(false);
    }, 2500);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
      flashMusicBubble("paused");
    } else {
      audioRef.current
        .play()
        .then(() => {
          setMusicOn(true);
          flashMusicBubble("playing...");
        })
        .catch(() => {
          console.log("No music file found yet.");
        });
    }
  };

  return (
    <main>
      <div className="bg-nebula" />
      <Starfield />
      <div className="bg-vignette" />
      <div className="grain" />

      <AnimatePresence mode="wait">
        {phase !== "letter" && (
          <Envelope
            key="envelope"
            phase={phase}
            onOpen={openLetter}
          />
        )}
      </AnimatePresence>

      {phase === "letter" && (
        <>
          <section className="letter-scene">
            <div className="paper-glow" />

            <motion.div
              className="paper"
              initial={{
                opacity: 0,
                y: 120,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              {LETTER_LINES.map((line, index) => {
                if (line.type === "greeting") {
                  return (
                    <p
                      key={index}
                      className="lp greeting"
                    >
                      {line.text}
                    </p>
                  );
                }

                if (line.type === "sign") {
                  return (
                    <p
                      key={index}
                      className="lp sign"
                    >
                      {line.text}
                    </p>
                  );
                }

                return (
                  <div key={index}>
                    <p className="lp">
                      {line.text}
                    </p>

                    {index === 2 && (
                      <div className="char-slot">
                        <div className="char-inner right">
                          <HelloKitty waving={kittyWaving} />
                        </div>
                      </div>
                    )}

                    {index === 4 && (
                      <div className="char-slot">
                        <div className="char-inner left">
                          <Kuromi visible={true} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </section>

          <div className="scroll-hint">
            <span className="sh-text">scroll</span>
            <span className="chev">↓</span>
          </div>

          <Ending endingRef={endingRef} />
        </>
      )}

      <div className="music-widget">
        <div
          className={`music-bubble ${showMusicBubble ? "show" : ""}`}
          aria-hidden="true"
        >
          {musicBubbleText}
        </div>

        <button
          type="button"
          className={`music-toggle ${musicOn ? "on" : ""}`}
          onClick={toggleMusic}
          aria-label={musicOn ? "Turn music off" : "Turn music on"}
        >
          {musicOn ? "♫" : "♪"}
        </button>
      </div>

      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="/music.mp3"
          type="audio/mpeg"
        />
      </audio>
    </main>
  );
}