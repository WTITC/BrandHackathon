import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";

const Terms = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Legal"
            title="Terms & Conditions"
            description="Last updated: January 2025"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto glass-card p-8 lg:p-12"
          >
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By registering for or participating in the WTITC Hackathon, you agree to be bound by these 
                  Terms and Conditions. If you do not agree to these terms, please do not participate.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">2. Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To participate in the hackathon:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You must be at least 18 years old or have parental consent</li>
                  <li>You must provide accurate registration information</li>
                  <li>You must comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">3. Team Formation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Teams can consist of 1-5 members. All team members must be individually registered. 
                  Team changes after registration may be subject to approval by the organizers.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Participants retain ownership of their projects. However, by participating, you grant 
                  WTITC a non-exclusive license to showcase and promote your project in relation to the hackathon.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">5. Code of Conduct</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Participants must:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Treat all participants with respect and professionalism</li>
                  <li>Not engage in harassment, discrimination, or offensive behavior</li>
                  <li>Submit original work only</li>
                  <li>Follow all event rules and guidelines</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">6. Prizes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Prize distribution is subject to verification of eligibility and compliance with all rules. 
                  WTITC reserves the right to modify prize structure if circumstances require.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">7. Disqualification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  WTITC reserves the right to disqualify any participant who violates these terms, 
                  the code of conduct, or engages in any form of cheating or unethical behavior.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">8. Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  WTITC is not responsible for any loss, injury, or damage to property during the event. 
                  Participants are responsible for their own belongings and safety.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  WTITC reserves the right to modify these terms at any time. Participants will be 
                  notified of any significant changes via email.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">10. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, contact us at{" "}
                  <a href="mailto:legal@wtitc.org" className="text-primary hover:underline">
                    legal@wtitc.org
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

export default Terms;
