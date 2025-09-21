"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProgressiveAccessEffect = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Get all access level sections
    const accessLevels = document.querySelectorAll('.access-level');
    
    accessLevels.forEach((level, index) => {
      // Initially hide all sections except the first one
      if (index > 0) {
        gsap.set(level, { 
          opacity: 0.3,
          filter: 'blur(4px)',
          pointerEvents: 'none',
        });
      }
      
      // Create a "locked" overlay for sections
      const overlay = document.createElement('div');
      overlay.className = `absolute inset-0 bg-cyber-darker bg-opacity-70 z-10 flex flex-col items-center justify-center ${index === 0 ? 'hidden' : ''}`;
      overlay.style.backdropFilter = 'blur(4px)';
      overlay.id = `access-overlay-${index}`;
      
      // Add lock icon and text
      const lockContent = document.createElement('div');
      lockContent.className = 'text-center';
      
      const lockIcon = document.createElement('div');
      lockIcon.className = 'text-4xl mb-4';
      lockIcon.textContent = '🔒';
      
      const lockText = document.createElement('p');
      lockText.className = 'text-cyber-primary font-mono';
      lockText.textContent = `ACCESS LEVEL ${index + 1} LOCKED`;
      
      const unlockText = document.createElement('p');
      unlockText.className = 'text-sm text-cyber-terminal-green mt-2';
      unlockText.textContent = 'Scroll to unlock';
      
      lockContent.appendChild(lockIcon);
      lockContent.appendChild(lockText);
      lockContent.appendChild(unlockText);
      overlay.appendChild(lockContent);
      
      if (index > 0) {
        level.appendChild(overlay);
        // Set position relative using classList instead of direct style manipulation
        level.classList.add('relative');
      }
      
      // Create scroll-triggered unlock animation
      if (index > 0) {
        const prevLevel = accessLevels[index - 1];
        
        ScrollTrigger.create({
          trigger: prevLevel,
          start: 'center center',
          onEnter: () => {
            // Animate unlock effect for the next section
            const nextOverlay = document.getElementById(`access-overlay-${index}`);
            if (!nextOverlay) return;
            
            // Terminal-style typing animation for "ACCESS GRANTED"
            const accessGranted = document.createElement('div');
            accessGranted.className = 'text-cyber-primary font-mono text-lg';
            accessGranted.textContent = 'ACCESS GRANTED';
            
            // Replace lock with checkmark
            lockIcon.textContent = '✓';
            lockText.replaceWith(accessGranted);
            unlockText.textContent = 'Decrypting...';
            
            // Animate the unlock
            gsap.to(nextOverlay, {
              opacity: 0,
              duration: 1.5,
              delay: 0.7,
              onComplete: () => {
                nextOverlay.remove();
                
                // Reveal the section
                gsap.to(level, {
                  opacity: 1,
                  filter: 'blur(0px)',
                  pointerEvents: 'auto',
                  duration: 0.5,
                });
                
                // Add a highlight effect
                const highlight = document.createElement('div');
                highlight.className = 'absolute inset-0';
                level.appendChild(highlight);
                
                gsap.fromTo(
                  highlight,
                  { 
                    boxShadow: '0 0 40px rgba(0, 255, 255, 0.7) inset',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                  },
                  {
                    boxShadow: '0 0 0px rgba(0, 255, 255, 0)',
                    backgroundColor: 'rgba(0, 255, 255, 0)',
                    duration: 1.5,
                    onComplete: () => {
                      highlight.remove();
                    }
                  }
                );
              }
            });
          },
          once: true
        });
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return null; // This is a utility component, it doesn't render anything
};

export default ProgressiveAccessEffect;