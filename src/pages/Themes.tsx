import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Globe, Shield, Coins, Leaf, Building2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";

const themes = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    description: "Build intelligent solutions using AI/ML. From predictive analytics to computer vision, explore how artificial intelligence can transform industries.",
    tags: ["Deep Learning", "NLP", "Computer Vision", "AutoML"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Create innovative web applications and mobile solutions that solve real-world problems with modern technologies and exceptional user experiences.",
    tags: ["React", "Next.js", "Flutter", "Progressive Web Apps"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Develop security solutions to protect digital assets. Work on encryption, threat detection, and privacy-preserving technologies.",
    tags: ["Encryption", "Threat Detection", "Privacy", "Zero Trust"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Coins,
    title: "Blockchain & FinTech",
    description: "Innovate in decentralized finance and blockchain technology. Create solutions for payments, smart contracts, and digital assets.",
    tags: ["DeFi", "Smart Contracts", "NFTs", "Web3"],
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Leaf,
    title: "Sustainable Technology",
    description: "Build technology solutions that address environmental challenges. Focus on climate tech, renewable energy, and sustainable practices.",
    tags: ["CleanTech", "Carbon Tracking", "Renewable Energy", "ESG"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Building2,
    title: "Smart Cities & IoT",
    description: "Design connected solutions for smart cities. Work on IoT devices, urban mobility, and intelligent infrastructure systems.",
    tags: ["IoT", "Urban Mobility", "Smart Grid", "Connected Devices"],
    color: "from-indigo-500 to-violet-500",
  },
];

const Themes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="Innovation Tracks"
            title="Hackathon Themes"
            description="Choose your track and build solutions that matter. Each theme offers unique challenges and opportunities to showcase your skills."
          />
        </div>
      </section>

      {/* Themes Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 lg:p-8 group hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <theme.icon className="w-8 h-8 text-foreground" />
                </div>

                <h3 className="font-display text-xl font-bold mb-3">{theme.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{theme.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {theme.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
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

      {/* How to Choose */}
      <section className="py-16 lg:py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
              <span className="gradient-text">How to Choose Your Theme</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Pick a theme that aligns with your skills and interests. You can also combine multiple themes 
              to create unique cross-domain solutions. Our mentors will guide you regardless of which track you choose.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="glass-card p-6">
                <span className="font-display text-4xl font-bold gradient-text">01</span>
                <h3 className="font-semibold mt-4 mb-2">Explore All Options</h3>
                <p className="text-sm text-muted-foreground">Review each theme and identify which problems excite you the most.</p>
              </div>
              <div className="glass-card p-6">
                <span className="font-display text-4xl font-bold gradient-text">02</span>
                <h3 className="font-semibold mt-4 mb-2">Assess Your Skills</h3>
                <p className="text-sm text-muted-foreground">Consider your team's strengths and what technologies you're comfortable with.</p>
              </div>
              <div className="glass-card p-6">
                <span className="font-display text-4xl font-bold gradient-text">03</span>
                <h3 className="font-semibold mt-4 mb-2">Think Impact</h3>
                <p className="text-sm text-muted-foreground">Choose problems that have real-world impact and can make a difference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Found Your <span className="gradient-text">Perfect Theme?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Register now and start preparing your innovative solution. Our mentors are ready to guide you!
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/register">
                Register Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Themes;
