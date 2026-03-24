import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, Brain, Globe, Shield, Coins, Leaf, 
  Building2, HeartPulse, GraduationCap, Cpu, 
  Rocket, Lock, ChevronRight, Binary, Award, CheckCircle2
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const themes = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Build intelligent solutions using AI/ML. From predictive analytics to computer vision, explore how artificial intelligence can transform industries.",
    tags: ["Deep Learning", "NLP", "Computer Vision"],
    color: "bg-zinc-100 text-black",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Create innovative web applications and mobile solutions that solve real-world problems with modern technologies and UX.",
    tags: ["React", "Next.js", "Flutter"],
    color: "bg-zinc-900 text-white",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Develop security solutions to protect digital assets. Work on encryption, threat detection, and privacy-preserving technologies.",
    tags: ["Encryption", "Zero Trust", "Privacy"],
    color: "bg-zinc-100 text-black",
  },
  {
    icon: Coins,
    title: "Blockchain & FinTech",
    description: "Innovate in decentralized finance and blockchain technology. Create solutions for payments and digital assets.",
    tags: ["DeFi", "Smart Contracts", "Web3"],
    color: "bg-zinc-900 text-white",
  },
  {
    icon: HeartPulse,
    title: "HealthTech",
    description: "Revolutionize healthcare with technology. Develop solutions for telemedicine and medical data analysis.",
    tags: ["Digital Health", "BioTech", "Telemedicine"],
    color: "bg-zinc-100 text-black",
  },
  {
    icon: Leaf,
    title: "Sustainable Tech",
    description: "Build technology solutions that address environmental challenges. Focus on climate tech and renewable energy.",
    tags: ["CleanTech", "Carbon Tracking", "ESG"],
    color: "bg-zinc-900 text-white",
  },
  {
    icon: Building2,
    title: "Smart Cities & IoT",
    description: "Design connected solutions for smart cities. Work on IoT devices, urban mobility, and intelligent infrastructure.",
    tags: ["IoT", "Urban Mobility", "Smart Grid"],
    color: "bg-zinc-100 text-black",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Transform education through digital tools. Create immersive learning platforms that democratize access to education.",
    tags: ["LMS", "Gamification", "Adaptive Learning"],
    color: "bg-zinc-900 text-white",
  },
  {
    icon: Cpu,
    title: "Robotics & Hardware",
    description: "Merge code with physical machines. Build automation tools, autonomous drones, or innovative embedded systems.",
    tags: ["Arduino/Pi", "Automation", "Drones"],
    color: "bg-zinc-100 text-black",
  },
];

const Themes = () => {
  return (
    <Layout>
      <div className="h-4 lg:h-6 bg-white" />

      {/* 1. HERO SECTION: FLOATING CARD WITH BACKGROUND IMAGE & EXTENDED DATA */}
      <section className="bg-white pb-12 lg:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6"> 
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative min-h-[550px] lg:min-h-[620px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-black text-white shadow-2xl border border-zinc-800"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-40 grayscale" 
                alt="Hackathon Technology Background" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            </div>

            <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-6 text-blue-500">
                  <Lock className="w-4 h-4" />
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase">Official Innovation Framework</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tighter uppercase">
                  Innovation <br/> <span className="text-blue-600">Tracks & Themes</span>
                </h1>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-4">
                    <p className="text-base md:text-lg font-medium text-zinc-300 leading-relaxed">
                      Choose your track and solve high-stakes industrial problems. Every theme is curated to test technical depth, scalability, and market viability.
                    </p>
                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>Certified Intellectual Property Framework</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                    <h4 className="text-xs font-black uppercase tracking-widest mb-3 text-blue-500">Platform Impact</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-black">9+</div>
                        <div className="text-[10px] uppercase text-zinc-500 font-bold">Domain Tracks</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black">2015</div>
                        <div className="text-[10px] uppercase text-zinc-500 font-bold">Established</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-7 rounded-2xl font-bold text-base uppercase shadow-xl shadow-blue-600/20">
                    <Link to="/register" className="flex items-center gap-2">Explore Tracks <ChevronRight className="w-5 h-5" /></Link>
                  </Button>
                  <div className="flex -space-x-3 items-center ml-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="participant" />
                      </div>
                    ))}
                    <span className="pl-6 text-xs font-bold text-zinc-500 uppercase tracking-widest">Join 50k+ Innovators</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THEMES GRID */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-2">Category Selection</h2>
              <h3 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase leading-none">Choose Your <br/>Battleground</h3>
            </div>
            <p className="text-zinc-500 font-medium text-sm max-w-xs">
              Select a domain that aligns with your expertise. Multi-disciplinary solutions are highly encouraged.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] hover:bg-black transition-all duration-500 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl ${theme.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <theme.icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-black tracking-tighter uppercase mb-4 group-hover:text-white transition-colors">{theme.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1 group-hover:text-zinc-400 font-medium">
                  {theme.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {theme.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-600 text-[10px] font-bold uppercase tracking-wider group-hover:bg-zinc-900 group-hover:border-zinc-800 group-hover:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black text-center border-t border-zinc-900">
        <p className="text-zinc-800 text-[9px] tracking-[0.5em] uppercase font-black">
          Official Trademark • HACKATHON<span className="text-blue-600">®</span> since 2015
        </p>
      </footer>
    </Layout>
  );
};

export default Themes;