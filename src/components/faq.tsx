import { useEffect, useRef, useState } from "react";
import type { FAQType } from "../types/faqTypes";
import useScrollReveal from "../hooks/useScrollReveal";
import { Button } from "./shared/button";

/** Delay class names for staggering FAQ items (index 0–3). */
const STAGGER_CLASSES = [
  "",
  "reveal-delay-100",
  "reveal-delay-200",
  "reveal-delay-300",
] as const;

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<Array<FAQType>>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);

  const headingRef = useScrollReveal<HTMLHeadingElement>();
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const res = await fetch("/data/faq.json");

        if (!res.ok) {
          throw new Error("Failed to fetch questions")
        }

        const data: Array<FAQType> = await res.json();
        setFaqs(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    })()
  }, []);

  /* Observe newly-rendered FAQ item children when the list or expand changes */
  useEffect(() => {
    const container = listRef.current;
    if (container === null) return;

    const items = Array.from(container.querySelectorAll<HTMLElement>(".faq-item"));
    const observers: IntersectionObserver[] = [];

    items.forEach((item) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "-20px" }
      );
      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [faqs, expand]);

  const toggleExapnd = (): void => {
    setExpand((prev) => !prev);
  }

  const visibleFAQs = expand
    ? faqs
    : faqs.slice(0, 3);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 my-15">
      <h2
        ref={headingRef}
        className="reveal text-[clamp(2rem,2.4vw,2.5rem)] font-medium flex-1 mb-8"
      >
        Common Questions
      </h2>

      <div ref={listRef}>
        {visibleFAQs.map((faq, index) => (
          <div
            key={faq.id}
            className={`faq-item reveal mb-10 ${STAGGER_CLASSES[Math.min(index, STAGGER_CLASSES.length - 1)]}`}
          >
            <h3 className="font-medium mb-3">{faq.question}</h3>
            <p className="text-text">{faq.answer}</p>
          </div>
        ))}
      </div>

      <Button variant="outline" size="lg" onClick={toggleExapnd}>
        {!expand ? "More Questions" : "Less Questions"}
      </Button>
    </section>
  )
}

export default FAQ;
