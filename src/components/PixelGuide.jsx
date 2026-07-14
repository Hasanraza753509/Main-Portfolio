import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useSpriteAnimation from "../hooks/useSpriteAnimation";
import SpeechBubble from "./SpeechBubble";
import Arrow from "./Arrow";

import frame4 from "../assets/sprite/frames/frame4.png";
import frame5 from "../assets/sprite/frames/frame5.png";
import frame6 from "../assets/sprite/frames/frame6.png";
import frame7 from "../assets/sprite/frames/frame7.png";
import frame8 from "../assets/sprite/frames/frame8.png";
import frame9 from "../assets/sprite/frames/frame9.png";
import frame10 from "../assets/sprite/frames/frame10.png";
import frame15 from "../assets/sprite/frames/frame15.png";
import frame17 from "../assets/sprite/frames/frame17.png";
import frame18 from "../assets/sprite/frames/frame18.png";

const WALK = [frame4, frame5, frame6, frame7, frame8, frame9, frame10];
const WAVE = [frame15];
const IDLE = [frame17];
const BLINK = [frame18];

const STAGE = {
  HIDDEN: "hidden",
  WALK_IN: "walkIn",
  WAVE_HELLO: "waveHello",
  BUBBLE: "bubble",
  IDLE: "idle",
  WAVE_BYE: "waveBye",
  WALK_OUT: "walkOut",
};

// Stages during which the guide is on-screen; losing view-visibility during
// any of these triggers the exit (wave bye -> walk out).
const PRESENT_STAGES = [STAGE.WALK_IN, STAGE.WAVE_HELLO, STAGE.BUBBLE, STAGE.IDLE];

// How long the guide lingers on screen (idle, message showing) before it
// automatically leaves and walks back in again, for as long as Contact is in view.
const IDLE_LINGER_MS = 4500;
// Pause between walking fully offscreen and starting the next walk-in.
const REENTRY_DELAY_MS = 500;

/**
 * Loops continuously while Contact is in view:
 * hidden -> walkIn -> waveHello -> bubble -> idle
 * -> waveBye -> walkOut -> hidden -> (short pause) -> walkIn -> ...
 * Also exits early (waveBye -> walkOut -> hidden) if the user scrolls away,
 * and resumes the same loop when they scroll back.
 */
