import { useRef, useEffect, useState } from "react";

export default function useScrollReveal(options = {}) {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isRevealed) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, isRevealed]);

  return { ref, isRevealed };
}
