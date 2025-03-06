import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Glow } from "../components/ui/glow";
import { cn } from "../lib/utils";
import { DemoModal } from "../components/ui/demo-modal";
import { Button } from "../components/ui/button";

const Blog = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 border-b border-border/10 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src="/favicon.ico" alt="Logo" className="w-8 h-8" />
              <span className="text-foreground font-semibold">anomalydetection.app</span>
            </a>
            <Button variant="outline" size="sm" asChild>
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto relative">
            <Badge variant="outline" className="animate-appear gap-2 mb-6 mx-auto">
              <span className="text-muted-foreground">Blog Post</span>
            </Badge>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card/50 backdrop-blur-sm border border-border/10 rounded-xl p-8 relative"
            >
              <div className="mb-8 text-center">
                <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl mb-4">
                  The Future of Anomaly Detection in Industry 4.0
                </h1>
                <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
                  <span>March 6, 2025</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
              </div>

              <div className="relative mb-8 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format" 
                  alt="Industrial machinery with digital overlay" 
                  className="w-full h-64 object-cover"
                />
                <Glow variant="bottom" className="opacity-60" />
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  As industries continue to embrace digital transformation, the volume of data generated by sensors, machines, and systems has grown exponentially. This data contains valuable insights, but also presents a significant challenge: how to effectively identify anomalies that could indicate problems or opportunities.
                </p>

                <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                  What is Anomaly Detection?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Anomaly detection is the process of identifying data points, events, or observations that deviate significantly from the dataset's normal behavior. These anomalies can represent critical incidents such as:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Equipment failures or degradation</li>
                  <li>Cyber security breaches</li>
                  <li>Fraud in financial transactions</li>
                  <li>Manufacturing defects</li>
                  <li>Supply chain disruptions</li>
                </ul>

                <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                  Traditional vs. AI-Powered Approaches
                </h2>
                <p className="text-muted-foreground mb-6">
                  Traditional anomaly detection methods often rely on predefined rules and thresholds. While effective for known patterns, they struggle with:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Detecting novel or complex anomalies</li>
                  <li>Adapting to changing conditions</li>
                  <li>Scaling across large, diverse datasets</li>
                  <li>Minimizing false positives and negatives</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  Modern AI-powered anomaly detection leverages unsupervised algorythms to overcome these limitations. These systems can learn normal patterns from historical data and identify deviations without explicit programming, continuously improving their accuracy over time.
                </p>

                <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                  The Road Ahead
                </h2>
                <p className="text-muted-foreground mb-6">
                  As we look to the future, several trends are shaping the evolution of anomaly detection:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong>Unsupervised learning:</strong> Algorithms that can identify anomalies without labeled training data</li>
                  <li><strong>Real-time processing:</strong> Systems capable of detecting anomalies as they occur, enabling immediate response</li>
                  <li><strong>Explainable AI:</strong> Models that not only identify anomalies but provide context about why they're anomalous</li>
                  <li><strong>Edge computing:</strong> Anomaly detection at the source of data generation, reducing latency and bandwidth requirements</li>
                </ol>

                <p className="text-muted-foreground mt-8">
                  At anomalydetection.app, we're building the next generation of anomaly detection tools that leverage these advances to provide unprecedented insights into your data. Our platform is designed to be powerful yet accessible, helping organizations of all sizes harness the power of AI-driven anomaly detection.
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-border/10">
                <DemoModal>
                  <Button variant="default" size="lg" className="w-full inline-flex items-center gap-2">
                    Book a Demo
                  </Button>
                </DemoModal>
              </div>
            </motion.div>
            <DemoModal>
              <Glow variant="bottom" className="opacity-40 cursor-pointer" />
            </DemoModal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
