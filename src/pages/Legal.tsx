import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Glow } from "../components/ui/glow";
import { Button } from "../components/ui/button";

const Legal = () => {
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

      {/* Legal Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto relative">
            <Badge variant="outline" className="animate-appear gap-2 mb-6 mx-auto">
              <span className="text-muted-foreground">Legal Information</span>
            </Badge>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card/50 backdrop-blur-sm border border-border/10 rounded-xl p-8 relative"
            >
              <div className="mb-8 text-center">
                <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl mb-4">
                  Legal Information / Impressum
                </h1>
              </div>

              <div className="prose prose-invert max-w-none">
                {/* German Version */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                    Site Notice / Impressum
                  </h2>
                  
                  <div className="text-muted-foreground">
                    <p>Mussie Haile</p>
                    <p>Guiding-Ventures</p>
                    <p>Lohmühlenstraße 65</p>
                    <p>12435 Berlin</p>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-2">Kontakt</h3>
                  <div className="text-muted-foreground">
                    <p>Telefon: +4917687053245</p>
                    <p>E-Mail: admin@guidingventures.com</p>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-2">Umsatzsteuer-ID</h3>
                  <p className="text-muted-foreground">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    DE348867516
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">Redaktionell verantwortlich</h3>
                  <p className="text-muted-foreground">Mussie Haile</p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">EU-Streitschlichtung</h3>
                  <p className="text-muted-foreground">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                      https://ec.europa.eu/consumers/odr/
                    </a>.
                    <br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h3>
                  <p className="text-muted-foreground">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                {/* English Version */}
                <div className="pt-8 border-t border-border/10">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                    English Version
                  </h2>
                  
                  <div className="text-muted-foreground">
                    <p>Guiding-Ventures</p>
                    <p>Lohmühlenstraße 65</p>
                    <p>12435 Berlin</p>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-2">CONTACT</h3>
                  <div className="text-muted-foreground">
                    <p>Phone: +4917687053245</p>
                    <p>E-mail: admin@guidingventures.com</p>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-2">VAT ID</h3>
                  <p className="text-muted-foreground">
                    Sales tax identification number according to Sect. 27 a of the Sales Tax Law: DE348867516
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">Person responsible for editorial</h3>
                  <p className="text-muted-foreground">Mussie Haile</p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">Dispute Resolution</h3>
                  <p className="text-muted-foreground">
                    We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.
                  </p>
                </div>
              </div>
            </motion.div>
            <Glow variant="bottom" className="opacity-40" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Legal;
