import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Themes", path: "/themes" },
  { name: "Roadmap", path: "/roadmap" },
  { name: "Contact", path: "/contact" },
];

const hackathonTypes = [
  { name: "Sports Hackathon", path: "/past-events?type=sports" },
  { name: "Political Hackathon", path: "/past-events?type=political" },
  { name: "Cybersecurity Hackathon", path: "/past-events?type=cybersecurity" },
  { name: "Health Hackathon", path: "/past-events?type=helath" },
  { name: "Past Events", path: "/past-events?type=pastevents" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    // Navbar background changed to White
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-zinc-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo - Solid Black */}
          <Link to="/" className="flex items-center group">
            <span 
              className="font-display font-black text-3xl md:text-4xl tracking-tighter flex items-start transition-all duration-300 text-black"
              style={{
                letterSpacing: "-0.05em"
              }}
            >
              HACKATHON
              <span className="text-black text-[0.65em] font-black -translate-y-3 ml-1 opacity-40">®</span>
            </span>
          </Link>

          {/* Desktop Navigation - Black text */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-black bg-zinc-100" // Active state
                    : "text-zinc-500 hover:text-black hover:bg-zinc-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Events Dropdown - Solid Black Text */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-1 outline-none ${
                location.pathname.includes("/past-events")
                  ? "text-black bg-zinc-100"
                  : "text-zinc-500 hover:text-black hover:bg-zinc-50"
              }`}>
                Events
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-zinc-200 shadow-xl z-50 min-w-[200px]">
                {hackathonTypes.map((type) => (
                  <DropdownMenuItem key={type.name} asChild>
                    <Link
                      to={type.path}
                      className="cursor-pointer text-black hover:bg-zinc-100 w-full block px-3 py-2 text-sm font-bold"
                    >
                      {type.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Register Button - Black Background */}
          <div className="hidden lg:block">
            <Button
              asChild 
              size="lg"
              className="bg-black text-white hover:bg-zinc-800 transition-colors font-black rounded-none px-8">
              <Link to="/register">Register Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Black */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-b border-zinc-200 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-bold ${
                    location.pathname === link.path
                      ? "text-black bg-zinc-100"
                      : "text-zinc-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="px-4 py-2 border-t border-zinc-100 pt-4">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">
                  Explore Events
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {hackathonTypes.map((type) => (
                    <Link
                      key={type.name}
                      to={type.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-sm font-bold text-black"
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Button asChild size="xl" className="w-full bg-black text-white font-black rounded-none">
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  Register Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};