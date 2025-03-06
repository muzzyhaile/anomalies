import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Glow } from "../components/ui/glow";
import { Button } from "../components/ui/button";

const Privacy = () => {
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

      {/* Privacy Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto relative">
            <Badge variant="outline" className="animate-appear gap-2 mb-6 mx-auto">
              <span className="text-muted-foreground">Privacy Policy</span>
            </Badge>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card/50 backdrop-blur-sm border border-border/10 rounded-xl p-8 relative"
            >
              <div className="mb-8 text-center">
                <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl mb-4">
                  Privacy Policy
                </h1>
              </div>

              <div className="prose prose-invert max-w-none">
                {/* English Version */}
                <div className="mb-12">
                  <p className="text-muted-foreground">
                    https://anomalydetection.app/ website is owned by Guiding Ventures Mussie Haile, which is a data controller of your personal data.
                  </p>
                  
                  <p className="text-muted-foreground mt-4">
                    We have adopted this Privacy Policy, which determines how we are processing the information collected by https://anomalydetection.app/, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using https://anomalydetection.app/ website.
                  </p>
                  
                  <p className="text-muted-foreground mt-4">
                    We take care of your personal data and undertake to guarantee its confidentiality and security.
                  </p>

                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                    Personal information we collect:
                  </h2>
                  <p className="text-muted-foreground">
                    When you visit the https://anomalydetection.app/, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as "Device Information." Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.
                  </p>

                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                    Why do we process your data?
                  </h2>
                  <p className="text-muted-foreground">
                    Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.
                  </p>
                  
                  <p className="text-muted-foreground mt-4">
                    You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website's features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website's features. For example, you won't be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via admin@guidingventures.com.
                  </p>

                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                    Your rights:
                  </h2>
                  <p className="text-muted-foreground">
                    If you are a European resident, you have the following rights related to your personal data:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2 mt-4">
                    <li>The right to be informed.</li>
                    <li>The right of access.</li>
                    <li>The right to rectification.</li>
                    <li>The right to erasure.</li>
                    <li>The right to restrict processing.</li>
                    <li>The right to data portability.</li>
                    <li>The right to object.</li>
                    <li>Rights in relation to automated decision-making and profiling.</li>
                  </ul>
                  
                  <p className="text-muted-foreground">
                    If you would like to exercise this right, please contact us through the contact information below.
                  </p>
                  
                  <p className="text-muted-foreground mt-4">
                    Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information might be transferred outside of Europe, including Canada and the United States.
                  </p>

                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                    Links to other websites:
                  </h2>
                  <p className="text-muted-foreground">
                    Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.
                  </p>

                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                    Information security:
                  </h2>
                  <p className="text-muted-foreground">
                    We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
                  </p>

                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                    Legal disclosure:
                  </h2>
                  <p className="text-muted-foreground">
                    We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                  </p>

                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                    Contact information:
                  </h2>
                  <p className="text-muted-foreground">
                    If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to admin@guidingventures.com.
                  </p>
                </div>

                {/* German Version */}
                <div className="pt-8 border-t border-border/10">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mt-8 mb-4">
                    Datenschutzerklärung
                  </h2>
                  
                  <p className="text-muted-foreground">
                    Die Website https://anomalydetection.app wird von Guiding Ventures Mussie Haile betrieben, das als Verantwortlicher für Ihre personenbezogenen Daten fungiert.
                  </p>
                  
                  <p className="text-muted-foreground mt-4">
                    Wir haben diese Datenschutzerklärung angenommen, die festlegt, wie wir die von https://anomalydetection.app gesammelten Informationen verarbeiten und warum wir bestimmte personenbezogene Daten von Ihnen erheben müssen. Daher ist es erforderlich, dass Sie diese Datenschutzerklärung lesen, bevor Sie die Website https://anomalydetection.app nutzen.
                  </p>
                  
                  <p className="text-muted-foreground mt-4">
                    Wir kümmern uns um Ihre persönlichen Daten und verpflichten uns, deren Vertraulichkeit und Sicherheit zu gewährleisten.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    Personenbezogene Daten, die wir erfassen:
                  </h3>
                  <p className="text-muted-foreground">
                    Wenn Sie die Website https://anomalydetection.app besuchen, erfassen wir automatisch bestimmte Informationen über Ihr Gerät, einschließlich Informationen über Ihren Webbrowser, Ihre IP-Adresse, Ihre Zeitzone und einige der auf Ihrem Gerät installierten Cookies. Darüber hinaus erfassen wir während Ihres Besuchs Informationen über die von Ihnen angesehenen Seiten oder Produkte, über die Websites oder Suchbegriffe, die Sie zur Website geführt haben, und darüber, wie Sie mit der Website interagieren. Diese automatisch gesammelten Informationen bezeichnen wir als „Geräteinformationen".
                  </p>
                  
                  <p className="text-muted-foreground mt-4">
                    Darüber hinaus können wir die persönlichen Daten erfassen, die Sie uns während der Registrierung zur Verfügung stellen (einschließlich, aber nicht beschränkt auf Name, Nachname, Adresse, Zahlungsinformationen usw.), um den Vertrag erfüllen zu können.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    Warum verarbeiten wir Ihre Daten?
                  </h3>
                  <p className="text-muted-foreground">
                    Unser oberstes Ziel ist die Sicherheit der Kundendaten. Daher verarbeiten wir nur minimale Benutzerdaten und nur so viel wie unbedingt notwendig ist, um die Website zu betreiben. Automatisch gesammelte Informationen werden nur verwendet, um potenzielle Missbrauchsfälle zu identifizieren und statistische Informationen über die Nutzung der Website zu erstellen. Diese statistischen Informationen werden nicht in einer Weise aggregiert, die es ermöglichen würde, einen bestimmten Benutzer zu identifizieren.
                  </p>
                  
                  <p className="text-muted-foreground mt-4">
                    Sie können die Website besuchen, ohne uns mitzuteilen, wer Sie sind, oder Informationen offenzulegen, die Sie als spezifische, identifizierbare Person identifizieren könnten. Wenn Sie jedoch einige Funktionen der Website nutzen, unseren Newsletter erhalten oder uns über ein Formular kontaktieren möchten, können Sie uns personenbezogene Daten wie Ihre E-Mail-Adresse, Ihren Vor- und Nachnamen, Ihren Wohnort, Ihre Organisation oder Telefonnummer zur Verfügung stellen. Sie können sich auch dafür entscheiden, uns keine personenbezogenen Daten zur Verfügung zu stellen, was jedoch dazu führen kann, dass Sie einige Funktionen der Website nicht nutzen können. Beispielsweise können Sie unseren Newsletter nicht erhalten oder uns nicht direkt über die Website kontaktieren. Nutzer, die unsicher sind, welche Informationen erforderlich sind, können uns gerne unter admin@guidingventures.com kontaktieren.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    Ihre Rechte:
                  </h3>
                  <p className="text-muted-foreground">
                    Wenn Sie ein Bewohner der Europäischen Union sind, haben Sie folgende Rechte in Bezug auf Ihre personenbezogenen Daten:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2 mt-4">
                    <li>Das Recht auf Information.</li>
                    <li>Das Recht auf Zugang.</li>
                    <li>Das Recht auf Berichtigung.</li>
                    <li>Das Recht auf Löschung.</li>
                    <li>Das Recht auf Einschränkung der Verarbeitung.</li>
                    <li>Das Recht auf Datenübertragbarkeit.</li>
                    <li>Das Recht auf Widerspruch.</li>
                    <li>Rechte in Bezug auf automatisierte Entscheidungen und Profiling.</li>
                  </ul>
                  
                  <p className="text-muted-foreground">
                    Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren Sie uns bitte über die unten angegebenen Kontaktinformationen.
                  </p>
                  
                  <p className="text-muted-foreground mt-4">
                    Darüber hinaus verarbeiten wir Ihre Daten, um Verträge zu erfüllen, die wir möglicherweise mit Ihnen abgeschlossen haben (z. B. wenn Sie eine Bestellung über die Website aufgeben), oder um unsere berechtigten Geschäftsinteressen zu verfolgen. Bitte beachten Sie außerdem, dass Ihre Daten möglicherweise außerhalb Europas, einschließlich Kanada und den USA, übertragen werden.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    Links zu anderen Websites:
                  </h3>
                  <p className="text-muted-foreground">
                    Unsere Website kann Links zu anderen Websites enthalten, die nicht in unserem Besitz oder unter unserer Kontrolle stehen. Bitte beachten Sie, dass wir nicht für die Datenschutzpraktiken solcher Websites oder Dritter verantwortlich sind. Wir empfehlen Ihnen, die Datenschutzrichtlinien jeder Website zu lesen, die personenbezogene Daten sammelt.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    Informationssicherheit:
                  </h3>
                  <p className="text-muted-foreground">
                    Wir sichern die von Ihnen bereitgestellten Informationen auf sicheren Servern in einer kontrollierten Umgebung, die vor unbefugtem Zugriff, Nutzung oder Offenlegung geschützt ist. Wir setzen angemessene administrative, technische und physische Schutzmaßnahmen ein, um den unbefugten Zugriff, die Nutzung, Änderung und Offenlegung personenbezogener Daten zu verhindern. Allerdings kann keine Datenübertragung über das Internet oder ein drahtloses Netzwerk vollständig garantiert werden.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    Gesetzliche Offenlegung:
                  </h3>
                  <p className="text-muted-foreground">
                    Wir geben die von uns gesammelten, genutzten oder erhaltenen Informationen weiter, wenn dies gesetzlich vorgeschrieben oder erlaubt ist, z. B. zur Erfüllung eines gerichtlichen Beschlusses oder einer Vorladung, oder wenn wir in gutem Glauben glauben, dass dies erforderlich ist, um unsere Rechte zu schützen, Ihre Sicherheit oder die Sicherheit anderer zu gewährleisten, Betrug zu untersuchen oder auf eine behördliche Anfrage zu reagieren.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-2">
                    Kontaktinformationen:
                  </h3>
                  <p className="text-muted-foreground">
                    Wenn Sie uns kontaktieren möchten, um mehr über diese Richtlinie zu erfahren oder uns in Bezug auf Ihre Rechte und Ihre personenbezogenen Daten zu kontaktieren, können Sie uns eine E-Mail an admin@guidingventures.com senden.
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

export default Privacy;
