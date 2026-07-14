import { useState, useEffect, useRef } from "react";

/**
 * Cycles through an array of frame image sources.
 *
 * @param {string[]} frames - array of image srcs to cycle through, in order
 * @param {object} options
 * @param {number} [options.fps=8] - frames per second
 * @param {boolean} [options.loop=true] - loop forever, or stop on the last frame
 * @param {boolean} [options.playing=true] - whether the animation is advancing
 * @param {() => void} [options.onComplete] - fires once when a non-looping animation finishes
 * @returns {string|undefined} current frame src
 */
export default function useSpriteAnimation(
  frames,
  { fps = 8, loop = true, playing = true, onComplete } = {}
) {
  const [index, setIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    setIndex(0);
  }, [frames]);

  useEffect(() => {
    if (!playing || !frames || frames.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;

        if (next >= frames.length) {
          if (loop) return 0;
          if (onCompleteRef.current) onCompleteRef.current();
          clearInterval(interval);
          return prev;
        }

        return next;
      });
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [frames, fps, loop, playing]);

  if (!frames || frames.length === 0) return undefined;
  return frames[Math.min(index, frames.length - 1)];
}