import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  readonly threshold?: number;
  readonly rootMargin?: string;
}

const useScrollReveal = <T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {}
): React.RefObject<T | null> => {
  const { threshold = 0.15, rootMargin = "-40px" } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (element === null) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target); // fire once then stop
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
};

export default useScrollReveal;
