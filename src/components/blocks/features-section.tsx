"use client";

import { motion } from "framer-motion";
import { Clock, FileUp, LineChart, Sliders, Eye, TrendingUp } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-accent-blue" />,
    title: "Save Time & Money",
    description: "Transform tedious anomaly detection from hours to seconds with our unsupervised algorithm.",
  },
  {
    icon: <FileUp className="w-8 h-8 text-accent-purple" />,
    title: "Simple Data Upload",
    description: "Upload your time series data in CSV format, with Parquet and HDF5 support coming soon.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-accent-green" />,
    title: "Visualization Dashboard",
    description: "Instantly transform raw data into actionable intelligence with our interactive dashboard.",
  },
  {
    icon: <Sliders className="w-8 h-8 text-accent-blue" />,
    title: "Adjustable Confidence",
    description: "Fine-tune detection parameters with real-time feedback for maximum accuracy.",
  },
  {
    icon: <Eye className="w-8 h-8 text-accent-purple" />,
    title: "Unsupervised Detection",
    description: "Our proprietary algorithm identifies patterns traditional systems would miss.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-accent-green" />,
    title: "Ensure Compliance",
    description: "Reduce costs and ensure compliance by discovering insights traditional methods cannot see.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20">
      <div className="mx-auto max-w-7xl w-full px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Unsupervised Anomaly Detection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Finding anomalies in your data isn't just tedious—it's costing you time and money. Traditional methods leave you vulnerable to missed insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/10 hover:border-border/30 transition-colors"
            >
              <CardHeader>
                <div className="mb-4 p-2 w-fit rounded-lg bg-accent/10">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
