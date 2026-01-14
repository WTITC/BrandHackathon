import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Scale, 
  Award, 
  Users, 
  CheckCircle2,
  Lock,
  Image as ImageIcon
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
//import { CountdownTimer } from "@/components/CountdownTimer";
import { AnnouncementModal } from "@/components/AnnouncementModal";

// Hackathon date - March 29, 2025
// const hackathonDate = new Date("2026-03-29T09:10:00+05:30");

const Index = () => {
  return (
    <Layout>
      {/* RESTORED: Announcement Modal */}
      <AnnouncementModal />
      
      {/* 1. HERO SECTION - Deep Navy Aesthetic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020817] py-20">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Trademark Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-blue-900/30 border border-blue-800/50 mb-8">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-300">
                The Only Official
              </span>
            </div>

            {/* Main Headline */}
           <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 text-white">HACKATHON
            <sup className="ml-1 text-blue-500 text-[0.5em] md:text-[0.4em] -top-[0.9em] md:-top-[1.3em] relative font-normal">®</sup>
           </h1>



            <h2 className="text-2xl md:text-xl font-light mb-8 text-blue-100/80 tracking-wide">
              officially registered trademark, registered under the Intellectual Property Framework administered by the<span className="font-semibold text-white"> Ministry of Commerce and Industry, Government of India.</span>
            </h2>

            <h5  className=" font-light mb-8 text-blue-100/80 tracking-wide">Hackathon is a technology-focused innovation platform built to connect student talent with industry, research, and incubation ecosystems. It enables participants to ideate, develop, and validate scalable, real-world solutions through structured challenges, expert mentorship, and hands-on technical execution. By collaborating with academic institutions, incubation centers, and technology partners, the platform fosters future-ready skills, entrepreneurship, and impactful innovation.</h5>

            {/* RESTORED: Countdown Timer */}
            
        

            {/* SAMPLE IMAGE PLACEHOLDER */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative w-full max-w-4xl mx-auto mb-12 group"
            >
              <div className="aspect-[21/9] w-full bg-blue-950/20 border border-blue-500/20 overflow-hidden relative shadow-2xl shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] to-transparent z-10 opacity-60" />
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
                  alt="Hackathon official showcase" 
                  className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="flex flex-col items-center gap-2 text-blue-400/50 transition-colors">
                    <ImageIcon className="w-10 h-10 stroke-[1px]" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Official Visual Placeholder</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-blue-500/40" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-blue-500/40" />
            </motion.div>

            {/* Credibility Subtext */}
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              India’s officially recognized hackathon brand — bringing structure, credibility, and purpose to innovation challenges since 2015.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg rounded-none transition-all duration-300 shadow-xl shadow-blue-900/20">
                <Link to="/platform">
                  Explore Official Platform
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-700 text-slate-300 px-10 py-7 text-lg rounded-none hover:bg-white hover:text-navy-950">
                <Link to="/credibility">Trademark & Credibility</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom trust line */}
        <div className="absolute bottom-10 w-full text-center">
          <p className="text-[11px] text-slate-500 uppercase tracking-widest font-medium">
            Administered by the Ministry of Commerce and Industry
          </p>
        </div>
      </section>

      {/* 2. CATEGORY EDUCATION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-blue-600 font-bold tracking-tighter text-sm uppercase mb-4">The Definition</h3>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                A Hackathon is more than just a competition.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                It is a time-bound innovation challenge where organizers define real-world problem statements, 
                and teams collaborate intensively to design, build, and present practical solutions.
              </p>
              <ul className="space-y-4">
                {[
                  "Curiosity into Capability",
                  "Teamwork into Outcomes",
                  "Ideas into Impact"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-8 border-t-4 border-blue-600">
                <h4 className="font-bold text-xl mb-2 text-slate-900">Authenticity</h4>
                <p className="text-slate-600 text-sm">Ensuring every challenge follows rigorous standards.</p>
              </div>
              <div className="bg-slate-900 p-8 border-t-4 border-blue-400 text-white">
                <h4 className="font-bold text-xl mb-2">Continuity</h4>
                <p className="text-slate-400 text-sm">Innovation doesn't stop when the timer ends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND STORY */}
      <section className="py-24 bg-[#0A192F] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Award className="w-12 h-12 text-blue-400 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Official Brand Story</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto" />
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-blue-100/70 leading-relaxed mb-8 text-center italic">
                "Hackathon® exists to ensure the innovation process is credible, meaningful, and recognized."
              </p>
              <p className="text-lg leading-relaxed text-slate-400 mb-8">
                Established in 2015, Hackathon® was created to bring long-term value to India’s innovation landscape. 
                Owned by Sundeep Kumar Makthala, it is an officially registered trademark under the 
                Intellectual Property Framework administered by the Ministry of Commerce and Industry, Government of India.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 rounded-none border border-slate-800 bg-slate-900/50">
                  <Scale className="text-blue-500 mb-4" />
                  <h5 className="font-bold mb-2">Legal Recognition</h5>
                  <p className="text-sm text-slate-500">A brand that signifies origin, ownership, and responsibility across the nation.</p>
                </div>
                <div className="p-6 rounded-none border border-slate-800 bg-slate-900/50">
                  <Globe className="text-blue-500 mb-4" />
                  <h5 className="font-bold mb-2">Authenticated Presence</h5>
                  <p className="text-sm text-slate-500">The platform brandhackathon.com serves as the official digital home for legitimate innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AUDIENCE CALL-TO-ACTION */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Who HACKATHON<sup className="ml-1 text-dark-500 text-[0.7em] -top-[0.68em] relative font-normal">®</sup> Serves</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {['Students', 'Institutions', 'Corporates', 'Partners'].map((item) => (
              <div key={item} className="py-10 px-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-sm">{item}</h4>
              </div>
            ))}
          </div>
          <Button asChild size="xl" className="bg-[#0A192F] hover:bg-slate-900 text-white rounded-none px-12 py-8">
            <Link to="/register">Register on the Official Platform</Link>
          </Button>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-16 bg-[#020817] border-t border-slate-900 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-6xl md:text-4xl font-bold mb-4 text-white">
              HACKATHON
              <sup className="ml-1 text-blue-500 text-[0.4em] -top-[0.85em] relative font-normal">®</sup>
            </h1>
          <p className="text-slate-500 text-xs max-w-2xl mx-auto leading-loose tracking-widest uppercase font-bold">
            Official Trademark since 2015. Intellectual Property of Sundeep Kumar Makthala. 
            Reg. under the Ministry of Commerce and Industry, India.
          </p>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
