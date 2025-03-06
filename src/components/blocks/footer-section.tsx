import { cn } from "../../lib/utils";

export function FooterSection() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <a href="/" className="flex items-center gap-2">
            <img src="/favicon.ico" alt="Logo" className="w-8 h-8" />
            <span className="text-foreground font-semibold">anomalydetection.app</span>
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            
          </a>
          <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="/legal" className="text-muted-foreground hover:text-foreground transition-colors">
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
}
