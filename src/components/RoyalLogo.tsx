import React from 'react';

interface RoyalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const RoyalLogo: React.FC<RoyalLogoProps> = ({ 
  className = '', 
  size = 'md',
  showSubtitle = true 
}) => {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  const logoDimension = isSmall ? 36 : isLarge ? 58 : 46;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Hotel Siddhoday Palace Logo Image */}
      <div 
        style={{ 
          width: `${logoDimension}px`, 
          height: `${logoDimension}px`, 
          minWidth: `${logoDimension}px`, 
          minHeight: `${logoDimension}px` 
        }}
        className="relative rounded-lg overflow-hidden border border-[#d4af37]/60 shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-transform duration-500 hover:scale-105 shrink-0 bg-[#0e4b5b]"
      >
        <img 
          src="./logo.png" 
          alt="Hotel Siddhoday Palace Official Logo" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className={`font-serif tracking-[0.18em] uppercase font-bold text-[#faf8f5] leading-none ${
          isSmall ? 'text-sm' : isLarge ? 'text-2xl' : 'text-base sm:text-lg'
        }`}>
          Hotel <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7f0df] via-[#d4af37] to-[#eadaad]">Siddhoday</span>
        </span>
        {showSubtitle && (
          <span className={`font-sans tracking-[0.3em] text-[#c5a059] uppercase font-semibold ${
            isSmall ? 'text-[8px]' : isLarge ? 'text-xs' : 'text-[9px] sm:text-[10px]'
          } mt-1 flex items-center gap-1.5`}>
            <span>Palace</span>
            <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
            <span>Harda</span>
          </span>
        )}
      </div>
    </div>
  );
};
