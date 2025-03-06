"use client";

import * as React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);
  const [settings, setSettings] = React.useState<CookieSettings>({
    necessary: true, // Always true as these are essential
    analytics: false,
    marketing: false,
  });

  React.useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem("cookieSettings");
    if (!cookieChoice) {
      setIsVisible(true);
    }
  }, []);

  const handleSavePreferences = () => {
    localStorage.setItem("cookieSettings", JSON.stringify(settings));
    setIsVisible(false);
    // Initialize only the consented services
    if (settings.analytics) {
      // Initialize analytics
    }
    if (settings.marketing) {
      // Initialize marketing
    }
  };

  const handleAcceptAll = () => {
    const allSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookieSettings", JSON.stringify(allSettings));
    setIsVisible(false);
    // Initialize all services
  };

  const handleRejectAll = () => {
    const minimalSettings = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem("cookieSettings", JSON.stringify(minimalSettings));
    setIsVisible(false);
    // Ensure only necessary cookies are set
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-sm text-muted-foreground space-y-2">
            <h3 className="text-lg font-semibold text-foreground mb-2">Cookie Settings</h3>
            <p>
              We use cookies to provide essential website functionality, enhance your browsing experience, and improve our services. 
              You can choose which types of cookies you allow us to use. Necessary cookies are always enabled as they are essential 
              for the website to function properly.
            </p>
            {showDetails && (
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="necessary" 
                    checked={settings.necessary} 
                    disabled 
                  />
                  <div className="space-y-1">
                    <Label htmlFor="necessary" className="font-medium">Necessary Cookies</Label>
                    <p className="text-muted-foreground text-sm">
                      Essential for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="analytics" 
                    checked={settings.analytics}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, analytics: checked === true }))
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor="analytics" className="font-medium">Analytics Cookies</Label>
                    <p className="text-muted-foreground text-sm">
                      Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="marketing" 
                    checked={settings.marketing}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, marketing: checked === true }))
                    }
                  />
                  <div className="space-y-1">
                    <Label htmlFor="marketing" className="font-medium">Marketing Cookies</Label>
                    <p className="text-muted-foreground text-sm">
                      Used to track visitors across websites to display relevant advertisements.
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2 mt-2">
              <Button variant="link" className="px-0 text-primary" onClick={() => window.location.href = '/privacy'}>
                Privacy Policy
              </Button>
              <span className="text-muted-foreground">•</span>
              <Button variant="link" className="px-0 text-primary" onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'Customize Settings'}
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-end">
            <Button variant="outline" onClick={handleRejectAll}>
              Reject All
            </Button>
            {showDetails && (
              <Button variant="outline" onClick={handleSavePreferences}>
                Save Preferences
              </Button>
            )}
            <Button onClick={handleAcceptAll}>
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
