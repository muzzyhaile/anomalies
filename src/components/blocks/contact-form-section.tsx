"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "../../services/email";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  consent: boolean;
}

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    consent: false,
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { success, error } = await sendEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: `Phone: ${formData.phone}\nDemo request from ${formData.name} at ${formData.company}`
      });

      if (!success) {
        throw new Error(error || 'Failed to send email');
      }
      setIsSuccess(true);
      setFormData({ name: "", email: "", company: "", phone: "", consent: false });
    } catch (error) {
      console.error('Failed to send message:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Ready to Transform Your Data Analysis?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join the companies already using our AI-powered anomaly detection to gain deeper insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {isSuccess ? (
            <Card className="max-w-md mx-auto p-6 bg-card/50 backdrop-blur-sm border border-border/10">
              <div className="text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for your interest. We'll get back to you shortly.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="max-w-md mx-auto p-6 bg-card/50 backdrop-blur-sm border border-border/10">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-500 bg-red-500/10 rounded-md">
                    {error}
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="consent" 
                    checked={formData.consent}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, consent: checked === true }))
                    }
                    required
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground">
                    I agree to receive communications about Anomaly Detection. 
                    You can unsubscribe at any time. By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-white hover:text-white/90 underline">
                      privacy policy
                    </a>
                    .
                  </Label>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting || !formData.consent}>
                  <span className="flex items-center gap-2">
                    {isSubmitting ? "Sending..." : "Schedule Demo"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </form>
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  );
}
