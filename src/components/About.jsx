import { motion } from "framer-motion";

export default function Arrow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center select-none pointer-events-none"
      aria-hidden="true"
    >
      <motion.span
        animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block text-xl text-ink/50"
      >
        ↙
      </motion.span>
    </motion.div>
  );
}