import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const MESSAGE =
  "👋 Hi! I'm Hasan. Open to internships, research collaborations, and exciting projects. Let's build something meaningful together! 🚀";

/**
 * Bubble scales 0 -> 1, then types MESSAGE once and stays (no delete, no loop).
 */
export default function SpeechBubble({ show, onTypingComplete }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={show ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="mb-2 max-w-[240px] sm:max-w-[280px] bg-cream text-ink text-xs sm:text-sm font-body leading-relaxed rounded-2xl rounded-bl-sm shadow-lg border border-ink/10 px-4 py-3 relative pointer-events-none"
    >
      <Typewriter
        words={[MESSAGE]}
        loop={1}
        typeSpeed={35}
        deleteSpeed={0}
        delaySpeed={1000}
        cursor
        cursorStyle="|"
        onLoopDone={onTypingComplete}
      />
      <span className="absolute -bottom-2 left-6 w-4 h-4 bg-cream border-b border-r border-ink/10 rotate-45" />
    </motion.div>
  );
}