import type { PricingPlan } from "../../types/pricingTypes";
import premium from "../../assets/premium.png"
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "./button";

interface PricingCardProps {
  plan: PricingPlan;
}

const Card: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="p-6 rounded-2xl bg-primary">
      <div className="flex flex-col xs:flex-row items-center">
        <div className="bg-light-grey mr-5 w-full xs:w-35 h-35 rounded-2xl flex flex-col items-center justify-center relative">
          {
            plan.featured && <h3 className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-accent text-dark-grey font-semibold flex items-center px-2 py-1 rounded-full shadow-md/20">
              <div className="w-8 h-8 overflow-hidden bg-primary rounded-full p-1 mr-2">
                <img src={premium} alt="icon" className="w-full h-full object-contain" />
              </div>
              {plan.badge}
            </h3>
          }
          <h3 className="text-transparent-blue text-2xl font-semibold">{plan.name}</h3>
          <h2
            className="bg-linear-to-br from-transparent-blue to-deep-blue bg-clip-text text-transparent text-2xl font-semibold"
          >
            {plan.priceLabel}
          </h2>
          <p className="text-dark-grey/40">{plan.billingCycle}</p>
        </div>

        <div className="w-full xs:w-auto">
          <ul>
            {plan.features.map((feature) => (
              <li key={feature.text} className="flex my-2">
                <span className={`bg-linear-to-br w-4.5 h-4.5 rounded-full flex items-center justify-center mr-2 ${feature.included ? "from-sky-blue to-deep-blue" : "from-grey-80 to-grey-100"}`}>
                  {feature.included ? <FaCheck className="text-primary text-xs" /> : <IoClose className="text-primary" />}
                </span>
                <span className={`text-sm max-w-45 ${feature.included ? "" : "text-grey-100"}`}>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {plan.featured ? (
        <Button
          variant="custom"
          className="w-full mt-5 rounded-2xl bg-linear-to-br from-transparent-blue to-deep-blue py-3 text-white font-medium"
        >
          {plan.buttonText}
        </Button>
      ) : (
        <div className="mt-5 rounded-2xl bg-linear-to-br from-transparent-blue to-deep-blue p-0.5">
          <Button
            variant="custom"
            className="w-full rounded-[inherit] bg-primary py-2.5 text-deep-blue font-medium"
          >
            {plan.buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Card;
