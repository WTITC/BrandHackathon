import { motion } from "framer-motion";
import { 
  Calendar, CheckCircle, Clock, FileText, MessageSquare, 
  Code, Trophy, Sparkles, ChevronRight, Lock, MapPin,
  Users, Globe, ShieldCheck, Activity, Terminal, Cpu, Zap
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timelineEvents = [
  {
    icon: Calendar,
    title: "Registration Phase",
    date: "JAN 15, 2026",
    description: "Official portal opens for solo and team registrations. Secure your spot in the ecosystem early.",
    status: "active",
    details: "Capacity: 500 Teams"
  },
  {
    icon: FileText,
    title: "Idea Submission",
    date: "FEB 01 - 15, 2026",
    description: "Submit your preliminary project concept. Our technical committee reviews for feasibility and track alignment.",
    status: "upcoming",
    details: "Format: PDF/Pitch"
  },
  {
    icon: MessageSquare,
    title: "Mentorship Sprints",
    date: "FEB 20 - MAR 01, 2026",
    description: "Connect with industry veterans to refine your architecture and prepare for the building phase.",
    status: "upcoming",
    details: "1nd Round Review"
  },
  {
    icon: Code,
    title: "Grand Hackathon",
    date: "MAR 05 - 07, 2026",
    description: "48 hours of high-octane engineering. Rapid prototyping, collaborative coding, and survival.",
    status: "upcoming",
    details: "48H Continuous"
  },
  {
    icon: Trophy,
    title: "Jury Presentation",
    date: "MAR 08, 2026",
    description: "Live pitch sessions to our panel of expert judges. Defend your architecture and business logic.",
    status: "upcoming",
    details: "Final Demo Day"
  },
];

const Roadmap = () => {
  return (
    <Layout>
      <div className="h-4 lg:h-6 bg-white" />

      {/* 1. HERO SECTION: FULL BG + NORMAL FONTS + DATA */}
      <section className="bg-white pb-12 lg:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6"> 
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative min-h-[520px] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-zinc-950 text-white shadow-2xl border border-zinc-800 flex items-center"
          >
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-20 grayscale" 
                alt="Technical Background" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-20 w-full px-8 md:px-16 lg:px-20 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left side: Normal Font Description */}
                <div className="font-sans">
                  <div className="flex items-center gap-2 mb-4 text-blue-500">
                    <Terminal className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Development_Cycle_2026</span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                    Event <span className="text-blue-500">Roadmap</span>
                  </h1>
                  
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8 max-w-md">
                    Follow our systematic approach to innovation. This timeline details every critical milestone from registration to the final jury presentation.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-xl font-semibold text-sm transition-all shadow-lg">
                      <Link to="/register" className="flex items-center gap-2">Get Started Now <ChevronRight className="w-4 h-4" /></Link>
                    </Button>
                    <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/80 rounded-xl border border-zinc-800 text-xs font-medium text-zinc-300">
                      <Cpu className="w-4 h-4 text-blue-500" /> System: Stable
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-800">
                    <div>
                      <div className="text-[10px] font-bold uppercase text-zinc-500 mb-1 tracking-wider">Current Phase</div>
                      <div className="text-sm font-semibold text-white">Registration Active</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-zinc-500 mb-1 tracking-wider">Project Scope</div>
                      <div className="text-sm font-semibold text-white">Full Stack / AI / Web3</div>
                    </div>
                  </div>
                </div>

                {/* Right side: Dense Data Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Engineering Nodes", val: "512", icon: Activity },
                    { label: "Global Partners", val: "18+", icon: Globe },
                    { label: "Mentors Active", val: "45+", icon: Users },
                    { label: "Prize Pool", val: "5L+", icon: Trophy },
                  ].map((stat, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm group hover:border-blue-500 transition-all">
                      <stat.icon className="w-5 h-5 text-blue-500 mb-3" />
                      <div className="text-xl font-bold text-white mb-1">{stat.val}</div>
                      <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TIMELINE SECTION: RECTANGULAR CARDS */}
      <section className="py-16 bg-white font-sans">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative flex flex-col md:flex-row items-center gap-6"
              >
                {/* Date Side */}
                <div className="w-full md:w-32 flex-shrink-0">
                  <span className={`text-xs font-bold tracking-tighter ${event.status === 'active' ? 'text-blue-600' : 'text-zinc-400'}`}>
                    {event.date}
                  </span>
                </div>

                {/* The Card */}
                <div className={`flex-grow w-full bg-white border rounded-2xl p-6 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  event.status === 'active' 
                  ? 'border-blue-600 shadow-xl shadow-blue-50' 
                  : 'border-zinc-100 hover:border-zinc-300 shadow-sm'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 p-2.5 rounded-xl ${event.status === 'active' ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                      <event.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-950 mb-1">{event.title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Metadata Badge */}
                  <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-zinc-50 rounded-lg border border-zinc-100">
                    <div className={`w-1.5 h-1.5 rounded-full ${event.status === 'active' ? 'bg-blue-600 animate-pulse' : 'bg-zinc-300'}`} />
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{event.details}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FINAL SUMMARY CARD */}
      <section className="py-16 bg-white font-sans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-950 rounded-[2rem] p-10 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
               <h4 className="text-blue-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Final Protocol</h4>
               <h2 className="text-3xl font-bold mb-4">Conclusion & Incubation</h2>
               <p className="text-zinc-400 max-w-md mx-auto mb-10 text-sm leading-relaxed">
                 Top 10 teams will receive exclusive equity-free grants and placement in our 2026 Accelerator program.
               </p>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   { label: "Prize Fund", val: "₹5,00,000" },
                   { label: "Winner Slots", val: "Top 03" },
                   { label: "Certificates", val: "All Finalists" },
                   { label: "Support", val: "24/7 Technical" }
                 ].map((box, i) => (
                   <div key={i} className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                     <div className="text-[9px] uppercase text-zinc-500 font-bold mb-1">{box.label}</div>
                     <div className="text-xs font-bold text-white">{box.val}</div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-zinc-50 text-center border-t border-zinc-100">
        <p className="text-zinc-400 text-[10px] font-medium tracking-widest uppercase">
          ID: #8829-2026 • Official Hackathon Roadmap
        </p>
      </footer>
    </Layout>
  );
};

export default Roadmap;