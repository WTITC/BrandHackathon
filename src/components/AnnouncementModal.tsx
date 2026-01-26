import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
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
            <div className="relative bg-white rounded-2xl shadow-2xl border border-zinc-200 max-w-lg w-full overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 transition-colors z-20"
                aria-label="Close announcement"
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>

              {/* Decorative Header */}
              <div className="bg-black p-6 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 opacity-100" />
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
                
                <div className="relative z-10 flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-white/70" />
                  <span className="text-white/60 text-sm font-medium tracking-widest uppercase">Mark Your Calendar!</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-black text-white relative z-10 tracking-tight">
                  SPORTS HACKATHON<sup className="ml-1 text-white/40 text-[0.6em] -top-[0.69em] relative font-normal">®</sup> 2026
                </h2>
              </div>

              {/* Content */}
              <div className="p-6 -mt-6 relative">
                {/* Date Card - Updated to March 28-29 */}
                <div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-xl mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Event Dates</p>
                      <p className="font-display text-xl font-black text-black">March 28 & 29, 2026</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6 px-2">
                  <p className="text-lg font-bold text-black mb-2">
                    "Innovate. Create. Transform."
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Don't miss out on this 48-hour challenge. Join top-tier talent to build the future of sports technology.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="w-full bg-black text-white hover:bg-zinc-800 rounded-none font-black h-12 shadow-lg">
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                      Register Now
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => setIsOpen(false)}
                    className="w-full font-bold text-zinc-400 hover:text-black hover:bg-zinc-50"
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