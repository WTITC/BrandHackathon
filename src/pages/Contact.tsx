import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Terminal, 
  Shield, 
  Globe,
  Info,
  Server,
  Database,
  Cpu,
  Zap,
  Lock,
  Headphones,
  HelpCircle,
  Activity,
  Layers
} from "lucide-react";

/** * COMPONENT ARCHITECTURE: CONTACT MODULE
 * High-contrast Monochrome Theme (Black & White)
 * Version: 4.0.2 // 2026 Stable
 */
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

/**
 * VALIDATION LOGIC
 * Strict schema for processing inbound transmissions
 */
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Invalid email format"),
  subject: z.string().trim().min(5, "Subject required"),
  message: z.string().trim().min(10, "Message too short").max(2000),
});

/**
 * DATA REGISTRY: SUPPORT NODES
 */
const contactNodes = [
  {
    id: "N-01",
    icon: Mail,
    title: "Support Email",
    content: "hackathon@wtitc.org",
    meta: "Primary Node",
    link: "mailto:hackathon@wtitc.org",
  },
  {
    id: "N-02",
    icon: Phone,
    title: "Direct Line",
    content: "+91 12345 67890",
    meta: "Voice Comms",
    link: "tel:+911234567890",
  },
  {
    id: "N-03",
    icon: MapPin,
    title: "Operational Base",
    content: "Bangalore, India",
    meta: "Geo Location",
    link: "#",
  },
  {
    id: "N-04",
    icon: Clock,
    title: "Availability",
    content: "09:00 - 18:00 IST",
    meta: "System Uptime",
    link: "#",
  },
];

/**
 * DATA REGISTRY: FAQ KNOWLEDGE BASE
 */
