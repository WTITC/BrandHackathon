import { motion } from "framer-motion";
import { QrCode, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const Register = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Join Us
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
             Register for <span className="gradient-text">HACKATHON</span>
              <sup className="ml-1 text-blue-500 text-[0.6em] -top-[1.05em] relative font-normal">®</sup>  
            </h1>

            <p className="text-xl text-muted-foreground">
              Fill in your details below to secure your spot. Team registrations are welcome!
            </p>
          </motion.div>

          {/* Registration Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-card p-6 lg:p-10 min-h-[1000px] md:min-h-[2400px]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-xl">
                    Participant Registration
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Complete the form below to register
                  </p>
                </div>
              </div>

              {/* Google Form Embed */}
              <div className="w-full">
                <div className="w-full h-[900px] md:h-[2250px] rounded-xl overflow-hidden border border-border">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSduMYHsv93XxgNjMD1YJ3IEEsqed5OFT88365VJeH11pOSbRQ/viewform?embedded=true"
                    className="w-full h-full"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>

            {/* QR Check-in Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 mt-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <QrCode className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">QR-Based Check-in</h3>
                <p className="text-sm text-muted-foreground">
                  After registration, you’ll receive a unique QR code via email for
                  quick check-in on event day. No waiting in queues!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;

