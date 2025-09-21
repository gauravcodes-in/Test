"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl?: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  isCoordinator?: boolean;
}

const ProfileCard = ({ name, role, imageUrl, bio, socialLinks, isCoordinator }: TeamMemberProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardFrontRef = useRef<HTMLDivElement>(null);
  const cardBackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    const cardFront = cardFrontRef.current;
    const cardBack = cardBackRef.current;
    
    if (!card || !cardFront || !cardBack) return;
    
    const flipCard = () => {
      gsap.to(cardFront, {
        rotationY: 180,
        duration: 0.6,
        ease: 'power2.inOut',
      });
      gsap.to(cardBack, {
        rotationY: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    };
    
    const unflipCard = () => {
      gsap.to(cardFront, {
        rotationY: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      });
      gsap.to(cardBack, {
        rotationY: -180,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    };
    
    card.addEventListener('mouseenter', flipCard);
    card.addEventListener('mouseleave', unflipCard);
    
    // Initialize back card rotated
    gsap.set(cardBack, { rotationY: -180 });
    
    return () => {
      card.removeEventListener('mouseenter', flipCard);
      card.removeEventListener('mouseleave', unflipCard);
    };
  }, []);

  const borderColor = isCoordinator ? 'border-cyber-secondary shadow-neon-purple' : 'border-cyber-primary shadow-neon-cyan';
  const textColor = isCoordinator ? 'text-cyber-secondary' : 'text-cyber-primary';

  return (
    <div ref={cardRef} className="cursor-pointer h-64 w-full perspective-1000">
      {/* Card Front */}
      <div 
        ref={cardFrontRef}
        className={`absolute inset-0 backface-hidden border ${borderColor} rounded-md overflow-hidden transition-all duration-300 p-4 glassmorphism`}
      >
        <div className="flex h-full items-center">
          <div className="w-1/3 h-full flex items-center justify-center">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={name} 
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-700"
              />
            ) : (
              <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-cyber-darker ${textColor} text-2xl font-bold border-2 border-gray-700`}>
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div className="w-2/3 pl-4">
            <h3 className={`font-bold ${textColor}`}>{name}</h3>
            <p className="text-sm opacity-75">{role}</p>
            <div className="mt-4 text-xs font-mono">
              <p className="text-cyber-terminal-green">/ Hacking profile...</p>
              <p>/ Click to view details</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Back */}
      <div 
        ref={cardBackRef}
        className={`absolute inset-0 backface-hidden border ${borderColor} rounded-md overflow-hidden transition-all duration-300 p-4 glassmorphism`}
      >
        <div className="text-xs font-mono mb-2 text-cyber-terminal-green">
          &gt; Profile_Data.dat
        </div>
        <h4 className={`font-bold mb-2 ${textColor}`}>{name}</h4>
        <p className="text-xs mb-3">{role}</p>
        <p className="text-sm mb-4 line-clamp-3">{bio}</p>
        
        {socialLinks && (
          <div className="absolute bottom-3 left-0 w-full px-4 flex justify-around">
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
            
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            )}
            
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            )}
            
            {socialLinks.email && (
              <a href={`mailto:${socialLinks.email}`} className="hover:text-cyber-primary">
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

const TeamSection = () => {
  const facultyCoordinators: TeamMemberProps[] = [
    {
      name: "Dr. Jane Smith",
      role: "Faculty Coordinator",
      bio: "Ph.D. in Computer Science with specialization in Cryptography. Leading cybersecurity researcher with over 15 years of experience.",
      socialLinks: {
        linkedin: "#",
        email: "jane.smith@niet.edu",
      },
      isCoordinator: true,
    },
    {
      name: "Prof. Mark Johnson",
      role: "Faculty Co-Coordinator",
      bio: "Industry veteran with 10+ years of experience in network security. CISSP and CEH certified.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mark.johnson@niet.edu",
      },
      isCoordinator: true,
    },
  ];

  const studentCoordinators: TeamMemberProps[] = [
    {
      name: "Rahul Verma",
      role: "Student Coordinator",
      bio: "4th year B.Tech student specializing in penetration testing and web security. OSCP certified.",
      socialLinks: {
        linkedin: "#",
        github: "#",
        email: "rahul.v@student.niet.edu",
      },
    },
    {
      name: "Priya Sharma",
      role: "Student Co-Coordinator",
      bio: "3rd year Computer Science student focused on cryptography and blockchain security.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Arjun Singh",
      role: "Technical Lead",
      bio: "Final year student with expertise in network security and CTF competitions. Multiple hackathon winner.",
      socialLinks: {
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Neha Patel",
      role: "Event Manager",
      bio: "3rd year student coordinating club activities and managing external partnerships.",
      socialLinks: {
        linkedin: "#",
        email: "neha.p@student.niet.edu",
      },
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Animate section title
    const title = document.querySelector('#team-title');
    
    gsap.fromTo(
      title,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
        },
      }
    );
    
    // Staggered animation for faculty cards
    const facultyCards = document.querySelectorAll('.faculty-card');
    
    gsap.fromTo(
      facultyCards,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faculty-section',
          start: 'top 75%',
        },
      }
    );
    
    // Staggered animation for student cards
    const studentCards = document.querySelectorAll('.student-card');
    
    gsap.fromTo(
      studentCards,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.student-section',
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
      <h2 id="team-title" className="text-3xl md:text-4xl font-bold mb-10 text-center neon-text-cyan">
        Our Team
      </h2>
      
      {/* Faculty Coordinators */}
      <div className="faculty-section mb-12">
        <h3 className="text-xl font-bold mb-6 text-center text-cyber-secondary">
          Faculty Coordinators
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {facultyCoordinators.map((faculty, index) => (
            <div key={index} className="faculty-card">
              <ProfileCard {...faculty} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Student Coordinators */}
      <div className="student-section">
        <h3 className="text-xl font-bold mb-6 text-center text-cyber-primary">
          Student Coordinators
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {studentCoordinators.map((student, index) => (
            <div key={index} className="student-card">
              <ProfileCard {...student} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;