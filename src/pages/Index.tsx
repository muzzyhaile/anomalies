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

const Index = () => {
  return (
    <main className="min-h-screen bg-dark">
      <Hero />
      <Features />

      {/* Potential Impact Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <Badge variant="outline" className="animate-appear gap-2">
                <span className="text-muted-foreground">POTENTIAL IMPACT</span>
              </Badge>
              <h2 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl">
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
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&auto=format"
                  alt="Person working on laptop"
                  className="rounded-xl shadow-2xl"
                />
                <Glow variant="bottom" className="opacity-60" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/10">
                <p className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-1">80%</p>
                <p className="text-sm text-muted-foreground">Efficiency Gain</p>
              </div>
            </div>
          </motion.div>
        </div>
        <Glow variant="center" className="opacity-30" />
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background/50 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="flex flex-col items-center">
              <Badge variant="outline" className="animate-appear gap-2 mb-4">
                <span className="text-muted-foreground">OUR TEAM</span>
              </Badge>
              <h2 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl mb-4">
                Meet Our Founders
              </h2>
              <p className="text-muted-foreground">
                Passionate experts with a vision to revolutionize anomaly detection
              </p>
            </div>
          </motion.div>
          
          <div className="flex flex-col items-center justify-center mb-16">
            <AnimatedTooltip 
              items={[
                {
                  id: 1,
                  name: "Phillip",
                  designation: "CEO & AI Researcher",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format"
                },
                {
                  id: 2,
                  name: "Dimitri",
                  designation: "CTO",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format"
                },
                {
                  id: 3,
                  name: "Mussie",
                  designation: "Head of Engineering",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format"
                }
              ]}
              className="justify-center scale-150 py-10"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Phillip",
                role: "CEO & AI Researcher",
                bio: "Former lead researcher at MIT with 10+ years of experience in machine learning and anomaly detection algorithms.",
                expertise: "Machine Learning",
                icon: <LineChart className="h-5 w-5 text-white" />,
              },
              {
                name: "Dimitri",
                role: "CTO",
                bio: "Engineering leader with experience scaling AI systems at Fortune 500 companies and startups alike.",
                expertise: "System Architecture",
                icon: <Database className="h-5 w-5 text-white" />,
              },
              {
                name: "Mussie",
                role: "Head of Engineering",
                bio: "Full-stack developer with a passion for creating intuitive interfaces for complex data systems.",
                expertise: "Software Development",
                icon: <Code className="h-5 w-5 text-white" />,
              }
            ].map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border border-border/10 hover:border-border/30 transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      {founder.name}
                    </CardTitle>
                    <CardDescription className="text-white text-sm">
                      {founder.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{founder.bio}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      {founder.icon}
                      <span>{founder.expertise}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <Glow variant="center" className="opacity-30" />
      </section>

      <Pricing />

      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
