import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const diff = Math.random() * 25 + 10;
        return Math.min(100, Math.floor(prev + diff));
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080a] text-[#faf8f5]"
        >
          {/* Subtle Ambient Radial Light */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#d4af37]/5 blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center px-4"
          >
            {/* Animated Royal Crest */}
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#d4af37]/40 border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="w-16 h-16 rounded-full border border-[#d4af37] bg-gradient-to-br from-[#1b1e26] via-[#0d0f14] to-[#07080a] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <svg viewBox="0 0 24 16" width={20} height={14} style={{ width: '20px', height: '14px', maxWidth: '20px' }} className="fill-[#d4af37] -mb-0.5">
                  <path d="M12 0L14.5 4.5L19 2L17.5 7.5L21 8.5L16.5 13H7.5L3 8.5L6.5 7.5L5 2L9.5 4.5L12 0Z" />
                </svg>
                <span className="font-serif font-bold text-lg tracking-wider text-[#faf8f5]">
                  <span className="text-[#d4af37]">S</span>P
                </span>
              </div>
            </div>

            {/* Hotel Title */}
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-light uppercase text-[#faf8f5] mb-2">
              Hotel <span className="text-[#d4af37] font-semibold">Siddhoday</span> Palace
            </h1>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-[#c5a059] mb-8 font-medium">
              Harda • Madhya Pradesh
            </p>

            {/* Luxury Progress Bar */}
            <div className="w-48 sm:w-64 h-[2px] bg-[#1a1e27] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#d4af37] via-[#f7f0df] to-[#c5a059]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <span className="font-sans text-[10px] tracking-widest text-[#8c7355] mt-3">
              ENTERING LUXURY • {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
