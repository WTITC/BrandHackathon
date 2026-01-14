import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-foreground">
              HACKATHON<sup className="ml-0.5 text-primary text-[0.75em] -top-[0.73em] relative">®</sup>
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Hackathon Types Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                location.pathname === "/past-events"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}>
                Events
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                {hackathonTypes.map((type) => (
                  <DropdownMenuItem key={type.name} asChild>
                    <Link
                      to={type.path}
                      className="cursor-pointer hover:bg-muted"
                    >
                      {type.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Register Button */}
          <div className="hidden lg:block">
           <Button
             asChild 
             size="lg"
             className="bg-black text-white hover:bg-black/90">
             <Link to="/register">Register Now</Link>
           </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Hackathon Types */}
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Hackathon Types
                </p>
                {hackathonTypes.map((type) => (
                  <Link
                    key={type.name}
                    to={type.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {type.name}
                  </Link>
                ))}
              </div>
              
              <Button asChild variant="hero" size="lg" className="w-full mt-4 bg-black text-white hover:bg-black/90">
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  Register Noow
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
