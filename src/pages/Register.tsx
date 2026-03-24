import { motion } from "framer-motion";
import { QrCode, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

// You can replace this URL with your local background image path
const backgroundImg = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070";

const Register = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-white text-black min-h-screen">
        {/* Background Image with Reduced Opacity (5%) */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.9]"
          style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
        />
        
        {/* Lighter Overlay for better clarity */}
        <div className="absolute inset-0 bg-white/40 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-none bg-black text-white text-sm font-bold mb-6 border border-black uppercase tracking-tighter">
              Join Us
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              Register for <span className="underline decoration-4 underline-offset-8">HACKATHON</span>
              <sup className="ml-1 text-black text-[0.6em] -top-[1.05em] relative font-normal">®</sup>  
            </h1>

            <p className="text-xl text-black/60 font-medium">
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
            <div className="bg-white border-2 border-black p-6 lg:p-10 min-h-[1000px] md:min-h-[2400px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-none bg-black flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl uppercase text-black">
                    Participant Registration
                  </h2>
                  <p className="text-sm text-black/50 font-medium">
                    Complete the form below to register
                  </p>
                </div>
              </div>

              {/* Google Form Embed */}
              <div className="w-full">
                <div className="w-full h-[900px] md:h-[2250px] rounded-none overflow-hidden border-2 border-black">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSduMYHsv93XxgNjMD1YJ3IEEsqed5OFT88365VJeH11pOSbRQ/viewform?embedded=true"
                    className="w-full h-full grayscale opacity-[0.9]"
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
              className="bg-black text-white p-6 mt-10 flex items-center gap-4 border-2 border-black"
            >
              <div className="w-12 h-12 rounded-none bg-white flex items-center justify-center flex-shrink-0">
                <QrCode className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold mb-1 uppercase tracking-tight">QR-Based Check-in</h3>
                <p className="text-sm text-white/70">
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