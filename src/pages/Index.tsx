import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Zap, ChevronRight, Lock, Globe, Lightbulb, 
  ShieldCheck, RefreshCw, TrendingUp, Award, 
  CircleCheckBig, GraduationCap, Building2, 
  Briefcase, Handshake, Camera, Scale, History
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnnouncementModal } from "@/components/AnnouncementModal";

const tickerData = [
  { label: "Ministry of Commerce and Industry", type: "Legal" },
  { label: "Intellectual Property Framework", type: "Registered" },
  { label: "Connect Student Talent with Industry", type: "Mission" },
  { label: "Artificial Intelligence", type: "Track" },
  { label: "Structured Challenges & Mentorship", type: "Platform" },
  { label: "Startup India", type: "Partner" },
  { label: "Scalable Real-World Solutions", type: "Goal" },
  { label: "Cloud Computing", type: "Track" },
  { label: "Academic & Incubation Partners", type: "Ecosystem" },
  { label: "Digital India", type: "Partner" },
  { label: "Future-Ready Skills & Entrepreneurship", type: "Impact" },
  { label: "Cyber Security", type: "Track" }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
];

const Index = () => {
  return (
    <Layout>
      <AnnouncementModal />
      <div className="h-4 lg:h-6 bg-white" />

      {/* 1. HERO SECTION */}
      <section className="bg-white pb-10 lg:pb-14 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6"> 
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="relative min-h-[550px] md:min-h-[650px] lg:min-h-[720px] rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-black text-white shadow-2xl flex items-center"
          >
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40" alt="Hackathon Background" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
            </div>
            
            <div className="relative z-20 w-full px-6 md:px-16 lg:px-20 py-16 max-w-5xl">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <div className="flex items-center gap-2 mb-6 text-zinc-400">
                  <Lock className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase">The Only Official</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tighter">
                  HACKATHON<span className="text-blue-500 text-[0.4em] font-bold align-top ml-1">®</span>
                </h1>
                 <h2 className="text-lg md:text-xl font-light mb-8 text-zinc-200 tracking-tight leading-relaxed max-w-3xl">

                  An officially registered trademark, registered under the <span className="font-bold text-white">Intellectual Property Framework</span> administered by the Ministry of Commerce and Industry, Government of India.

                </h2>
                <div className="hidden sm:block space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed font-medium mb-10">
                  <p>Hackathon is a technology-focused innovation platform built to connect student talent with industry, research, and incubation ecosystems. It enables participants to ideate, develop, and validate scalable, real-world solutions through structured challenges, expert mentorship, and hands-on technical execution.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl font-bold text-base uppercase shadow-lg shadow-blue-600/20">
                    <Link to="/platform" className="flex items-center gap-2">Explore Platform <ChevronRight className="w-4 h-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="bg-white text-black hover:bg-zinc-200 border-none px-8 py-6 rounded-xl font-bold text-base uppercase">
                    <Link to="/register">Register Now</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TICKER */}
      <div className="bg-black py-8 lg:py-10 overflow-hidden border-y border-zinc-800">
        <motion.div className="flex gap-12 lg:gap-16 items-center whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 50, ease: "linear" }}>
          {[...tickerData, ...tickerData].map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter ${item.type === 'Legal' || item.type === 'Registered' ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-300'}`}>
                {item.type}
              </span>
              <span className="text-zinc-100 font-bold text-base lg:text-lg uppercase tracking-widest cursor-default">{item.label}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            </div>
          ))}
        </motion.div>
      </div>

      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-12">
          {/* 3. ENHANCED DEFINITION CARDS */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {[
              { 
                from: "Curiosity", to: "Capability", icon: <TrendingUp className="w-6 h-6" />, 
                info: "We transform natural inquisitiveness into professional mastery by providing access to high-end research tools and industry-standard training modules." 
              },
              { 
                from: "Teamwork", to: "Outcomes", icon: <Zap className="w-6 h-6" />, 
                info: "Individual sparks are synchronized through collaborative sprints, ensuring that collective efforts result in market-ready, scalable prototypes." 
              },
              { 
                from: "Ideas", to: "Impact", icon: <Lightbulb className="w-6 h-6" />, 
                info: "Conceptual thoughts are pushed through a rigorous validation funnel to create real-world impact that solves pressing socio-economic challenges." 
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 group hover:bg-black transition-all duration-300">
                <div className="flex justify-center mb-4 text-blue-600 group-hover:text-blue-400">{item.icon}</div>
                <div className="flex items-center justify-center gap-3 mb-2 text-black group-hover:text-white">
                  <span className="font-black uppercase text-lg tracking-tighter">{item.from} → {item.to}</span>
                </div>
                <p className="text-zinc-500 group-hover:text-zinc-400 text-xs leading-relaxed text-center font-medium">{item.info}</p>
              </div>
            ))}
          </div>

          {/* 4. EXPANDED OFFICIAL BRAND STORY */}
          <div className="mb-12 relative rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-zinc-950 text-white shadow-2xl border border-white/10">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-10 grayscale" alt="Heritage Background" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black to-black" />
              </div>
              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center gap-2 mb-6 text-blue-500">
                    <History className="w-5 h-5" />
                    <h2 className="font-bold tracking-[0.4em] text-[10px] uppercase">Official Heritage & Evolution</h2>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter uppercase leading-[1.1]">
                    The Official <br/><span className="text-blue-600">Brand Story</span>
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                      <p className="text-lg md:text-2xl font-light text-zinc-100 leading-relaxed italic border-l-4 border-blue-600 pl-6 md:pl-8">
                        "Hackathon® was established with a singular vision: to standardize the culture of rapid innovation."
                      </p>
                      <div className="text-zinc-400 space-y-4 text-sm md:text-base leading-relaxed">
                        <p>Founded in 2015, the <span className="text-white font-bold">Hackathon®</span> brand emerged at the intersection of academic potential and industrial necessity.</p>
                        <p>Owned by <span className="text-white font-bold uppercase tracking-wider">Sundeep Kumar Makthala</span>, the trademark represents a seal of quality officially registered under the <span className="text-white">Ministry of Commerce and Industry</span>.</p>
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/10 space-y-8">
                      <div className="flex gap-4 md:gap-6">
                        <Scale className="w-10 h-10 text-blue-500 shrink-0" />
                        <div>
                          <h4 className="text-white font-bold uppercase tracking-tighter text-lg mb-2">Legal Compliance</h4>
                          <p className="text-zinc-400 text-xs leading-relaxed">As the official trademark holder, we ensure every event adheres to strict national guidelines for IP protection.</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                        <div className="space-y-2">
                          <ShieldCheck className="w-6 h-6 text-blue-500" />
                          <h4 className="font-bold uppercase text-[10px] text-white tracking-widest">Authenticity</h4>
                          <p className="text-[10px] text-zinc-500 font-medium">Verified industrial benchmarks.</p>
                        </div>
                        <div className="space-y-2">
                          <RefreshCw className="w-6 h-6 text-blue-500" />
                          <h4 className="font-bold uppercase text-[10px] text-white tracking-widest">Continuity</h4>
                          <p className="text-[10px] text-zinc-500 font-medium">Post-event mentorship.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* 5. IMAGE CAROUSEL */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Camera className="w-4 h-4 text-zinc-400" />
              <h2 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Platform Snapshot</h2>
            </div>
            <div className="overflow-hidden relative rounded-2xl border border-zinc-100 py-4">
              <motion.div className="flex gap-4" animate={{ x: ["0%", "-100%"] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
                {[...galleryImages, ...galleryImages].map((img, i) => (
                  <div key={i} className="min-w-[260px] md:min-w-[300px] h-[180px] md:h-[200px] rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                    <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Hackathon Event" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* 6. WHO HACKATHON® SERVES */}
          <div className="pt-4">
            <div className="text-center mb-12">
              <h2 className="text-blue-600 font-bold tracking-widest text-[10px] mb-2 uppercase">Our Ecosystem</h2>
              <h3 className="text-3xl font-black text-black tracking-tighter uppercase">Who HACKATHON® Serves</h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                { title: "Students", icon: <GraduationCap className="w-5 h-5" />, desc: "Developing future talent." },
                { title: "Institutions", icon: <Building2 className="w-5 h-5" />, desc: "Partnering with academia." },
                { title: "Corporates", icon: <Briefcase className="w-5 h-5" />, desc: "Solving industry hurdles." },
                { title: "Partners", icon: <Handshake className="w-5 h-5" />, desc: "Collaborating for growth." },
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-8 bg-zinc-50 rounded-2xl border border-zinc-100 hover:bg-black group transition-all duration-500 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-5 bg-white text-black group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">{item.icon}</div>
                  <h4 className="text-sm md:text-base font-black text-black group-hover:text-white uppercase tracking-tighter mb-2">{item.title}</h4>
                  <p className="text-zinc-500 group-hover:text-zinc-400 text-[10px] md:text-[11px] font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black text-center border-t border-zinc-900">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-xl font-black mb-4 tracking-tighter uppercase">HACKATHON<span className="text-blue-600">®</span></h1>
          <p className="text-zinc-700 text-[8px] max-w-2xl mx-auto tracking-[0.4em] uppercase font-black leading-loose">
            Official Trademark since 2015. Intellectual Property of Sundeep Kumar Makthala. <br className="hidden sm:block"/>
            Reg. under the Ministry of Commerce and Industry, India.
          </p>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;