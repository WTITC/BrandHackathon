import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-background rounded-2xl shadow-2xl border border-border max-w-lg w-full overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
                aria-label="Close announcement"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Decorative Header */}
              <div className="bg-primary p-6 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90" />
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-background/10 rounded-full" />
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-background/10 rounded-full" />
                
                <div className="relative z-10 flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground/80 text-sm font-medium">Mark Your Calendar!</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground relative z-10">
                  SPORTS HACKATHON<sup className="ml-1 text-white-500 text-[0.6em] -top-[0.69em] relative font-normal">®</sup> 2026
                </h2>
              </div>

              {/* Content */}
              <div className="p-6 -mt-6 relative">
                <div className="bg-background rounded-xl border border-border p-4 shadow-lg mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Event Date</p>
                      <p className="font-display text-xl font-bold text-primary">March 29, 2026</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-lg font-medium text-foreground mb-2">
                    "Innovate. Create. Transform."
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Join us for an exciting 48-hour hackathon where brilliant minds come together to build innovative solutions and compete for amazing prizes!
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <Button asChild variant="hero" size="lg" className="w-full">
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                      Register Now
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                  >
                    Maybe Later
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
