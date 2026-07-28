import { useState } from 'react';

// 1. Separate component for your custom navigation button
function SplashNavLink({ label, isActive, onClick }) {
  // Define which image to load based on whether this specific button is active
  const currentSplashImg = isActive 
    ? 'Vector.png'   // Image shown when clicked
    : 'Vector.png';  // Image shown on hover

  return (
    <button 
      onClick={onClick}
      className="relative flex items-center justify-center w-20 h-20 md:w-32 md:h-24 cursor-pointer group focus:outline-none"
    >
      {/* Dynamic Splash Graphic Background */}
      <img 
        src='Vector.png' 
        alt={`${label} Splash`}
        className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 pointer-events-none
          ${isActive 
            ? 'opacity-100 scale-100 rotate-3' 
            : 'opacity-0 scale-75 group-hover:opacity-40 group-hover:scale-95'
          }`}
      />

      {/* Nav Link Text */}
      <span className={`relative font-semibold text-sm transition-colors duration-300 z-10 pr-1 pb-1
        ${isActive 
          ? 'text-[#030B1E]'  /* Dark color over white splash */
          : 'text-white group-hover:text-sky-400'
        }`}
      >
        {label}
      </span>
    </button>
  );
}
export default SplashNavLink;
