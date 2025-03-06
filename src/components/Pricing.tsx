import { Pricing as PricingComponent } from "./blocks/pricing";

const pricingPlans = [
  {
    name: "FREE FOR TESTING",
    price: "0",
    yearlyPrice: "0",
    period: "per month",
    features: [
      "10,000 datapoints",
      "Basic support",
      "Standard API access",
      "Community forum"
    ],
    description: "Perfect for evaluating our platform",
    buttonText: "Start Free",
    href: "#",
    isPopular: false,
  },
  {
    name: "PREMIUM",
    price: "€100",
    yearlyPrice: "€80",
    period: "per month",
    features: [
      "1,000,000 datapoints per usage",
      "300 uses included",
      "Priority support",
      "Advanced API access",
      "Email support"
    ],
    description: "For businesses with moderate data needs",
    buttonText: "Subscribe Now",
    href: "#",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "$K",
    yearlyPrice: "$K",
    period: "per month",
    features: [
      "On-premises deployment",
      "Secured defense facilities",
      "Custom SLA terms",
      "Process pricing based on usage",
      "Industry-specific tier"
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact for Details",
    href: "#",
    isPopular: false,
  }
];

const Pricing = () => {
  return (
    <PricingComponent 
      plans={pricingPlans}
      title="Subscription Pricing - Costs Per Usage"
      description="Choose the plan that fits your needs. Scale as you grow."
    />
  );
};

export default Pricing;