export default function PixelGuide() {
  const { ref, inView } = useInView({ threshold: 0.35 });

  const [stage, setStage] = useState(STAGE.HIDDEN);
  const [blinking, setBlinking] = useState(false);
  const blinkTimeoutRef = useRef(null);

  // Exit early if the user scrolls away mid-sequence.
  useEffect(() => {
    if (!inView && PRESENT_STAGES.includes(stage)) {
      setStage(STAGE.WAVE_BYE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  // Whenever we land back on "hidden" while still in view, walk back in
  // after a short pause. Covers both the very first entrance and every
  // subsequent loop.
  useEffect(() => {
    if (stage !== STAGE.HIDDEN || !inView) return;
    const t = setTimeout(() => setStage(STAGE.WALK_IN), REENTRY_DELAY_MS);
    return () => clearTimeout(t);
  }, [stage, inView]);

  // waveHello -> bubble (single wave frame; the wave motion itself is a CSS wag below)
  useEffect(() => {
    if (stage !== STAGE.WAVE_HELLO) return;
    const t = setTimeout(() => setStage(STAGE.BUBBLE), 900);
    return () => clearTimeout(t);
  }, [stage]);

  // idle -> waveBye, automatically, so the guide leaves and loops back in
  // instead of standing there forever.
  useEffect(() => {
    if (stage !== STAGE.IDLE) return;
    const t = setTimeout(() => setStage(STAGE.WAVE_BYE), IDLE_LINGER_MS);
    return () => clearTimeout(t);
  }, [stage]);

  // waveBye -> walkOut
  useEffect(() => {
    if (stage !== STAGE.WAVE_BYE) return;
    const t = setTimeout(() => setStage(STAGE.WALK_OUT), 700);
    return () => clearTimeout(t);
  }, [stage]);

  const handleTypingComplete = useCallback(() => {
    setStage((s) => (s === STAGE.BUBBLE ? STAGE.IDLE : s));
  }, []);

  // Blink once every 8-12s, only while fully idle.
  useEffect(() => {
    if (stage !== STAGE.IDLE) return;

    function scheduleBlink() {
      const delay = 8000 + Math.random() * 4000;
      blinkTimeoutRef.current = setTimeout(() => {
        setBlinking(true);
        setTimeout(() => {
          setBlinking(false);
          scheduleBlink();
        }, 200);
      }, delay);
    }

    scheduleBlink();
    return () => clearTimeout(blinkTimeoutRef.current);
  }, [stage]);

  const isWalking = stage === STAGE.WALK_IN || stage === STAGE.WALK_OUT;
  const walkFrame = useSpriteAnimation(WALK, { fps: 8, loop: true, playing: isWalking });
  const waveFrame = useSpriteAnimation(WAVE, { playing: false });
  const idleFrame = useSpriteAnimation(IDLE, { playing: false });
  const blinkFrame = useSpriteAnimation(BLINK, { playing: false });

  let currentSrc = idleFrame;
  if (isWalking) currentSrc = walkFrame;
  else if (stage === STAGE.WAVE_HELLO || stage === STAGE.WAVE_BYE) currentSrc = waveFrame;
  else if (stage === STAGE.BUBBLE || stage === STAGE.IDLE) {
    currentSrc = blinking ? blinkFrame : idleFrame;
  }

  const showBubble = stage === STAGE.BUBBLE || stage === STAGE.IDLE;
  const isExiting = stage === STAGE.WALK_OUT;
  const offscreen = stage === STAGE.HIDDEN || stage === STAGE.WALK_OUT;

  return (
    <div ref={ref} className="absolute bottom-8 right-10 pointer-events-none">
      <motion.div
        animate={{ x: offscreen ? 260 : 0, opacity: stage === STAGE.HIDDEN ? 0 : 1 }}
        transition={{
          x: {
            duration: isWalking ? (stage === STAGE.WALK_IN ? 2 : 1.3) : 0,
            ease: "linear",
          },
          opacity: { duration: 0.3 },
        }}
        onAnimationComplete={() => {
          if (stage === STAGE.WALK_IN) setStage(STAGE.WAVE_HELLO);
          if (stage === STAGE.WALK_OUT) setStage(STAGE.HIDDEN);
        }}
      >
        {showBubble && (
          <SpeechBubble show={showBubble} onTypingComplete={handleTypingComplete} />
        )}

        <div className="mx-auto mb-1 h-3 w-20 md:w-24 rounded-full bg-black/20 blur-sm" />

        <motion.img
          src={currentSrc}
          alt="Hasan, portfolio guide"
          draggable={false}
          className="w-32 md:w-40 select-none"
          style={{ imageRendering: "pixelated" }}
          animate={{
            scaleX: isExiting ? -1 : 1,
            y: stage === STAGE.BUBBLE || stage === STAGE.IDLE ? [0, -2, 0] : 0,
            rotate:
              stage === STAGE.WAVE_HELLO || stage === STAGE.WAVE_BYE
                ? [0, -12, 10, -8, 6, 0]
                : 0,
          }}
          transition={{
            scaleX: { duration: 0.2 },
            y:
              stage === STAGE.BUBBLE || stage === STAGE.IDLE
                ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0 },
            rotate:
              stage === STAGE.WAVE_HELLO || stage === STAGE.WAVE_BYE
                ? { duration: 0.8, ease: "easeInOut" }
                : { duration: 0 },
          }}
        />

        {stage === STAGE.IDLE && <Arrow />}
      </motion.div>
    </div>
  );
}
