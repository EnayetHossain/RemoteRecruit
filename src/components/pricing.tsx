import useScrollReveal from "../hooks/useScrollReveal";
import pricingImage from "../assets/pricing.png";
import Badge from "./shared/badge";
import LazyImage from "./shared/lazyImage";

const Pricing: React.FC = () => {
  const imageRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const textRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="max-w-360 mx-auto px-4 flex flex-col-reverse lg:flex-row justify-between items-center">
      <div ref={imageRef} className="reveal-left max-w-120 overflow-hidden">
        <LazyImage src={pricingImage} alt="Pricing illustration" className="w-full h-full object-contain" />
      </div>

      <div ref={textRef} className="reveal-right mb-10 lg:mb-0">
        <Badge>Actually Fee Free</Badge>

        <h2 className="text-[clamp(2rem,2.4vw,2.5rem)] font-medium flex-1 my-5">
          Fee-Free Forever
        </h2>

        <p className="max-w-120 text-text">
          We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
