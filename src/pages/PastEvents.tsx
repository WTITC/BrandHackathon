import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Users, Trophy, MapPin, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CountdownTimer } from "@/components/CountdownTimer";

import smartImg from "@/assets/smart.png";
import codeImg from "@/assets/code.png";
import hsbcImg from "@/assets/hsbc.png";
import mathImg from "@/assets/math.png";
import eyantraImg from "@/assets/eyantra.png";
import flipkartImg from "@/assets/flipkart.png";
import infosysImg from "@/assets/infosys.png";

/* SAME DATE AS INDEX */
const hackathonDate = new Date("2026-03-29T09:10:00+05:30");

const hackathonData = {
  sports: {
    title: "Sports Hackathon",
    description:
      "Innovation meets athletics - building technology solutions for sports analytics, fitness tracking, and fan engagement.",
    events: [
      {
        name: "Sports Tech Summit 2024",
        date: "November 2024",
        location: "Mumbai, India",
        participants: 280,
        winners: ["Team FitTrack", "Team ScoreSync", "Team AthleteAI"],
        highlights: [
          "Real-time sports analytics platform",
          "AI-powered injury prevention system",
          "Fan engagement mobile app",
        ],
        image:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600",
      },
    ],
  },

  political: {
    title: "Political Hackathon",
    description:
      "Empowering democracy through technology - civic engagement, voting systems, and government transparency solutions.",
    events: [
      {
        name: "Civic Tech Challenge 2024",
        date: "September 2024",
        location: "Bangalore, India",
        participants: 320,
        winners: ["Team VoteSecure", "Team CivicConnect", "Team TransparentGov"],
        highlights: [
          "Blockchain-based voting platform",
          "Citizen feedback portal",
          "Government spending tracker",
        ],
        image:
          "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600",
      },
      {
        name: "Democracy Hack 2023",
        date: "July 2023",
        location: "Hyderabad, India",
        participants: 180,
        winners: ["Team PollWatch", "Team GovTrack", "Team CitizenVoice"],
        highlights: [
          "Election monitoring system",
          "Public policy analysis tool",
          "Community engagement platform",
        ],
        image:
          "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600",
      },
    ],
  },

  cybersecurity: {
    title: "Cybersecurity Hackathon",
    description:
      "Defending the digital frontier - ethical hacking, security solutions, and privacy protection technologies.",
    events: [
      {
        name: "SecureCode CTF 2024",
        date: "October 2024",
        location: "Pune, India",
        participants: 400,
        winners: ["Team CyberShield", "Team ZeroDay", "Team SecureNet"],
        highlights: [
          "Zero-day vulnerability detection",
          "AI-powered threat analysis",
          "Secure authentication system",
        ],
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600",
      },
      {
        name: "HackDefend 2023",
        date: "December 2023",
        location: "Chennai, India",
        participants: 350,
        winners: ["Team FireWall", "Team CryptoGuard", "Team SafeData"],
        highlights: [
          "Ransomware prevention tool",
          "Privacy-focused browser extension",
          "Network intrusion detection",
        ],
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600",
      },
    ],
  },

  health: {
    title: "Health Hackathon",
    description:
      "Innovation meets athletics - building technology solutions for sports analytics, fitness tracking, and fan engagement.",
    events: [
      {
        name: "Sports Tech Summit 2024",
        date: "November 2024",
        location: "Mumbai, India",
        participants: 280,
        winners: ["Team FitTrack", "Team ScoreSync", "Team AthleteAI"],
        highlights: [
          "Real-time sports analytics platform",
          "AI-powered injury prevention system",
          "Fan engagement mobile app",
        ],
        image:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600",
      },
    ],
  },

  pastevents: {
    title: "Past Events",
    description:
      "Empowering democracy through technology - civic engagement, voting systems, and government transparency solutions.",
    events: [
      {
        name: "Smart India Hackathon",
        date: "September 2024",
        location: "Hyderabad",
        participants: 320,
        winners: ["Team VoteSecure", "Team CivicConnect", "Team TransparentGov"],
        highlights: [
          "Smart India Hackathon is India’s largest nationwide innovation challenge focused on solving real-world problems using technology. Hyderabad is a key host city for multiple regional and nodal centre rounds. Students collaborate on problem statements issued by government ministries and industry bodies. The hackathon encourages innovation, teamwork, and practical implementation of ideas.",
        ],
        image: smartImg,
      },
      {
        name: "Code for Telangana Hackathon",
        date: "July 2023",
        location: "Hyderabad, India",
        participants: 180,
        winners: ["Team PollWatch", "Team GovTrack", "Team CitizenVoice"],
        highlights: [
          "Code for Telangana Hackathon is a state-level innovation initiative aimed at improving governance through technology. Conducted in Hyderabad, it focuses on civic services, public administration, and citizen-centric digital solutions. Participants develop technology applications aligned with real government needs.",
        ],
        image: codeImg,
      },
      {
        name: "HSBC Technology Hackathon",
        date: "September 2023",
        location: "Hyderabad, India",
        participants: 180,
        winners: ["Team PollWatch", "Team GovTrack", "Team CitizenVoice"],
        highlights: [
          "HSBC Technology Hackathon is a corporate-led innovation event focused on fintech, cybersecurity, and enterprise technology challenges. Hosted in Hyderabad, the hackathon enables students and professionals to work on real-world banking use cases. The event promotes innovation within regulated and large-scale digital systems.",
        ],
        image: hsbcImg,
      },
      {
        name: "e-Yantra Robotics Hackathon",
        date: "March 2024",
        location: "Hyderabad, India",
        participants: 180,
        winners: ["Team PollWatch", "Team GovTrack", "Team CitizenVoice"],
        highlights: [
          "e-Yantra Robotics Hackathon is a national-level robotics innovation challenge initiated by IIT Bombay. Hyderabad hosts regional participation through engineering colleges and innovation centers. The hackathon focuses on embedded systems, robotics, and automation solutions. Students build hardware-software integrated prototypes under expert mentorship.",
        ],
        image: eyantraImg,
      },
      {
        name: "Flipkart GRID Hackathon",
        date: "July 2024",
        location: "Hyderabad, India",
        participants: 180,
        winners: ["Team PollWatch", "Team GovTrack", "Team CitizenVoice"],
        highlights: [
          "Flipkart GRID Hackathon is a nationwide innovation and engineering challenge focused on real-world e-commerce problems. Hyderabad sees strong participation from top engineering institutes. The hackathon covers areas such as supply chain optimization, data science, and system design. It offers students industry exposure and career opportunities.",
        ],
        image: flipkartImg,
      },
      {
        name: "MathHack",
        date: "December 2024",
        location: "Hyderabad, India",
        participants: 180,
        winners: ["Team PollWatch", "Team GovTrack", "Team CitizenVoice"],
        highlights: [
          "MathHack is a specialized hackathon focused on mathematics, analytics, and data-driven problem solving.The event brings together students and professionals to solve real-world challenges using logical and mathematical approaches.Participants work on algorithms, models, and analytical solutions in a competitive environment.MathHack stands out by blending mathematical depth with practical technology applications.",
        ],
        image: mathImg,
      },
    ],
  },
};

