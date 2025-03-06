"use client";

import { Badge } from "../ui/badge";
import { ArrowRightIcon, PlayIcon } from "lucide-react";
import { Mockup, MockupFrame } from "../ui/mockup";
import { useTheme } from "next-themes";
import { cn } from "../../lib/utils";
import { useState, useRef } from "react";
import { DemoModal } from "../ui/demo-modal";
import { Button } from "../ui/button";

interface HeroAction {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
  isModal?: boolean;
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  const { resolvedTheme } = useTheme();
  // Removed unused image logic since we're using video
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
  <section
      className="bg-background text-foreground py-12 sm:py-24 md:py-32 w-full"
    >
      <div className="mx-auto flex flex-col gap-12 pt-16 sm:gap-24 px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight max-w-full break-words">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-full md:max-w-[550px] font-medium text-muted-foreground sm:text-xl px-4 sm:px-0">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex justify-center gap-4">
            {actions.map((action, index) => (
              action.text === "Book a Demo" ? (
                <DemoModal key={index}>
                  <Button 
                    variant={action.variant === "glow" ? "glow" : "default"} 
                    size="lg" 
                    className="inline-flex items-center gap-2"
                  >
                    {action.icon}
                    {action.text}
                  </Button>
                </DemoModal>
              ) : (
                <Button 
                  key={index} 
                  variant={action.variant === "glow" ? "glow" : "default"} 
                  size="lg" 
                  className="inline-flex items-center gap-2" 
                  asChild
                >
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              )
            ))}
          </div>

          {/* Video Section - Simple and Direct */}
          <div className="relative pt-12 z-50 px-4 sm:px-0">
            {/* Mobile video container */}
            <div className="block sm:hidden max-w-[100vw] mx-auto">
              <div className="rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover max-w-full"
                  loop
                  controls
                  playsInline
                  preload="auto"
                >
                  <source src="/Anomaly Detection.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Desktop version */}
            <div className="hidden sm:block max-w-[800px] w-full mx-auto">
              <div className="rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  loop
                  controls
                  playsInline
                  preload="auto"
                >
                  <source src="/Anomaly Detection.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
