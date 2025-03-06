"use client";

import { Badge } from "../ui/badge";
import { ArrowRightIcon, PlayIcon } from "lucide-react";
import { Mockup, MockupFrame } from "../ui/mockup";
import { Glow } from "../ui/glow";
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
  const imageSrc = resolvedTheme === "light" ? image.light : image.dark;
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
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0"
      )}
    >
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
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

          {/* Image with Glow */}
          <div className="relative pt-12">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup type="responsive">
                <div className="relative">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    loop
                    controls
                    playsInline
                  >
                    <source src="/Anomaly Detection.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
