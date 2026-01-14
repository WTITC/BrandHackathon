import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, FileText, MessageSquare, Code, Trophy, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";

const timelineEvents = [
  {
    icon: Calendar,
    title: "Registration Opens",
    date: "January 15, 2025",
    description: "Sign up begins! Complete your registration early to secure your spot and receive early-bird benefits.",
    status: "completed",
  },
  {
    icon: FileText,
    title: "Idea Submission",
    date: "February 1 - 15, 2025",
    description: "Submit your project idea and concept. Our team will review and provide feedback on feasibility.",
    status: "completed",
  },
  {
    icon: MessageSquare,
    title: "Mentorship Sessions",
    date: "February 20 - March 1, 2025",
    description: "Connect with industry mentors for guidance on your project approach and technical implementation.",
    status: "active",
  },
  {
    icon: Code,
    title: "Development Phase",
    date: "March 5 - 7, 2025",
    description: "The main event! 48 hours of intense coding, collaboration, and innovation at our venue.",
    status: "upcoming",
  },
  {
    icon: CheckCircle,
    title: "Final Submission",
    date: "March 7, 2025 (6 PM)",
    description: "Submit your completed project including source code, documentation, and demo video.",
    status: "upcoming",
  },
  {
    icon: Trophy,
    title: "Judging",
    date: "March 8, 2025",
    description: "Present your project to our panel of expert judges. Q&A sessions and feedback rounds.",
    status: "upcoming",
  },
  {
    icon: Sparkles,
    title: "Results & Closing Ceremony",
    date: "March 8, 2025 (Evening)",
    description: "Winners announcement, prize distribution, and networking session with all participants.",
    status: "upcoming",
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "completed":
      return {
        dot: "bg-primary",
        line: "bg-primary",
        card: "border-primary/30",
        badge: "bg-primary/20 text-primary",
        badgeText: "Completed",
      };
    case "active":
      return {
        dot: "bg-secondary animate-pulse",
        line: "bg-gradient-to-b from-primary to-muted",
        card: "border-secondary/50 glow-border",
        badge: "bg-secondary/20 text-secondary",
        badgeText: "In Progress",
      };
    default:
      return {
        dot: "bg-muted",
        line: "bg-muted",
        card: "border-border/50",
        badge: "bg-muted text-muted-foreground",
        badgeText: "Upcoming",
      };
  }
};

const Roadmap = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="Event Timeline"
            title="Hackathon Roadmap"
            description="Follow the journey from registration to the grand finale. Stay updated with all the important dates and milestones."
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => {
              const styles = getStatusStyles(event.status);
              
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 lg:pl-12 pb-12 last:pb-0"
                >
                  {/* Timeline Line */}
                  {index < timelineEvents.length - 1 && (
                    <div className={`absolute left-[11px] lg:left-[19px] top-12 bottom-0 w-0.5 ${styles.line}`} />
                  )}
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 lg:left-2 top-0 w-6 h-6 lg:w-8 lg:h-8 rounded-full ${styles.dot} flex items-center justify-center ring-4 ring-background`}>
                    <event.icon className="w-3 h-3 lg:w-4 lg:h-4 text-primary-foreground" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`glass-card p-6 lg:p-8 ml-4 border ${styles.card} transition-all duration-300 hover:border-primary/50`}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles.badge}`}>
                        {styles.badgeText}
                      </span>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        {event.date}
                      </div>
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Quick Reference</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Event Dates</h3>
                <p className="text-muted-foreground">March 5-8, 2025</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Duration</h3>
                <p className="text-muted-foreground">48 Hours Coding</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Trophy className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">Prize Pool</h3>
                <p className="text-muted-foreground">₹5 Lakhs+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Roadmap;
