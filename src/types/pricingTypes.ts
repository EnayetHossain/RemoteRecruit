export interface Feature {
  readonly text: string;
  readonly included: boolean;
}

export interface PricingPlan {
  readonly id: number,
  readonly badge: string;
  readonly name: string;
  readonly priceLabel: string;
  readonly billingCycle: string;
  readonly buttonText: string;
  readonly featured: boolean;
  readonly features: Array<Feature>;
}
