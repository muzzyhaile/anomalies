"use client";

import { useId, useState } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { Glow } from "./glow";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { sendEmail } from "../../services/email";

interface DemoModalProps {
  children: React.ReactNode;
  className?: string;
}

export function DemoModal({ children, className }: DemoModalProps) {
  const id = useId();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const result = await sendEmail(formState);
      
      if (result.success) {
        setIsSuccess(true);
        setFormState({
          name: "",
          email: "",
          company: "",
          message: ""
        });
        
        // Show success message and close modal after a delay
        setTimeout(() => {
          setIsSuccess(false);
          const closeButton = document.querySelector('[data-dialog-close]') as HTMLButtonElement;
          if (closeButton) closeButton.click();
        }, 3000);
      } else {
        setSubmitError(result.error || "Failed to send email. Please try again.");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className={cn("cursor-pointer", className)}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Book a Demo
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill out the form below to schedule a personalized demo of our anomaly detection platform.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-3 py-1">
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`${id}-name`}>Full Name</Label>
                <Input 
                  id={`${id}-name`}
                  name="name" 
                  placeholder="John Doe" 
                  value={formState.name} 
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-company`}>Company</Label>
                <Input 
                  id={`${id}-company`}
                  name="company" 
                  placeholder="Acme Inc." 
                  value={formState.company} 
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`${id}-email`}>Email</Label>
              <Input 
                id={`${id}-email`}
                name="email" 
                type="email" 
                placeholder="john@example.com" 
                value={formState.email} 
                onChange={handleChange}
                required
                className="bg-background/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`${id}-message`}>How can we help you?</Label>
              <Textarea 
                id={`${id}-message`}
                name="message" 
                placeholder="Tell us about your use case and requirements..." 
                value={formState.message} 
                onChange={handleChange}
                className="min-h-[60px] bg-background/50"
              />
            </div>
          </div>
          
          {submitError && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-md p-3 text-sm text-red-500">
              {submitError}
            </div>
          )}
          
          {isSuccess && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-md p-3 text-sm text-green-500">
              Thank you for your interest! We'll contact you shortly.
            </div>
          )}
          
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button 
              type="submit" 
              className="w-full text-sm py-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Request Demo"}
            </Button>
          </div>
        </form>
        
        <Glow variant="bottom" className="opacity-40" />
      </DialogContent>
    </Dialog>
  );
}
