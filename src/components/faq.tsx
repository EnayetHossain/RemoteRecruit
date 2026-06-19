import { useEffect, useState } from "react";
import type { FAQType } from "../types/faqTypes";

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<Array<FAQType>>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);

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
      <h2 className="text-[clamp(2rem,2.4vw,2.5rem)] font-medium flex-1 mb-8">Common Questions</h2>

      {visibleFAQs.map((faq) => (
        <div key={faq.id} className="mb-10">
          <h3 className="font-medium mb-3">{faq.question}</h3>
          <p className="text-text">{faq.answer}</p>
        </div>
      ))}
      <button
        className="border-2 border-border p-4 rounded-xl text-deep-blue cursor-pointer"
        onClick={toggleExapnd}
      >
        {!expand ? "More Questions" : "Less Questions"}
      </button>
    </section>
  )
}

export default FAQ;
