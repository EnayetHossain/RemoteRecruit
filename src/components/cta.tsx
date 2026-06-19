import { useEffect, useState } from "react";
import type { PricingPlan } from "../types/pricingTypes";
import Card from "./shared/card";

const CTA: React.FC = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/data/pricing.json");

      if (!res.ok) {
        throw new Error("Failed to fetch pricing.");
      }

      setPlans(await res.json());
    })();
  }, []);



  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-[clamp(2rem,2.4vw,2.5rem)] font-semibold flex-1 text-center mb-8">Help Is One Click Away</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            plan={plan}
          />
        ))}
      </div>
    </section>
  )
}

export default CTA;