const PastEvents = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "sports";
  const currentHackathon =
    hackathonData[type as keyof typeof hackathonData] ||
    hackathonData.sports;

  return (
    <Layout>
      <section className="py-20 lg:py-10 bg-white text-black">
        <div className="container mx-auto px-4">
          {/* FORCE HEADER TEXT TO BLACK */}
          <div className="[&_h2]:text-black [&_p]:text-black [&_span]:text-black">
            <SectionHeader
              badge={type === "sports" ? "Upcoming Events" : "Past Events"}
              title={currentHackathon.title}
              description={currentHackathon.description}
            />
          </div>

          {/* TYPE SELECTOR */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(hackathonData).map(([key, value]) => (
              <Link
                key={key}
                to={`/past-events?type=${key}`}
                className={`px-6 py-3 rounded-full font-medium transition-all border border-black ${
                  type === key
                    ? "bg-black text-white shadow-lg"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                {value.title}
              </Link>
            ))}
          </div>

          {/* COUNTDOWN - FORCED TO BLACK */}
          {type === "sports" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto text-center mb-20 border border-black p-8"
            >
              <p className="text-xs uppercase tracking-widest text-black mb-4 font-bold">
                Event Countdown
              </p>
              <div className="text-black font-mono [&_span]:text-black [&_div]:text-black [&_p]:text-black">
                <CountdownTimer targetDate={hackathonDate} />
              </div>
            </motion.div>
          )}

          {/* EVENTS GRID */}
          <div className="space-y-12">
            {currentHackathon.events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-black overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-black">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>

                  <div className="p-6 lg:p-8">
                    <h3 className="font-display text-2xl font-bold mb-4 text-black">
                      {event.name}
                    </h3>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-black">
                        <Calendar className="w-4 h-4 text-black" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-black">
                        <MapPin className="w-4 h-4 text-black" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-black">
                        <Users className="w-4 h-4 text-black" />
                        <span className="text-sm">
                          {event.participants} Participants
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-display font-semibold mb-3 text-black">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 text-sm text-black"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-black" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-black mb-6">
              Ready to be part of our next hackathon?
            </p>
            <Button
              asChild
              size="xl"
              className="bg-black text-white hover:bg-white hover:text-black border border-black transition-all rounded-none"
            >
              <Link to="/register">
                Register Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PastEvents;