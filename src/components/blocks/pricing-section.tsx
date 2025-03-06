"use client";

import { motion } from "framer-motion";
import { Check, Building, Users, Briefcase } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Glow } from "../ui/glow";

const pricingPlans = [
  {
    icon: <Users className="w-8 h-8 text-accent-blue" />,
    title: "Free for Testing",
    description: "Perfect for evaluating our platform",
    features: [
      "10,000 datapoints",
      "Basic support",
      "Standard API access",
      "Community forum"
    ],
    cta: "Start Free",
    ctaVariant: "outline" as const
  },
  {
    icon: <Building className="w-8 h-8 text-accent-purple" />,
    title: "Premium",
    description: "For businesses with moderate data needs",
    price: "€100",
    features: [
      "1,000,000 datapoints per usage",
      "300 uses included",
      "Priority support",
      "Advanced API access",
      "Email support"
    ],
    cta: "Subscribe Now",
    ctaVariant: "default" as const
  },
  {
    icon: <Briefcase className="w-8 h-8 text-accent-green" />,
    title: "Enterprise",
    description: "Custom solutions for large organizations",
    features: [
      "Open Contract License",
      "Process pricing based on usage costs",
      "Custom SLA terms",
      "Dedicated account manager",
      "24/7 premium support",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const
  }
];

const enterpriseTiers = [
  {
    title: "Industry Specific Tier",
    description: "Tailored solutions for your industry",
    price: "$K/month",
    features: [
      "Process pricing based on usage costs",
      "Custom SLA terms",
      "Industry-specific optimizations",
      "Dedicated support team",
      "Custom reporting"
    ]
  }
];

const licensingOptions = [
  {
    title: "Perpetual License",
    description: "One-time purchase for permanent use",
    price: "$K perpetual license",
    features: [
      "On-premises deployment",
      "Secured defense facilities compatible",
      "Lifetime access to purchased version",
      "Optional maintenance contract",
      "Custom implementation support"
    ]
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-20 relative overflow-hidden">
      <div className="mx-auto relative z-10 max-w-7xl w-full px-4">
        <div className="text-center mb-12">
          <h2 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-5xl mb-4">
            Subscription Pricing - Costs Per Usage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. Scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto w-full">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={cn(
                  "bg-card/50 backdrop-blur-sm border border-border/10 hover:border-border/30 transition-colors flex flex-col h-full",
                  index === 1 ? "ring-1 ring-primary/50 shadow-lg shadow-primary/10" : ""
                )}
              >
                <CardHeader>
                  <div className="mb-4 p-2 w-fit rounded-lg bg-accent/10">{plan.icon}</div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {plan.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {plan.price && (
                    <div className="mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{plan.price}</span>
                    </div>
                  )}
                  <ul className="space-y-1 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 text-accent-green mr-2 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.ctaVariant} 
                    className={cn(
                      "w-full",
                      index === 1 ? "text-lg py-5" : ""
                    )}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl w-full mx-auto bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/10 relative mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
                Enterprise Tier
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Custom solutions for industry-specific needs with flexible pricing based on usage.
              </p>
              <div className="mb-4">
                <span className="text-xl font-bold text-foreground">{enterpriseTiers[0].price}</span>
              </div>
              <Button variant="default" size="lg" className="text-lg py-5 px-8 w-full md:w-auto">
                Contact Sales
              </Button>
            </div>
            <div>
              <ul className="space-y-2 text-sm">
                {enterpriseTiers[0].features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-accent-green mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full mx-auto bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/10 relative">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
                {licensingOptions[0].title}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                {licensingOptions[0].description}
              </p>
              <div className="mb-4">
                <span className="text-xl font-bold text-foreground">{licensingOptions[0].price}</span>
              </div>
              <Button variant="outline" size="lg" className="text-lg py-5 px-8 w-full md:w-auto">
                Contact for Details
              </Button>
            </div>
            <div>
              <ul className="space-y-2 text-sm">
                {licensingOptions[0].features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-accent-green mr-2 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Glow variant="bottom" className="opacity-30" />
    </section>
  );
}