const knowledgeBase = [
  {
    q: "How do I secure my participation?",
    a: "Register via the portal and submit your technical proposal for review.",
  },
  {
    q: "Are there travel reimbursements?",
    a: "Travel grants are provided to selected top-tier finalist teams only.",
  },
  {
    q: "Can I update my team after registration?",
    a: "Yes, team modifications are allowed until the idea submission deadline.",
  },
  {
    q: "Is there a hybrid participation option?",
    a: "No, the 48-hour Grand Hackathon is strictly an on-site event.",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleUpdate = (key: string, val: string) => {
    setFormData(p => ({ ...p, [key]: val }));
    if (formErrors[key]) setFormErrors(p => ({ ...p, [key]: "" }));
  };

  const handleSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});

    try {
      contactSchema.parse(formData);
      await new Promise(r => setTimeout(r, 1200));
      setIsSubmitted(true);
      toast({ title: "Inquiry Logged", description: "Our team will contact you shortly." });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const issues: Record<string, string> = {};
        err.errors.forEach(e => { if (e.path[0]) issues[e.path[0] as string] = e.message; });
        setFormErrors(issues);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* 1. FLOATING RECTANGULAR HERO BANNER */}
      <section className="bg-white pt-8 pb-4 lg:pt-12 lg:pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black text-white rounded-3xl p-8 lg:p-16 relative overflow-hidden shadow-2xl"
          >
            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900/50 to-transparent pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-5%] w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-zinc-700" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">Contact Protocol</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-6 leading-tight">
                  Contact <span className="text-zinc-500">Inquiry</span>
                </h1>
                
                <p className="text-zinc-400 text-base lg:text-lg font-medium max-w-md leading-relaxed">
                  Bridge the communication gap. Our technical support nodes are ready to handle your event-related queries.
                </p>
              </div>

              <div className="hidden lg:flex flex-col gap-4 border-l border-zinc-800 pl-12">
                <div className="flex items-center gap-4">
                  <Activity className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Global Status</p>
                    <p className="text-sm font-bold text-white uppercase">All Systems Operational</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Layers className="w-5 h-5 text-zinc-600" />
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Network Node</p>
                    <p className="text-sm font-bold text-white uppercase">Bangalore Core-01</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN COMMUNICATION GRID */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            
            {/* Left: Contact Nodes */}
            <div className="lg:col-span-4 space-y-4">
              <div className="grid grid-cols-1 gap-3">
                {contactNodes.map((node, i) => (
                  <motion.a
                    key={node.id}
                    href={node.link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-5 border border-zinc-200 rounded-2xl flex items-center gap-5 hover:border-black hover:shadow-lg transition-all group bg-white"
                  >
                    <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 flex items-center justify-center rounded-xl group-hover:bg-black group-hover:text-white transition-colors">
                      <node.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{node.title}</h4>
                      <p className="text-base font-bold text-black">{node.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Security/Social Block */}
              <div className="bg-black p-8 rounded-3xl text-white mt-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zinc-500" /> Social_Registry
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {["GitHub", "LinkedIn", "X", "Insta"].map((social) => (
                    <a key={social} href="#" className="py-3 border border-zinc-800 text-center text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-lg">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Submission Form */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 border border-zinc-200 p-8 lg:p-12 rounded-[2.5rem] bg-white relative"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="w-16 h-16 mx-auto mb-6 text-black" />
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">Transmission Successful</h3>
                    <p className="text-zinc-500 mb-8 text-base">We have received your technical inquiry. Expected latency: 24h.</p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-black text-white px-10 py-6 rounded-xl font-bold uppercase tracking-widest text-xs">New Transmission</Button>
                  </motion.div>
                ) : (
                  <div key="form">
                    <div className="flex items-center justify-between mb-10 border-b border-zinc-100 pb-6">
                      <h2 className="text-2xl font-bold text-black uppercase tracking-tight">Direct Inquiry Form</h2>
                      <Shield className="w-6 h-6 text-zinc-200" />
                    </div>

                    <form onSubmit={handleSubmission} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase text-zinc-500 ml-1">Full Identity</Label>
                          <Input 
                            placeholder="Your Full Name" 
                            className="h-14 border-zinc-200 focus:border-black rounded-xl text-base px-5" 
                            value={formData.name}
                            onChange={(e) => handleUpdate("name", e.target.value)}
                          />
                          {formErrors.name && <p className="text-xs text-red-500 font-bold ml-1">{formErrors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase text-zinc-500 ml-1">Electronic Mail</Label>
                          <Input 
                            placeholder="user@domain.com" 
                            className="h-14 border-zinc-200 focus:border-black rounded-xl text-base px-5" 
                            value={formData.email}
                            onChange={(e) => handleUpdate("email", e.target.value)}
                          />
                          {formErrors.email && <p className="text-xs text-red-500 font-bold ml-1">{formErrors.email}</p>}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase text-zinc-500 ml-1">Inquiry Subject</Label>
                        <Input 
                          placeholder="What is this regarding?" 
                          className="h-14 border-zinc-200 focus:border-black rounded-xl text-base px-5" 
                          value={formData.subject}
                          onChange={(e) => handleUpdate("subject", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase text-zinc-500 ml-1">Data Payload (Message)</Label>
                        <Textarea 
                          placeholder="Please provide specific details..." 
                          rows={5} 
                          className="border-zinc-200 focus:border-black rounded-xl text-base p-5 resize-none" 
                          value={formData.message}
                          onChange={(e) => handleUpdate("message", e.target.value)}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full bg-black hover:bg-zinc-800 text-white h-16 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-transform active:scale-[0.98]"
                      >
                        {isSubmitting ? "Encrypting..." : "Execute Submission"}
                      </Button>
                    </form>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FAQ MODULE */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col items-center mb-12">
            <HelpCircle className="w-6 h-6 mb-4 text-black" />
            <h2 className="text-2xl font-bold text-black uppercase tracking-widest">Common Protocols</h2>
            <div className="w-12 h-1 bg-black mt-2" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {knowledgeBase.map((item, i) => (
              <div key={i} className="bg-white p-6 border border-zinc-200 rounded-2xl hover:border-black transition-colors">
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="font-bold text-black text-base mb-2 uppercase tracking-tight">{item.q}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SYSTEM FOOTER */}
      <footer className="py-12 bg-white text-center border-t border-zinc-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 mb-8 grayscale opacity-20">
            <Cpu className="w-6 h-6" />
            <Zap className="w-6 h-6" />
            <Server className="w-6 h-6" />
            <Database className="w-6 h-6" />
          </div>
          <p className="text-zinc-400 text-[10px] font-black tracking-[0.6em] uppercase">WTITC // Contact_Portal // 2026</p>
          <div className="mt-4 text-[8px] text-zinc-300 font-bold uppercase tracking-widest">Protocol Revision: 4.0.2 // Final Release</div>
        </div>
      </footer>
    </Layout>
  );
};

export default Contact;