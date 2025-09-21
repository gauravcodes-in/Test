"use client";

import { useEffect } from 'react';
import MatrixBackground from '../animations/MatrixBackground';
import TypingEffect from '../animations/TypingEffect';

const HeroSection = () => {
  useEffect(() => {
    // We'll implement GSAP animations here when we install the library
    const timer = setTimeout(() => {
      const decryptingText = document.getElementById('decrypting-text');
      if (decryptingText) {
        decryptingText.textContent = 'Access Granted.';
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center text-center relative">
      <MatrixBackground />
      
      <div className="space-y-6 z-10">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="neon-text-cyan">Welcome to </span>
          <span className="neon-text-purple hacking-text" data-text="CyberInvaders">CyberInvaders</span>
        </h1>
        
        <p className="text-xl md:text-2xl">
          Unleashing the Power of Cybersecurity at NIET
        </p>
        
        <div className="mt-8">
          <p className="text-cyber-terminal-green font-mono h-6">
            <TypingEffect 
              texts={["Decrypting...", "Access Granted."]} 
              loop={false}
            />
          </p>
          
          <a href="#join">
            <button className="mt-6 border border-cyber-primary px-6 py-2 hover:bg-cyber-primary/20 hover:shadow-neon-cyan transition-all duration-300 font-mono">
              <span className="terminal-prompt">Join the Club</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;