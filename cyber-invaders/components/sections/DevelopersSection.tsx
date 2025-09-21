"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface DeveloperProps {
  name: string;
  role: string;
  imageUrl?: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    website?: string;
    email?: string;
  };
}

const DeveloperCard = ({ name, role, imageUrl, bio, socialLinks }: DeveloperProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    const front = frontRef.current;
    const back = backRef.current;
    
    if (!card || !front || !back) return;
    
    const flipCard = () => {
      gsap.to(front, {
        rotationY: 180,
        duration: 0.6,
        ease: 'power2.inOut',
      });
      gsap.to(back, {
        rotationY: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    };
    
    const unflipCard = () => {
      gsap.to(front, {
        rotationY: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      });
      gsap.to(back, {
        rotationY: -180,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    };
    
    card.addEventListener('mouseenter', flipCard);
    card.addEventListener('mouseleave', unflipCard);
    
    // Initialize back card rotated
    gsap.set(back, { rotationY: -180 });
    
    return () => {
      card.removeEventListener('mouseenter', flipCard);
      card.removeEventListener('mouseleave', unflipCard);
    };
  }, []);

  return (
    <div ref={cardRef} className="cursor-pointer h-72 perspective-1000">
      {/* Front */}
      <div 
        ref={frontRef}
        className="absolute inset-0 backface-hidden border border-cyber-accent shadow-neon-green rounded-md overflow-hidden transition-all duration-300 glassmorphism"
      >
        <div className="h-full flex flex-col items-center justify-center p-4 text-center">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-cyber-accent"
            />
          ) : (
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-cyber-darker text-cyber-accent text-2xl font-bold mb-4 border-2 border-cyber-accent">
              {name.charAt(0)}
            </div>
          )}
          
          <h3 className="font-bold text-cyber-accent mb-1">{name}</h3>
          <p className="text-sm opacity-75 mb-3">{role}</p>
          
          <div className="mt-auto w-full text-xs font-mono">
            <div className="border-t border-cyber-accent border-opacity-30 pt-3">
              <p className="text-cyber-accent">// Hover to view profile</p>
              <p className="text-cyber-terminal-green">console.log("Accessing developer info...");</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back */}
      <div 
        ref={backRef}
        className="absolute inset-0 backface-hidden border border-cyber-accent shadow-neon-green rounded-md overflow-hidden transition-all duration-300 glassmorphism p-4"
      >
        <div className="text-xs font-mono mb-2 text-cyber-terminal-green">
          &gt; Developer_Profile.js
        </div>
        <h4 className="font-bold mb-1 text-cyber-accent">{name}</h4>
        <p className="text-xs mb-3">{role}</p>
        <p className="text-sm mb-6 line-clamp-4">{bio}</p>
        
        {socialLinks && (
          <div className="absolute bottom-4 left-0 w-full px-4 flex justify-around">
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            )}
            
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
            
            {socialLinks.website && (
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </a>
            )}
            
            {socialLinks.email && (
              <a href={`mailto:${socialLinks.email}`} className="hover:text-cyber-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const DevelopersSection = () => {
  const developers: DeveloperProps[] = [
    {
      name: "Gaurav Kumar",
      role: "Lead Developer",
      bio: "Experienced full-stack developer with expertise in React, Next.js, and UI/UX design. Creator of the CyberInvaders website.",
      socialLinks: {
        github: "https://github.com/gauravcodes-in",
        linkedin: "#",
        website: "#",
      },
    },
    {
      name: "Aman Sharma",
      role: "Frontend Developer",
      bio: "UI/UX specialist focused on creating immersive web experiences with animations and interactive elements.",
      socialLinks: {
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Riya Patel",
      role: "Designer & Developer",
      bio: "Creative designer with expertise in cyberpunk aesthetics and motion graphics. Responsible for the visual identity.",
      socialLinks: {
        github: "#",
        website: "#",
        linkedin: "#",
      },
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Animate section title
    gsap.fromTo(
      '#dev-title',
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#dev-title',
          start: 'top 80%',
        },
      }
    );
    
    // Animate developer cards
    gsap.fromTo(
      '.dev-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.developers-grid',
          start: 'top 75%',
        },
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="p-6">
      <h2 id="dev-title" className="text-3xl md:text-4xl font-bold mb-10 text-center neon-text-green">
        Website Development Team
      </h2>
      
      <div className="developers-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {developers.map((developer, index) => (
          <div key={index} className="dev-card">
            <DeveloperCard {...developer} />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm font-mono text-cyber-terminal-green">
          // Built with Next.js, TailwindCSS, GSAP, and Framer Motion
        </p>
        <p className="text-sm font-mono">
          // © {new Date().getFullYear()} - CyberInvaders - NIET Cyber Security Club
        </p>
      </div>
    </div>
  );
};

export default DevelopersSection;