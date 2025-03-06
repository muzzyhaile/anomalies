import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { ArrowRight, CheckCircle2, Code, Database, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Glow } from "../components/ui/glow";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { DemoModal } from "../components/ui/demo-modal";
import { ContactFormSection } from "../components/blocks/contact-form-section";

const Index = () => {
  return (
    <main className="min-h-screen bg-dark overflow-x-hidden w-full">
      <Hero />
      <Features />

      {/* Potential Impact Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center w-full"
          >
            <div className="space-y-6">
              <Badge variant="outline" className="animate-appear gap-2">
                <span className="text-muted-foreground">POTENTIAL IMPACT</span>
              </Badge>
              <h2 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl sm:text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl">
                How Anomaly Detection Can Transform Your Business
              </h2>
              <p className="text-muted-foreground">
                Our advanced anomaly detection platform can help organizations across industries identify patterns and insights that traditional methods would miss.
              </p>
              <ul className="space-y-4">
                {[
                  "Reduce manual analysis time by up to 80%",
                  "Identify critical issues before they impact operations",
                  "Improve decision-making with real-time insights",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    {item}
                  </li>
                ))}
              </ul>
              <DemoModal>
                <Button variant="outline" size="lg" className="mt-4">
                  <span className="flex items-center gap-2">
                    Book a Demo
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </DemoModal>
            </div>
            <div className="relative max-w-full">
              <div className="relative rounded-xl overflow-hidden">
              <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&auto=format"
                  alt="Person working on laptop"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover"
                />
                <Glow variant="bottom" className="opacity-60" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-border/10 max-w-[90%]">
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-1">80%</p>
                <p className="text-sm text-muted-foreground">Efficiency Gain</p>
              </div>
            </div>
          </motion.div>
        </div>
        <Glow variant="center" className="opacity-30" />
      </section>

      <Pricing />

      <CTA />
      
      <ContactFormSection />
      
      <Footer />
    </main>
  );
};

export default Index;
