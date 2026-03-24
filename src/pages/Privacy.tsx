import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Legal"
            title="Privacy Policy"
            description="Last updated: January 2025"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto glass-card p-8 lg:p-12"
          >
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, including your name, email address, 
                  phone number, educational institution, and team information when you register for the hackathon.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Process and manage your hackathon registration</li>
                  <li>Send you event-related communications and updates</li>
                  <li>Generate participation certificates</li>
                  <li>Improve our events and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">3. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell or rent your personal information to third parties. We may share your 
                  information with event sponsors and partners only with your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">5. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">6. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to enhance your experience on our website. 
                  You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@wtitc.org" className="text-primary hover:underline">
                    privacy@wtitc.org
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
