import { Pricing as PricingComponent } from "./blocks/pricing";

const pricingPlans = [
  {
    name: "FREE FOR TESTING",
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
    features: [
      "1,000,000 datapoints per usage",
      "300 uses included",
      "Priority support",
      "Advanced API access",
      "Email support"
    ],
    description: "For businesses with moderate data needs",
    buttonText: "Contact Us",
    href: "#",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
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
      title="Flexible Pricing Options"
      description="Contact us for custom pricing tailored to your specific needs. We offer flexible plans that scale with your business."
    />
  );
};

export default Pricing;
