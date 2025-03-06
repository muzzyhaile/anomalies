"use client"

import { HeroSection } from "./hero-section"
import { Icons } from "../ui/icons"

export function HeroSectionDemo() {
  return (
    <HeroSection
      badge={{
        text: "We are in Beta",
        action: {
          text: "Learn more",
          href: "/blog",
        },
      }}
      title="Detect Anomalies with AI-Powered Precision"
      description="State-of-the-art anomaly detection in time series using an advanced proprietary algorithm to identify and alert you of unusual patterns in your data."
      actions={[
        {
          text: "Book a Demo",
          variant: "default",
          isModal: true,
        }
      ]}
      image={{
        light: "/src/Documents/Anomaly Detection.mp4",
        dark: "/src/Documents/Anomaly Detection.mp4",
        alt: "Anomaly Detection Demo",
      }}
    />
  )
}
