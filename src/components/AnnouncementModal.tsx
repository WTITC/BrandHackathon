import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
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
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>

              {/* Header */}
              <div className="bg-black p-6 pb-10">
                <p className="text-white/60 text-sm uppercase tracking-widest mb-2">
                  Mark Your Calendar!
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  SPORTS HACKATHON 2026
                </h2>
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Date */}
                <div className="bg-white rounded-xl border border-zinc-200 p-4 shadow mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase">
                        Event Dates
                      </p>
                      <p className="text-xl font-bold text-black">
                        March 28 & 29, 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="text-center mb-4">
                  <p className="text-lg font-bold text-black mb-2">
                    "Innovate. Create. Transform."
                  </p>
                  <p className="text-zinc-500 text-sm mb-3">
                    Don't miss out on this 48-hour challenge. Join top-tier talent to build the future of sports technology.
                  </p>

                  {/* ✅ Contact Info Added */}
                  <p className="text-sm text-black font-medium">
                    For any queries, contact: 
                    <span className="font-bold"> 8019577575</span>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <Button asChild className="w-full bg-black text-white hover:bg-zinc-800 font-bold h-12">
                    <a
                      href="https://bit.ly/4lKneZo"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      Register Now
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="w-full font-bold text-zinc-400 hover:text-black"
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