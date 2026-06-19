import pricingImage from "../assets/pricing.png";
import Badge from "./shared/badge";

const Pricing: React.FC = () => {
  return (
    <section className="max-w-360 mx-auto px-4 flex flex-col-reverse lg:flex-row justify-between items-center">
      <div className="max-w-120 overflow-hidden">
        <img src={pricingImage} alt="Pricing illustration" className="w-full h-full object-contain" />
      </div>

      <div className="mb-10 lg:mb-0">
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
